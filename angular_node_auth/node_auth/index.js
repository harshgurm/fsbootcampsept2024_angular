const connection = require('./connection');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = 3000;
const cors = require('cors');
const jwt = require('jsonwebtoken');
const verifyUser = require('./verifyToken');

app.use(express.json());

app.use(cors());

app.get('/', verifyUser, (req, res) => {
    res.send('Hello World!!!');
});

//register/sign up api
app.post('/register/', async (req, res) => {
    const { password, confirm_password, first_name, last_name, email } = req.body;

    if (!first_name || !password || !email || !confirm_password) {
        return res.status(400).json({ message: "Please provide all the required values" });
    }

    if(password != confirm_password){
        return res.status(400).json({ message: "Password doesn't match"});
    }

    //convert or hashed or encrypt the password
    const hashPassword = await bcrypt.hash(password, 10);

    try {
        const [data] = await connection.promise().query(`
            INSERT INTO angular_node_auth.users (first_name, last_name, email, password)
            VALUES (?, ?, ?, ?)`, [first_name, last_name, email, hashPassword]);
        return res.json(data);
    } catch (errors) {
        return res.status(400).json(errors)
    }

});

app.post('/login/', async (req, res) => {
    // Add the logic to get the email and password from postman
    // do the select query to check if the user exist and grab its password for comparison
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: 'Please provide all the required values' });
    }

    try {
        const [data] = await connection.promise().query(`
            SELECT user_id, email, password
            FROM angular_node_auth.users
            WHERE email = ?`, email);
        if (data.length > 0) {
            const user = data[0];
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck) {
                return res.status(401).json({ message: 'Invalid creds' });
            } else {
                //generate the token and send it with the request.
                const token = await jwt.sign({ user_id: user.user_id }, "thisismysecretencryptionkey", { expiresIn: '1h' })
                return res.json({ token: token });
            }
        } else {
            return res.status(400).json({ message: 'User not found.' });
        }
    } catch (errors) {
        return res.status(400).json({ message: errors })
    }
})

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

const tranporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
    }
});

app.post('/sendemail/', async (request, response) => {
    const { to_email, subject, message } = request.body;

    if(!to_email || !subject || !message){
        return response.status('400').json({'message':'Please provide all the required values'});
    }

    try {
        const result = await tranporter.sendMail({
            to: to_email,
            subject: subject,
            text: message
        })

        return response.json(result);

    } catch(errors){
        return response.status("400").json(errors);
    }
    
})

app.listen(4000, () => {
    console.log('Server is running');
})
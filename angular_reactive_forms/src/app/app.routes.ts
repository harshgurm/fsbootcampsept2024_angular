import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: 'add_employee',
        component: ReactiveFormComponent
    },
    {
        path: 'employees',
        component: EmployeesComponent
    },
    {
        path: 'employees/:id',
        component: EmployeesComponent
    },
    {
        path:'',
        redirectTo: '/employees',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];
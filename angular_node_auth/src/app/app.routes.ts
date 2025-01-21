import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signup',
        component:SignupComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[authGuard]
    },
    {
        path:'details/:id',
        component:DetailsComponent,
        canActivate:[authGuard]
    },
    {
        path: '**',
        redirectTo: 'signin',
        pathMatch: 'full'
    }
];

import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';

export const routes: Routes = [

    {
        path:'signup',
        component:SignupComponent,
        pathMatch:'full',
    },

    {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
    },

    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },

    {
        path:'admin',
        component:DashboardComponent,
        pathMatch:'full',
        canActivate:[adminGuard]
    },

    {
        path:'user-dashboard',
        component:UserDashboardComponent,
        pathMatch:'full',
        canActivate:[normalGuard]
    },
];
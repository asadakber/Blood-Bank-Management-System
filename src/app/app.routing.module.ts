import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DonorListComponent } from './components/donor-list/donor-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'donorlist',
        component: DonorListComponent
    },

    {
        path: 'contact',
        component: ContactComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'resetpassword',
        component: ResetpasswordComponent
    },
    
    {
        path: 'dashboard',
        component: DashboardComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
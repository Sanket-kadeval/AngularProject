import { ElectricalserviceComponent } from './electricalservice/electricalservice.component';
import { PlumbingserviceComponent } from './plumbingservice/plumbingservice.component';
import { RegisterserviceComponent } from './registerservice/registerservice.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { LogInComponent } from './log-in/log-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : "" , component : HomeComponent },
  { path : "home" , component : HomeComponent },
  { path : "about" , component : AboutComponent },
  { path : "service" , component : ServiceComponent },
  { path : "contact" , component : ContactUsComponent },
  { path : "login" , component : LogInComponent },
  { path : "signup", component : SignUpComponent },
  { path : "registerservice", component : RegisterserviceComponent },
  { path : "plumbingservice", component : PlumbingserviceComponent },
  { path : "electricalservice", component : ElectricalserviceComponent },
  { path : "**" , component : PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule = [ AboutComponent, HomeComponent, ServiceComponent, 
                               LogInComponent, ContactUsComponent,SignUpComponent,
                               PageNotFoundComponent, RegisterserviceComponent,
                               PlumbingserviceComponent,ElectricalserviceComponent];
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DonorListComponent } from './components/donor-list/donor-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app.routing.module';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MapService } from './services/map.service';
import { AgmCoreModule } from '@agm/core';
import { TranslateService } from './services/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';


export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('en')
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DonorListComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    DashboardComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDEbtr8u3Eo5XOOPc622OY7p-S-BcwyxKE'
    })
  ],
  providers: [ AuthService, MapService,
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

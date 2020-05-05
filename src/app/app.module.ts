import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule} from '@angular/router';
import { AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Auth } from './services/auth.guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HeaderComponent } from './header/header.component';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [
  {path: 'appareils', canActivate: [Auth], component: AppareilViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: '' , component: AppareilViewComponent},
  {path: 'appareils/:id' , component: SingleAppareilComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'edit', component: EditAppareilComponent},
  {path: 'user-list', component : UserListComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'list-product', component: ProductListComponent},
  {path: 'product/view/:id', component: SingleProductComponent},
  {path: '**', redirectTo: '/not-found'},


];
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    NotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    SignupComponent,
    SigninComponent,
    ProductListComponent,
    SingleProductComponent,
    HeaderComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    AppareilService,
    AuthService,
    Auth,
    UserService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

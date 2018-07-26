import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { DataserviceService } from './_services/dataservice.service'
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    AlertComponent,
    TitleComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule,
    ScrollModule
  ],
  exports: [ScrollModule],
  providers: [
      { provide: LocationStrategy, useClass: PathLocationStrategy }, AuthGuard,
      AlertService,
      DataserviceService,
      AuthenticationService,
      UserService,
      JwtInterceptorProvider,
      ErrorInterceptorProvider],

  bootstrap: [AppComponent]
})
export class AppModule {}

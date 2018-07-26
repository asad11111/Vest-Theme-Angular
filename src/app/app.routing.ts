import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { DataserviceService } from './_services/dataservice.service'

export const AppRoutes: Routes = [

   {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'authentication/login',
        pathMatch: 'full'
      },
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },

  {
  path: '',
  component: AdminLayoutComponent,  canActivate: [AuthGuard],
  children: [

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    }, {
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

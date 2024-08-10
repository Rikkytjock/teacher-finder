import { Route } from '@angular/router'
import { AddProgramPageComponent } from './pages/add-program-page/add-program-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component'
import { MyProgramsPageComponent } from './pages/my-programs-page/my-programs-page.component'
import { RegisterPageComponent } from './pages/register-page/register-page.component'

export const appRoutes: Route[] = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'add-program', component: AddProgramPageComponent },
  { path: 'my-programs', component: MyProgramsPageComponent },
  { path: 'my-profile', component: MyProfilePageComponent }
]

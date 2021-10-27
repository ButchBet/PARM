import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@shared/components/login/login.component';
import { RegistComponent } from '@shared/components/regist/regist.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },

  { 
    path: "regist",
    component: RegistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

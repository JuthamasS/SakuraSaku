import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { WebboardComponent } from './components/webboard/webboard.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const routes: Routes = [
  {path:'', redirectTo: '/product',pathMatch:'full'},
  {path:'product', component: ProductComponent},
  {path:'webboard', component: WebboardComponent},
  {path:'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

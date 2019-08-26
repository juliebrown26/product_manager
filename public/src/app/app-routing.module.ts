import { ProductComponent } from './product/product.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'products/new',component: AddComponent },
  { path: 'products',component: ProductComponent },
  { path : 'edit/:id', component: EditComponent },
  { path: '',component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

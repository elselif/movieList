import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CategoriesComponent } from './categories/categories.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'movie/:id',
    component:DetailsComponent
  },
  {
    path:'genre/movie/list',
    component:CategoriesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

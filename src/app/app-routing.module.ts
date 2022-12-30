import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   Routes,
   RouterModule
  } from '@angular/router';
import { CostumerListComponent } from './components/costumer/costumer-list/costumer-list.component';
import { AddCostumerComponent } from './components/costumer/add-costumer/add-costumer.component';
import { UpdateCostumerComponent } from './components/costumer/update-costumer/update-costumer.component';
import { CostumerDetailsComponent } from './components/costumer/costumer-details/costumer-details.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  { path: '', redirectTo: 'costumer', pathMatch: 'full'},
  { path: 'costumers', component: CostumerListComponent },
  { path: 'add', component: AddCostumerComponent },
  { path: 'costumers/:id', component: CostumerDetailsComponent },
  { path: 'costumers/edit/:id', component: UpdateCostumerComponent },
  { path: 'dashboard', component: DashComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

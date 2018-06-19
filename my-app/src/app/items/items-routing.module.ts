import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './containers/list-item/list-item.component';

const appRoutes: Routes = [
  { path: 'list',
    component: ListItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes)
  ]
})
export class ItemsRoutingModule { }

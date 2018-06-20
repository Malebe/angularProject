import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddComponent } from './containers/add/add.component';

const appRoutes: Routes = [
  { path: 'list',
    component: ListItemComponent
  },
  { path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes)
  ]
})
export class ItemsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { AddComponent } from './containers/add/add.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

const appRoutes: Routes = [
  { path: 'list',
    component: ListItemComponent
  },
  { path: 'add',
    component: AddComponent
  },
  { path: 'add-item',
    component: AddItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes)
  ]
})
export class ItemsRoutingModule { }

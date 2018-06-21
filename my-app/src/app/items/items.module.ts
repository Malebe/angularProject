import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './containers/add/add.component';
import { FormsModule } from '@angular/forms';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditComponent } from './containers/edit/edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,
    FormsModule,
    RouterModule
  ],
  declarations: [ListItemComponent, ItemComponent, AddComponent, AddItemComponent, EditComponent],
  exports: [ListItemComponent]
})
export class ItemsModule { }

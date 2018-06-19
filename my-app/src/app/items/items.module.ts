import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemComponent, ItemComponent],
  exports: [ListItemComponent]
})
export class ItemsModule { }

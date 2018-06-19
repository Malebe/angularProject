import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './containers/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListItemComponent, ItemComponent],
  exports: [ListItemComponent]
})
export class ItemsModule { }

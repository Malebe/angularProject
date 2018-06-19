import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  constructor() { }

  ngOnInit() {
  }

  public changeState(state: State): void {
    this.item.state = state;
  }

}

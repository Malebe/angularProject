import { Component, OnInit } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public intitules = Object.values(State);
  public newItem: Item;
  private collection: Item[];
  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.newItem = {
      id: null,
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }

  public process(): void {
    this.collectionService.addItem(this.newItem).subscribe((data) => {
      console.log(data);
      if (data) {
         this.init();
         this.router.navigate(['/items/list']);
      }
    });
  }
}

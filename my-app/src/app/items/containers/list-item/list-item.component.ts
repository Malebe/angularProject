import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  public collection: Item[];

  constructor(
    private collectionService: CollectionService
  ) {}

  ngOnInit() {
    this.collection = this.collectionService.getCollection();
  }

}

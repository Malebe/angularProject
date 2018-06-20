import { Component, OnInit } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(item: Item): void {
    this.collectionService.addItem(item);
    this.router.navigate(['list']);
  }
}

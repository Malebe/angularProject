import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
   }

  /**
   * get collection
   */
  public getCollection(): Item[] {
    return this._collection;
  }

  /**
    * set collection
    */
  public set collection(v: Item[]) {
    this._collection = v;
  }

  /**
   * add item in collection
   */
  public addItem(item: Item): void {
    this._collection.push(item);
  }

  /**
   * get item from collection
   */

  /**
    * update item in collection
    */

  /**
     * delete item in collection
    */

}

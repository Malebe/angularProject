import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public intitules = Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Input() editItem: Item;
  constructor(private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    console.log(this.editItem);
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [this.editItem ? this.editItem.name : ''
      , Validators.compose([Validators.required, Validators.minLength(5)]) ],
      reference: [this.editItem ? this.editItem.reference : ''
      , Validators.compose([Validators.required, Validators.minLength(4)]) ],
      state: this.editItem ? this.editItem.state : State.ALIVRER
    });
  }

  public getItem(): Item {
    const data = this.form.value as Item;
    if (!this.editItem) {
      return data;
    } else {
      const id = this.editItem.id;
      return {id, ...data};
    }
  }

  public process(): void {
    console.log(this.form.value);
    this.newItem.emit(this.getItem());
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  public isError(champ: string): Boolean {
    return this.form.get(champ).invalid && this.form.get(champ).touched;
  }

}

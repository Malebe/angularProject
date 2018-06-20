import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor(private fb: FormBuilder
  ) {
      this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: [''
      , Validators.compose([Validators.required, Validators.minLength(5)]) ],
      reference: [''
      , Validators.compose([Validators.required, Validators.minLength(4)]) ],
      state: State.ALIVRER
    });
  }

  public process(): void {
    console.log(this.form.value);
    this.newItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  public isError(champ: string): Boolean {
    return this.form.get(champ).invalid && this.form.get(champ).touched;
  }

}

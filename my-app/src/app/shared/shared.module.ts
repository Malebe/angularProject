import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state.directive';
import { StateButtonDirective } from './directives/state-button.directive';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { NumCommandePipe } from './pipes/num-commande.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, StateDirective, StateButtonDirective, FormComponent, FilterPipe, NumCommandePipe],
  exports: [NavComponent, StateDirective, StateButtonDirective, FormComponent, FilterPipe, NumCommandePipe]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state.directive';
import { StateButtonDirective } from './directives/state-button.directive';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [NavComponent, StateDirective, StateButtonDirective],
  exports: [NavComponent, StateDirective, StateButtonDirective]
})
export class SharedModule { }

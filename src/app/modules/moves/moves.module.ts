import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovesetComponent } from './components/moveset/moveset.component';
import { MoveComponent } from './components/move/move.component';

export {MovesetComponent} from './components/moveset/moveset.component';


@NgModule({
  declarations: [MovesetComponent, MoveComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MovesetComponent
  ]
})
export class MovesModule { }

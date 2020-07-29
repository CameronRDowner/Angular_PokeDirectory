import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent implements OnInit {
  @Input() optionsList: Array<string>;
  @Output() optionClick = new EventEmitter();
  emitClick(optionName:string):void{
    this.optionClick.emit(optionName);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

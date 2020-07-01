import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() length: string;
  @Input() clearButton: boolean; 
  @Output() textboxChange = new EventEmitter()
  
  emitChange(newText:string):void {
    this.textboxChange.emit(newText)
  }
  constructor() {
    this.clearButton = false
   }

  ngOnInit(): void {
  }

}

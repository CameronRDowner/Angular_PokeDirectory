import { Component, OnInit, Input, Output } from '@angular/core';
import { TextButton } from '../../models/text-button/text-button';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent implements OnInit {
  @Output() buttonClick = new EventEmitter();
  @Input() textButton: TextButton;
  buttonStyles:any;
  emitButtonClick(){
    this.buttonClick.emit(null);
  }
  constructor() {

   }
  ngOnInit(): void {
    this.buttonStyles = {
      'background-color':this.textButton.buttonColor,
      'color': this.textButton.textColor
    }
  }

}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  buttonType:string;
  @Input() iconClasses: string;
  @Input() submitButton: boolean;
  @Output() buttonClick = new EventEmitter();
  initializeType(){
    if(this.submitButton === true){
      this.buttonType = "submit";
    }
    else{
      this.buttonType = "button"
    }
  }
  emitButtonClick(){
    this.buttonClick.emit(null);
  }
  constructor() { }

  ngOnInit(): void {
    this.initializeType();
  }

}

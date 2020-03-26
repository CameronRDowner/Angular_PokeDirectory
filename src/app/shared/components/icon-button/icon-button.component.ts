import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() iconClasses: string;
  @Output() buttonClick = new EventEmitter();
  
  emitButtonClick(){
    this.buttonClick.emit(null);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel-button',
  templateUrl: './carousel-button.component.html',
  styleUrls: ['./carousel-button.component.scss']
})
export class CarouselButtonComponent implements OnInit {
  @Input() orientation:string;
  @Output() buttonClick = new EventEmitter();

  iconClasses: string[];
  emitButtonClick(){
    this.buttonClick.emit(null);
  }
  setIconClasses():void{
    if(this.orientation === "left"){
      this.iconClasses = ["fa", "fa-caret-left", "carousel-button__icon--left"];
    }
    else if(this.orientation === "right"){
      this.iconClasses = ["fa", "fa-caret-right", "carousel-button__icon--right"];
    }
    else{
      console.log("please provide an orientation input value");
    }
  }
  constructor() {
    
   }

  ngOnInit(): void {
    this.setIconClasses();
  }

}

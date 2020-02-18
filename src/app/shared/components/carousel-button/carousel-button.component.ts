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
  constructor() {
    
   }

  ngOnInit(): void {
    if(this.orientation === "left"){
      this.iconClasses = ["fas", "fa-arrow-alt-circle-left"];
    }
    else if(this.orientation === "right"){
      this.iconClasses = ["fas", "fa-arrow-alt-circle-right"];
    }
    else{
      console.log("please provide an orientation input value");
    }
  }

}

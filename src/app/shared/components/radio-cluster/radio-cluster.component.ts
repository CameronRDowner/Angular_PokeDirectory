import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RadioCluster } from '../../models/radio-cluster/radio-cluster';

@Component({
  selector: 'app-radio-cluster',
  templateUrl: './radio-cluster.component.html',
  styleUrls: ['./radio-cluster.component.scss']
})
export class RadioClusterComponent implements OnInit {
  @Input() buttonNames: Array<string>
  @Input() alternateStyling: boolean;
  @Output() radioButtonClick = new EventEmitter();
  toggledButton: string;
  setToggledButton(buttonName: string){
    this.toggledButton = buttonName;
  }
  handleButtonClick(buttonName:string){
    this.setToggledButton(buttonName);
    this.emitButtonClick(buttonName);
  }
  emitButtonClick(buttonName:string){
    this.radioButtonClick.emit(buttonName);
  }
  constructor() {
    this.alternateStyling = false;
   }
  ngOnChanges():void{
    console.log(this.buttonNames)
    this.setToggledButton(this.buttonNames[0])
  
  }
  ngOnInit(): void {
    
  }

}

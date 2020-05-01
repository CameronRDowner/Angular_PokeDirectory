import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RadioCluster } from '../../models/radio-cluster/radio-cluster';

@Component({
  selector: 'app-radio-cluster',
  templateUrl: './radio-cluster.component.html',
  styleUrls: ['./radio-cluster.component.scss']
})
export class RadioClusterComponent implements OnInit {
  @Input() radioCluster: RadioCluster;
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
    console.log('radiobuttonclicked')
    this.radioButtonClick.emit(buttonName);
  }
  constructor() { }

  ngOnInit(): void {
    this.setToggledButton(this.radioCluster.buttonNames[0])
  }

}

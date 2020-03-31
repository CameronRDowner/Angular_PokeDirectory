import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-cluster',
  templateUrl: './radio-cluster.component.html',
  styleUrls: ['./radio-cluster.component.scss']
})
export class RadioClusterComponent implements OnInit {
  @Input() buttonNameList: string[];
  @Output() buttonClick = new EventEmitter();
  
  emitButtonClick(){
    this.buttonClick.emit(null);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

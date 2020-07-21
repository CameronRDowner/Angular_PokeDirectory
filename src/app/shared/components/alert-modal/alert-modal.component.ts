import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {
  @Input() modalVisible: boolean
  @Input() message: string;
  @Output() closeModalClicks = new EventEmitter();
  emitCloseModal():void{
    this.closeModalClicks.emit(null);
  }
  constructor() {
   }

  ngOnInit(): void {
  }

}

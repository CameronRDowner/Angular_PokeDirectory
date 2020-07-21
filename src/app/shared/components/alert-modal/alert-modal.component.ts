import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
  animations: [
    trigger('fade', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate('0.2s ease-out', style({ opacity: 1 }))
    ]),
    transition('* => void', [
      animate('0.2s ease-in', style({ opacity: 0 }))
    ])
  ])]
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

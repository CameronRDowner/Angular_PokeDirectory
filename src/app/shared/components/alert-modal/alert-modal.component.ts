import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {
  @Input() modalVisible: boolean
  @Input() alertMessage: string;
  constructor() {
    this.modalVisible = true;
   }

  ngOnInit(): void {
  }

}

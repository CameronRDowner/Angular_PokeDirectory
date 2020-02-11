import { Component, OnInit, Input } from '@angular/core';
import { TextButton } from '../../models/text-button/text-button';

@Component({
  selector: 'app-text-button',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss']
})
export class TextButtonComponent implements OnInit {

  @Input() textButton: TextButton;

  constructor() { }

  ngOnInit(): void {
  }

}

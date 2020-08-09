import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-damage-class',
  templateUrl: './damage-class.component.html',
  styleUrls: ['./damage-class.component.scss']
})
export class DamageClassComponent implements OnInit {
  @Input() className: string;
  classColors:Object;
  constructor() { 
    this.classColors = {
      special: "#828BA3",
      status:"#ABABAB",
      physical:"#E36D63"
    }
  }

  ngOnInit(): void {
  }

}

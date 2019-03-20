import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active', style({transform: 'translateX(0) scale(1.3)'})),
      transition('inactive => active', animate('10ms ease-in')),
      transition('active => inactive', animate('10ms ease-out'))
    ])
  ]
})

export class Test1Component implements OnInit {
  private boxState = 'inactive';
  private isTrue = false;

  constructor() {
  }

  inputData = '';
  showData = '1';
  stateStu = 'active';


  ngOnInit() {
  }

  start() {
    if (this.isTrue) {
      this.boxState = 'inactive';
    } else {
      this.boxState = 'active';
    }
    this.isTrue = !this.isTrue;
  }

  keyUpEvent($event: KeyboardEvent) {
    if ($event) {
      console.log($event);
    }
  }
}

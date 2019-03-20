import {Component, OnInit} from '@angular/core';
import {animate, group, keyframes, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getState(outlet) {
    return outlet.activatedRouteData.title;
  }
}

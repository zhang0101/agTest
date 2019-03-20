import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';


import {map, filter, mergeMap} from 'rxjs/operators';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [style({position: 'absolute'}), animate('0.5s ease-in-out')]),
      transition('* => *', [
        query(':leave', style({transform: 'translateX(0)', position: 'absolute'}), {optional: true}),
        query(':enter', style({transform: 'translateX(100%)', position: 'absolute'}), {optional: true}),

        group([
          query(':leave', animate('.5s ease-in-out', style({transform: 'translateX(-100%)'})), {optional: true}),
          query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)'})), {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
  }

  title = 'agTest';
  @ViewChild('headerFunc') headerFunc;
  inputValue = '练习一下';

  // router跳转动画所需参数
  routerState = true;
  // routerStateCode = 'active';


  ngOnInit() {
    // this.headerFunc.getMsg();
    this.setTitle();
    this.setRouterAnimations();
  }

  setRouterAnimations() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // 每次路由跳转改变状态
        this.routerState = !this.routerState;
        // this.routerStateCode = this.routerStateCode !== 'active' ? 'active' : 'inactive';
      }
    });
  }

  setTitle() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data))
      .subscribe((event) => {
        if (!event.title) {
          return false;
        }
        this.titleService.setTitle(event.title);
      });
  }

  toHead() {
    this.title = 'agTest-->父向子传值';
  }

  runParent(msg: string) {
    console.log(msg);
  }

}

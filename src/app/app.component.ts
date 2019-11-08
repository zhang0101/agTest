import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {LoadingService} from './service/loading.service';
import {select, Store} from '@ngrx/store';
import {decrement, increment, reset} from '@app/store/scoreboard/scoreboard.actions';
import {Observable} from 'rxjs';
import * as AppFrom from '@app/store';
import {login} from '@app/store/login/scoreboard.actions';
import * as $ from 'jquery';

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

export class AppComponent implements OnInit, AfterViewInit {

    count$: Observable<number>;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private loadingService: LoadingService,
        private store: Store<AppFrom.AppState>
    ) {
        this.count$ = store.pipe(select(AppFrom.selectNum));
        store.select(AppFrom.selectInfo).subscribe(res => {
            console.log(res);
        });
    }

    title = 'agTest';
    @ViewChild('headerFunc', {static: false}) headerFunc;
    trim = 'all';
    routerState: any;
    inputValue: any;

    ngOnInit() {
    }

    ngAfterViewInit(): void {

    }

    add() {
        this.trim = 'right';
    }

    reduce() {
        this.trim = 'left';
        // this.store.dispatch(new Decrement());
    }

    trim2() {
        this.trim = 'trim';
    }


    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement({num: 3}));
    }

    reset() {
        this.store.dispatch(reset([true]));
    }

    login() {
        const info = {
            username: 'zhangzhen',
            password: 'zhangzhen'
        };
        this.store.dispatch(login({info}));
    }

    runParent($event: string) {
    }

    toHead() {

    }
}

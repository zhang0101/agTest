import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {LoadingService} from '@service/loading.service';
import {BreadcrumbsService} from '@service/breadcrumbs.service';
import {Observable} from 'rxjs';
import {UEditorComponent} from 'ngx-ueditor';
import {select, Store} from '@ngrx/store';
import {AppStoreModule} from '@store/store.module';
import {getBookList} from '@store/selectors';
import {Logs} from '@app/logs/logs';


declare const UE: any;

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

export class AppComponent  implements OnInit, AfterViewInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private loadingService: LoadingService,
        private breadcrumbsService: BreadcrumbsService,
        private store: Store<AppStoreModule>,
    ) {
    }

    count$: Observable<number>;

    title = 'agTest';
    @ViewChild('headerFunc', {static: false}) headerFunc;
    trim = 'all';
    routerState: any;
    inputValue: any;
    @ViewChild('full', {static: false}) full: UEditorComponent;
    html: string;
    config = {
        toolbars: [['fullscreen', 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'horizontal', 'date', 'time', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|', 'template']],
        autoClearinitialContent: true,
        wordCount: false
    };
    tabsData: any = [
        {name: '11111', path: 'a'},
        {name: '22222', path: 'b'},
        {name: '33333', path: 'c'},
        {name: '44444', path: 'd'},
    ];

    ngOnInit() {
        this.breadcrumbsService.initBreadcrumbs();
        this.store.pipe(select('book' as any), select(getBookList)).subscribe(res => {
            console.log(res)
        });
    }

    ngAfterViewInit(): void {

    }


    dispatch() {
        console.log(this.headerFunc);
        // this.store.dispatch(addBook({book: {bookName: '这个是书名'}}));
    }
}

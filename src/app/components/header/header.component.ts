import {
    Component,
    Input,
    OnInit,
    Output,
    DoCheck,
    AfterViewInit,
    OnDestroy,
    EventEmitter,
    OnChanges,
    AfterViewChecked, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterViewChecked, OnChanges, OnDestroy, DoCheck, AfterViewInit {
    sex = 'male';
    setColor = false;
    time: any = new Date();
    @Input() title;

    // @Input() a: string;
    @Output() private outer = new EventEmitter<string>();
    @Output() private titleChange = new EventEmitter();

    constructor(public router: Router,
                private cd: ChangeDetectorRef) {
        console.log('->this.cd', this.cd)
    }

    go_home() {
        console.log('->this.title', this.title)
        this.titleChange.emit(this.title);
    }

    ngOnInit() {
        // console.log('ngOnInit');
        // console.log(this.msg);
        // console.log(this.a);

        /* const clickDom = fromEvent(document.getElementById('app'), 'click');
         clickDom.subscribe(res => {
             const time = interval(1000).pipe(take(4));
             time.subscribe(x => console.log(res.target, 'time'));
             // const takeFourNumbers = time;
             // takeFourNumbers.subscribe(x => console.log('Next: ', res));
         });

         const array = [10, 20, 30];
         const result = from(array);

         result.subscribe(x => console.log(x));*/
    }

    ngDoCheck(): void {
        // console.log('ngDoCheck:', this.msg);
    }

    ngOnChanges(change: SimpleChanges): void {

        console.log('ngOnChanges', change);
    }

    ngAfterViewInit(): void {
        // console.log('ngAfterViewInit:', this.msg);
    }

    ngAfterViewChecked() {
        // console.log(this.msg);
    }

    ngOnDestroy(): void {
        // console.log('ngOnDestroy');
    }

    changeColor() {
        this.setColor = !this.setColor;
        this.time = new Date();
    }

    postMsg() {
        this.outer.emit('子组件向父组件传值');
    }

    getMsg() {
        return {name: 'zhang'};
    }
}

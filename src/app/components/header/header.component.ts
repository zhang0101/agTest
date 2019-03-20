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
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked, OnChanges, OnDestroy, DoCheck, AfterViewInit {
  headerList: any = [
    {
      name: '用户模块',
      path: 'user'
    },
    {
      name: '产品模块',
      path: 'product'
    },
    {
      name: '评论模块',
      path: 'article'
    },
  ];
  sex = 'male';
  setColor = false;
  time: any = new Date();
  @Input() msg: string;
  @Input() a: string;
  @Output() private outer = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    // console.log('ngOnInit');
    // console.log(this.msg);
    // console.log(this.a);
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck:', this.msg);
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges', this.msg);
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

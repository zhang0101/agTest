import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnInit,
  HostListener,
  Input,
  Output, EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit, OnInit {
  constructor(private el: ElementRef) {

  }

  @Input('appHighlight') highlightColor: string;
  @Output() outer = new EventEmitter();

  @HostListener('focus') Onfocus() {
    this.el.nativeElement.style.color = this.highlightColor
    this.outer.emit('这是从指令中暴露的值');
  }
  @HostListener('mouseenter')onMouseEnter() {
    console.log('这是一个mouseenter事件');
  }

  ngOnInit() {
    // console.log(this.highlightColor);
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
    // console.log(this.el.nativeElement);
  }
}

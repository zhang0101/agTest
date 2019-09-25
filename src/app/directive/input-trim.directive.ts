import {Directive, ElementRef, HostListener, Input, NgModule} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[appInputTrim]'
})

export class InputTrimDirective {
    /**TODO 输入框去空格规则
     *      all： 所有空格
     *      trim： 前后空格
     *      left： 左空格
     *      right: 右空格
     *      默认为去前后空格
     */

    @Input('appInputTrim') trim;

    constructor(
        private elementRef: ElementRef,
        private control: NgControl,
    ) {
    }

    @HostListener('keydown', ['$event', '$event.target'])
    keydownFun(evt) {
        if (evt.key.trim() === '') {
            switch ( this.trim ) {
                case 'all':
                    evt.preventDefault();
                    break;
            }
        }
    }

    @HostListener('keyup', ['$event', '$event.target'])
    keyupFun(evt, target) {
        if (target.value) {
            switch ( this.trim ) {
                case 'all':
                    this.control.control.setValue(target.value.replace(/(\s*)/g, ''));
                    break;
                case 'trim':
                    this.control.control.setValue(target.value.trim());
                    break;
                case 'left':
                    this.control.control.setValue(target.value.replace(/(^\s*)/g, ''));
                    break;
                case 'right':
                    this.control.control.setValue(target.value.replace(/(\s*)$/g, ''));
                    break;
                default:
                    this.control.control.setValue(target.value.trim());
                    break;
            }
        }
    }
}

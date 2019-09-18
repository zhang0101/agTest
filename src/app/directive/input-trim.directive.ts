import {Directive, ElementRef, HostListener, NgModule} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[appInputTrim]'
})

export class InputTrimDirective {

    constructor(
        private elementRef: ElementRef,
        private control: NgControl
    ) {
    }

    @HostListener('keydown', ['$event'])
    keydownFun(evt) {
        if (evt.key.trim() === '') {
            evt.preventDefault();
        }
    }

    @HostListener('keyup', ['$event', '$event.target'])
    keyupFun(evt, target) {
        if (target.value) {
            this.control.control.setValue(target.value.replace(/(\s*)/g, ''));
        }
    }
}

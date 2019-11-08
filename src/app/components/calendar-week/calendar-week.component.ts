import {Component, OnInit, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-calendar-week',
    templateUrl: './calendar-week.component.html',
    styleUrls: ['./calendar-week.component.scss']
})
export class CalendarWeekComponent implements OnInit, AfterViewInit {
    _date = new Date();   // 日期
    currentDay = this._date.getDay();  // 周几
    weekNum = 0;
    showWeekDay = [];
    titleHtml: string;
    @Output() setWeek = new EventEmitter<object>();

    constructor() {
    }

    ngOnInit() {
        this.createDate(-this.currentDay);
        this.titleTime();
    }

    ngAfterViewInit(): void {

    }

    prevWeek() { // 上周
        this.weekNum--;
        this.changeWeek(this.weekNum);
    }
    nextWeek() { // 下周
    this.weekNum++;
    this.changeWeek(this.weekNum);
    }
    createDate(cDay) {
        const cDayData = cDay + 1; // 自然周从周一开始计算
        this.showWeekDay = [];
        for (let i = cDayData; i < cDayData + 7; i++) {
            this.showWeekDay.push(this.countTime(i));
        }
        this.setWeek.emit(this.showWeekDay);
    }

    countTime(n) {
        const getTime = this._date.getTime() + (24 * 60 * 60 * 1000) * n;
        const needDate = new Date(getTime);
        const getYear = needDate.getFullYear();
        const getMonth = needDate.getMonth() + 1;
        const getDate = needDate.getDate();
        return {
            year: getYear,
            month: getMonth,
            date: getDate,
            fullDate: `${getYear}年${this.format(getMonth)}月${this.format(getDate)}日`
        };
    }

    titleTime() {
        this.titleHtml = this.showWeekDay[0].fullDate + ' - ' + this.showWeekDay[6].fullDate;
    }

    format(num) {
        return num < 10 ? '0' + num : num;
    }

    changeWeek(weekNum) {
        this.createDate(-this.currentDay + (7 * weekNum));
        this.titleTime();
    }

    thisWeek() {
        this._date = new Date();   // 日期
        this.createDate(-this.currentDay);
        this.titleTime();
    }
}

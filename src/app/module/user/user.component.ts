import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any = 'zhangzhen';

  constructor() {
  }

  ngOnInit() {
  }

}

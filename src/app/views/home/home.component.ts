import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: string;


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // console.log(this.route);
    // console.log()
    this.route.params.subscribe(data => this.id = data.id);
    console.log(this.id);
  }

  goAbout() {
    // console.log(this.router.navigate(['about']));
    // this.route
  }
}

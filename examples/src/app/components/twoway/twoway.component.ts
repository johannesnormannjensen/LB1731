import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

   myTitle = 'Two way binding!!!';

  constructor() { }

  ngOnInit() {
  }

}

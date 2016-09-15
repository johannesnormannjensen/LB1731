import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.less']
})
export class HelloWorldComponent implements OnInit {

  @Input() public greet = 'Hello world!';

  constructor() { }

  ngOnInit() {
  }

}

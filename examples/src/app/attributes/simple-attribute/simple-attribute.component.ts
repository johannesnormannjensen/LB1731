import { Component, OnInit } from '@angular/core';

import { Rotate180 } from '../rotate.directive';

@Component({
  moduleId: module.id,
  selector: 'app-simple-attribute',
  templateUrl: 'simple-attribute.component.html',
  styleUrls: ['simple-attribute.component.css'],
  directives: [Rotate180]
})
export class SimpleAttributeComponent {
}
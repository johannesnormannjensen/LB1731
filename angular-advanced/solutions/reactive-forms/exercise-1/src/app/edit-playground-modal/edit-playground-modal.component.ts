import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Playground } from '../model';

@Component({
  selector: 'loop-edit-playground-modal',
  templateUrl: './edit-playground-modal.component.html',
  styleUrls: ['./edit-playground-modal.component.scss']
})
export class EditPlaygroundModalComponent implements OnInit {

  static open(modal: NgbModal, playground: Playground): Promise<Playground> {
    const ref = modal.open(EditPlaygroundModalComponent);
    (ref.componentInstance as EditPlaygroundModalComponent).initialize(playground);
    return ref.result;
  }

  fg = this.fb.group({
    name: [],
    description: [],
    addressDescription: []
  });

  playground!: Playground;

  constructor(private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.fg.reset(this.playground || {});
  }

  initialize(playground: Playground) {
    this.playground = playground;
  }

  save() {
    this.modal.close({ ...this.playground, ...this.fg.value });
  }

}
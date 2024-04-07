import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss'],
})
export class InputformComponent  implements OnInit {
  shapeForm: FormGroup;
  @Output() TriangleEmitter = new EventEmitter<number>();
  @Output() DiskEmitter = new EventEmitter<number>();
  constructor(private fb: FormBuilder) {
    this.shapeForm = this.fb.group({
      triangles: ['', [Validators.required, Validators.min(1)]],
      disks: ['', [Validators.required, Validators.min(1)]]
    });
  }
  onSubmit() {
    if (this.shapeForm.valid) {
      const trianglesValue = this.shapeForm.controls['triangles'].value;
      const disksValue = this.shapeForm.controls['disks'].value;
      this.TriangleEmitter.emit(trianglesValue);
      this.DiskEmitter.emit(disksValue);
    }
  }
  ngOnInit() {}
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputformModule } from '../inputform/inputform.module';
import { Triangle } from '../class/triangle';
import { Disk } from '../class/disk';
import { CalculateService } from '../service/calculate.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, CommonModule, ReactiveFormsModule, 
    FormsModule, InputformModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  TrianglesPAArray: {perimeter: number, area: number}[] = [];
  DisksPAArray: {perimeter: number, area: number}[] = [];
  constructor(private service: CalculateService) {}
  ProcessTriangles(triangleCount: number) {
    var Triangles = new Array(triangleCount);
    for (let i = 0; i < Triangles.length; i++) {
      Triangles[i] = new Triangle();
    }
    this.TrianglesPAArray=this.service.ProcessArray(Triangles);
  }
  ProcessDisks(diskCount: number) {
    var Disks = new Array(diskCount);
    for (let i = 0; i < Disks.length; i++) {
      Disks[i] = new Disk();
    }
    this.DisksPAArray=this.service.ProcessArray(Disks);
  }
}

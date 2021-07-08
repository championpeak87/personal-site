import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input('percentage') public percentage: number;

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    const unique = this.constructor['ɵcmp'].id;
    console.log("SETTING WIDTH: " + this.percentage.toString());
    document.getElementById(unique).style.width = this.percentage.toString() + '%';
    console.log("NEW WIDTH: " + document.getElementById('fillpart').style.width);
  }

}

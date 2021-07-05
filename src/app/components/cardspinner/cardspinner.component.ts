import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from '../itemcard/card-item';

@Component({
  selector: 'app-cardspinner',
  templateUrl: './cardspinner.component.html',
  styleUrls: ['./cardspinner.component.scss']
})
export class CardspinnerComponent implements OnInit {
  @Input('items') items: CardItem[] = [{
    header: "CMSimulator",
    description: "An android app for language simulation",
    link: "https://github.com/klihan/cmsimulator",
    img: "../../../assets/cmsimulator.png",
    in_development: false
  },
  {
    header: "ASICDE",
    description: "A web IDE for SystemVerilog",
    link: "https://demo.asicde.org/",
    img: "../../../assets/SystemVerilog_logo.png",
    in_development: true
  },
  {
    header: "sv2cpp",
    description: "A transpiler for SystemVerilog to C++",
    link: "https://github.com/klihan/sv2cpp",
    img: "../../../assets/sv2cpp.png",
    in_development: true
  }, 
  {
    header: "O2TV Toolbox",
    description: "A bash script for IPTV stream extraction",
    link: "about:blank",
    img: "../../../assets/o2tv.png",
    in_development: true
  }];

  constructor() { }

  ngOnInit(): void {
  }

}

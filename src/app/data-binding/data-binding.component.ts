import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://google.com';
  urlImg: string = 'https://placekitten.com/150/150'

  getValor() {
    return 10;
  }

  getTrue(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

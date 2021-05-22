import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form-input-property',
  templateUrl: './meu-form-input-property.component.html',
  styleUrls: ['./meu-form-input-property.component.css'],
})
export class MeuFormInputPropertyComponent implements OnInit {
  @Input() pessoa: any;

  constructor() {}

  ngOnInit(): void {}
}

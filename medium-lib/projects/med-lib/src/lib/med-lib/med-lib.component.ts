import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-med-lib',
  template: `
    <p>This is my special component!</p>
    <p style="color: red">
      {{ textFromOutside }}
    </p>
  `,
  styles: [
  ]
})
export class MedLibComponent implements OnInit {

  @Input() textFromOutside: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

export function specialAdditionMethod(a: number, b: number): number {
  return a + b;
}

import { Component } from '@angular/core';
import { MedLibService, specialAdditionMethod } from 'med-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'testing';

  constructor(private libraryService: MedLibService) {
  }

  addTwoNums(a: number, b: number): number {
    return specialAdditionMethod(a, b);
  }

  subtractTwoNums(a: number, b: number): number {
    return this.libraryService.specialSubtractionMethod(a, b);
  }
}

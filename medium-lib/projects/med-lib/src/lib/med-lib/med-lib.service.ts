import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedLibService {

  constructor() { }

  specialSubtractionMethod(a: number, b: number): number {
    return a- b;
  }
}

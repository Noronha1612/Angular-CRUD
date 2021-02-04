import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './headerData.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    icon: 'home',
    title: 'Início',
    route: ''
  });

  constructor() { }

  getHeaderData(): HeaderData {
    return this._headerData.value;
  }

  setHeaderData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}

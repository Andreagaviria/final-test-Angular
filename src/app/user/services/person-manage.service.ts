import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { IPersonData } from '../model/person'


@Injectable({
  providedIn: 'root'
})
export class PersonManageService {

  constructor(private http:httpClient) { }

  getPerson(): Observable<IPersonData> {
    return this.http.get<IPersonData>('https://gist.githubusercontent.com/kathcode/9a0b57a3caa34255f9c12b6204d6fe3d/raw/69aba7500957db06d3e2e1fe88a2ada7d163325f/getGreatPerson.json');
    } 
}

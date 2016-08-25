import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';

import { Playground } from './playground';

interface IOpenDataGeometry {
  coordinates: [number[]];
}

interface IOpenDataProperties {
  navn: string;
  adressebeskrivelse: string;
  beskrivelse: string;
}

interface IOpenDataPlayground {
  id: string;
  properties: IOpenDataProperties;
  geometry: IOpenDataGeometry;
}

interface IOpenData {
  features: IOpenDataPlayground[];
}

@Injectable()
export class PlaygroundService {

  private _requestStream: Observable<Playground[]>;

  constructor(private http: Http) {
      this._requestStream = this.http.get('http://data.kk.dk/dataset/legepladser/resource/79d60521-5748-4287-a875-6d0e23fac31e/proxy')
        .map(response => {
          const opendata: IOpenData = response.json();
          return opendata.features.map(openPlayground => {
            return {
              'id': openPlayground.id,
              'name': openPlayground.properties.navn,
              'addressDescription': openPlayground.properties.adressebeskrivelse,
              'description': openPlayground.properties.beskrivelse,
              'position': {
                'lat': openPlayground.geometry.coordinates[0][1],
                'lng': openPlayground.geometry.coordinates[0][0]
              }
            }
          })
        })
        .publishLast()
        .refCount();
  }

  public getPlaygrounds(): Observable<Playground[]> {
    return this._requestStream;
  }

  public find(id: string): Observable<Playground> {
    return this._requestStream.map(playgrounds => playgrounds.find(playground => playground.id === id));
  }
}

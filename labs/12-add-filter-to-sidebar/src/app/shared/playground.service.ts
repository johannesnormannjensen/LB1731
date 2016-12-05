import { Playground } from './../../../../08-create-location-service/src/app/shared/playground';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
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

  private requestStream: Observable<Playground[]>;

  constructor(http: Http) {
    this.requestStream = http.get('http://data.kk.dk/dataset/legepladser/resource/79d60521-5748-4287-a875-6d0e23fac31e/proxy')
      .map(response => {
        const opendata: IOpenData = response.json();
        return opendata.features.map(openPlayground => {
          return <Playground> {
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
      .refCount()
      .catch((error: Response) => {
        console.error('Unable to fetch playgrounds', error.statusText);
        return Observable.of([]);
      });
  }

  public getPlaygrounds(): Observable<Playground[]> {
    return this.requestStream;
  }

  public find(id: string): Observable<Playground> {
    return this.requestStream.map(playgrounds => playgrounds.find(playground => playground.id === id));
  }
}

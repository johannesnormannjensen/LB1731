import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';

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
  }

  public getPlaygrounds(): Observable<Playground[]> {
    return this.requestStream;
  }
}

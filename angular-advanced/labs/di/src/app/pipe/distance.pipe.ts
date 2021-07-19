import { Pipe, PipeTransform } from '@angular/core';
import { Coordinate } from '../model';
import { LocationService } from '../service';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  constructor(private locationService: LocationService) { }

  transform(value: Coordinate, location: Coordinate | null): number | string {
    return location ? this.locationService.getDistance(location, value) : 'Ukendt';
  }

}

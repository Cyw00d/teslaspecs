import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  renderImage(range, options, view = 'STUD_3QTR') {
    let illustration;
    if (view === 'STUD_SEAT') {
      illustration = `/assets/img/m3/m3_interior_${options.interior == '$IN3PW' ? 'white' : 'black'}.png`;
    } else if (view === 'STUD_REAR') {
      illustration = `/assets/img/m3/m3_rear_${options.color}.png`;
    } else {
      illustration = `/assets/img/m3/${range}_${options.color}_${options.wheels}_${view}.png`;
    }
    return illustration;
  }
}

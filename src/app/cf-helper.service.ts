import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CfHelperService {
  public colorRating: any;
  constructor() { 
    this.colorRating = new Map();
    this.colorRating.set('Newbie', '#ccc');
    this.colorRating.set('Pupil', '#7fc');
    this.colorRating.set('Specialist', '#77ddbb');
    this.colorRating.set('Expert', '#aaf');
    this.colorRating.set('Candidate Master', '#f8f');
    this.colorRating.set('Master', '#ffcc88');
    this.colorRating.set('International Master', '#ffbb55');
    this.colorRating.set('Grandmaster', '#f77');
    this.colorRating.set('International Grandmaster', '#f33');
    this.colorRating.set('Legendary Grandmaster', '#a00');
  }

  public getTitle(rating: any) {
    if(rating < 1200)
      return 'Newbie';
    if(rating < 1399)
      return 'Pupil';
    if(rating < 1599)
      return 'Specialist';
    if(rating  < 1899)
      return 'Expert';
    if(rating < 2099)
      return 'Candidate Master';
    if(rating < 2299)
      return 'Master';
    if(rating < 2399)
      return 'International Master';
    if(rating < 2599)
      return 'Grandmaster';
    if(rating < 2999)
      return 'International Grandmaster';
    return 'Legendary Grandmaster';
  }

  getColorByRating(rating: any) {
    return this.colorRating.get(this.getTitle(rating));
  }

  getColorByTitle(title: any) {
    return this.colorRating.get(title);
  } 
}

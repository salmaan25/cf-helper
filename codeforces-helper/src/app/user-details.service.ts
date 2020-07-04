import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  getuserDetails(url: any) {
    // const testUrl  ='https://api.github.com/users/koushikkothagal';
    // const steamUrl = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=307D306B55C7750CB8CD1BE8366A8D82&steamids=76561197960435530&format=json';
    return this.http.get(url);
  }
}

// dummy data
// public link = 'https://codeforces.com/contest/1371/problem/E2';
  // public tags = ['dp', 'constructive', 'algorithms', 'trees'];
  // public data: any[] = [
  //   {position: 1, name: 'Magical Sticks', date: '2020-12-20', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2) - Thanks, Denis aramis Shitov!', link: this.link},
  //   {position: 2, name: 'Magical Calendar', date: '2020-12-19', rating: 1800,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 3, name: 'A Cookie for You', date: '2020-12-18', rating: 2000,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 4, name: 'Grid-00100', date: '2020-12-17', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 5, name: 'Asterism (Easy Version)', date: '2020-12-16', rating: 1700,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 6, name: 'Asterism (Hard Version)', date: '2020-12-15', rating: 2100,
  //     contestName: 'Codeforces Round #631 (Div. 2) - Thanks, Denis aramis Shitov!', link: this.link},
  //   {position: 7, name: 'Raging Thunder', date: '2020-10-5', rating: 2200,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 8, name: 'Dreamoon and Ranking Collection', date: '2020-10-4', rating: 1600,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 9, name: 'Dreamoon Likes Permutations', date: '2020-10-3', rating: 1700,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 10, name: 'Dreamoon Likes Sequences', date: '2020-10-2', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 11, name: 'Dreamoon Likes Sequences', date: '2020-10-2', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 12, name: 'Dreamoon Likes Sequences', date: '2020-10-2', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 13, name: 'Dreamoon Likes Sequences', date: '2020-10-2', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 14, name: 'Dreamoon Likes Sequences', date: '2020-10-2', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 15, name: 'Dreamoon Likes Sequences', date: '2020-10-2', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  //   {position: 16, name: 'Dreamoon Likes Sequences', date: '2020-10-2', rating: 1900,
  //     contestName: 'Codeforces Round #631 (Div. 2)', link: this.link},
  // ];
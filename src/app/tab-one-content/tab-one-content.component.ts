import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './../user-details.service';

@Component({
  selector: 'app-tab-one-content',
  templateUrl: './tab-one-content.component.html',
  styleUrls: ['./tab-one-content.component.css']
})
export class TabOneContentComponent implements OnInit {
  public url: string;
  constructor(private userDetailsService: UserDetailsService) { }
  public userData: any;

  ngOnInit(): void {
  }

  onTab1Click(username: any) {
    console.log(username);
    this.url = 'https://codeforces.com/api/user.info?handles=';
    this.url = this.url + username + '&lang=en';
    console.log(this.url);
    this.userDetailsService.getuserDetails(this.url)
      .subscribe((data) => {
        this.userData = data;
        console.log(this.userData);
      });
  }
}

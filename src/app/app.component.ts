import { Component, ViewChild } from '@angular/core';
import { UserDetailsService } from './user-details.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import * as moment from 'moment';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  
  title = 'cf';
  public userData: any;
  public url: any;
  public visible = true;
  public selectable = true;
  public removable = true;
  public addOnBlur = true;
  users = [
    // 'x23',
  ];
  public problemDateMap: any;
  public dataSource: any;
  public problemSet: any;
  public showTag: any;
  public sliderToggleTagTooltip: any;

  displayedColumns: string[] = ['position', 'name', 'date', 'rating', 'contestName'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  public problemData = [];

  constructor(private userDetailsService: UserDetailsService) {
    this.showTag = false;
    this.sliderToggleTagTooltip = 'Show tags'
  }
  
  ngOnInit() {
  }

  removeUserFromList(user: any): void {
    const index = this.users.indexOf(user);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
    this.getDataAndDisplay();
  }
  
  onClickTab(event: MatTabChangeEvent) {
    console.log(event.index);
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

  onTab2AddUserClick(username: any) {
    console.log(username);
    if ((username || '').trim()) {
      this.users.push(username.trim());
    }
    this.getDataAndDisplay();
  }

  onTab2RemoveUserClick(username: any) {
    const index = this.users.indexOf(username);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
    this.getDataAndDisplay();
  }

  initializeTable() {
    this.dataSource = new MatTableDataSource(this.problemData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getDataAndDisplay() {
    this.problemSet = new Set();
    this.problemData = [];
    if(this.users.length === 0) {
      this.initializeTable();
    }
    this.url = 'https://codeforces.com/api/user.status?handle=';
    let cnt = 1;
    this.users.forEach((user: string) => {
      this.userDetailsService.getuserDetails(this.url+user+'&lang=en')
      .subscribe((data) => {
        data['result'].forEach((problem: any) => {
          if(problem['problem'].hasOwnProperty('rating') && problem['verdict'] === 'OK') {
            let problemData = {
              contestId: problem['problem']['contestId'],
              index: problem['problem']['index'],
              name: problem['problem']['name'],
              rating: problem['problem']['rating'],
              tags: problem['problem']['tags'],
              date: moment(problem['creationTimeSeconds']*1000).format('YYYY-MM-DD')
            }
            if(this.problemSet.has(problemData.name+problemData.index)) {
              // console.log(problemData.name);
            } else {
              this.problemData.push({
                position: cnt, 
                name: problemData.name,
                date: problemData.date,
                rating: problemData.rating,
                contestName: problemData.contestId,
                link: 'https://codeforces.com/problemset/problem/' + problemData.contestId + '/' + problemData.index,
                tags: problemData.tags
              });
              cnt++;
              this.problemSet.add(problemData.name+problemData.index);
              this.initializeTable();
            }
          }
        });
      });
    });
  }

  onTab2FindProblemsClick() {
    console.log("find problems clicked");
    console.log("show tag " + this.showTag);
    this.getDataAndDisplay();
    
  }

  onTab2ResetClick() {
    console.log("reset clicked");
    this.users = [];
    this.problemData = [];
    this.initializeTable();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleTag() {
    console.log(this.showTag);
    if(this.showTag) {
      console.log('inside');
      this.displayedColumns.push('tags');
      this.sliderToggleTagTooltip = 'Hide tags';
    } else {
      const index = this.displayedColumns.indexOf('tags');
      if (index >= 0) {
        this.displayedColumns.splice(index, 1);
      }
      this.sliderToggleTagTooltip = 'Show tags';
    }
    this.initializeTable();
  }

  /*ag-grid settings begins*/
  // columnDefs = [
  //   {
  //     headerName: "No.",
  //     valueGetter: "node.rowIndex + 1",
  //     resizable:true,
  //     width: 60
  //   },
  //   {
  //     headerName: 'Make',
  //     field: 'make',
  //     sortable: true,
  //     filter:true,
  //     resizable:true
  //   },
  //   {
  //     headerName: 'Model',
  //     field: 'model',
  //     sortable: true,
  //     filter:true,
  //     resizable:true
  //   },
  //   {
  //     headerName: 'Price',
  //     field: 'price',
  //     sortable: true,
  //     filter:true,
  //     resizable:true
  //   }
  // ];

  // rowData = [
  //     {make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
  // onGridReady(params: any) {
  //   params.api.sizeColumnsToFit();
  // }
  /*ag-grid settings ends*/
}

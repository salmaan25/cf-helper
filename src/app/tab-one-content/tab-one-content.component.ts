import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './../user-details.service';
// import { HighchartsChart } from 'highcharts-angular';
import { Chart } from 'angular-highcharts';
import * as moment from 'moment';
import { MAR } from '@angular/material/core';
import { color } from 'highcharts';
import { HttpClient } from '@angular/common/http';
import { CfHelperService } from './../cf-helper.service';

@Component({
  selector: 'app-tab-one-content',
  templateUrl: './tab-one-content.component.html',
  styleUrls: ['./tab-one-content.component.css']
})
export class TabOneContentComponent implements OnInit {
  public url: string;
  public userData: any;
  public chartRatingData: any;
  public chartProblemData: any;
  public dateLabelsRatingChart: any;

  constructor(private userDetailsService: UserDetailsService, private cfHelperService: CfHelperService) {

    // this.colorRating = {
    //   Newbie: '#ccc',
    //   Pupil: '#7fc',
    //   Specialist: '#77ddbb',
    //   Expert: '#aaf',
    //   CandidateMaster: '#f8f',
    //   Master: '#ffcc88',
    //   InternationalMaster: '#ffbb55',
    //   Grandmaster: '#f77',
    //   InternationalGrandmaster: '#f33',
    //   LegendaryGrandmaster: '#a00'
    // }
  }

  ngOnInit(): void {
  }
  
  
  public renderRatingChart() {
    this.chartRatingData = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Rating graph'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        style: {
          pointerEvents: 'auto'
        },
        useHTML: true,
        backgroundColor: '#FCFFC5',
        formatter: function () {
          let cfhs = new CfHelperService();
          let delta:any = this.y-(this.point as any).oldRating;
          if(delta > 0)
           delta = '+' + delta;
            return '<div style="font-size:9px"><b>' + this.y + ' (' + delta +'),' + 
                ' <span style="color:' + cfhs.getColorByRating(this.y) + ';">' +  cfhs.getTitle(this.y)+ ',</span></b>' + 
                ' <br> Rank: <b>' + (this.point as any).rank + '</b>,' +
                '  <br> <b> <a href="' + 'https://codeforces.com/contest/' + (this.point as any).contestId + '">' + (this.point as any).contestName + '</a></b>,' + 
                ' <br> Date: ' + moment(this.x).format('DD MMM YYYY') +     
                ' </div>';
          }

      },
      xAxis: {
        type: 'datetime',
        labels: {
          // format: '{value:%Y-%b-%e}'
          format: '{value:%b, %Y}'
          
        },
      },
      plotOptions: {
        series: {
            color: 'black'
        }
      },
      yAxis: {
        plotBands: [
          {
            color: '#a00',
            from: 3000,
            to: 5000
          },
          {
            color: '#f33',
            from: 2600,
            to: 2999
          },
          {
            color: '#f77',
            from: 2400,
            to: 2599
          },
          {
            color: '#ffbb55',
            from: 2300,
            to: 2399
          },
          {
            color: '#ffcc88',
            from: 2100,
            to: 2299
          },
          {
            color: '#f8f',
            from: 1900,
            to: 2099
          },
          {
            color: '#aaf',
            from: 1600,
            to: 1899
          },
          {
            color: '#77ddbb', // 77ddbb
            from: 1400,
            to: 1599
          },
          {
            color: '#7fc', // 7fc
            from: 1200,
            to: 1399
          },
          {
            color: '#ccc',
            from: 0,
            to: 1199
          }
        ]
      },
      series: [
        {
          type: 'line',
          name: 'Rating',
          data: this.userData
        }
      ]
    });
  }
  public renderProblemsChart() {
    this.chartProblemData = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Problems graph'
      },
      credits: {
        enabled: false
      },
      series: [
        {
           type: 'line',
          name: 'date',
          data: [1, 2, 3]
        }
      ]
    });
  }

  onClickSearch(username: any) {
    console.log(username);
    this.userData = [];
    this.dateLabelsRatingChart = [];
    this.url = 'https://codeforces.com/api/user.rating?handle=';
    this.url = this.url + username + '&lang=en';
    console.log(this.url);
    this.userDetailsService.getuserDetails(this.url)
      .subscribe((data) => {
        console.log(data);
        data['result'].forEach((contest: any) => {
          this.userData.push({
            contestId: contest['contestId'],
            contestName: contest['contestName'],
            handle: contest['handle'],
            y: contest['newRating'],
            oldRating: contest['oldRating'],
            rank: contest['rank'],
            name: (contest['ratingUpdateTimeSeconds']*1000),
            x: (contest['ratingUpdateTimeSeconds']*1000)
          });
          // this.dateLabelsRatingChart.push((contest['ratingUpdateTimeSeconds']*1000));
        });
        // this.userData = data;
        console.log(this.userData);
        this.renderRatingChart();
        this.renderProblemsChart();
      });
  }
}

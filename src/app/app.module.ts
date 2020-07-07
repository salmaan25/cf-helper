import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { HighchartsChartComponent } from 'highcharts-angular';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
// import * as Highcharts from 'highcharts';
import { UserDetailsService } from './user-details.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { AgGridModule } from 'ag-grid-angular';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import { from } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TabOneContentComponent } from './tab-one-content/tab-one-content.component';
import { TabTwoContentComponent } from './tab-two-content/tab-two-content.component';
import { ChartModule } from 'angular-highcharts';
import { CfHelperService } from './cf-helper.service';

@NgModule({
  declarations: [
    AppComponent,
    TabOneContentComponent,
    TabTwoContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    // HighchartsChartModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatMenuModule,
    AgGridModule.withComponents([]),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatChipsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTooltipModule,
    // HighchartsChartComponent,
    ChartModule,
  ],
  providers: [UserDetailsService, CfHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

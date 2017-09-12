import {Component, OnInit} from '@angular/core';
import { LineChartDemo } from './linechartdemo';

import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api


 
@Component({
  selector: 'app-root',
template: `
 <div>
  <h1>
  hello
    {{title}} charts!
  </h1>
  </div>
  
  <p-chart type="line" [data]="data"></p-chart> 
  `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple line';
    data: any;
    
    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
       
    }
  

   
}

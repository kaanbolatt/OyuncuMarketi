import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log("🚀 ~ file: dashboard.component.ts:16 ~ DashboardComponent ~ this.commonService.getAllProducts ~ this.products:", this.products)
    });
  }

}

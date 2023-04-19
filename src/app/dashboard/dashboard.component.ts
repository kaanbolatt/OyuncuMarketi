import { Component, OnInit } from '@angular/core';
import { Products } from 'app/interfaces/product.interface';
import { CommonService } from 'app/shared/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Products[] = [];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonHelper } from 'app/components/helpers/common-helper';
import { Products } from 'app/interfaces/product.interface';
import { CommonService } from 'app/shared/services/common.service';
import { Router } from '@angular/router';
import { Category } from 'app/interfaces/categories.interface';
import { ProductFilterDto } from 'app/components/models/product-filter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Products[] = [];
  categories: Category[] = [];
  productFilter = new ProductFilterDto();
  textSearch = "";
  constructor(private commonService: CommonService, private ch: CommonHelper, private router: Router) { }

  ngOnInit() {
    if (!this.ch.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.getProductsFiltered(null);

    this.commonService.getAllCategories().subscribe((res) => {
      this.categories = res;
    })
  }

  gotoDetail(prodId: number) {
    this.commonService.setProductId(prodId);
    this.router.navigate(['/product-detail']);

  }

  getProductsFiltered(categorieId: number, searchText?: string) {
    if (categorieId != 1) {
      this.productFilter.categoryId = categorieId;
    } else {
      this.productFilter.categoryId = null;
    }
    if (searchText != undefined && searchText != null && searchText.length > 0) {
      this.productFilter.generalSearch = searchText;
    } else {
      this.productFilter.generalSearch = null;
    }

    this.commonService.getAllProducts(this.productFilter).subscribe((res) => {
      this.products = res;
    });

  }

  findProduct() {
    this.getProductsFiltered(this.productFilter.categoryId, this.textSearch);
  }

}

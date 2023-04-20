import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ProductFilterDto } from 'app/components/models/product-filter';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseURL = environment.apiUrl
  prodId: number;
  constructor(private http: HttpClient) { }

  setProductId(prodId) {
    this.prodId = prodId;
  }

  getProductId() {
    return this.prodId;
  }
  getAllProducts(model: ProductFilterDto): Observable<any> {
    if (model.categoryId > 1 && (model.generalSearch == null || model.generalSearch == undefined)) {
      return this.http.get(this.baseURL + 'GetAllProducts?CategoryId=' + model.categoryId)
    } else if (model.categoryId > 0 && model.generalSearch != undefined && model.generalSearch != null) {
      return this.http.get(this.baseURL + 'GetAllProducts?CategoryId=' + model.categoryId + '&GeneralSearch=' + model.generalSearch);
    } else if (model.generalSearch != undefined && model.generalSearch != null) {
      return this.http.get(this.baseURL + 'GetAllProducts?GeneralSearch=' + model.generalSearch)
    }
    return this.http.get(this.baseURL + 'GetAllProducts')
  }

  getAllCategories(): Observable<any> {
    return this.http.get(this.baseURL + 'GetAllCategories')
  }

  getProductById(id): Observable<any> {
    return this.http.get(this.baseURL + 'GetProductById?id=' + id)
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}Login`, data)
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data)
  }

  updateData(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/update/${id}`, data)
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`)
  }
}
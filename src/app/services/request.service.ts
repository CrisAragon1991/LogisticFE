import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  private url = 'https://localhost:32776/api';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    return this.httpClient.post(`${this.url}/User/login`, {email, password});
  }

  signUp(body: any) {
    return this.httpClient.post(`${this.url}/User/sign-up`, body)
  }

  getDeliveryItems() {
    return this.httpClient.get(`${this.url}/DeliverySchedule`, {headers: this.getHeaders()} );
  }

  getHeaders() {
    let userString = localStorage.getItem('user');
    let token = JSON.parse(userString+'').token

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
   });
   return reqHeader;
  }

  registerLocation(location: { name: string; locationType: number; }) {
    return this.httpClient.post(`${this.url}/Location`, location, {headers: this.getHeaders()})
  }

  registerProductCategory(category: { name: string; }) {
    return this.httpClient.post(`${this.url}/ProductCategory`, category, {headers: this.getHeaders()})
  }

  getUsers() {
    return this.httpClient.get(`${this.url}/User`, {headers: this.getHeaders()})
  }
  getLocations() {
    return this.httpClient.get(`${this.url}/Location`, {headers: this.getHeaders()})
  }
  getProductsCategory() {
    return this.httpClient.get(`${this.url}/ProductCategory`, {headers: this.getHeaders()})
  }

  registerDeliverySchedule(body: any) {
    return this.httpClient.post(`${this.url}/DeliverySchedule`, body, {headers: this.getHeaders()})
  }

  getDeliveryItemById(routeId: string) {
    return this.httpClient.get(`${this.url}/DeliverySchedule/${routeId}`, {headers: this.getHeaders()})
  }

  deleteDeliveryItem(id: number) {
    return this.httpClient.delete(`${this.url}/DeliverySchedule/${id}`, {headers: this.getHeaders()})
  }
}

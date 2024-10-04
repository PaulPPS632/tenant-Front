import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SubCategoriaResponse } from "../models/subcategoria";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SubcategoriaService {
  
    apiUrl: string = environment.API_URL+"/inventory/subcategoria";
  
    constructor(private http: HttpClient) { }

    headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });
  
    getSubCategorias(): Observable<SubCategoriaResponse[]> {
        return this.http.get<SubCategoriaResponse[]>(this.apiUrl, {
            headers: this.headers,
        });
    }
  
    deleteSubCategoria(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`, {
        headers: this.headers,
        });
    }
}
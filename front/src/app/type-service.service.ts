import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

  constructor(private http: HttpClient) { }

  createType(type:Object):Observable<Object>{
    return this.http.post("http://localhost:8080/types", type)
  }

  getAllType():Observable<any>{
    return this.http.get("http://localhost:8080/types");
  }
  deleteProd(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/types/"+id);
  }
}

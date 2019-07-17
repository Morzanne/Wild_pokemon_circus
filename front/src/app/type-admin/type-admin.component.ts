import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { TypeServiceService } from '../type-service.service'

@Component({
  selector: 'app-type-admin',
  templateUrl: './type-admin.component.html',
  styleUrls: ['./type-admin.component.css']
})
export class TypeAdminComponent implements OnInit {

  types:Type[]
  type: Type = new Type()

  constructor(private http: TypeServiceService) { }

  ngOnInit() {
    this.http.getAllType().subscribe(
      response => {this.types = response}
    )
  }
  refreshTypeList() {
    this.http.getAllType().subscribe(
      response => { this.types = response }
    )
  }

  save() {
    this.http.createType(this.type)
      .subscribe(data => data, error => error);
    this.type = new Type()
  }

  delete(id:number){
    this.http.deleteProd(id).subscribe(
      data=>{
        this.refreshTypeList()
      }
    )
  }

  onSubmit(){
    this.save()
  }

}

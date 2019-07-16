import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { TypeServiceService } from '../type-service.service'

@Component({
  selector: 'app-create-prod',
  templateUrl: './create-prod.component.html',
  styleUrls: ['./create-prod.component.css']
})
export class CreateProdComponent implements OnInit {

  type: Type = new Type()

  constructor(private http: TypeServiceService) { }

  ngOnInit() {
  }

  save() {
    this.http.createType(this.type)
      .subscribe(data => data, error => error);
    this.type = new Type()
  }

  onSubmit(){
    this.save()
  }

}

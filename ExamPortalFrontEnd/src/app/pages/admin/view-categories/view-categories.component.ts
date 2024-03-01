import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { error } from 'console';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-categories',
  standalone: true,
  imports: [MatListModule,MatIconModule,MatCardModule,RouterModule,CommonModule,MatDividerModule,MatButtonModule],
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit {

  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    
    this.categoryService.categories().subscribe((data:any)=>{

      this.categories = data;
      console.log(this.categories);
    },
    (error)=>{

      Swal.fire('Error !!','Error in loading data','error')
    })
  }

  categories = [

    {
      cid:23,
      title:"Program",
      description:"This is programing language"
    }

  ]

}

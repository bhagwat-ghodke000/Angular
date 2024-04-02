import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [MatListModule,MatIconModule,MatCardModule,RouterModule,CommonModule],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css'
})
export class UserSidebarComponent implements OnInit {

  categories = [

    {
      categoryId:23,
      title:"Program",
      description:"This is programing language"
    }

  ]

  constructor(private category:CategoryService){}


  ngOnInit(): void {
  
    this.category.categories().subscribe(
      (data:any)=>{

        this.categories = data;
      },
      (error)=>{

        Swal.fire('Error !!','Error in category load','error');
      }
    )
  }

}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { NavebarComponent } from './components/navebar/navebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports:      [ BrowserModule,MatToolbarModule,MatIconModule,MatInputModule,MatFormFieldModule,FormsModule,HttpClientModule,MatSnackBarModule,MatCardModule ],
  declarations: [  ],
  bootstrap:    [  ]
})
export class AppModule { }
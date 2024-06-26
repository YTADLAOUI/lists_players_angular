import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerService } from './player.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Tab1Service } from '../tab1/tab1.service';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    
  ],
  exports: [PlayerComponent],
  providers:[PlayerService]
})
export class PlayerModule { }

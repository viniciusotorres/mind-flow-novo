import { MindFlowService } from './../../../services/mind-flow.service';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';
import { EMPTY, map, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-mind-extendido',
  standalone: true,
  imports: [MatDialogModule,MatButtonToggleModule, MatCardModule, AsyncPipe],
  templateUrl: './mind-extendido.component.html',
  styleUrl: './mind-extendido.component.css'
})
export class MindExtendidoComponent implements OnInit{
  mind: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.mind = data;
  }
  ngOnInit() {
  }
}

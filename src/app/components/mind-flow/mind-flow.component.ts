import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormularioMindComponent } from './formulario-mind/formulario-mind.component';
import { MindFlowService } from '../../services/mind-flow.service';
import { Observable, combineLatest, filter, map, tap } from 'rxjs';
import { Mind } from '../../models/mind.model';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { response } from 'express';
import { MindExtendidoComponent } from './mind-extendido/mind-extendido.component';

@Component({
  selector: 'app-mind-flow',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, AsyncPipe, MatCardModule, CdkDropList, CdkDrag,MatButtonToggleModule],
  templateUrl: './mind-flow.component.html',
  styleUrl: './mind-flow.component.css'
})


export class MindFlowComponent {

  minds$ = new Observable<Mind[]>();

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialog: MatDialog, private mindFlowService: MindFlowService, private _snackBar: MatSnackBar) {
    this.minds$ = this.mindFlowService.obterMinds();

  }

  concluirMindFlow(id: string){
    this.mindFlowService.concluirMind(id, 'situacao', 'Concluida')
    .pipe(
      tap(() =>
      this._snackBar.open('MindFlow Concluido!', 'Fechar', {
        duration:  20 * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      }))
    )
    .subscribe(response => {
      console.log('Sucesso ao concluir MindFlow', response);
      this.obterMindFlow()
    }, error => {
      console.log('Erro ao persistir atributo:', error);
    })
  }

  voltarMindFlow(id: string){
    this.mindFlowService.concluirMind(id, 'situacao', 'A fazer')
    .pipe(
      tap(() =>
      this._snackBar.open('MindFlow Reiniciado!', 'Fechar', {
        duration:  20 * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      }))
    )
    .subscribe(response => {
      console.log('MindFlow reiniciado!', response);
      this.obterMindFlow()
    }, error => {
      console.log('Erro ao reiniciar MindFlow', error)
    } )
  }

  onCardDropped(event: CdkDragDrop<Mind[]>): void {
    this.minds$.pipe(
      map(minds => {
        const previousIndex = minds.findIndex(mind => mind === event.item.data);
        moveItemInArray(minds, previousIndex, event.currentIndex);
      })
    ).subscribe();
  }


  obterMindFlow(){
    this.minds$ = this.mindFlowService.obterMinds();
  }

  abrirMind(){
    const dialogRef = this.dialog.open(FormularioMindComponent);
  }

  extenderMind(mind: Mind): void {
    const dialogRef = this.dialog.open(MindExtendidoComponent, {
      data: mind,
    });
  }

  deletar(id: string){
    this.mindFlowService.deletarMind(id)
    .pipe(
      tap(()=>
      this._snackBar.open('MindFlow Deletado!', 'Fechar', {
        duration:  20 * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      }))
    )
    .subscribe(()=>
    this.obterMindFlow())
  }

}

import { Mind } from './../../../models/mind.model';
import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MindFlowService } from '../../../services/mind-flow.service';
import { Observable, tap } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-mind',
  standalone: true,
  imports: [MatInputModule,FormsModule, MatFormFieldModule, ReactiveFormsModule,MatButtonModule,MatDialogModule],
  templateUrl: './formulario-mind.component.html',
  styleUrl: './formulario-mind.component.css'
})
export class FormularioMindComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private mindFlowService: MindFlowService,private _snackBar: MatSnackBar){}

  mindsFlow$ = new Observable<Mind[]>();

  atividadeMind = new FormControl('', Validators.required)
  descricaoMind = new FormControl('', Validators.required)
  id = ''
  situacao = 'A fazer'

  adicionarMindFlow(){
    this.mindFlowService.adicionarMind({
      atividadeMind: this.atividadeMind.value || '',
      descricaoMind: this.descricaoMind.value || '',
      situacao: this.situacao || 'A fazer'
    })
    .subscribe(() =>
    this._snackBar.open('MindFlowAdicionado', "Parabéns!", {
      duration: 20 * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,}));

      window.location.reload()
  }

  obterMindsFlow(){
  this.mindsFlow$ = this.mindFlowService.obterMinds();
  }
}

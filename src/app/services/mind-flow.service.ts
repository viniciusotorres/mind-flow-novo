import { Mind } from './../models/mind.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MindFlowService {

  url = environment.api;

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  obterMinds() {
    return this.httpClient.get<Mind[]>(this.url);
  }

  obterPorId(id: string){
    return this.httpClient.get(this.url + `/${id}`)
  }

  adicionarMind(mind: Mind){
    return this.httpClient.post<Mind>(this.url, mind)
  }

  deletarMind(id: string){
    return this.httpClient.delete<void>(this.url + `/${id}`)
  }

  editarMind(mind: Mind){
    return this.httpClient.put<Mind>(this.url, mind)
  }

  concluirMind(id: string, situacao: string, valor: string){
    const body = {[situacao]: valor}

    return this.httpClient.patch(this.url + `/${id}`, body)
  }

}

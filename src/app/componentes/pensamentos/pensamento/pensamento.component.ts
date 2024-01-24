import { Component, Input } from '@angular/core';
import { ListarPensamentoComponent } from '../listar-pensamento/listar-pensamento.component';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [
    ListarPensamentoComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}

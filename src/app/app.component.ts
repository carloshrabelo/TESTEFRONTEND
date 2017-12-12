import { Component } from '@angular/core';
import { ClienteService } from './sevices/clientes-service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  clientes = [];
  pontos = {};
  clienteSelecionado;

  constructor(private clienteService: ClienteService) {
  }

  public selectClient(cliente?){
    this.clienteSelecionado = undefined;
    this.pontos = {};

    if(cliente){
      this.clienteService.getCliente(cliente).then(response => this.clienteSelecionado = response )   
      this.clienteService.getPontos(cliente).then(response => this.validatePoints(response))   
    }
  }

  protected validatePoints(pontos){
    this.pontos = pontos;
    this.pontos['saldo'] = pontos.total - pontos.utilizados - pontos.expirados
  }

  ngOnInit(): void {
    this.clienteService.getClientes().then(response => this.clientes = response );
  }
}

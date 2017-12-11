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
  clienteSelecionado;

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.clienteService.getClientes().then(response => this.clientes = response );
  }
}

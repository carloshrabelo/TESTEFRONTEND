import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BigNumberComponent } from './components/big-number/big-number.component';
import { AdicionarNotaComponent } from './modules/adicionar-nota/adicionar-nota.component';
import { CadastrarNotasComponent } from './modules/cadastrar-notas/cadastrar-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    BigNumberComponent,
    AdicionarNotaComponent,
    CadastrarNotasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

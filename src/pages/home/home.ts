import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NewEntryPage } from '../new-entry/new-entry';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
    public sqlite: SQLite) {

  }

  addEntry() {
    console.log("Adicionar Lançamento");
    this.navCtrl.push(NewEntryPage);
  }

  testeDb() {
    console.log('Início do Teste DB');

    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      console.log('BD criado');
      
      // Executa o comando create table
      db.sqlBatch([
        ["CREATE TABLE entries ( id INTEGER PRIMARY KEY AUTOINCREMENT, amount DECIMAL, description TEXT)"]
      ]);
      .then(() => {
        console.log('tabelas criadas');
      })
      .catch((e) => {
        console.error('erro ao executar o comando sql', JSON.stringify(e));
      });      

    })
    .catch(() => { 
      console.error('Error ao criar o BD.'); 
    });
  }
}

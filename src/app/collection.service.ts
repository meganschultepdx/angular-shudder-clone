import { Injectable } from '@angular/core';
import { Collection } from './collection.model';
import { Horror101 } from './horror101.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class CollectionService {
  collections: FirebaseListObservable<any[]>;
  horror101s: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.collections = database.list('collections');
    this.horror101s = database.list('horror101s');
  }


  getCollections() {
    return this.collections;
  }

  getHorror101s() {
    return this.getHorror101s;
  }

}


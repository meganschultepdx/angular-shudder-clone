import { Injectable } from '@angular/core';
import { Collection } from './collection.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class CollectionService {
  collections: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.collections = database.list('collections');
  }


  getCollections() {
    return this.collections;
  }

}


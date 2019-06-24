import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection.model';
import { Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
  providers: [CollectionService]
})

export class CollectionsComponent implements OnInit {
  collections: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private collectionService: CollectionService) { }

  ngOnInit() {
    this.collections = this.collectionService.getCollections();
  }
}
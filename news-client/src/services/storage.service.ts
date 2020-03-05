import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  public data: any;

  constructor() {

  }

  storeData(dataToStore: any) {
    this.data = dataToStore;
  }

  retrieveData(): any {
    return this.data;
  }

}

import { DOCUMENT } from '@angular/common';
import { Inject, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public _ls: Storage | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this._ls = document.defaultView?.localStorage;
  }

  public get(key: string): string | undefined {
    const _key = key;
    // Takes a string or null.
    let storage_item: string | null = null;

    // Check to see if the local storage is available.
    if (this._ls !== undefined) {
      // Retrieve the key that key that is passes through the parameter.
      storage_item = this._ls.getItem(_key);

      // If null then we will make sure that it returns as undefined instead.
      // Doing this could reduce confusion through out the app if we use the google syntax.
      if (storage_item !== null) {
        storage_item = JSON.parse(storage_item);
      } else {
        storage_item = null;
      }
    }

    return (storage_item != null) ? storage_item : undefined;
  }

  public set(key: string, value: string): void {
    const _key = key;
    const _value = value;

    if (this._ls !== undefined)
      this._ls.setItem(_key, _value);

  }

  public remove(key_name: string): void {
    const _key = key_name;
    if (this._ls !== undefined)
      this._ls.removeItem(_key);
  }

  public clear(): void {
    if (this._ls !== undefined)
      this._ls.clear();
  }
}

import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private _http: HttpClient = inject(HttpClient);
  private _lss: LocalStorageService = inject(LocalStorageService);

  headers: any = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
    'content-type': 'application/json',
  };

  constructor() { }

  public create_campaign(data: any): Observable<any> {
    let _res: Observable<Object> = this._http.post(
      environment.campaign_url,
      data,
      { headers: this.headers }
    )
    return _res;
  }
}

import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  public get_dms_campaign(dm_id: string): Observable<any> {
    const params = new HttpParams().set("dm_id", dm_id);

    let _res: Observable<Object> = this._http.get(
      environment.campaign_url,
      {
        headers: this.headers,
        params: params
      }
    )
    return _res;
  }

  // For Specific Campaign:
  public get_campaign(id: string) {
    // const params = new HttpParams().set("id", id);

    let _res: Observable<Object> = this._http.get(
      environment.campaign_url + id,
      {
        headers: this.headers,
        // params: params
      }
    )

    return _res;
  }
}

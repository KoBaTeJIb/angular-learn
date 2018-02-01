import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
//import {Response} from '@angular/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
    getUser(username: string): Observable <any> {
    return this.http.get('https://api.github.com/users/$(username)')
      //.map((response: Response) => response.json())
    }

}

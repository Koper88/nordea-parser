import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TextParserService {

  private apiXMLUrl = 'http://localhost/NordeaParserWebAPI/api/TextParser/GetXML';
  private apiCSVUrl = 'http://localhost/NordeaParserWebAPI/api/TextParser/GetCSV';

  constructor(private http: HttpClient) { }

  getParsedStringXML(inputText: string): Observable<string> {
    const url = `${this.apiXMLUrl}/${inputText}`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      tap(xx => console.log(`getParsedStringXML success!`)),
      catchError(err => {
        console.log(`getParsedStringXML error: ${err}`);
        return of(err.statusText);
      })
    );
  }

  getParsedStringCSV(inputText: string): Observable<string> {
    const url = `${this.apiCSVUrl}/${inputText}`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      tap(xx => console.log(`getParsedStringCSV success!`)),
      catchError(err => {
        console.log(`getParsedStringCSV error: ${err}`);
        return of(err.statusText);
      })
    );
  }
}

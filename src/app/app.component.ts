import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  template: `
    <h1>Example app</h1>
    <pre><code>{{ res | async | json }}</code></pre>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  private http = inject(HttpClient);

  res = this.http.get('/api/hello');
}


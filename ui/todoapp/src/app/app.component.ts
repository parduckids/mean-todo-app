import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoapp';
  readonly APIUrl = 'http://localhost:5038/api/todoapp/';

  constructor(private http: HttpClient) {}
  notes: any = [];

  refreshNotes() {
    this.http.get(this.APIUrl + 'GetNotes').subscribe((data) => {
      this.notes = data;
    });
  }
  ngOnInit() {
    this.refreshNotes();
  }

  addNotes() {
    var inputElement = <HTMLInputElement>document.getElementById('newNotes');
    var newNotes = inputElement.value;
    var formData = new FormData();
    if (newNotes != '') {
      formData.append('newNotes', newNotes);
      this.http.post(this.APIUrl + 'AddNotes', formData).subscribe((data) => {
        alert(data);
        this.refreshNotes();
      });
    } else {
      alert('There should be something to do!');
    }

    inputElement.value = '';
  }
  deleteNotes(id: any) {
    this.http.delete(this.APIUrl + 'DeleteNotes?id=' + id).subscribe((data) => {
      alert(data);
      this.refreshNotes();
    });
  }
}

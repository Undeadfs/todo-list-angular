import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-list-angular';
  todos: any[] = [];

  ngOnInit() {
    const savedData = localStorage.getItem('todos');
    if (savedData == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(savedData);

    }
  }

  addItemFunc(inpt: string) {
    if (inpt) {
      this.todos.push(inpt);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
  deleteItemFunc(index: number) {
    if (index >= 0) {
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
  clearLSFunc() {
    window.localStorage.clear();
  }
}

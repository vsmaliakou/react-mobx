import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 1, title: 'Сходи в магазин', completed: false },
    { id: 2, title: 'Посмотри ulbi tv', completed: false },
    { id: 3, title: 'Поставь лайк', completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }

  fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = [...this.todos, ...json];
      })
  }
}

export default new Todo();

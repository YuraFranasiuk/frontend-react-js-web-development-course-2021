class Api {
  constructor() {
    this.url = "https://api-nodejs-todolist.herokuapp.com/";
    this.headers = { "Content-Type": "application/json" };
  }

  async register(name, email, password, age) {
    const res = await fetch(`${this.url}user/register`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "age": age
      })
    });

    const info = await res.json();
    this.headers.Authorization = `Bearer ${info.token}`;
  }

  async login(email, password) {
    const res = await fetch(`${this.url}user/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    });

    const info = await res.json();
    this.headers.Authorization = `Bearer ${info.token}`;
  }

  async fetchAllTodoItems() {
    const res = await fetch(`${this.url}task`, {
      headers: this.headers
    });

    const info = await res.json();
    return info.data;
  }

  async addTodoItem(todoDescription) {
    const res = await fetch(`${this.url}task`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        "description": todoDescription
      })
    });

    const info = await res.json();
    return {
      "_id": info.data._id,
      "description": info.data.description,
      "completed": info.data.completed
    };
  }

  async removeTodoItem(id) {
    await fetch(`${this.url}task/${id}`, {
      method: "DELETE",
      headers: this.headers
    });
  }

  async updateTodoItem(id, completed) {
    const res = await fetch(`${this.url}task/${id}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({
        "completed": completed
      })
    });

    const info = await res.json();
    return {
      "_id": info.data._id,
      "description": info.data.description,
      "completed": info.data.completed
    };
  }
}

export default new Api();

function generateId() {
    return '_' + Math.random().toString(36).substring(1, 10);
}


class TodoItem {
    constructor(name, checked = false) {
        this.id = generateId();
        this.name = name;
        this.checked = checked;
    }

    get checked() {
        return this._checked;
    }

    set checked(state) {
        if (typeof state !== 'boolean') {
            throw 'state must be a type of "boolean"';
        }

        this._checked = state;
    }
}


class TodoList {
    constructor(name, items = []) {
        this.id = generateId();
        this.name = name;
        this.items = [];

        items.forEach((item) => {
            this.addItem(item);
        });
    }

    addItem(item) {
        if (!item instanceof TodoItem) {
            throw 'item must be a instance of "TodoItem"';
        }

        this.items.push(item);
    }

    removeItemById(id) {
        this.items = this.items.filter(
            (item) => item.id !== id
        );
    }

    getItemById(id) {
        return this.items.find(
            (item) => item.id === id
        );
    }
}


const todoList = new TodoList('Todo');

for (let i = 1; i <= 4; i++) {
    todoList.addItem(new TodoItem(`Item ${i}`));
}

console.log(todoList.items);


todoList.items[2].checked = true;

console.log(todoList.items);


todoList.removeItemById(todoList.items[0].id);
todoList.removeItemById(todoList.items[0].id);

console.log(todoList.items);

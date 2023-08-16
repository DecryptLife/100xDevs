interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

type UpdateTodoInput = Partial<Todo>;

function updateTodo(id: number, newProp: UpdateTodoInput) {}

updateTodo(1, {
  description: "new description",
});

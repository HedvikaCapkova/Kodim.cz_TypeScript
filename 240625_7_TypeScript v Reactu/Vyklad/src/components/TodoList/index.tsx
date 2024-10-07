import { useEffect, useState } from 'react';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[] | 'loading'>('loading');

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data: Todo[] = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  if (todos === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              readOnly
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

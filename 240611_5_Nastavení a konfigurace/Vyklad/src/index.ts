import './styles.css';

console.log('funguju! 🎉');

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const data = (await response.json()) as Todo[];
// const data: Todo[] = (await response.json());

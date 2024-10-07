import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './styles.css';

// const name: string = "John Doe";
// const price: number = 100;

// const isEmpty: (str: string) => boolean;

// const isEmpty = (str: string): boolean => {
//   return str.length === 0;
// };

// const sayHello = (): void => {
//   console.log('Hello!');
// };

// const setTimeout = (callback: () => void, ms: number): void => {
//   // ...
// };

createRoot(
  document.getElementById('app')!
).render(<App />);

import { IconButton } from '../IconButton';
import { Product } from '../Product';
import { Sidebar } from '../Sidebar';
import { TodoList } from '../TodoList';
import './styles.css';

export const App = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('Button clicked!');
  };
  return (
    <div className='layout'>
      <h1>Webová aplikace - React + TypeScript</h1>
      <Sidebar>
        <h1>Todo App</h1>
        <nav>
          <ul>
            <li>
              <a href='#'>All</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Completed</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Uncompleted</a>
            </li>
          </ul>
        </nav>
      </Sidebar>
      <Product
        name={''}
        price={100}
      />
      <IconButton
        iconUrl='/icon.png'
        label='Click me'
        onAction={handleClick}
      />
      <TodoList />
    </div>
  );
};

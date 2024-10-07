import { ReactNode } from 'react';
import 'styles.css';

interface Props {
  children: ReactNode;
}

export const Sidebar = ({ children }: Props): JSX.Element => {
  return <aside className='sidebar'>{children}</aside>;
};

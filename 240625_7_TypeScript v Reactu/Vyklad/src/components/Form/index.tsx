import { useState, ChangeEvent } from 'react';

export const Form = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <input
      type='text'
      value={value}
      onChange={handleChange}
    />
  );
};

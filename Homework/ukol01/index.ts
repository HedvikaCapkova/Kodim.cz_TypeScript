const average = (x: number, y: number): number => (x + y) / 2;

const isEmpty = (input: string): boolean => input === '';

const filterNonDigits = (value: string): string => {
  return value.replace(/\D/g, '').slice(0, 16);
};

const startsWith = (value: string, min: number, max: number): boolean => {
  const digits: number = min.toString().length;
  const start: number = parseInt(value.slice(0, digits));
  return start >= min && start <= max;
};

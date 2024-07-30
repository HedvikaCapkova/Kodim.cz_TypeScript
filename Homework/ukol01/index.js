const average = (x, y) => (x + y) / 2;
const isEmpty = (input) => input === '';
const filterNonDigits = (value) => {
    return value.replace(/\D/g, '').slice(0, 16);
};
const startsWith = (value, min, max) => {
    const digits = min.toString().length;
    const start = parseInt(value.slice(0, digits));
    return start >= min && start <= max;
};

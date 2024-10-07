interface Props {
    name: string;
    price: number;
}

export const Product = ({ name, price }: Props): JSX.Element => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{price} Kč</p>
    </div>
  );
};
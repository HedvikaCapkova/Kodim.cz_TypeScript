interface Props {
  iconUrl: string;
  label: string;
  onAction: () => void;
}

export const IconButton = ({ iconUrl, label, onAction }: Props): JSX.Element => {
  return (
    <button className="icon-btn" onClick={onAction}>
      <img src={iconUrl} alt={label} />
      <span>{label}</span>
    </button>
  );
};




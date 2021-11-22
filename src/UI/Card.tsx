interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;

type Props = {
  text: string;
}

const Button: React.FC<Props> = ({ text = '' }) => {
  console.log('Button render');
  console.log('Button render');
  return (
    <button>{text}</button>
  );
}

export default Button;
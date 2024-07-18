type Props = {
  text: string;
}

const Button: React.FC<Props> = ({ text = '' }) => {
  console.log('Button render1');
  console.log('Button render2');
  console.log('Button render3');
  return (
    <button>{text}</button>
  );
}

export default Button;
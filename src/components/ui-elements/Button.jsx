const Button = ({ text = 'Button', type = 'button', styles }) => {
  return (
    <button type={type} className={`flex-none py-4 px-6 text-base rounded-full ${styles}`}>
      {text}
    </button>
  );
};

export default Button;

const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className='flex-none py-4 px-6 text-base font-semibold bg-[#0061ff] text-white rounded-full'>
      {text}
    </button>
  );
};

export default Button;

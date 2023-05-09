import Button from './Button';

//!!! Має ще два стани: "успішно" і "помилка"
const SubscribeForm = () => {
  return (
    <form action='' className='relative flex items-center'>
      <input
        type='email'
        className='pr-36 pl-7 min-h-[76px] w-full mb-0 border border-solid border-[#e4e4ed] rounded-full py-2 outline-none hover:border-sky-600 focus:border-sky-600 '
        placeholder='Subscribe to our newsletter'
        required
      />
      <Button
        type='submit'
        text='Subscribe'
        styles='bg-[#0061ff] text-[#fff] font-medium absolute right-3'
      />
    </form>
  );
};

export default SubscribeForm;

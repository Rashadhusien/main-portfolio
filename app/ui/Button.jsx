const Button = ({ children, style, rest }) => {
  return (
    <button
      {...rest}
      className={`${style}  duration-100 p-3 active:scale-95 capitalize text-center sm:w-44 text-base rounded-xl border-2  text-primary dark:text-primarylight `}
    >
      {children}
    </button>
  );
};

export default Button;

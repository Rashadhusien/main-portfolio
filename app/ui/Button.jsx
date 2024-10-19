const Button = (children) => {
  console.log(children);
  return (
    <button
    // {...rest}
    // className={`${style}  duration-500 p-3 capitalize text-center sm:w-44 text-base rounded-xl border-2  text-primary dark:text-primarylight `}
    >
      {children}
    </button>
  );
};

export default Button;

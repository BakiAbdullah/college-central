const Button = ({
  label,
  hover,
  fontSmall,
  disabled,
  onClickHandler,
  payload,
}) => {
  const handleClick = () => {
    if (typeof onClickHandler === "function") {
      onClickHandler(payload);
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
      disabled:opacity-40
        disabled:cursor-not-allowed
        shadow-sm bg-rosered text-white duration-300 rounded-md font-bold 
        ${hover ? "hover:bg-creamYellow hover:text-darkGray" : ""}
        ${fontSmall ? "text-xs px-5 py-2" : "lg:text-base px-6 py-2"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;

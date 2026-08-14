import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-bold transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#D4146A] text-white hover:bg-[#B01058]",
    outline:
      "border border-[#D4146A] text-[#D4146A] bg-white hover:bg-[#FFF1F6]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
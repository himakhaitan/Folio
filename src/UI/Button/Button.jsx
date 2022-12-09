import classes from "./Button.module.css";

const Button = ({ theme, label, href, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classes.button + " " + classes[`button_${theme}`]}
    >
      <a href={href}>{label}</a>
    </div>
  );
};

export default Button;

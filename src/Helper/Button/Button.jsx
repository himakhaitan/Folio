import classes from "./Button.module.css";

const Button = ({ theme, label, href }) => {
  return (
    <div className={classes.button + " " + classes[`button_${theme}`]}>
      <a href={href}>{label}</a>
    </div>
  );
};

export default Button;

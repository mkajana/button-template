import React from "react";
//we need to install react

//we create our typescript interface of Button,
//which has one prop named label and it is a string
interface ButtonProps {
  label: string;
}

//we create a functional component, it takes the props
//of button prop
const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

//we export it as a default module
export default Button;
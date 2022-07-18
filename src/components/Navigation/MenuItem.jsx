import { Link } from "react-router-dom";
import {
  Button,
} from "@chakra-ui/react";



const MenuItem = ({ children, isCurrentIndex, to = "/", ...rest }) => {
  return (
    <Button
      as={Link}
      to={to}
      variant={isCurrentIndex ? "outline" : "ghost"}
      textAlign="center"
      {...rest}
    >
      {children}
    </Button>
  );
};


export default MenuItem
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const MenuItem = ({ children, isCurrentIndex, to = "/", ...rest }) => {
  return (
    <Text
      textAlign="center"
      {...rest}
    >
      <Link to={to}
      >
        {children}
      </Link>
    </Text>
  );
};


export default MenuItem
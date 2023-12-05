import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Satriwittaya_School_logo.png/360px-Satriwittaya_School_logo.png" 
          alt="" 
          width="50"
          height="auto"
        />
      </chakra.a>
    </NextLink>
  );
};

export default Logo;

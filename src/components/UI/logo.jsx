import { chakra, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  const { colorMode } = useColorMode()
  return (
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" fontWeight="700">
        <img
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Satriwittaya_School_logo.png/360px-Satriwittaya_School_logo.png"
          // src="/logo-sw-white.png"
          src={colorMode === "light" ? "/logo-sw.png" : "/logo-sw-white.png"}
          alt="Satriwithaya School"
          width="40"
          height="auto"
        />
      </chakra.a>
    </NextLink>
  );
};

export default Logo;

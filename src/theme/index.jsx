import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      fontSize: "18px",
    },
    "li": {
      fontSize: "16px",
    },
  },
};

const fonts = {
  heading: "Poppins, -apple-system",
  body: "Poppins, -apple-system",
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'md',
        color: props.colorMode === 'dark' ? 'white' : 'blue.600',
        lineHeight: 'tall',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
      },
    }),
  },
  fonts,
});

export default theme;

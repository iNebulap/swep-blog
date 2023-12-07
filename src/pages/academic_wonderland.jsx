import {
  Box
  , Heading
  , Text
} from "@chakra-ui/react"

import { NextSeo } from "next-seo";

const AcademicWonderland = () => {
  const title = "Academic Wonderland";
  const description = "Let's explore the EP curriculum and subjects over 4 year-school (M.1-M.4)";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
      />

      <Box
        background="red.600"
        // opacity="0.5"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="45%"
        placeholder="blur"
        blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
        py="40"
        // w="100%" h="380px"
      //   // p={14}
        color='white'
      >
        <div className="banner-info">
          {title}
        </div>
        <div className="banner-info">
          {description}
        </div>
      </Box>
    </>
  );
};

export default AcademicWonderland;

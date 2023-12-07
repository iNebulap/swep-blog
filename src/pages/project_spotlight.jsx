import {
  Box
} from "@chakra-ui/react"

import { NextSeo } from "next-seo";

const ProjectSpotlight = () => {
  const title = "Project Spotlight";
  const description = "EP students are talented, explore our existing projects!";

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

export default ProjectSpotlight;

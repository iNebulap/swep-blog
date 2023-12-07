import {
  Box
  , Heading
  , Text
} from "@chakra-ui/react"

import { NextSeo } from "next-seo";
// import NextImage from "next/image";

import { seo, data } from "config";

const HistoryHaven = () => {
  const title = "History Haven";
  const description = "Let us tell you the story of Satriwithaya";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
      />
      <Box
        background={"red.600"}
        // opacity="0.5"
        bgImage="url('/สมเด็จย่า.jpg')"
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

      <Box
        className="py-3"
      >
        <Text py="1" fontSize='2xl'>
            Do you know that Somdet Ya, the Princess Mother was once educated at Satriwithaya School? I guess everyone knows that. However, the history of Satriwithaya is quite long. Let us briefly introduce you!
        </Text>
        <Text py="4">
          Satriwithaya school was established in 1900. It was first located at Wang Phra OngJao Alang Karn, Sam Yot District. At that time, Miss Lucy Dunlap was the Thai-American founder, also the first principal of Satriwithaya. Later, the school was located on Charoenkrung Street, behind the Wang Burapha Phirom. The Ministry of Education announced Satriwithaya to be a public school on 3 August 1901. In 1906, the school was named “Satriwithaya”. Finally, since 1939 Satriwithaya has been located at Dinso Road, near Democracy Monument, which is the present location.
        </Text>

        <Text py="1" fontSize='2xl'>
            Nowadays, Satriwithaya school has many programs available for students.
        </Text>

        <Box
          d={{ lg: "flex" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          // flexDir={{ lg: isOdd(index) == 1 && "row-reverse" }}
          key="afs"
        >
          <Box w={{ lg: "50%" }}>
            <Text py="1" fontSize='lg'>
                <strong>M.1 - M.3</strong>
            </Text>
            <Text py="4">
              <p>1. Enrichment Science Classroom (ESC)</p>
              <p>2. Gifted Math-Sci</p>
              <p>3. English Program</p>
              <p>4. Regular Program</p>
            </Text>
          </Box>

          <Box w={{ lg: "50%" }}>
            <Text py="1" fontSize='lg'>
                <strong>M.4 - M.6</strong>
            </Text>
            <Text py="4">
                <p>1. English Program (Sci-Math, Eng-Math)</p>
                <p>2. Gifted Math</p>
                <p>3. SMTE</p>
                <p>4. Regular program (Sci, Math, Language, Interdisciplinary)</p>
            </Text>
          </Box>
        </Box>

      </Box>
    </>
  );
};

export default HistoryHaven;

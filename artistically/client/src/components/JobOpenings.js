import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";

// Extend the theme to include custom colors, fonts, etc.
const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
        bg: "black", // optional: if you want the background to be black
      },
    },
  },
  components: {
    Accordion: {
      baseStyle: {
        container: {
          borderTopColor: "white",
        },
        button: {
          color: "white",
        },
        panel: {
          color: "white",
        },
        icon: {
          color: "white",
        },
      },
    },
    Box: {
      baseStyle: {
        bg: "whiteAlpha.200",
        borderColor: "white",
      },
    },
    Heading: {
      baseStyle: {
        color: "white",
      },
    },
    Text: {
      baseStyle: {
        color: "white",
      },
    },
    Button: {
      baseStyle: {
        color: "white",
        borderColor: "white",
        _hover: {
          bg: "whiteAlpha.300",
        },
      },
    },
  },
});

const JobOpenings = () => {
  const jobCategories = [
    {
      category: "Dance",
      jobs: [
        {
          title: "Ballet Instructor",
          company: "Royal Ballet Academy",
          prerequisites:
            "Previous teaching experience, knowledge of classical ballet techniques",
          expectations:
            "Conduct ballet classes, choreograph routines, provide feedback to students",
        },
        {
          title: "Contemporary Dance Performer",
          company: "City Contemporary Dance Company",
          prerequisites:
            "Strong background in contemporary dance styles, professional performance experience",
          expectations:
            "Perform in various venues, collaborate with choreographers and dancers",
        },
      ],
    },
    {
      category: "Music - Classical",
      jobs: [
        {
          title: "Orchestra Violinist",
          company: "Symphony Orchestra",
          prerequisites:
            "Proficient in violin, experience playing in orchestras, sight-reading skills",
          expectations:
            "Rehearse and perform classical music repertoire, attend orchestra meetings",
        },
        {
          title: "Opera Singer",
          company: "Opera House",
          prerequisites:
            "Vocal training in classical repertoire, experience in opera productions",
          expectations:
            "Prepare for roles, perform in operatic productions, work with directors and conductors",
        },
      ],
    },
    {
      category: "Music - Contemporary",
      jobs: [
        {
          title: "Rock Band Guitarist",
          company: "Rockstar Records",
          prerequisites:
            "Skilled guitarist, experience in rock or contemporary music bands",
          expectations:
            "Rehearse with band members, perform live shows, contribute to songwriting",
        },
        {
          title: "Pop Singer",
          company: "Music Studio X",
          prerequisites:
            "Vocal training in contemporary styles, experience in recording and live performances",
          expectations:
            "Record tracks, perform concerts, collaborate with songwriters and producers",
        },
      ],
    },
    {
      category: "Visual Art",
      jobs: [
        {
          title: "Gallery Curator",
          company: "Art Gallery ABC",
          prerequisites:
            "Degree in Art History or related field, curatorial experience",
          expectations:
            "Organize exhibitions, select artworks, promote gallery events",
        },
        {
          title: "Street Mural Artist",
          company: "Community Arts Foundation",
          prerequisites:
            "Experience in large-scale mural painting, portfolio of previous works",
          expectations:
            "Design and paint murals, collaborate with community stakeholders",
        },
      ],
    },
    {
      category: "Theatre",
      jobs: [
        {
          title: "Stage Director",
          company: "City Theatre Company",
          prerequisites:
            "Experience directing theatrical productions, knowledge of stagecraft",
          expectations:
            "Cast actors, plan rehearsals, oversee production elements",
        },
        {
          title: "Costume Designer",
          company: "Costume Studio Y",
          prerequisites:
            "Background in fashion design or costume construction, creativity",
          expectations:
            "Design costumes, source materials, collaborate with directors and actors",
        },
      ],
    },
    {
      category: "Film & Literature",
      jobs: [
        {
          title: "Screenwriter",
          company: "Film Studio Z",
          prerequisites:
            "Writing experience, understanding of screenplay format",
          expectations:
            "Develop scripts, collaborate with directors and producers",
        },
        {
          title: "Literary Editor",
          company: "Publishing House XYZ",
          prerequisites:
            "Editorial experience, knowledge of literary genres and styles",
          expectations:
            "Review manuscripts, provide feedback to authors, manage publication processes",
        },
      ],
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <div>
        <Heading
          fontFamily="Montserrat, sans-serif"
          fontWeight="bold"
          fontSize="50px"
          textAlign="center"
          mt={8}
          mb={4}
        >
          Job Openings
        </Heading>

        <Box p={6}>
          {jobCategories.map((category) => (
            <Accordion key={category.category} allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading fontSize="xl">{category.category}</Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing={4}>
                    {category.jobs.map((job, index) => (
                      <Box
                        key={index}
                        borderWidth="1px"
                        borderRadius="lg"
                        p={4}
                        display="flex"
                        alignItems="center"
                      >
                        <Image
                          src="/logo.jpg"
                          alt="Company Logo"
                          boxSize="50px"
                          objectFit="cover"
                          mr={4}
                        />
                        <Stack flex="1">
                          <Stack direction="row" align="center" mb={2}>
                            <Heading fontSize="lg">{job.title}</Heading>
                            <Text fontSize="sm" color="gray.300" ml={2}>
                              at {job.company}
                            </Text>
                          </Stack>
                          <Accordion allowToggle>
                            <AccordionItem>
                              <h3>
                                <AccordionButton>
                                  <Box flex="1" textAlign="left">
                                    <Text fontSize="md">View Details</Text>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h3>
                              <AccordionPanel pb={4}>
                                <Stack spacing={2}>
                                  <Text>
                                    <strong>Pre-requisites:</strong>{" "}
                                    {job.prerequisites}
                                  </Text>
                                  <Text>
                                    <strong>Expectations:</strong>{" "}
                                    {job.expectations}
                                  </Text>
                                </Stack>
                                <Button
                                  mt={4}
                                  colorScheme="purple"
                                  variant="solid"
                                >
                                  Apply for Job
                                </Button>
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default JobOpenings;

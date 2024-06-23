import React, { useState } from 'react';
import { Code, Tabs, TabList, TabPanels, Tab, TabPanel, Card, Image, Stack, CardBody, CardFooter, Heading, Text, Button, Box, AbsoluteCenter } from '@chakra-ui/react';



const EventsDiscovery = () => {
    return (
        <div>

            <Heading fontFamily='Montserrat, sans-serif' fontWeight='bold' color='white' fontSize='50px' textAlign='center' mt={8} mb={4}>
                Events
            </Heading>
            <br />

            <Tabs variant='soft-rounded'  >
                <TabList bg='purple.200' borderRadius='xl' p={4} mb={4} >
                    <Tab _selected={{ color: 'white', bg: 'purple.700' }} _focus={{ boxShadow: 'none' }} _hover={{ bg: 'purple.500' }} mr={2} >Dance</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.700' }} _focus={{ boxShadow: 'none' }} _hover={{ bg: 'purple.500' }} mr={2}>Music - Classical</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.700' }} _focus={{ boxShadow: 'none' }} _hover={{ bg: 'purple.500' }} mr={2}>Music - Contemporary</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.700' }} _focus={{ boxShadow: 'none' }} _hover={{ bg: 'purple.500' }} mr={2}>Visual Art</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.700' }} _focus={{ boxShadow: 'none' }} _hover={{ bg: 'purple.500' }} mr={2}>Theatre</Tab>
                    <Tab _selected={{ color: 'white', bg: 'purple.700' }} _focus={{ boxShadow: 'none' }} _hover={{ bg: 'purple.500' }} mr={2}>Film & Literature</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <div>
                            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' bg="rgba(255, 255, 255, 0.8)" maxW="97%" padding="20px" borderRadius={"50px"}>
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '100%' }} // Set to 50% of the Card's width for sm breakpoints and 100% for base
                                    src='/p5.png' // Changed the image source to '1p5.png' in the public folder
                                    alt='Logo of Brand'
                                />

                                <Stack>
                                    <CardBody padding="10px">
                                        <Heading size='lg'> Event 1</Heading>
                                        <Text py='4' fontSize="18px" fontFamily={'Montserrat, sans-serif'} fontWeight={"500"}>
                                            Our primary goal is to create an app to empower individuals within the arts and performance community to find meaningful opportunities such as jobs, connect with like-minded individuals, initiate collaborative projects, and participate in events, competitions, and stage performances. This app is for the dancer who wants to participate in a competition but is facing challenges in finding a sufficient number of participants for a group performance, for the artist who is dedicated to selling his artworks at exhibitions for charitable purposes, and even for the writer who wants to find a steady job opportunity.
                                        </Text>
                                    </CardBody>
                                </Stack>


                            </Card>
                            <br />
                            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' bg="rgba(255, 255, 255, 0.8)" maxW="97%" padding="20px" borderRadius={"50px"}>
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '100%' }} // Set to 50% of the Card's width for sm breakpoints and 100% for base
                                    src='/p5.png' // Changed the image source to '1p5.png' in the public folder
                                    alt='Logo of Brand'
                                />

                                <Stack>
                                    <CardBody padding="10px">
                                        <Heading size='lg'> Event 2</Heading>
                                        <Text py='4' fontSize="18px" fontFamily={'Montserrat, sans-serif'} fontWeight={"500"}>
                                            Our primary goal is to create an app to empower individuals within the arts and performance community to find meaningful opportunities such as jobs, connect with like-minded individuals, initiate collaborative projects, and participate in events, competitions, and stage performances. This app is for the dancer who wants to participate in a competition but is facing challenges in finding a sufficient number of participants for a group performance, for the artist who is dedicated to selling his artworks at exhibitions for charitable purposes, and even for the writer who wants to find a steady job opportunity.
                                        </Text>
                                    </CardBody>
                                </Stack>
                            </Card>
                            <br />
                            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' bg="rgba(255, 255, 255, 0.8)" maxW="97%" padding="20px" borderRadius={"50px"}>
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '100%' }} // Set to 50% of the Card's width for sm breakpoints and 100% for base
                                    src='/p5.png' // Changed the image source to '1p5.png' in the public folder
                                    alt='Logo of Brand'
                                />

                                <Stack>
                                    <CardBody padding="10px">
                                        <Heading size='lg'> Event 3</Heading>
                                        <Text py='4' fontSize="18px" fontFamily={'Montserrat, sans-serif'} fontWeight={"500"}>
                                            Our primary goal is to create an app to empower individuals within the arts and performance community to find meaningful opportunities such as jobs, connect with like-minded individuals, initiate collaborative projects, and participate in events, competitions, and stage performances. This app is for the dancer who wants to participate in a competition but is facing challenges in finding a sufficient number of participants for a group performance, for the artist who is dedicated to selling his artworks at exhibitions for charitable purposes, and even for the writer who wants to find a steady job opportunity.
                                        </Text>
                                    </CardBody>
                                </Stack>
                            </Card>
                            <br />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' bg="rgba(255, 255, 255, 0.8)" maxW="97%" padding="20px" borderRadius={"50px"}>
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '100%' }} // Set to 50% of the Card's width for sm breakpoints and 100% for base
                                    src='/p5.png' // Changed the image source to '1p5.png' in the public folder
                                    alt='Logo of Brand'
                                />

                                <Stack>
                                    <CardBody padding="10px">
                                        <Heading size='lg'> Event 4</Heading>
                                        <Text py='4' fontSize="18px" fontFamily={'Montserrat, sans-serif'} fontWeight={"500"}>
                                            Our primary goal is to create an app to empower individuals within the arts and performance community to find meaningful opportunities such as jobs, connect with like-minded individuals, initiate collaborative projects, and participate in events, competitions, and stage performances. This app is for the dancer who wants to participate in a competition but is facing challenges in finding a sufficient number of participants for a group performance, for the artist who is dedicated to selling his artworks at exhibitions for charitable purposes, and even for the writer who wants to find a steady job opportunity.
                                        </Text>
                                    </CardBody>
                                </Stack>


                            </Card>
                            <br />
                            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' bg="rgba(255, 255, 255, 0.8)" maxW="97%" padding="20px" borderRadius={"50px"}>
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '100%' }} // Set to 50% of the Card's width for sm breakpoints and 100% for base
                                    src='/p5.png' // Changed the image source to '1p5.png' in the public folder
                                    alt='Logo of Brand'
                                />

                                <Stack>
                                    <CardBody padding="10px">
                                        <Heading size='lg'> Event 5</Heading>
                                        <Text py='4' fontSize="18px" fontFamily={'Montserrat, sans-serif'} fontWeight={"500"}>
                                            Our primary goal is to create an app to empower individuals within the arts and performance community to find meaningful opportunities such as jobs, connect with like-minded individuals, initiate collaborative projects, and participate in events, competitions, and stage performances. This app is for the dancer who wants to participate in a competition but is facing challenges in finding a sufficient number of participants for a group performance, for the artist who is dedicated to selling his artworks at exhibitions for charitable purposes, and even for the writer who wants to find a steady job opportunity.
                                        </Text>
                                    </CardBody>
                                </Stack>
                            </Card>
                            <br />
                            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' bg="rgba(255, 255, 255, 0.8)" maxW="97%" padding="20px" borderRadius={"50px"}>
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '100%' }} // Set to 50% of the Card's width for sm breakpoints and 100% for base
                                    src='/p5.png' // Changed the image source to '1p5.png' in the public folder
                                    alt='Logo of Brand'
                                />

                                <Stack>
                                    <CardBody padding="10px">
                                        <Heading size='lg'> Event 6</Heading>
                                        <Text py='4' fontSize="18px" fontFamily={'Montserrat, sans-serif'} fontWeight={"500"}>
                                            Our primary goal is to create an app to empower individuals within the arts and performance community to find meaningful opportunities such as jobs, connect with like-minded individuals, initiate collaborative projects, and participate in events, competitions, and stage performances. This app is for the dancer who wants to participate in a competition but is facing challenges in finding a sufficient number of participants for a group performance, for the artist who is dedicated to selling his artworks at exhibitions for charitable purposes, and even for the writer who wants to find a steady job opportunity.
                                        </Text>
                                    </CardBody>
                                </Stack>
                            </Card>
                            <br />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h3 style={{ color: 'white' }}>No events scheduled.</h3>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h3 style={{ color: 'white' }}>No events scheduled.</h3>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h3 style={{ color: 'white' }}>No events scheduled.</h3>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h3 style={{ color: 'white' }}>No events scheduled.</h3>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default EventsDiscovery;
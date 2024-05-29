// components/AboutUs.js
import React from 'react';
import { Box, Divider, AbsoluteCenter } from '@chakra-ui/react';
import { Card, Image, Stack, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';

const AboutUs = () => {
    return (
        <div>
            <Box position='relative' padding='10' mt='250'>
                <Divider borderColor="gray.300" />
                <AbsoluteCenter px='4'>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: 50, color: 'white' }}> About Us</span>
                </AbsoluteCenter>
            </Box>

            <br /><br /> {/* Add line breaks to create space between the Divider and the Card */}

            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' bg="white" maxW="97%" padding="4">
                <Image
                    objectFit='cover'
                    maxW={{ base: '50%', sm: '50%' }} // Set to 50% of the Card's width for both base and sm breakpoints
                    src='/1p5.png' // Changed the image source to '1p5.png' in the public folder
                    alt='Logo of Brand'
                />

                <Stack >
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                        <Text py='10'>
                            Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    );
};

export default AboutUs;

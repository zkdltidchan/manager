import React from 'react';
import {
    Box,
    Heading,
} from '@chakra-ui/react';
import { Cards } from '../../components/Cards';

const Advertise = () => {
    return (
        <Box p={5}>
            <Heading>
                Advertise
            </Heading>
            <Cards></Cards>
        </Box>
    )
}


export default Advertise;
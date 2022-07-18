import React from 'react';
import {
    Box,
    Heading,
    Button,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <Box py={10} px={6}>
            <Heading
                as="h2"
                size="2xl"
            >
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}
            >
                Page Not Found
            </Text>
            <Button
                onClick={() => navigate('/')}
                variant="solid">
                Go to Home
            </Button>
        </Box>
    )
}


export default PageNotFound;
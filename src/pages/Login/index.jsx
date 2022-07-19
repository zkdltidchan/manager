import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { loginUser, useAuthState, useAuthDispatch } from '../../context';

const Login = () => {
    const dispatch = useAuthDispatch();
    const { loading, error } = useAuthState();

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await loginUser(dispatch, { username, password });
            if (!response.access_token) return;
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Flex
            align="center"
            justify="center"
        >
            <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                    <Heading>DAO Manger System</Heading>
                    <Text color="gray.400">
                        Sign in to your account
                    </Text>
                </Stack>
                <Box
                    rounded="lg"
                    boxShadow="lg"
                    p={8}
                >
                    <Stack spacing={4}>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="username">
                                <FormLabel>User Name</FormLabel>
                                <Input onChange={(e) => setUsername(e.target.value)} type="username" autoComplete="username" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align="start"
                                    justify="space-between">
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color="blue.400">Forgot password?</Link>
                                </Stack>
                                <Button
                                    // bg="blue.400"
                                    // color="white"
                                    // _hover={{
                                    //     bg: 'blue.300',
                                    // }}
                                    type='submit'
                                    isLoading={loading}
                                >
                                    Sign in
                                </Button>
                                {error && <Text textColor="red.300" >{error.error_message}</Text>}
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
}

export default Login;
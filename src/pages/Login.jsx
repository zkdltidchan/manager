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

const Login = () => {
    return (
        <Flex
            align="center"
            justify="center"
        >
            <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                <Stack align="center">
                    <Heading>Sign in to your account</Heading>
                    <Text color="gray.400">
                        Manger <Link color="blue.400">test link</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded="lg"
                    boxShadow="lg"
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>ID</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
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
                                bg="blue.400"
                                color="white"
                                _hover={{
                                    bg: 'blue.300',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Login
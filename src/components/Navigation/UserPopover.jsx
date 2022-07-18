import React from 'react';
import {
    Box,
    Heading,
    Popover,
    PopoverArrow,
    PopoverTrigger,
    PopoverBody,
    PopoverContent,
    PopoverCloseButton,
    Button,
    Portal,
    Avatar,
    Text,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { useAuthDispatch, logout, useAuthState } from '../../context';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
const UserPopover = () => {
    const dispatch = useAuthDispatch();
    const userState = useAuthState();
    const handleLogout = () => {
        logout(dispatch)
    }
    return (
        <Box p={5}>
            <Popover>
                <PopoverTrigger>
                    <Avatar
                        src={userState.user.image}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                            <VStack>
                                <Box justify="center" m={8}>
                                    <Avatar
                                        size="xl"
                                        src={userState.user.image}
                                        css={{
                                            border: '2px solid white',
                                        }}
                                    />
                                </Box>
                                <VStack align="center" p={6} spacing={4}>
                                    <Heading fontSize="2xl" fontWeight={500} fontFamily="body">
                                        {userState.user.name}
                                    </Heading>
                                    <Text color="gray.500">{userState.user.role}</Text>
                                    <HStack>
                                        <Button
                                            w="full"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </Button>
                                        <ColorModeSwitcher />
                                    </HStack>
                                </VStack>
                            </VStack>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
        </Box>
    )
}


export default UserPopover;
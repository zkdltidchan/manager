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
    PopoverFooter,
    PopoverHeader,
    Portal,
} from '@chakra-ui/react';
import { Cards } from '../Cards';

const UserPopover = ({ trigger }) => {
    return (
        <Box p={5}>
            <Heading>
                UserPopover
            </Heading>
            <Popover>
                <PopoverTrigger>
                    {trigger}
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Header</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Cards>
                            </Cards>
                        </PopoverBody>
                        <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                </Portal>
            </Popover>
        </Box>
    )
}


export default UserPopover;
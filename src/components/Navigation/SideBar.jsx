import React from "react";
import {
    Box,
    CloseButton,
    Flex,
    Heading,
    Drawer,
    DrawerContent,
} from "@chakra-ui/react";

const SideBar = ({ title, children, isOpen, onOpen, onClose, ...rest }) => {
    const SidebarContent = ({ ...rest }) => {
        return (
            <Box
                shadow="xl"
                w={{ base: 'full', md: 60 }}
                pos="fixed"
                h="full"
                {...rest}>
                <Flex h="20" alignItems="center" mx={5} justifyContent={{ base: "space-between", md: 'center' }}>
                    <Heading textAlign="center">{title}</Heading>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                {children}
            </Box>
        )
    }

    return (
        <>
            <SidebarContent
                display={{ base: 'none', md: 'block' }}
            >
                {children}
            </SidebarContent>
            
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
        </>
    );
}
export default SideBar;
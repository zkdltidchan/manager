import React from "react";
import {
    Box,
    CloseButton,
    Flex,
    Heading,
    Drawer,
    DrawerContent,
} from "@chakra-ui/react";

const SideBar = ({ title, children, isOpen, onOpen, onClose, headerW = "60", headerH = "20", ...rest }) => {
    const SidebarContent = ({ ...rest }) => {
        return (
            <Box
                w={{ base: 'full', md: headerW }}
                shadow="xl"
                pos="fixed"
                h="full"
                {...rest}>
                <Flex h={headerH} alignItems="center" m={4} justifyContent={{ base: "space-between", md: 'center' }}>
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
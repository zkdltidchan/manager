import React from "react";
import {
  Flex,
  Button,
  HStack,
  Avatar,
  Box,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { HamburgerIcon } from '@chakra-ui/icons'
import SideBar from "./SideBar";
import UserPopover from "./UserPopover";

const Navigation = ({ isLogin, sideBarItems, headerLogo, sideBarTitle, currentIndex }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {isLogin ?
        <>
          <SideBar title={sideBarTitle} isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <VStack pt={3}>
              {sideBarItems.map((item, index) => {
                return (
                  <MenuItem
                    as={Button}
                    // isCurrentIndex={currentIndex == item.to}
                    key={index}
                    to={item.to}
                    colorScheme="gray"
                    borderRadius="30px"
                    w="50%"
                    bg={currentIndex == item.to ? "gray.100" : "white"}
                  >
                    {item.name}
                  </MenuItem>
                )
              })}
            </VStack>
          </SideBar>
          <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            shadow="md"
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
          >
            <HStack>
              <Logo logo={headerLogo} />
              <UserPopover>
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
              </UserPopover>
            </HStack>
          </Flex>
        </>

        :
        <Flex
          px={{ base: 4, md: 4 }}
          height="20"
          alignItems="center"
          shadow="md"
          justifyContent="center"
        >
          <HStack>
            <Logo logo="DAO LOGIN" />
          </HStack>
        </Flex>
      }
    </>
  );
};

export default Navigation;
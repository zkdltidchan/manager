import React, { useState } from "react";
import {
  Flex,
  Button,
  HStack,
  VStack,
  Text,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import SideBar from "./SideBar";
import UserPopover from "./UserPopover";
import { useAuthState } from "../../context";
import { HamburgerIcon } from "@chakra-ui/icons";
const Navigation = ({ sideBarItems, logo, currentIndex, headerH, headerW, handleSetHeaderW, defaultHeaderW }) => {
  const currentUser = useAuthState()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [sideBarSmall, setSideBarSmall] = useState(false);
  const setSideBarW = () => {
    if (!sideBarSmall) {
      setSideBarSmall(true)
      handleSetHeaderW(20)
    } else {
      setSideBarSmall(false)
      handleSetHeaderW(defaultHeaderW)
    }
  }

  return (
    <>
      {currentUser && currentUser.data ?
        <>
          <SideBar
            title={logo}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            headerH={headerH}
            headerW={headerW}
          >
            <VStack pt={3}>
              {
                sideBarItems.map((item, index) => {
                  if (item.sideBar) {
                    return (
                      <MenuItem
                        key={index}
                        to={item.to}
                        borderRadius="xl"
                        w="50%"
                        isCurrentIndex={currentIndex === item.to}
                        onClick={onClose}
                      >
                        {item.name}
                      </MenuItem>
                    )
                  }
                })
              }
            </VStack>
            {/* <VStack>
              <Button onClick={setSideBarW}>{sideBarSmall?">":"<"}</Button>
            </VStack> */}
          </SideBar>
          <Flex
            ml={{ base: 0, md: headerW }}
            px={{ base: 4, md: 4 }}
            height={headerH}
            alignItems="center"
            shadow="md"
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
          >
            <Button
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              variant="ghost"
            >
              <HamburgerIcon boxSize={7} />
            </Button>
            <Box display={{ base: 'none', md: 'flex' }}>
              <Text fontSize="xl" fontWeight="bold">
                {currentUser.data.name}
              </Text>
            </Box>
            <Box display={{ base: 'flex', md: 'none' }}>
              <Text fontSize="xl" fontWeight="bold">
                {logo}
              </Text>
            </Box>

            <HStack>
              <UserPopover />
            </HStack>
          </Flex>
        </>
        :
        <></>
      }
    </>
  );
};

export default Navigation;
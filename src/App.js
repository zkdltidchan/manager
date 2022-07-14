import React from 'react';
import {
  Box,
  // Container,
  ChakraProvider
} from '@chakra-ui/react';
import { theme } from './styles/theme/index';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Member from './pages/Member';
import Report from './pages/Report';
import Room from './pages/Room';
import Advertise from './pages/Advertise';
import NoMatch from './pages/NoMatch';
import {
  // BrowserRouter,
  Routes,
  Route,
  useLocation,
  // Navigate,
} from "react-router-dom";
let routes = [
  {
    to: "/",
    name: "Home",
    page: <Home />,
    // isLast: false,
  },
  {
    to: "/advertise",
    name: "Advertise",
    page: <Advertise />,
    // isLast: false,
  },
  {
    to: "/member",
    name: "Member",
    page: <Member />,
    // isLast: false,
  },
  {
    to: "/report",
    name: "Report",
    page: <Report />,
    // isLast: false,
  },
  {
    to: "/room",
    name: "Room",
    page: <Room />,
    // isLast: true,
  },
]

const App = () => {
  const location = useLocation();
  const isLogin = true;
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navigation
          currentIndex={location.pathname}
          sideBarItems={routes}
          sideBarTitle="LOGO"
          headerLogo="USERNAME"
          isLogin={isLogin}
        />
        <Routes>
          {isLogin ?
            <>
              {routes.map((route, index) => {
                return (
                  <Route key={index} path={route.to} element={route.page} />
                )
              })}
            </> :
            <>
              <Route path="/login" element={<Login />} />
            </>
          }
          <Route
            path="*"
            element={
              <NoMatch />
            }
          />
        </Routes>
      </Box>
    </ChakraProvider>
  );
}

export default App;

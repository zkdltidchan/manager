import React from 'react';
import {
  Box,
  // Container,
  ChakraProvider
} from '@chakra-ui/react';
import { theme } from './styles/theme/index';
import { AuthProvider } from './context';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import routes from './config/routes';

const App = () => {
  const location = useLocation();
  const headerW = 60
  const headerH = 20
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Navigation
          currentIndex={location.pathname}
          sideBarItems={routes}
          logo="DAO Manager"
          headerH={headerH}
          headerW={headerW}
        />
        <Box
          ml={{ base: 0, md: headerW }}
          textAlign="center" fontSize="xl">
          <Routes>
            {routes.map((route) =>
            (
              <Route
                key={route.name}
                path={route.to}
                element={!route.isPrivate ?
                  route.page :
                  <PrivateRoute>{route.page}</PrivateRoute>}
              />
            )
            )}

          </Routes>
        </Box>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

import Home from '../pages/Home';
import Member from '../pages/Member';
import Report from '../pages/Report';
import Room from '../pages/Room';
import Advertise from '../pages/Advertise';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';


const routes = [
    {
        to: "/login",
        name: "Login",
        page: <Login />,
        isPrivate: false,
    },
    {
        to: "/",
        name: "Home",
        page: <Home />,
        isPrivate: true,
        sideBar: true,
    },
    {
        to: "/advertise",
        name: "Advertise",
        page: <Advertise />,
        isPrivate: true,
        sideBar: true,
    },
    {
        to: "/member",
        name: "Member",
        page: <Member />,
        isPrivate: true,
        sideBar: true,
    },
    {
        to: "/report",
        name: "Report",
        page: <Report />,
        isPrivate: true,
        sideBar: true,
    },
    {
        to: "/room",
        name: "Room",
        page: <Room />,
        isPrivate: true,
        sideBar: true,
    },
    {
        to: "/*",
        page: <PageNotFound />,
    },
]

export default routes;
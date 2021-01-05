import Dashboard from "./pages/Dashbord";

const Routes = [
  {
    route: "/",
    Component: Dashboard,
  },
  {
    route: "/about",
    Component: () => <h2>about</h2>,
  },
  {
    route: "/conatc",
    Component: () => <h2>conatc</h2>,
  },
];

export default Routes;

import AboutUs from "Views/AboutUs";

export const PUBLIC_ROUTES = [
  {
    path: "/about-us/divyan",
    Component: () => <p>"divyan"</p>,
  },
  {
    path: "/about-us",
    Component: AboutUs,
  },
];

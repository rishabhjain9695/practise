import AboutUs from "Views/AboutUs";

export const PUBLIC_ROUTES = [
  {
    path: "/about-us/divyan",
    component: () => <p>"divyan"</p>,
    title: "About Divyan",
  },
  {
    path: "/about-us",
    component: AboutUs,
    title: "About Us",
    exact: true,
  },
  {
    path: "/about-us/:name",
    component: () => <p>"random guy"</p>,
    title: "About random guy",
  },
];

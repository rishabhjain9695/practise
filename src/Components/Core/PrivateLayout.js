import Player from "Views/Player/Player";

const PrivateLayout = ({ children }) => {
  return <>{children}
  <Player/>
  </>;
};

export default PrivateLayout;

import { useSelector } from "react-redux";

import { useNetworkStatus } from "Hooks/NetworkStatus";
import Sidebar from "Views/Sidebar";
import Navbars from "Components/Cells/Navbar";
import Player from "Views/Player/Player";

const AppLayout = ({ isAuthenticated, children }) => {
  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>
    <Navbars/>
    <Sidebar/>
    {/* <Player/> */} 
      {/* error Msg: {errorMsg}
      network status: {networkStatus ? "online" : "offline"} */}
      {children}
      
    </>
  );
};

export default AppLayout;

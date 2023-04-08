import { useSelector } from "react-redux";

import { useNetworkStatus } from "Hooks/NetworkStatus";
import Sidebar from "Views/Sidebar";
import Navbars from "Components/Cells/Navbar";

const AppLayout = ({ isAuthenticated, children }) => {
  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();

  return (
    <>
    <Navbars/>
    <Sidebar/>
      {/* error Msg: {errorMsg}
      network status: {networkStatus ? "online" : "offline"} */}
      {children}
    </>
  );
};

export default AppLayout;

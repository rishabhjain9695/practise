import { useSelector } from "react-redux";

import { useNetworkStatus } from "Hooks/NetworkStatus";

const AppHOC = ({ children }) => {
  const errorMsg = useSelector((state) => state.error.msg);
  const networkStatus = useNetworkStatus();
  return (
    <>
      error Msg: {errorMsg}
      network status: {networkStatus ? "online" : "offline"}
      {children}
    </>
  );
};

export default AppHOC;

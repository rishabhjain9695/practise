import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import RootRouter from "./Routes/RootRouter";
import { store, persistor } from "./Redux/Store";
// import Navbars from "./Components/Cells/Navbar/index";
// import Sidebar from "./Views/LoginPage/Sidebar/index";

function App() {
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;

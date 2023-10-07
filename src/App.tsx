import { Provider } from "react-redux";
import "./App.css";
import AppRoute from "./routes";
import Store from "./config/redux/store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <AppRoute />
      </Provider>
    </>
  );
}

export default App;

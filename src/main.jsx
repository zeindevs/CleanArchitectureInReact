import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { userStoreProvider } from "./application/store";
import "./index.css";
import services from "./infrastructure/services";
import App from "./views/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={userStoreProvider(services)}>
    <App />
  </Provider>
);

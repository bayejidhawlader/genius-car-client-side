import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div>
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

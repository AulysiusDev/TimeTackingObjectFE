import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import Timesheets from "./pages/entries";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Timesheets />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

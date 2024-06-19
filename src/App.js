import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import Timesheets from "./pages/entries";
import GeneralContextProvider from "./context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Timesheets />} />
    </Route>
  )
);

function App() {
  return (
    <GeneralContextProvider>
      <RouterProvider router={router} />;
    </GeneralContextProvider>
  );
}

export default App;

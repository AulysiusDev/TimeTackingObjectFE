import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import Timesheets from "./pages/entries";
import EntriesContextProvider from "./context/entries-context";
import People from "./pages/people";
import PeopleContextProvider from "./context/people-context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Timesheets />} />
      <Route path="people" element={<People />} />
    </Route>
  )
);

function App() {
  return (
    <PeopleContextProvider>
      <EntriesContextProvider>
        <RouterProvider router={router} />
      </EntriesContextProvider>
    </PeopleContextProvider>
  );
}

export default App;

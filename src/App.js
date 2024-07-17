import "./styles/App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import Entries from "./pages/entries";
import EntriesContextProvider from "./context/entries-context";
import People from "./pages/people";
import PeopleContextProvider from "./context/people-context";
import Settings from "./pages/settings";
import Export from "./pages/export";
import ExportContextProvider from "./context/export-context";
import Timesheets from "./pages/timesheets";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Entries />} />
      <Route path="timesheets" element={<Timesheets />} />
      <Route path="people" element={<People />} />
      <Route path="export" element={<Export />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

function App() {
  return (
    <PeopleContextProvider>
      <EntriesContextProvider>
        <ExportContextProvider>
          <RouterProvider router={router} />
        </ExportContextProvider>
      </EntriesContextProvider>
    </PeopleContextProvider>
  );
}

export default App;

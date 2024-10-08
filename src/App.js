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
import Ratecards from "./pages/ratecards";
import PeopleContextProvider from "./context/people-context";
import Settings from "./pages/settings";
import Export from "./pages/export";
import ExportContextProvider from "./context/export-context";
import Timesheets from "./pages/timesheets";
import ThemeContextProvider from "./context/theme-context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Entries />} />
      <Route path="timesheets" element={<Timesheets />} />
      <Route path="ratecards" element={<Ratecards />} />
      <Route path="export" element={<Export />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeContextProvider>
      <PeopleContextProvider>
        <EntriesContextProvider>
          <ExportContextProvider>
            <RouterProvider router={router} />
          </ExportContextProvider>
        </EntriesContextProvider>
      </PeopleContextProvider>
    </ThemeContextProvider>
  );
}

export default App;

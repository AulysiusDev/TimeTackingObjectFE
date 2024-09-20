import { useEffect, useState } from "react";
import mondaySdk from "monday-sdk-js";
// @ts-ignore
import { isEqual } from "lodash";
import { AppFeatureObjectContext } from "monday-sdk-js/types/client-context.type";

const monday = mondaySdk();

// Handles chnages to context from monday
const useContextTheme = () => {
  const [context, setContext] = useState<AppFeatureObjectContext | null>(null);
  // Change color theme  in response to context theme changes
  function changeTheme(theme: string) {
    const body: HTMLElement | null = document.querySelector("body");
    const themes = ["light", "dark", "black"];
    if (body) {
      body.setAttribute("data-theme", themes.includes(theme) ? theme : "light");
    }
  }

  useEffect(() => {
    monday.listen("context", (res: { data: AppFeatureObjectContext }) => {
      setContext((previousContext) => {
        if (!previousContext || !isEqual(previousContext, res.data)) {
          return res.data;
        }
        return previousContext;
      });
      changeTheme(res.data.theme);
    });
  }, []);
  return context || null;
};
export default useContextTheme;

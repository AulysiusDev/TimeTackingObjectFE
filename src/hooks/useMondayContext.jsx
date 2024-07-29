import { isEqual } from "date-fns";
import { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

export default function useMondayContext() {
  const [context, setContext] = useState({});

  useEffect(() => {
    async function fetchContext() {
      monday.listen("context", async (res) => {
        console.log({ res });
        setContext((previousContext) =>
          isEqual(previousContext, res.data) ? previousContext : res.data
        );
      });
    }
    fetchContext();
  }, []);

  return { context };
}

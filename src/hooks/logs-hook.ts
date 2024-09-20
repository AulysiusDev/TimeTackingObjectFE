import { AppFeatureObjectContext } from "monday-sdk-js/types/client-context.type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { errorMessage } from "../utils/data";
import { getSessionToken } from "../utils/monday-gql";
import { SessionTokenResponse } from "../types";

export default function useLogs(context: AppFeatureObjectContext | null) {
  const [logs, setLogs] = useState(null);
  const fetchLogs = async (targetId: number) => {
    console.log({ context });
    try {
      const sessionTokenRes: SessionTokenResponse = await getSessionToken();
      if (!sessionTokenRes || !sessionTokenRes.data) {
        toast.error(
          `There was an error fetching user access key. ${errorMessage}`
        );
        return;
      }
      // Possible filters currently:
      // REQUIRED:  tableName, targetId, targetType,creatorID
      // OPTIONAL: workspaceId, startDate, endDate, team, groupId, userId, boardId,
      const filters = {
        targetType: "object",
        targetId: targetId,
        tableName: "logs",
        creatorId: context.user.id,
      };
      const fetchLogsRes = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/entries/fetch-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionTokenRes.data}`,
          },
          body: JSON.stringify({ filters }),
        }
      );
      console.log({ fetchLogsRes });
      if (!fetchLogsRes.ok) {
        toast.error("There was an error fetching logs.");
        return;
      }
      const body = await fetchLogsRes.json();
      setLogs(body.data);
    } catch (error) {
      console.error(error);
      toast.error(
        "Error fetching logs: " + (error as Error).message || errorMessage
      );
    }
  };

  useEffect(() => {
    if (!context) return;
    fetchLogs(context.workspaceId);
  }, [context, setLogs]);

  return { logs, setLogs };
}

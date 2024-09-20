import { toast } from "react-hot-toast";
import { getSessionToken } from "./monday-gql";

export async function fetchUserLogs(userId) {
  try {
    const sessionTokenRes = await getSessionToken();
    if (!sessionTokenRes || !sessionTokenRes.data) {
      toast.error(
        `There was an error fetching user access key. ${errorMessage}`
      );
      return;
    }
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/fetch-entries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionTokenRes.data}`,
        },
        body: JSON.stringify({ userId }),
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    toast.error("Error fetching user logs");
    return false;
  }
}

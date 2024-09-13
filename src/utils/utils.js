import { toast } from "react-hot-toast";
import mondaySdk from "monday-sdk-js";
import { getSessionToken } from "./helpers";

const monday = mondaySdk();

export async function fetchUserLogs(userId) {
  try {
    const sesstionToken = await getSessionToken();
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/fetch-entries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sesstionToken}`,
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

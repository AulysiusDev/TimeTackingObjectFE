import { toast } from "react-hot-toast";
import { getSessionToken } from "./monday-gql";
import { errorMessage } from "./data";

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

export const createRatecards = async (ratecards) => {
  if (!ratecards || ratecards.length === 0) {
    return {
      message: "No ratecards to create.",
      status: 400,
      data: [],
    };
  }
  try {
    const sessionTokenRes = await getSessionToken();
    if (!sessionTokenRes || !sessionTokenRes.data) {
      toast.error(
        `There was an error fetching user access key. ${errorMessage}`
      );
      return;
    }
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/ratecards/create-ratecards`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionTokenRes.data}`,
        },
        body: JSON.stringify({ ratecards }),
      }
    );
    if (!res.ok) {
      const errorBody = await res.json();
      return {
        message: errorBody.message || "Failed to create ratecards.",
        status: res.status,
        data: errorBody.data || [],
      };
    }
    const body = await res.json();
    return {
      message: body.message || "Ratecards created successfully.",
      status: 201,
      data: body.data,
    };
  } catch (error) {
    console.error(error);
    return {
      message: error.message || "There was an error creating time log.",
      status: 500,
      data: error,
    };
  }
};

export const sendDeleteRatecards = async (ratecards) => {
  if (!ratecards || ratecards.length === 0) {
    return {
      message: "No ratecards to create.",
      status: 400,
      data: [],
    };
  }
  try {
    const sessionTokenRes = await getSessionToken();
    if (!sessionTokenRes || !sessionTokenRes.data) {
      toast.error(
        `There was an error fetching user access key. ${errorMessage}`
      );
      return;
    }
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/ratecards/delete-ratecards`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionTokenRes.data}`,
        },
        body: JSON.stringify({ ratecards }),
      }
    );
    if (!res.ok) {
      const errorBody = await res.json();
      return {
        message: errorBody.message || "Failed to delete ratecards.",
        status: res.status,
        data: errorBody.data || [],
      };
    }
    const body = await res.json();
    console.log({ body });
    return {
      message: body.message || "Ratecards deleted successfully.",
      status: 200,
      data:
        Array.isArray(body.data) && body.data.length
          ? body.data.map((deletedIdObj) => deletedIdObj.deletedId)
          : [],
    };
  } catch (error) {
    console.error(error);
    return {
      message: error.message || "There was an error deleteing time log.",
      status: 500,
      data: error,
    };
  }
};

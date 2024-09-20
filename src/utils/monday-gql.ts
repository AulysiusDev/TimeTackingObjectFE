import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

// Get token to send to backend so backend can access db
export const getSessionToken = async () => {
  const sessionToken = await monday.get("sessionToken");
  return sessionToken;
};
export const getAccountUsers = async () => {
  try {
    const query = `
    query {
      users {
      id
      name
      }
    }
    `;
    const response: {
      data: any;
      account_id: number;
    } = await monday.api(query);
    console.log({ response });
    return response.data.users;
  } catch (error) {
    console.error(error);
    return [];
  }
};

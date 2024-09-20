import { useEffect, useState } from "react";
import { getAccountUsers } from "../utils/monday-gql";
import { MondayData, User } from "../types";
import { mondayDataObj } from "../utils/data";

export default function useMondayData() {
  const [mondayData, setMondayData] = useState(mondayDataObj);

  const fetchAccountUsers = async () => {
    try {
      const fetchUsersRes = await getAccountUsers();
      setMondayData((prev: MondayData) => ({
        ...prev,
        users: [
          ...fetchUsersRes.map((user: User) => ({
            id: user.id,
            label: user.name,
            value: user.name,
          })),
        ],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAccountUsers();
  }, []);
  return mondayData;
}

import { useCallback, useEffect, useState } from "react";
import { Response, StorageResponse, StoredRatecard } from "../types";
import { safeParse } from "../utils/helpers";
import toast from "react-hot-toast";
import { getSessionToken } from "../utils/monday-gql";
import { errorMessage } from "../utils/data";

export default function useStoredRatecards() {
  const [storedRatecards, setStoredRatecards] = useState<StoredRatecard[]>();
  const [storedRatecardsLoading, setStoredRatecardsLoading] =
    useState<boolean>(false);
  const [storedRatecardsError, setStoredRatecardsError] = useState<
    string | null
  >(null);

  const fetchStoredRatecards = async () => {
    setStoredRatecardsLoading(true);
    setStoredRatecardsError(null);
    try {
      const sessionTokenRes = await getSessionToken();
      if (!sessionTokenRes || !sessionTokenRes.data) {
        toast.error(
          `There was an error fetching user access key. ${errorMessage}`
        );
        return;
      }
      const storedRatecardsRes = await fetch(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/ratecards/fetch-ratecards`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionTokenRes.data}`,
          },
        }
      );
      const body = await storedRatecardsRes.json();
      const parsedBody = formatBody(body.data);
      setStoredRatecards(parsedBody);
    } catch (error) {
      console.error(error);
      setStoredRatecardsError(
        error.message || "Error fetching stored ratecards"
      );
    } finally {
      setStoredRatecardsLoading(false);
    }
  };

  useEffect(() => {
    fetchStoredRatecards();
  }, []);

  return { storedRatecards, setStoredRatecards };
}

const formatBody = (data: StoredRatecard[]) => {
  return data.map((ratecard: StoredRatecard) => {
    return {
      ...ratecard,
      days: safeParse(ratecard.days),
      rate:
        ratecard.rate && typeof ratecard.rate === "string"
          ? parseFloat(ratecard.rate)
          : null,
    };
  });
};

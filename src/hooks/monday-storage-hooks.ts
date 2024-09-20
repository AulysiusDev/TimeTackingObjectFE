import { useEffect, useState, useCallback } from "react";
import mondaySdk from "monday-sdk-js";
import { Response, StorageResponse } from "../types";
import { safeParse } from "../utils/helpers";

const monday = mondaySdk();

export function useMondayStorage(key: string) {
  const [data, setData] = useState<StorageResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStoredData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const results: Response<StorageResponse> = await monday.storage.getItem(
        key
      );

      if (results.errorMessage) {
        setError(results.errorMessage);
      } else {
        const parsedDate = safeParse(results.data);
        setData(parsedDate);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  }, [key]);

  useEffect(() => {
    fetchStoredData();
  }, [fetchStoredData, key]);

  return { data, loading, error };
}

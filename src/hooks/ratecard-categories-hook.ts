import { useEffect, useState, useCallback } from "react";
import mondaySdk from "monday-sdk-js";
import { Response, StorageResponse } from "../types";
import { safeParse } from "../utils/helpers";
import { ratecardCategoriesObject } from "../utils/data";

const monday = mondaySdk();

export interface RatecardCategories {
  teams: string[];
  clients: string[];
}

export function useRatecardCategories() {
  const [ratecardCategories, setRatecardCategories] =
    useState<RatecardCategories>(ratecardCategoriesObject);
  const [ratecardCategoriesLoading, setRatecardCategoriesLoading] =
    useState<boolean>(false);
  const [ratecardCategoriesError, setRatecardCategoriesError] = useState<
    string | null
  >(null);

  const fetchStoredData = useCallback(async () => {
    setRatecardCategoriesLoading(true);
    setRatecardCategoriesError(null);
    try {
      const storedTeamsResponse: Response<StorageResponse> =
        await monday.storage.getItem("team");
      console.log({ storedTeamsResponse });
      const storedClientsResponse: Response<StorageResponse> =
        await monday.storage.getItem("client");
      console.log({ storedClientsResponse });
      // Process teams
      if (!storedTeamsResponse.data.success) {
        setRatecardCategoriesError(
          storedTeamsResponse.data.error || "Uknown error fetching stored data"
        );
      } else {
        const parsedTeamsData = safeParse(storedTeamsResponse.data.value);
        const teamsData = Array.isArray(parsedTeamsData) ? parsedTeamsData : [];
        setRatecardCategories((prev) => ({ ...prev, team: teamsData }));
      }

      // Process clients
      if (!storedClientsResponse.data.success) {
        setRatecardCategoriesError(
          storedClientsResponse.data.error ||
            "Uknown error fetching stored data"
        );
      } else {
        const parsedClientsData = safeParse(storedClientsResponse.data.value);
        const clientsData = Array.isArray(parsedClientsData)
          ? parsedClientsData
          : [];
        setRatecardCategories((prev) => ({ ...prev, client: clientsData }));
      }
    } catch (err) {
      setRatecardCategoriesError("An unexpected error occurred");
    } finally {
      setRatecardCategoriesLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStoredData();
  }, [fetchStoredData]);

  return {
    ratecardCategories,
    setRatecardCategories,
    ratecardCategoriesLoading,
    ratecardCategoriesError,
  };
}

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

  const processStoredData = async (key: string ) => {
    const storedDataResponse: Response<StorageResponse> =
    await monday.storage.getItem(key);
    if (!storedDataResponse.data.success) {
      setRatecardCategoriesError(
        storedDataResponse.data.error || "Uknown error fetching stored data"
      );
    } else {
      const parsedStoredData = safeParse(storedDataResponse.data.value);
      const storedData = Array.isArray(parsedStoredData) ? parsedStoredData : [];
  
      const dataObj = storedData.reduce((acc, team) => {
        acc[team] = false;
        return acc;
      }, {});
  
      setRatecardCategories((prev) => ({
        ...prev,
        [key]: {
         value: dataObj,
         version: storedDataResponse.data?.version || null
        }
      }));
    }
  }

  const fetchStoredData = useCallback(async () => {
    setRatecardCategoriesLoading(true);
    setRatecardCategoriesError(null);
    try {
      const keys = ["team", "client", "role"]

      for(const key of keys){
        await processStoredData(key)
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
    processStoredData
  };
}



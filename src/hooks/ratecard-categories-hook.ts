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
         version: storedDataResponse.data.version
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
      // const storedTeamsResponse: Response<StorageResponse> =
      //   await monday.storage.getItem("team");
      // const storedClientsResponse: Response<StorageResponse> =
      //   await monday.storage.getItem("client");
      // const storedRolesResponse: Response<StorageResponse> =
      //   await monday.storage.getItem("role");
      // // Process teams
      // if (!storedTeamsResponse.data.success) {
      //   setRatecardCategoriesError(
      //     storedTeamsResponse.data.error || "Uknown error fetching stored data"
      //   );
      // } else {
      //   const parsedTeamsData = safeParse(storedTeamsResponse.data.value);
      //   const teamsData = Array.isArray(parsedTeamsData) ? parsedTeamsData : [];

      //   const teamsObj = teamsData.reduce((acc, team) => {
      //     acc[team] = false;
      //     return acc;
      //   }, {});

      //   setRatecardCategories((prev) => ({
      //     ...prev,
      //     team: {
      //      value: teamsObj,
      //      version: storedTeamsResponse.data.version
      //     }
      //   }));
      // }

      // // Process clients
      // if (!storedClientsResponse.data.success) {
      //   setRatecardCategoriesError(
      //     storedClientsResponse.data.error ||
      //       "Uknown error fetching stored data"
      //   );
      // } else {
      //   const parsedClientsData = safeParse(storedClientsResponse.data.value);
      //   const clientsData = Array.isArray(parsedClientsData)
      //     ? parsedClientsData
      //     : [];
      //   const clientObj = clientsData.reduce((acc, client) => {
      //     acc[client] = false;
      //     return acc;
      //   }, {});
      //   setRatecardCategories((prev) => ({
      //     ...prev,
      //     client: clientObj,
      //   }));
      // }

      // // Process roles
      // if (!storedRolesResponse.data.success) {
      //   setRatecardCategoriesError(
      //     storedRolesResponse.data.error || "Uknown error fetching stored data"
      //   );
      // } else {
      //   const parsedRolesData = safeParse(storedRolesResponse.data.value);
      //   const rolesData = Array.isArray(parsedRolesData) ? parsedRolesData : [];
      //   const roleObj = rolesData.reduce((acc, role) => {
      //     acc[role] = false;
      //     return acc;
      //   }, {});
      //   setRatecardCategories((prev) => ({
      //     ...prev,
      //     role: roleObj,
      //   }));
      // }
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



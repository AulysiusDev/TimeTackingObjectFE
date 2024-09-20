import { AppFeatureObjectContext } from "monday-sdk-js/types/client-context.type";

export interface ThemeContext {
  context: AppFeatureObjectContext;
}
export interface SessionTokenResponse {
  data: string | null;
  errorMessage: string | undefined;
  method: string;
  requestId: string;
  type: string;
}

export interface MondayData {
  users: DropdownOption[];
}
export interface DropdownOption {
  id: string;
  label: string;
  value: number;
}
export interface User {
  name: string;
  id: string;
}

export type StorageResponse = {
  success: boolean;
  value: any;
  version?: any;
};

export type Response<T = StorageResponse> = {
  data: T | any;
  errorMessage?: string | undefined;
  method: string;
  requestId: string;
  type?: string | undefined;
};
export interface RatecardCategories {
  team: string[] | StorageResponse;
  client: string[] | StorageResponse;
}

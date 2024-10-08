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
  id: number;
  label: string;
  value: string | number;
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

export interface ClientDetails{
  selected: string | null;
  showEdit: boolean
}

export interface ButtonGroupOptions {
  text: string;
  value: number;
}

export type Response<T = StorageResponse> = {
  data: T | any;
  errorMessage?: string | undefined;
  method: string;
  requestId: string;
  type?: string | undefined;
};
export interface RatecardCategories {
  team: RatecardCategory | StorageResponse;
  client: RatecardCategory | StorageResponse;
  role: RatecardCategory | StorageResponse;
}

export interface RatecardCategory {
  [key: string]: boolean;
}

export interface NewRatecard {
  role: DropdownOption;
  rate: string;
  department: DropdownOption;
  currency: DropdownOption;
  startTime: DropdownOption;
  endTime: DropdownOption;
  days: number[];
}

export interface StoredRatecard {
  id: number;
  role: string;
  rate: string | number;
  department: string | null;
  currency: string | null;
  startTime: string | null;
  endTime: string | null;
  days: number[];
  updatedBy: number;
  updatedAt: string;
}

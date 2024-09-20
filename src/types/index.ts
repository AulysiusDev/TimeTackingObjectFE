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

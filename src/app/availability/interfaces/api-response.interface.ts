export interface ApiResponse<T> {
  data?: {
    [key: string]: T;
  };
  error: ApiErrorResponse;
}

export interface ApiErrorResponse {
  status: number;
  message: string;
}

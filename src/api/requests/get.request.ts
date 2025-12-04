import { APIResponse, request } from "@playwright/test";
import { responseLogger } from "../helpers/logger.helper";

export const getRequest = async(endpoint:string, headers:Record<string,string>={}): Promise<APIResponse> => {
  const api = await request.newContext();

  const response =await api.get(endpoint,{headers: {...headers}});
  await responseLogger(response);
  return response;
};
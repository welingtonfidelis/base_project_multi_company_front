import { EndPoints } from "../../../shared/enum/endPoints";
import RestRequestService from "../api";
import { GetProfileResponse } from "./types";

const { PROFILE } = EndPoints.COMPANIES;

export const getProfile = async () => {
  const { data: response } = await RestRequestService.get<GetProfileResponse>(
    PROFILE
  );
  return response;
};

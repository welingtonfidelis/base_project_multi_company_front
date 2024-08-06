import { EndPoints } from "../../../shared/enum/endPoints";
import RestRequestService from "../api";

const { CHECK } = EndPoints.AUTH_CHECK;

export const authCheck = async () => {
  const { data: response } = await RestRequestService.get(CHECK);
  return response;
};
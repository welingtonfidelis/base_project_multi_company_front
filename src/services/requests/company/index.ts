import { useMutation, useQuery } from "react-query";
import { EndPoints } from "../../../shared/enum/endPoints";

import { getProfile } from "./apiRequests";

const { PROFILE } = EndPoints.USERS;

// ===== MUTATES ===== //

// ===== QUERIES ===== //
export const useGetProfile = () => {
  const getQueryKey = () => [PROFILE];

  const { data, refetch, isLoading } = useQuery(getQueryKey(), getProfile);

  if (data && data.image_url.length)
    data.image_url += `?${new Date().getTime()}`;

  return { getQueryKey, refetch, data, isLoading };
};

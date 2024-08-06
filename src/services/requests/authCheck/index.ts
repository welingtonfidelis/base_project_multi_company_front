import { useQuery } from "react-query";

import { authCheck } from "./apiRequests";
import { EndPoints } from "../../../shared/enum/endPoints";

const { CHECK } = EndPoints.AUTH_CHECK;

// ===== QUERIES ===== //
export const useAuthCheck = () => {
  const getQueryKey = () => [CHECK];

  const { data, refetch, isLoading } = useQuery(getQueryKey(), authCheck, {
    staleTime: 0,
  });

  return { getQueryKey, refetch, data, isLoading };
};

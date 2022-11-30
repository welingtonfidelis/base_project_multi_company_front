import { useMutation, useQuery } from "react-query";
import { EndPoints } from "../../../shared/enum/endPoints";

import { createCompany, getCompanies, getCompanyById, getProfile, updateCompany } from "./apiRequests";
import { GetCompanyByIdPayload, GetCopmaniesPayload } from "./types";

const { PROFILE, GET, LIST } = EndPoints.COMPANIES;

// ===== MUTATES ===== //
export const useCreateCompany = () => {
  const { mutate, isLoading } = useMutation(createCompany);

  return { createCompany: mutate, isLoading };
};

export const useUpdateCompany = () => {
  const { mutate, isLoading } = useMutation(updateCompany);

  return { updateCompany: mutate, isLoading };
};

// ===== QUERIES ===== //
export const useGetProfile = () => {
  const getQueryKey = () => [PROFILE];

  const { data, refetch, isLoading } = useQuery(getQueryKey(), getProfile);

  if (data && data.image_url.length)
    data.image_url += `?${new Date().getTime()}`;

  return { getQueryKey, refetch, data, isLoading };
};

export const useGetCompanies = (params: GetCopmaniesPayload) => {
  if (!params.filter_by_id) delete params.filter_by_id;
  if (!params.filter_by_name) delete params.filter_by_name;

  const getQueryKey = () => [LIST, params];

  const { data, refetch, isLoading, error } = useQuery(getQueryKey(), () =>
    getCompanies(params)
  );

  return { getQueryKey, refetch, data, isLoading, error };
};

export const useGetCompanyById = (params: GetCompanyByIdPayload) => {
  const getQueryKey = () => [GET, params];

  const { data, refetch, isLoading } = useQuery(getQueryKey(), () =>
    getCompanyById(params)
  );

  return { getQueryKey, refetch, data, isLoading };
};

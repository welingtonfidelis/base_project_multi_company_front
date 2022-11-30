import { Company } from "../../../domains/company";

// Request
export interface GetCopmaniesPayload {
  page: number;
  filter_by_id?: string;
  filter_by_name?: string;
}

export interface GetCompanyByIdPayload {
  id?: number;
}

export interface CreateCompanyPayload {
    name: string;
    email: string;
    phone: string;
    is_blocked: boolean;
  }
  
  export interface UpdateCompanyPayload {
    id: number;
    data: {
      name?: string;
      email?: string;
      phone?: string;
      is_blocked?: boolean;
    };
  }

// Response
export interface GetProfileResponse extends Company {}

export interface GetCompaniesResponse {
  total: number;
  companies: Company[];
}

export interface GetCompanyResponse extends Company {}

export interface CreateCompanyResponse {
    company_id: number;
    user_id: number;
    email: string;
    password: string;
    username: string;
  }
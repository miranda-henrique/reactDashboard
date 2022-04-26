import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServer } from './formatters';

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`;

export const makeRequest = axios.create({
  baseURL: baseURL,
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>,
) => {
  return {
    minDate: formatDateToServer(filterData?.dates?.[0]),
    maxDate: formatDateToServer(filterData?.dates?.[1]),
    gender: filterData?.gender,
    ...extraParams,
  };
};

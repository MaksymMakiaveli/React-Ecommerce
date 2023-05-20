import { http } from './http.config';

import type { AxiosRequestConfig } from 'axios';

type QueryParams = Record<string, (string | number | boolean)[]>;

type Params = string | number | (string | number)[];

export class HttpService {
  constructor(public prefix: string) {}

  get = <Response = any>(
    url: string,
    params?: Params,
    queryParams?: QueryParams,
    config?: AxiosRequestConfig
  ) => {
    return http.get<Response>(this.getUrl(url, params, queryParams), config);
  };

  post = <Response = any, Data = any>(
    url: string,
    data: Data,
    params?: Params,
    queryParams?: QueryParams,
    config?: AxiosRequestConfig
  ) => {
    return http.post<Response>(this.getUrl(url, params, queryParams), data, config);
  };

  put = <Response = any, Data = any>(
    url: string,
    data: Data,
    params?: Params,
    queryParams?: QueryParams,
    config?: AxiosRequestConfig
  ) => {
    return http.put<Response>(this.getUrl(url, params, queryParams), data, config);
  };

  delete = <Response = any>(
    url: string,
    params?: Params,
    queryParams?: QueryParams,
    config?: AxiosRequestConfig
  ) => {
    return http.delete<Response>(this.getUrl(url, params, queryParams), config);
  };

  private getUrl = (url: string, params?: Params, queryParams?: QueryParams) => {
    let resultUrl = `/${this.prefix}/${url}`;

    if (params && Array.isArray(params)) {
      resultUrl += params.map((param) => `/${param}`).join();
    }
    if (params && !Array.isArray(params)) {
      resultUrl += `/${params}`;
    }

    if (queryParams) {
      resultUrl += this.parseQueryParams(queryParams);
    }

    return resultUrl;
  };

  private parseQueryParams = (query: QueryParams) => {
    return Object.entries(query).reduce((acc, [key, value], idx) => {
      const formattedValue = value.join(',');
      if (idx === 0) {
        acc += `?${key}=${formattedValue}`;
      } else {
        acc += `&${key}=${formattedValue}`;
      }

      return acc;
    }, '');
  };
}

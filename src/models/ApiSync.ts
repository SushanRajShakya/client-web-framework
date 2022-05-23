import axios, { AxiosPromise } from 'axios';

import { HasId } from '../types';
import { API_URL } from '../constants';

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string = API_URL) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (!!id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}

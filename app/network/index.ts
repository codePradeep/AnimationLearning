import axios from 'axios';

// import {APIConstants} from '../config/apiConstants';
//  import {IApiResponse} from '../controllers/apiResponses/IAPIResponse';

// const token = () => {
//   const state = store.getState();
//   const authToken = (state.auth.data as RootObject).content?.accessToken;
//   return 'Bearer ' + authToken;
// };

const instance = axios.create({ 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});









export const sendGetRequest = async (url: string) => {
  return await instance
    .request({
      method: 'get',
      url: url,
    })
    .then((response: any) => {
      return handleResponse(response);
    })
    .catch(error => {
      if (error.response === undefined) {
        throw new Error('something went wrong');
      }
      return handleError(error.response.data);
    });
};

export function sendPostRequest<T>(url: any, body: any): any {
  return instance
    .post(url, body)
    .then((response: any) => {
      return handleResponse(response.data);
    })
    .catch((err: any) => {
      console.log(err);
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return handleError(err.response.data);
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

export function sendPutRequest<T>(url: any, body: any): any {
//   instance.defaults.headers.common.Authorization = token();
  return instance
    .put(url, body)
    .then((response: any) => handleResponse(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return handleError(err.response.data);
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

export function sendPatchRequest<T>(url: any): any {
//   instance.defaults.headers.common.Authorization = token();
  return instance
    .patch(url)
    .then((response: any) => handleResponse(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      return handleError(err.response.data);
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

export function deleteRequest<T>(url: any, body: any): any {
  //instance.defaults.headers.common.Authorization = token();
  console.log(url, body);
  return instance
    .delete(url, {
      headers: {
        // Authorization: token(),
      },
      data: body,
    })
    .then((response: any) => handleResponse(response.data))
    .catch((err: any) => {
      if (err.response === undefined) {
        throw new Error('something went wrong');
      }
      console.log(err.response.data);
      return handleError(err.response.data);
    })
    .finally(() => {
      // hide loader
      //   dispatch(toggleLoader());
    });
}

function handleResponse<T>(data: any) {
//   let res: IApiResponse<T> = {
//     isSuccess: true,
//     errors: undefined,
//     data: data as T,
//   };
  return data;
}

function handleError<T>(data: any) {
//   let res: IApiResponse<T> = {
//     isSuccess: false,
//     errors: data,
//     data: undefined,
//   };
  return data;
}
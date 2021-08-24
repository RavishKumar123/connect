import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://api.xyz.com' //This will be changed to real url.
  : 'https://61246f6c6f375a001756ee9a.mockapi.io';
export const contacts = baseUrl + '/contacts';


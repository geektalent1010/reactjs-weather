import data from '../mock/ipGeoLocation.json';

class IpGeoLocation {
  constructor() {
    this.endpoint = ip => `http://api.ipstack.com/${ip}`;
    this.data = null;
  }

  async fetch(ip) {
    const params = {
      access_key: process.env.REACT_APP_IP_STACK,
    };

    try {
      // const response = await fetch(this.addQueryParams(params, ip));
      // const result = await response.json();
      this.data = data;

    } catch (error) {
      console.log(error.message);
    }
  }

  addQueryParams(params, ip) {
    let queryString = '';

    Object.entries(params).forEach(([key, value]) => {
      queryString += `${key}=${value}&`;
    });

    return `${this.endpoint(ip)}?${encodeURI(queryString)}`;
  }
}

export default IpGeoLocation;
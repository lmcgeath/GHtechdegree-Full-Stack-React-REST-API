import config from './config';

export default class Data {
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }
   // Check if authorization is required
  if (requiresAuth) {    
   const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
   options.headers['Authorization'] = `Basic ${encodedCredentials}`;
   }

    return fetch(url, options);
  }

//uses the api method to fetch all courses
async getCourses(){
   const response = await this.api('/courses', 'GET', null);
   if (response.status === 200) {
       //returns all course data if successful
       return response.json()
           .then(responseData => responseData);
   } else {
       throw new Error();
   }
}

}


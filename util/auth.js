import axios from 'axios';

const API_KEY = 'AIzaSyDYMeioiXq2_YrvGiOZsxdYIu-J1GV0u9Y';

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  return response.data.idToken;
};

export const createUser = (email, password) => authenticate('signUp', email, password);

export const login = (email, password) => authenticate('signInWithPassword', email, password);

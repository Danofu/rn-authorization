import axios from 'axios';

const API_KEY = 'AIzaSyDYMeioiXq2_YrvGiOZsxdYIu-J1GV0u9Y';

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log('[ authenticate ]:', response.data);
};

export const createUser = async (email, password) => {
  await authenticate('signUp', email, password);
};

export const login = async (email, password) => {
  await authenticate('signInWithPassword', email, password);
};

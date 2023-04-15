import axios from 'axios';

const API_KEY = 'AIzaSyDYMeioiXq2_YrvGiOZsxdYIu-J1GV0u9Y';

export const createUser = async (email, password) => {
  const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
};

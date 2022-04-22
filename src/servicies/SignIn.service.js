import axios from 'axios';

const setSignIn = (body) => {
  return axios.post("http://challenge-react.alkemy.org", body);
}

export default setSignIn;
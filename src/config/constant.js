let BACKEND_SERVER = null;
if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
} else {
  BACKEND_SERVER = "http://localhost:5000/api/";
}
const config = {
  ...
  API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
export const API_SERVER = BACKEND_SERVER;
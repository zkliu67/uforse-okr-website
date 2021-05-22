import { employers } from '../data';

const Employers = {
  postLogin: (params) => {
    // params: {username, password}
    const { username: inputUsername, password: inputPsd } = params;
    const employer = employers.find(({ username, password }) => {
      return inputUsername === username && inputPsd === password;
    });
    if (employer) {
      return {
        success: true,
        result: employer
      }
    }
    else {
      return {
        success: false,
        result: 'incorrect password or username'
      }
    }
  },
  postRegister: (params) => {
    const { username: inputUsername, password: inputPsd } = params;
    const employer = employers.find(({ username, password }) => {
      return inputUsername === username && inputPsd === password;
    });
    if (employer) {
      return {
        success: false,
        result: 'employer already exists'
      }
    }
    const newEmployer = {
      id: Math.random().toString(36).substr(2),
        username: inputUsername,
        password: inputPsd
    };
    return {
      success: true,
      result: newEmployer
    }
  },
  getEmployer: (tokenId) => {
    return employers.find(({ id }) => {
      return id === tokenId
    });
  },
};

export default Employers;
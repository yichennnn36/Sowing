const errMessage = {
  EMPTY_FILEDS: {
    all: 'All fileds are required！',
    required: '*Fileds are required！'
  },
  INVALID_PARAMS: {
    username: 'Username does not conform to format！',
    password: 'Password does not conform to format！',
  },
  FAIL_REGISTER: {
    400: 'Username or Password does not conform to format！',
    409: 'Username is already exist！',
    0: 'Something wrong, Please try again！'
  },
  FAIL_LOGIN: {
    400: 'Incorrect username or password, please try again！',
    401: 'Username is not exist！',
    402: 'Username or Password does not conform to format！',
    0: 'Something wrong, Please try again！'
  },
  FAIL_POST: {
    400: '* fileds is not allowed to be empty！',
    0: 'Something wrong, Please try again！'
  },
  FAIL_DELETE: {
    0: 'Something wrong, Please try again！'
  }
};

export default errMessage;
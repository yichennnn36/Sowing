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
    0: '註冊出了錯誤，請稍後再試一次！'
  },
  FAIL_LOGIN: {
    400: 'Incorrect username or password, please try again！',
    401: 'Username is not exist！',
    402: 'Username or Password does not conform to format！',
    0: '有地方出了錯誤，請重新登入！'
  },
  FAIL_POST: {
    400: '* fileds is not allowed to be empty！',
    0: '新增出了錯誤，請稍後再試一次！'
  },
  FAIL_DELETE: {
    0: '刪除出了錯誤，請稍後再試一次！'
  },
  FAIL_EDIT: {
    0: '編輯出了錯誤，請稍後再試一次！'
  },
  FAIL_DRAG: {
    0: '拖曳出了錯誤，請稍後再試一次！'
  }
};

export default errMessage;

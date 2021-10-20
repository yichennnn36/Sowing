export const categoryColors = [
  { label: 1, color: '#f4551c' },
  { label: 2, color: '#6cafff' },
  { label: 3, color: '#ffc147' },
  { label: 4, color: '#36ab80' },
  { label: 5, color: '#7336ab' }
];

export const initialData = {
  tickets: [],
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Sowing',
      status: 'todo',
      ticketIds: []
    },
    'column-2': {
      id: 'column-2',
      title: 'Watering',
      status: 'doing',
      ticketIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Sprouting',
      status: 'doing',
      ticketIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
  isLoading: true
};

export const availableLocations = [
  "基隆市",
  "台北市",
  "新北市",
  "桃園縣",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "台中市",
  "彰化縣",
  "雲林縣",
  "嘉義市",
  "嘉義縣",
  "台南市",
  "高雄市",
  "小琉球",
  "屏東縣",
  "台東縣",
  "綠島",
  "蘭嶼",
  "花蓮縣",
  "宜蘭縣",
  "南投縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
];

export const checkValid = (e) => {
  const { name, value } = e.target;
  const usernameReg = /^[a-zA-Z\d]{6,12}$/;
  const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{6,12}$/;
  const result = {};

  if (name === 'username' && value) {
    const usernameBoolean = usernameReg.test(value) ? true : false;
    result.usernameBoolean = usernameBoolean;
  }
  if (name === 'password' && value) {
    const passwordBoolean = passwordReg.test(value) ? true : false;
    result.passwordBoolean = passwordBoolean;
  }
  return result;
};

const TOKEN_NAME = 'token';
const USER_NAME = 'user';
const EXPIRE_STAMP = 'expireStamp';

export const setAuthToken = (user, token, time) => {
  localStorage.setItem(USER_NAME, user);
  localStorage.setItem(TOKEN_NAME, token);
  localStorage.setItem(EXPIRE_STAMP, time);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};
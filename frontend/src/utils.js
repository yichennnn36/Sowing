import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import moment from 'moment';

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
    'sowing': {
      title: 'Sowing (Todo)',
      ticketIds: []
    },
    'watering': {
      title: 'Watering (Doing)',
      ticketIds: []
    },
    'sprouting': {
      title: 'Sprouting (Done)',
      ticketIds: []
    }
  },
  columnOrder: ['sowing', 'watering', 'sprouting']
};

export const availableLocations = [
  { location: "基隆市", coordinates: [1, 14] },
  { location: "台北市", coordinates: [1, 13] },
  { location: "新北市", coordinates: [3, 13] },
  { location: "桃園縣", coordinates: [2, 11] },
  { location: "新竹市", coordinates: [3, 9] },
  { location: "新竹縣", coordinates: [4, 11] },
  { location: "苗栗縣", coordinates: [5, 9] },
  { location: "台中市", coordinates: [7, 8] },
  { location: "彰化縣", coordinates: [8, 6] },
  { location: "雲林縣", coordinates: [9, 5] },
  { location: "嘉義市", coordinates: [11, 6] },
  { location: "嘉義縣", coordinates: [11, 8] },
  { location: "台南市", coordinates: [13, 6] },
  { location: "高雄市", coordinates: [14, 7] },
  { location: "小琉球", coordinates: [18, 6] },
  { location: "屏東縣", coordinates: [16, 7] },
  { location: "台東縣", coordinates: [14, 10] },
  { location: "綠島", coordinates: [16, 12] },
  { location: "蘭嶼", coordinates: [19, 12] },
  { location: "花蓮縣", coordinates: [9, 12] },
  { location: "宜蘭縣", coordinates: [5, 13] },
  { location: "南投縣", coordinates: [9, 9] },
  { location: "澎湖縣", coordinates: [10, 1] },
  { location: "金門縣", coordinates: [5, 2] },
  { location: "連江縣", coordinates: [1, 1] }
];

export const locationSum = [
  { location: "基隆市", sum: 0 },
  { location: "台北市", sum: 0 },
  { location: "新北市", sum: 0 },
  { location: "桃園縣", sum: 0 },
  { location: "新竹市", sum: 0 },
  { location: "新竹縣", sum: 0 },
  { location: "苗栗縣", sum: 0 },
  { location: "台中市", sum: 0 },
  { location: "彰化縣", sum: 0 },
  { location: "雲林縣", sum: 0 },
  { location: "嘉義市", sum: 0 },
  { location: "嘉義縣", sum: 0 },
  { location: "台南市", sum: 0 },
  { location: "高雄市", sum: 0 },
  { location: "小琉球", sum: 0 },
  { location: "屏東縣", sum: 0 },
  { location: "台東縣", sum: 0 },
  { location: "花蓮縣", sum: 0 },
  { location: "宜蘭縣", sum: 0 },
  { location: "南投縣", sum: 0 },
  { location: "澎湖縣", sum: 0 },
  { location: "金門縣", sum: 0 },
  { location: "連江縣", sum: 0 },
  { location: "綠島", sum: 0 },
  { location: "蘭嶼", sum: 0 }
];

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const TOKEN_NAME = 'token';
export const USER_NAME = 'user';
export const EXPIRE_STAMP = 'expireStamp';

export const setAuthToken = (user, token, time) => {
  localStorage.setItem(USER_NAME, user);
  localStorage.setItem(TOKEN_NAME, token);
  localStorage.setItem(EXPIRE_STAMP, time);
};

export const getAuthToken = (name) => {
  return localStorage.getItem(name);
};

export const dateFormat = 'YYYY-MM-DD';
export const timeFormator = (date) => {
  return moment(date).format(dateFormat);
};

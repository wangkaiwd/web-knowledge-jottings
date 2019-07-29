import { GET_TABLE_DATA_SOURCE } from '@/store/actionType.js';
import axios from 'axios';

const getTableData = (data) => {
  return {
    type: GET_TABLE_DATA_SOURCE,
    data
  };
};
export const getTableDataAsync = () => {
  return (dispatch) => {
    axios.get('/getList.json').then(
      res => {
        dispatch(getTableData(res.data));
      },
      error => {
        console.log('error', error);
      }
    );
  };
};


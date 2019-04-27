import http from './httpService';
import { apiUrl } from '../config/config.json';

const url = `${apiUrl}/meetups`;

const getAllMeetups = async () => {
  const { data: result } = await http.get(url);
  const { data } = result;
  return data;
};

const getSingleMeetup = async (id) => {
  const { data: result } = await http.get(`${url}/${id}`);
  const { data } = result;
  return data;
};

const getMeetupQuestions = async (id) => {
  const { data: result } = await http.get(`${url}/${id}/questions`);
  const { data } = result;
  return data;
};

export {
  getAllMeetups,
  getSingleMeetup,
  getMeetupQuestions,
};

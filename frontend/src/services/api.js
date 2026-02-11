import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchRandomVerse = async () => {
  try {
    const response = await api.get(`/verses/random`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    return null;
  }
};

export const fetchChapters = async () => {
  const res = await api.get(`/chapters`);
  return res.data;
};

export const fetchChapterByNumber = async (chapterNumber) => {
  const res = await api.get(`/chapters/${chapterNumber}`);
  return res.data;
};

export const fetchVersesByChapter = async (chapterNumber) => {
  const res = await api.get(`/verses/${chapterNumber}`);
  return res.data;
};

export const fetchFullVerse = async (chapterNumber, verseNumber) => {
  const res = await api.get(`/verses/full/${chapterNumber}/${verseNumber}`);
  return res.data;
};

export const login = async ({ email, password }) => {
  const res = await api.post(`/auth/login`, { email, password });
  return res.data; // { token, user }
};

export const register = async ({ name, email, password }) => {
  const res = await api.post(`/auth/register`, { name, email, password });
  return res.data;
};

export const googleLogin = async ({ credential }) => {
  const res = await api.post(`/auth/google`, { credential });
  return res.data; // { token, user }
};

export const subscribe = async (email) => {
  const res = await api.post(`/subscribers/subscribe`, { email });
  return res.data;
};
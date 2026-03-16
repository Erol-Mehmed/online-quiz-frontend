import api from "@/src/services/api";

export const authService = {
  login: async (data: {email: string; password: string}) => {
    const res = await api.post('/auth/login', data);
    return res.data;
  },
  register: async (data: {
    name: string;
    email: string;
    password: string;
  })=> {
    const res = await api.post('/auth/register', data);
    return res.data;
  },
  logout: async () => {
    const res = await api.post('/auth/logout');
    return res.data;
  },
  getCurrentUser: async () => {
    const res = await api.get('/auth/me');
    return res.data;
  }
};

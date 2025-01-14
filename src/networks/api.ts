import axios from "axios";
import CONFIG from "@/configs/config";
import LOCAL_STORAGE from "@/networks/storage";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/order.dto";
import { CreateMenuDto, UpdateMenuDto } from "@/dtos/menu.dto";
import { CreateCategoryDto, UpdateCategoryDto } from "@/dtos/category.dto";
import { CreateLocationDto, CreateProfileDto } from "@/dtos/user.dto";
import { loginDto, registerDto } from "@/dtos/auth.dto";

const API = {
  AUTH: {
    REGISTER: async (data: registerDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/auth/register`,
          data
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    LOGIN: async (data: loginDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/auth/login`,
          data
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },
  },

  USER: {
    GET_LOGGED_USER: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/user/logged`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
    CREATE_LOCATION: async (data: CreateLocationDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/user/location/1`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    CREATE_PROFILE: async (data: CreateProfileDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/user/profile/4`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },
  },

  MENU: {
    CREATE: async (data: CreateMenuDto) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/menu`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ALL: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/menu`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ONE_BY_ID: async (id: number) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/menu/${id}`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    UPDATE: async (id: number, data: UpdateMenuDto) => {
      try {
        const response = await axios.put(
          `${CONFIG.BASE_URL}/menu/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(`${CONFIG.BASE_URL}/menu/${id}`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },
  },

  CATEGORY: {
    CREATE: async (data: CreateCategoryDto) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/category`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ALL: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/category`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ONE_BY_ID: async (id: number) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/category/${id}`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    UPDATE: async (id: number, data: UpdateCategoryDto) => {
      try {
        const response = await axios.put(
          `${CONFIG.BASE_URL}/category/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(
          `${CONFIG.BASE_URL}/category/${id}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },
  },

  ORDER: {
    CREATE: async (data: CreateOrderDto) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/order`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ALL: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/order`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ONE_BY_ID: async (id: number) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/order/${id}`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    UPDATE: async (id: number, data: UpdateOrderDto) => {
      try {
        const response = await axios.put(
          `${CONFIG.BASE_URL}/order/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(`${CONFIG.BASE_URL}/order/${id}`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },
  },

  ORDER_DETAIL: {
    CREATE: async (data: CreateOrderDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/order-detail`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ALL: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/order-detail`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ONE_BY_ID: async (id: number) => {
      try {
        const response = await axios.get(
          `${CONFIG.BASE_URL}/order-detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    UPDATE: async (id: number, data: UpdateOrderDto) => {
      try {
        const response = await axios.put(
          `${CONFIG.BASE_URL}/order-detail/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(
          `${CONFIG.BASE_URL}/order-detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },
  },
};

export default API;

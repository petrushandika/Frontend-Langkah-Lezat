import axios from "axios";
import CONFIG from "@/configs/config";
import LOCAL_STORAGE from "@/networks/storage";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/OrderDto";

const API = {
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
};

export default API;

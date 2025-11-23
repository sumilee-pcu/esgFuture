import axios from "axios";
import type { ApiResponse } from "@/types";

// API 베이스 URL (환경변수로 설정 가능)
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request 인터셉터
api.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰 가져오기
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 에러 처리 (토큰 만료)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Refresh token으로 새 access token 받기
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);

        // 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh 실패 시 로그아웃
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/auth/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Auth API
export const authApi = {
  login: async (email: string, password: string) => {
    const response = await api.post<
      ApiResponse<{ accessToken: string; refreshToken: string; user: any }>
    >("/auth/login", { email, password });
    return response.data;
  },

  register: async (userData: any) => {
    const response = await api.post<ApiResponse<any>>(
      "/auth/register",
      userData
    );
    return response.data;
  },

  logout: async () => {
    const response = await api.post<ApiResponse<void>>("/auth/logout");
    return response.data;
  },

  resetPassword: async (email: string) => {
    const response = await api.post<ApiResponse<void>>(
      "/auth/reset-password",
      { email }
    );
    return response.data;
  },
};

// Paper API
export const paperApi = {
  getAll: async (params?: any) => {
    const response = await api.get<ApiResponse<any>>("/papers", { params });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<ApiResponse<any>>(`/papers/${id}`);
    return response.data;
  },

  create: async (paperData: any) => {
    const response = await api.post<ApiResponse<any>>("/papers", paperData);
    return response.data;
  },

  update: async (id: string, paperData: any) => {
    const response = await api.put<ApiResponse<any>>(
      `/papers/${id}`,
      paperData
    );
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete<ApiResponse<void>>(`/papers/${id}`);
    return response.data;
  },

  uploadFile: async (paperId: string, file: File, fileType: string) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileType", fileType);

    const response = await api.post<ApiResponse<any>>(
      `/papers/${paperId}/files`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
};

// Notice API
export const noticeApi = {
  getAll: async (params?: any) => {
    const response = await api.get<ApiResponse<any>>("/notices", { params });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<ApiResponse<any>>(`/notices/${id}`);
    return response.data;
  },
};

// Payment API
export const paymentApi = {
  getAll: async () => {
    const response = await api.get<ApiResponse<any>>("/payments");
    return response.data;
  },

  create: async (paymentData: any) => {
    const response = await api.post<ApiResponse<any>>(
      "/payments",
      paymentData
    );
    return response.data;
  },

  confirm: async (paymentKey: string) => {
    const response = await api.post<ApiResponse<any>>(
      `/payments/confirm`,
      { paymentKey }
    );
    return response.data;
  },
};

// User API
export const userApi = {
  getProfile: async () => {
    const response = await api.get<ApiResponse<any>>("/users/profile");
    return response.data;
  },

  updateProfile: async (userData: any) => {
    const response = await api.put<ApiResponse<any>>(
      "/users/profile",
      userData
    );
    return response.data;
  },
};

export default api;

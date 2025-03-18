import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null,

  login: async (credentials, navigate) => {
    try {
      const response = await fetch("https://test-frontend-dev.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en autenticación");
      }

      const data = await response.json();
      if (!data.access_token) throw new Error("Token no recibido");

      localStorage.setItem("token", data.access_token);
      set({ token: data.access_token });
      navigate("/Home");
    } catch (error) {
      console.error("Error de login:", error.message);
      alert(error.message);
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));
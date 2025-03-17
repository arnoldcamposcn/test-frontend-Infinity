import { create } from "zustand";
import { fetchModules } from "../services/api";

const moduleStore = create((set) => ({
  modules: [],
  loading: true,
  error: null,
  selectedVideo: null,

  fetchModules: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchModules();
      set((state) => ({
        modules: data,
        loading: false,
        selectedVideo: state.selectedVideo || (data[0]?.clases[0]?.video ?? null),
      }));
    } catch (error) {
      set({ error: "Error", loading: false });
    }
  },
  setSelectedVideo: (videoUrl) => set({ selectedVideo: videoUrl }), 
}));

export default moduleStore;



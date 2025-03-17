const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchModules = async () => {
    try {
        const response = await fetch(API_URL, {
            headers: { Authorization: API_KEY },
        });
        if (!response.ok) throw new Error("Error al obtener los modulos");
        return await response.json();
        } catch (error) {
        console.error("Error en fetchModules:", error);
        return null;
    }
};


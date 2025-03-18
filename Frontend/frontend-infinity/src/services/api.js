export const fetchModules = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No hay token disponible");

    const response = await fetch("https://test-frontend-dev.onrender.com/api/modulos", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Error al obtener los módulos");

    return await response.json().catch(() => {
      throw new Error("Respuesta inválida del servidor");
    });
  } catch (error) {
    console.error("Error en fetchModules:", error);
    return null;
  }
};

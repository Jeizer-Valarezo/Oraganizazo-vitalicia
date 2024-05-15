export const sumarPuntos = (puntos) => ({
  type: "SUMAR_PUNTOS",
  payload: puntos,
});

export const fallar = (puntos) => ({
  type: "FALLAR",
  payload: puntos,
});

export const comprarRecompensa = (precio) => ({
  type: "COMPRAR_RECOMPENSA",
  payload: precio,
});

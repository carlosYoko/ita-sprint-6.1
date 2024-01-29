1. **POST /players:**

   - Crea un jugador/a. Envia una solicitud POST con el nombre del jugador/a. Si no se proporciona un nombre, se asignará automáticamente como "ANÓNIMO".

2. **PUT /players/:id:**

   - Modifica el nombre del jugador/a especificado por su identificador único (:id). Realiza una solicitud PUT con el nuevo nombre.

3. **GET /players:**

   - Devuelve la lista de todos los jugadores/as en el sistema con sus respectivos porcentajes de éxito.

4. **POST /games/:id:**

   - Un jugador/a específico realiza una tirada. Debes enviar una solicitud POST con el identificador del jugador/a (:id) para registrar la tirada.

5. **DELETE /games/:id:**

   - Elimina todas las tiradas del jugador/a especificado por su identificador único (:id).

6. **GET /games/:id:**

   - Devuelve la lista de todas las tiradas realizadas por un jugador/a, incluyendo el valor de cada dado y si ganó o no la partida.

7. **GET /ranking:**

   - Devuelve un ranking de jugadores/as ordenado por porcentaje de éxitos, junto con el porcentaje de éxitos medio de todos los jugadores/as en el sistema.

8. **GET /ranking/loser:**

   - Devuelve el jugador/a con el peor porcentaje de éxitos.

9. **GET /ranking/winner:**
   - Devuelve el jugador/a con el mejor porcentaje de éxitos.

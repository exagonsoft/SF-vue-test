<template>
  <div class="">
    <header>
      <h1 class="text-center mainTitle">{{ title }}</h1>
    </header>
    <br />
    <br />
    <div class="WelcomeBox">
      <div class="col">
        <p>
          Bienvenidos.<br />
          Les presento esta App como resultado, de la prueba de conocimientos
          sobre Vue.js
        </p>
      </div>
      <br />
      <div class="col">
        <p>
          Aprovecho la view inicio para mostrar los detalles del desarrollo,
          además como lo requiere el test estaré dejando adjunto en la raíz del
          proyecto un archivo titulado Soluciones.md con todos los cambios
          realizados, así como los detalles del desarrollo de todas las tareas.
        </p>
      </div>
    </div>
    <br />
    <div class="WelcomeBox">
      <h1 class="text-center text-red text-2xl text-red-400">
        Elementos añadidos
      </h1>
      <br />
      <p>
        Una hoja de estilo propio, basada en la librería Bootstrap, para
        estilizar la App.
      </p>
    </div>
    <div class="WelcomeBox">
      <h1 class="text-center text-red text-2xl text-red-400">
        Soluciones por Tarea
      </h1>
      <br />
      <ul>
        <li>
          <p>
            Tarea 1 <br />
            Completar en router para mapear todos los links del navbar(en lo
            personal creo que es mas limpio trabajar con el router, aunque
            tambien se podia haber usado el mapeo con las direcciones ficicas
            "No recomendado") <br />
            Modificar el estilo de la navBar (decisión personal) para mejorar la
            accesibilidad de nuestra App, Manteniendo el menú de navegación
            siempre visible
          </p>
        </li>
        <br />
        <li>
          <p>
            Tarea 2 <br />
            Trabajar con los datos del archivo .json para crear una lista de
            datos para pintar en la tabla que se mostrara al usuario <br />
            Crear una simple función para ordenar los datos de la lista
          </p>
        </li>
        <br />
        <li>
          <p>
            Tarea 3 <br />
            Trabajar con los datos del archivo .json para crear una lista de
            datos para pintar en la tabla que se mostrara al usuario <br />
            Usar la función creada en la tarea anterior para ordenar los datos
            de la lista
          </p>
        </li>
        <br />
        <li>
          <p>
            Tarea 4 <br />
            Trabajar con los datos del archivo .json para crear una lista de
            datos para pintar en la tabla que se mostrara al usuario <br />
          </p>
        </li>
        <br />
        <li>
          <p>
            Tarea 5 <br />
            Crear funciones para obtener una matriz de datos que pudiera pintar
            los datos pedidos en la figura de manera dinámica desde la fecha
            19-04-2021 hasta la fecha 30-04-2021 para los turnos no asignados
            <br />
            Modificar las referencias del Router para la dirección
            <a href="http://localhost:8080/calendario"
              >http://localhost:8080/calendario</a
            >
          </p>
        </li>
        <br />
        <li>
          <p>
            Tarea 6 <br />
            Crear funciones para obtener una matriz de datos que pudiera pintar
            los datos pedidos en la figura de manera dinámica desde la fecha
            19-04-2021 hasta la fecha 30-04-2021 pero para los turnos
            asignados<br />
            Modificar las referencias del Router para la dirección
            <a href="http://localhost:8080/calendario"
              >http://localhost:8080/calendario</a
            >
          </p>
        </li>
        <br />
        <li>
          <p>
            Tarea 7 <br />
            Aprovechando la iteratividad brindada por Vue simulo un CRUD con referencias a lo que sería un post .json a una base de datos remota( No entendí bien la tarea ya que no existe una base de datos, solo un archivo .json, <br />Asi como tambien me causo dudas el que el id sea requerido para el CRUD "Acaso se puede modificar?")
          </p>
        </li>
        <br />
      </ul>
    </div>
    <div class="WelcomeBox">
      <h1 class="text-center text-red text-2xl text-red-400">
        Observaciones Generales
      </h1>
      <br />
      <p>
        Varios de los Campos del archivo db.json tenian campos mal configurados.
        Los cuales tuvieron que ser enmendados para el correcto funcionamiento
        de la App
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Resultado de la Prueba Front-end',
  }),
};
</script>

<template>
  <div class="container">
    <header>
      <h1 class="text-center mainTitle text-2xl">{{ title }}</h1>
    </header>
    <br />
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <div id="appMoviles">
            <div class="container">
              <div class="row mt-5">
                <div class="col-lg-12">
                  <div class="Box">
                    <div class="col">
                      <p>
                        Esta prueba tiene como objetivo medir sus conocimientos
                        en el área de desarrollo front-end y en el framework
                        javascript Vue.js.
                      </p>
                    </div>
                    <br />
                    <div class="col">
                      <p>
                        Para la prueba usted tendrá acceso a los modelos de
                        datos requeridos para las diferentes tareas, mediante
                        una API REST local (ver archivo README.md para detalles
                        de como arrancar el servidor local)
                      </p>
                    </div>
                  </div>
                  <br />
                  <div class="Box">
                    <h1 class="text-center text-red text-2xl text-red-400">
                      Importante
                    </h1>
                    <br />
                    <p>
                      Todo aquello que no esté y usted considere necesario para
                      el desarrollo, puede hacerlo a su criterio libre. Lo
                      importante es comunicarlo en el entregable.
                    </p>
                    <br />
                    <p>
                      Tiene libertad para utilizar librerías javascript de
                      terceros, siempre y cuando éstas no se encuentren
                      deprecadas y/o no posean más de 8 meses sin
                      actualizaciones y están bajo licencia MIT.
                    </p>
                    <br />
                    <p>
                      Para los estilos CSS, dejamos a su creatividad aplicarlos,
                      sin embargo lo alentamos a limitarse a utilizar Tailwind
                      CSS, que se encuentra instalado y configurado en el
                      proyecto.
                    </p>
                    <br />
                    <p>
                      Es importante que envíe un documento donde explique
                      brevemente su solución de cada tarea y mencionar las
                      dificultades que se le presentaron y como pudo
                      solventarlas.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Bienvenido a Prueba Front-end',
    };
  },
};
</script>

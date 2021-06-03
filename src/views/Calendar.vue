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
                    <h1 class="text-center secTitle text-2xl">
                      Turnos no Asignados
                    </h1>
                    <br />
                    <table class="table table-striped">
                      <thead>
                        <tr class="bg-primary text-light">
                          <th Style="display:none">ID</th>
                          <th>Plantilla</th>
                          <th>Entrada</th>
                          <th>Salida</th>
                          <th>Descanso</th>
                          <th>Horas Trabajadas</th>
                          <th>Cargo</th>
                          <th>Sucursales</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="template of templates"
                          v-bind:key="template.id"
                        >
                          <th scope="row" Style="display:none">
                            {{ template.id }}
                          </th>
                          <td>{{ template.name }}</td>
                          <td>
                            {{ template.checkIn }}
                          </td>
                          <td>
                            {{ template.checkOut }}
                          </td>
                          <td>
                            {{ template.breakTime }}
                          </td>
                          <td>
                            {{ template.hours }}
                          </td>
                          <td>
                            {{ template.cargo }}
                          </td>
                          <td>
                            {{ template.locations }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="Box">
                    <h1 class="text-center secTitle text-2xl">
                      Turnos Asignados
                    </h1>
                    <br />
                    <table class="table table-striped">
                      <thead>
                        <tr class="bg-primary text-light">
                          <th Style="display:none">ID</th>
                          <th>Plantilla</th>
                          <th>Entrada</th>
                          <th>Salida</th>
                          <th>Descanso</th>
                          <th>Horas Trabajadas</th>
                          <th>Cargo</th>
                          <th>Sucursales</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="template of templates"
                          v-bind:key="template.id"
                        >
                          <th scope="row" Style="display:none">
                            {{ template.id }}
                          </th>
                          <td>{{ template.name }}</td>
                          <td>
                            {{ template.checkIn }}
                          </td>
                          <td>
                            {{ template.checkOut }}
                          </td>
                          <td>
                            {{ template.breakTime }}
                          </td>
                          <td>
                            {{ template.hours }}
                          </td>
                          <td>
                            {{ template.cargo }}
                          </td>
                          <td>
                            {{ template.locations }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
      title: 'Registro de Turnos',
    };
  },
};
</script>

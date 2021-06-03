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
import db from '../assets/json/db.json';
export default {
  data() {
    return {
      title: 'Plantillas por Turno',
    };
  },
  computed: {
    templates() {
      var templatesData = new Array();
      db.turnTemplates.forEach((template) => {
        var templateId = template.id;
        var templateName = template.name;
        var templateCheckIn = template.checkIn;
        var templateCheckOut = template.checkOut;
        var templateRest = template.breakTime;
        var templateHours = 0;
        var templatePosition = ' ';
        var templateLocations = ' ';

        db.positions.forEach((templateposition) => {
          if (template.positionId == templateposition.id) {
            templatePosition = templateposition.name;
          }
        });
        template.locationId.forEach((iTemplateLoc) => {
          db.locations.forEach((location) => {
            if (iTemplateLoc == location.id) {
              if (templateLocations != ' ') {
                templateLocations += ', ' + location.name;
              } else {
                templateLocations = location.name;
              }
            }
          });
        });
        db.turns.forEach((turn) => {
          if (turn.turnTemplateId == template.id) {
            var totalHours =
              parseInt(templateCheckOut) - parseInt(templateCheckIn);
            var breaktime = parseInt(templateRest) / 60;
            var hours = totalHours - breaktime;
            templateHours += hours;
          }
        });
        var arrayTemplate = {
          id: templateId,
          name: templateName,
          checkIn: templateCheckIn,
          checkOut: templateCheckOut,
          breakTime: templateRest,
          hours: templateHours,
          cargo: templatePosition,
          locations: templateLocations,
        };
        templatesData.push(arrayTemplate);
      });
      return templatesData;
    },
  },
};
</script>

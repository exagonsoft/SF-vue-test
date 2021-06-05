<template>
  <div class="">
    <header>
      <h1 class="text-center mainTitle">{{ title }}</h1>
    </header>
    <br />
    <br />
    <div class="Box">
      <table class="table table-striped tableFill">
        <thead>
          <tr class="bg-primary text-light">
            <th Style="display:none">ID</th>
            <th>Plantilla</th>
            <th class="shortText">Entrada</th>
            <th class="shortText">Salida</th>
            <th class="shortText">Descanso</th>
            <th class="shortText">Horas Trabajadas (h)</th>
            <th class="shortText">Cargo</th>
            <th class="shortText">Sucursales</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="template of TemplateList" v-bind:key="template.id">
            <th scope="row" Style="display:none">
              {{ template.id }}
            </th>
            <td>{{ template.name }}</td>
            <td class="shortText">
              {{ template.checkIn }}
            </td>
            <td class="shortText">
              {{ template.checkOut }}
            </td>
            <td class="shortText">
              {{ template.breakTime }}
            </td>
            <td class="shortText">
              {{ template.hours }}
            </td>
            <td class="shortText">
              {{ template.cargo }}
            </td>
            <td class="shortText">
              {{ template.locations }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from '../assets/json/db.json';
export default {
  data: () => ({
    title: 'Plantillas por Turno',
    TemplateList: [],
  }),
  created: function () {
    this.LoadTemplates();
  },
  methods: {
    LoadTemplates: function () {
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
      this.TemplateList = templatesData;
    },
  },
};
</script>

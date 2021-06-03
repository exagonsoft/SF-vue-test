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
                          <th>Sucursal</th>
                          <th>Horario</th>
                          <th>Direccion</th>
                          <th>Usuarios</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="location of locations"
                          v-bind:key="location.id"
                        >
                          <th scope="row" Style="display:none">
                            {{ location.id }}
                          </th>
                          <td>{{ location.locName }}</td>
                          <td>
                            {{ location.locShcedule }}
                          </td>
                          <td>
                            {{ location.locAddresss }}
                          </td>
                          <td>
                            {{ location.locUsers }}
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
      title: 'Sucursales',
    };
  },
  computed: {
    //Obteniendo la lista de Sucursales
    locations() {
      var sucursales = new Array();
      db.locations.forEach((location) => {
        var locId = location.id;
        var locName = location.name;
        var schedule = location.startTime + ' - ' + location.endTime;
        var address = ' ';
        var users = 0;
        if (location.address2 != null) {
          address =
            location.address1 +
            ', ' +
            location.address2 +
            ', ' +
            location.commune +
            ', ' +
            location.region;
        } else {
          address =
            location.address1 +
            ', ' +
            location.commune +
            ', ' +
            location.region;
        }
        db.users.forEach((user) => {
          if (user.locationId == location.id) {
            users++;
          }
        });
        var arrayLocations = {
          id: locId,
          locName: locName,
          locShcedule: schedule,
          locAddresss: address,
          locUsers: users,
        };
        sucursales.push(arrayLocations);
      });
      //Ordenando la lista
      sucursales.sort(function (nameA, nameB) {
        let a = nameA.locName.toUpperCase(),
          b = nameB.locName.toUpperCase();
        return a == b ? 0 : a > b ? -1 : 1;
      });
      return sucursales;
    },
  },
};
</script>

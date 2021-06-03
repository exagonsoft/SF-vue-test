<template>
  <div class="container">
    <header>
      <h1 class="text-center mainTitle text-2xl">
        {{ title }}
      </h1>
    </header>
    <br />
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <div id="appMoviles">
            <div class="container">
              <div class="row">
                <div class="col buttonAdd">
                  <button
                    @click="btnAlta"
                    class="btn btn-success"
                    title="Añadir Usuario"
                  >
                    Nuebo
                  </button>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-lg-12">
                  <div class="Box">
                    <table class="table table-striped">
                      <thead>
                        <tr class="bg-primary text-light">
                          <th>ID</th>
                          <th>Nombre Completo</th>
                          <th>Cargo</th>
                          <th>Sucursal</th>
                          <th>Horas/Semana</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user of users" v-bind:key="user.id">
                          <th scope="row">{{ user.id }}</th>
                          <td>{{ user.name }}</td>
                          <td>{{ user.cargos }}</td>
                          <td>{{ user.sucursal }}</td>
                          <td>{{ user.workhours }}</td>
                          <td>
                            <div
                              class="btn-group"
                              role="group"
                              style="width: 10%"
                            >
                              <button
                                class="btn btn-secondary"
                                title="Editar"
                                @click="
                                  btnEditar(
                                    user.firstName,
                                    user.lastName,
                                    cargo.name,
                                    location.name,
                                    contract.legalMaxWeeklyHours
                                  )
                                "
                              >
                                Edit
                              </button>
                              <button
                                class="btn btn-danger"
                                title="Eliminar"
                                @click="btnBorrar(user.employeeId)"
                              >
                                Delete
                              </button>
                            </div>
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
      title: 'Lista de Usuarios',
    };
  },
  computed: {
    //Obteniendo la lista de Usuarios
    users() {
      var usersData = new Array();
      db.users.forEach((user) => {
        var userId = user.employeeId;
        var userName = user.firstName + ' ' + user.lastName;
        var userPosition = ' ';
        var userLocation;
        var userWrkHours;
        user.positionId.forEach((iUserPos) => {
          db.positions.forEach((position) => {
            if (iUserPos == position.id) {
              if (userPosition != ' ') {
                userPosition += ', ' + position.name;
              } else {
                userPosition = position.name;
              }
            }
          });
        });
        db.locations.forEach((location) => {
          if (user.locationId == location.id) {
            userLocation = location.name;
          }
        });
        db.contracts.forEach((contract) => {
          if (user.contract == contract.id) {
            userWrkHours = contract.legalMaxWeeklyHours;
          }
        });
        var arrayUserData = {
          id: userId,
          name: userName,
          cargos: userPosition,
          sucursal: userLocation,
          workhours: userWrkHours,
        };
        usersData.push(arrayUserData);
      });
      //Ordenando la lista
      usersData.sort(function (nameA, nameB) {
        let a = nameA.id.toUpperCase(),
          b = nameB.id.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
      return usersData;
    },
  },
};
</script>

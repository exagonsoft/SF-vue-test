<template>
  <div class="">
    <transition name="modal">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div id="AddBox" class="modal-container" v-if="showAddModal">
            <div class="modalTitles">Nuebo usuario</div>
            <br />
            <div class="modalText">
              <table class="modalTable">
                <tr>
                  <td colspan="2">
                    <label class="labeledTextBolder">Id de Empleado : </label
                    ><label id="newUserId" class="labeledTextBolder">{{
                      UserForAddId
                    }}</label>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div v-if="errors.length">
                      <ul>
                        <li
                          class="errorList"
                          v-for="error in errors"
                          v-bind:key="error.id"
                        >
                          {{ error }}
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Email</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      class="ligtTextBox"
                      v-model="UserForAddEmail"
                      id="UserName"
                      placeholder="E.g. exagonsoft@gmail.com"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Nombre y Apellido</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddName"
                      id="UserName"
                      placeholder="E.g. Marta Sanchez"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Fecha de Nacimiento</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      class="ligtTextBox"
                      v-model="UserForAddBirthDate"
                      id="UserName"
                      placeholder="E.g. 1981-12-20"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Posición o Cargo</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddCargo"
                      id="UserName"
                      placeholder="E.g. Copero/a"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Contrato</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddContract"
                      id="UserName"
                      placeholder="E.g. Jornada Laboral Ordinaria"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Sucursal</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddSucursal"
                      id="UserName"
                      placeholder="E.g. Providencia"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Horas Trabajadas</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddHours"
                      id="UserName"
                      placeholder="E.g. 25"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <div class="buttonsRow">
              <button
                id="btnAddCancel"
                class="buttonLeft"
                @click="
                  showModal = false;
                  showAddModal = false;
                  clearAddData();
                "
              >
                Cancelar
              </button>
              <button id="btnAddAcept" class="buttonAccept" @click="newUser()">
                Salvar
              </button>
            </div>
          </div>
          <div id="EditBox" class="modal-container" v-if="showEditModal">
            <div class="modalTitles">Editar usuario</div>
            <br />
            <div class="modalText">
              <table class="modalTable">
                <tr>
                  <td colspan="2">
                    <label class="labeledTextBolder">ID : </label
                    ><label id="newUserId" class="labeledTextBolder">{{
                      UserForAddId
                    }}</label>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div v-if="errors.length">
                      <ul>
                        <li
                          class="errorList"
                          v-for="error in errors"
                          v-bind:key="error.id"
                        >
                          {{ error }}
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Email</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      class="ligtTextBox"
                      v-model="UserForAddEmail"
                      id="UserName"
                      placeholder="E.g. exagonsoft@gmail.com"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Nombre y Apellido</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddName"
                      id="UserName"
                      placeholder="E.g. Marta Sanchez"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Fecha de Nacimiento</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      class="ligtTextBox"
                      v-model="UserForAddBirthDate"
                      id="UserName"
                      placeholder="E.g. 1981-12-20"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Posición o Cargo</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddCargo"
                      id="UserName"
                      placeholder="E.g. Copero/a"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Contrato</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddContract"
                      id="UserName"
                      placeholder="E.g. Jornada Laboral Ordinaria"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Sucursal</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddSucursal"
                      id="UserName"
                      placeholder="E.g. Providencia"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="labeledText">Horas Trabajadas</label>
                  </td>
                  <td>
                    <input
                      class="ligtTextBox"
                      v-model="UserForAddHours"
                      id="UserName"
                      placeholder="E.g. 25"
                    />
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <div class="buttonsRow">
              <button
                id="btnEditCancel"
                class="buttonLeft"
                @click="
                  showModal = false;
                  showEditModal = false;
                  clearAddData();
                "
              >
                Cancelar
              </button>
              <button
                id="btnEditAcept"
                class="buttonAccept"
                @click="editUser()"
              >
                Salvar
              </button>
            </div>
          </div>
          <div id="DelBox" class="modal-container" v-if="showDelModal">
            <div class="modalTitles">Eliminar a {{ UserForDel }} ?</div>
            <br />
            <div class="buttonsRow">
              <button
                id="btnDelCancel"
                class="buttonLeft"
                @click="
                  showModal = false;
                  showDelModal = false;
                "
              >
                No
              </button>
              <button id="btnDelAcept" class="buttonRigth" @click="delUser()">
                Si
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="noScroll">
      <header>
        <h1 class="text-center mainTitle">
          {{ title }}
        </h1>
      </header>
      <br />
      <br />
      <div class="row">
        <div class="col buttonAdd">
          <button
            @click="newUser()"
            class="btn btn-success"
            title="Añadir Usuario"
          >
            Nuebo
          </button>
        </div>
      </div>
      <div class="Box">
        <table class="table table-striped">
          <thead>
            <tr class="bg-primary text-light">
              <th class="shortText">ID</th>
              <th>Nombre Completo</th>
              <th class="shortText">Cargo</th>
              <th class="shortText">Sucursal</th>
              <th class="shortText">Horas/Semana (h)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) of UsersList" v-bind:key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td class="shortText">{{ user.cargos }}</td>
              <td class="shortText">{{ user.sucursal }}</td>
              <td class="shortText">{{ user.workhours }}</td>
              <td>
                <div
                  class="btn-group colActions"
                  role="group"
                  style="width: 10%"
                >
                  <button
                    class="btn btn-secondary"
                    title="Editar"
                    @click="
                      editUser(
                        index,
                        user.id,
                        user.email,
                        user.name,
                        user.birthDate,
                        user.cargos,
                        user.sucursal,
                        user.workhours,
                        user.contratctType
                      )
                    "
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-danger"
                    title="Eliminar"
                    @click="delUser(index, user.name)"
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
</template>

<script>
import db from '../assets/json/db.json';

//import { reactive } from 'Vue';
export default {
  name: 'DialogConfirm',
  data: () => ({
    errors: [],
    active: false,
    value: null,
    title: 'Lista de Usuarios',
    UsersList: [],
    //Modal Block
    showModal: false,
    //Add
    showAddModal: false,
    UserForAddId: '',
    UserForAddEmail: '',
    UserForAddName: '',
    UserForAddBirthDate: '',
    UserForAddCargo: '',
    UserForAddSucursal: '',
    UserForAddHours: '',
    UserForAddContract: '',
    //Edit
    editIndex: '',
    showEditModal: false,
    //Del
    showDelModal: false,
    UserForDel: '',
    IndexForDel: 0,
  }),
  created: function () {
    this.LoadUsers();
  },
  methods: {
    sheckErrors: function (e) {
      if (
        this.UserForAddEmail &&
        this.UserForAddName &&
        this.UserForAddBirthDate &&
        this.UserForAddContract
      ) {
        return true;
      }

      this.errors = [];
      if (!this.UserForAddEmail) {
        this.errors.push('El Email es obligatorio.');
      }
      if (!this.UserForAddName) {
        this.errors.push('El nombre es obligatorio.');
      }
      if (!this.UserForAddBirthDate) {
        this.errors.push('La Fecha de nacimiento es obligatoria.');
      }
      if (!this.UserForAddContract) {
        this.errors.push('El contrato es obligatoria.');
      }

      e.preventDefault();
    },
    //Obteniendo la lista de Usuarios
    LoadUsers: function () {
      var usersData = new Array();
      db.users.forEach((user) => {
        var userId = user.employeeId;
        var userEmail = user.email;
        var userName = user.firstName + ' ' + user.lastName;
        var userBirthDate = user.dateOfBirth;
        var userPosition = ' ';
        var userLocation;
        var userWrkHours;
        var userContract;
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
            userContract = contract.name;
          }
        });
        var arrayUserData = {
          id: userId,
          email: userEmail,
          name: userName,
          birthDate: userBirthDate,
          cargos: userPosition,
          sucursal: userLocation,
          workhours: userWrkHours,
          contratctType: userContract,
        };
        usersData.push(arrayUserData);
      });
      //Ordenando la lista
      usersData.sort(function (nameA, nameB) {
        let a = nameA.id.toUpperCase(),
          b = nameB.id.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
      this.UsersList = usersData;
      //return this.UsersList;
    },
    newUser: function () {
      if (!this.showModal) {
        this.showModal = true;
        this.showAddModal = true;
        this.getLastAddId();
      } else {
        if (this.sheckErrors()) {
          var arrayUserData = {
            id: this.UserForAddId,
            email: this.UserForAddEmail,
            name: this.UserForAddName,
            birthDate: this.UserForAddBirthDate,
            cargos: this.UserForAddCargo,
            sucursal: this.UserForAddSucursal,
            workhours: this.UserForAddHours,
            contratctType: this.UserForAddContract,
          };
          this.UsersList.push(arrayUserData);
          this.UsersList = this.UsersList.sort(function (nameA, nameB) {
            let a = nameA.id.toUpperCase(),
              b = nameB.id.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
          });
          this.showModal = false;
          this.showAddModal = false;
          this.clearAddData();
        }
      }
    },
    clearAddData: function () {
      this.UserForAddId = '';
      this.UserForAddName = '';
      this.UserForAddCargo = '';
      this.UserForAddSucursal = '';
      this.UserForAddHours = '';
      this.UserForAddEmail = '';
      this.UserForAddBirthDate = '';
      this.UserForAddContract = '';
      this.errors = [];
    },
    editUser: function (
      index,
      id,
      email,
      name,
      birthDate,
      cargo,
      sucursal,
      hours,
      contract
    ) {
      if (!this.showModal) {
        this.showModal = true;
        this.showEditModal = true;
        this.editIndex = index;
        this.UserForAddId = id;
        this.UserForAddEmail = email;
        this.UserForAddName = name;
        this.UserForAddBirthDate = birthDate;
        this.UserForAddCargo = cargo;
        this.UserForAddSucursal = sucursal;
        this.UserForAddHours = hours;
        this.UserForAddContract = contract;
      } else {
        if (this.sheckErrors()) {
          this.UsersList[this.editIndex].name = this.UserForAddName;
          this.UsersList[this.editIndex].cargos = this.UserForAddCargo;
          this.UsersList[this.editIndex].sucursal = this.UserForAddSucursal;
          this.UsersList[this.editIndex].workhours = this.UserForAddHours;
          this.UsersList[this.editIndex].email = this.UserForAddEmail;
          this.UsersList[this.editIndex].birthDate = this.UserForAddBirthDate;
          this.UsersList[
            this.editIndex
          ].contratctType = this.UserForAddContract;
          this.showModal = false;
          this.showEditModal = false;
          this.clearAddData();
        }
      }
    },
    delUser: function (index, name) {
      if (!this.showModal) {
        this.showModal = true;
        this.showDelModal = true;
        this.UserForDel = name;
        this.IndexForDel = index;
      } else {
        this.UsersList.splice(this.IndexForDel, 1);
        this.showModal = false;
        this.showDelModal = false;
        this.UserForDel = '';
        this.IndexForDel = 0;
      }
    },
    ShowDelBox: function (index, name) {
      this.DeleteUserShow = name;
      this.DeleteUserIndex = index;
      this.switchModal('Del');
    },
    getLastAddId: function () {
      var resoult =
        Math.floor(Math.random() * 99) +
        '.' +
        Math.floor(Math.random() * 999) +
        '.' +
        Math.floor(Math.random() * 999) +
        '-Q';
      this.UserForAddId = resoult;
    },
    invertValue: function (value) {
      if (value == true) {
        return false;
      } else {
        return true;
      }
    },
    deleteUser: function () {
      this.UsersList.splice(this.DeleteUserIndex, 1);
    },
    EditUser: function (index, userId, Name) {
      var newName = prompt('Editar Usuario', Name);
      this.UsersList[index].name = newName;
    },
  },
};
</script>

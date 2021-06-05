<template>
  <div class="">
    <header>
      <h1 class="text-center mainTitle">{{ title }}</h1>
    </header>
    <br />
    <br />
    <div class="calendarBox" style="margin-left: 3px">
      <br />
      <h1 class="text-center secTitle text-2xl">Turnos no Asignados</h1>
      <br />
      <table class="table table-striped tableCalendar">
        <thead>
          <tr class="bg-primary text-light textSmall">
            <th style="color: transparent">No Asignados</th>
            <th>2021-04-19</th>
            <th>2021-04-20</th>
            <th>2021-04-21</th>
            <th>2021-04-22</th>
            <th>2021-04-23</th>
            <th>2021-04-24</th>
            <th>2021-04-25</th>
            <th>2021-04-26</th>
            <th>2021-04-27</th>
            <th>2021-04-28</th>
            <th>2021-04-29</th>
            <th>2021-04-30</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="textSmaller"
            v-for="notAssignet of NotAssignedList"
            v-bind:key="notAssignet.id"
          >
            <th scope="row" Style="display:none">
              {{ notAssignet.id }}
            </th>
            <td></td>
            <td>
              {{ notAssignet.date19.turnTemplate }} <br />
              {{ notAssignet.date19.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date20.turnTemplate }} <br />
              {{ notAssignet.date20.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date21.turnTemplate }} <br />
              {{ notAssignet.date21.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date22.turnTemplate }} <br />
              {{ notAssignet.date22.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date23.turnTemplate }} <br />
              {{ notAssignet.date23.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date24.turnTemplate }} <br />
              {{ notAssignet.date24.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date25.turnTemplate }} <br />
              {{ notAssignet.date25.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date26.turnTemplate }} <br />
              {{ notAssignet.date26.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date27.turnTemplate }} <br />
              {{ notAssignet.date27.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date28.turnTemplate }} <br />
              {{ notAssignet.date28.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date29.turnTemplate }} <br />
              {{ notAssignet.date29.turnTemplateShedule }}
            </td>
            <td>
              {{ notAssignet.date30.turnTemplate }} <br />
              {{ notAssignet.date30.turnTemplateShedule }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="calendarBox">
      <br />
      <h1 class="text-center secTitle text-2xl">Turnos Asignados</h1>
      <br />
      <table class="table table-striped tableCalendar">
        <thead>
          <tr class="bg-primary text-light textSmall">
            <th>Asignados</th>
            <th>2021-04-19</th>
            <th>2021-04-20</th>
            <th>2021-04-21</th>
            <th>2021-04-22</th>
            <th>2021-04-23</th>
            <th>2021-04-24</th>
            <th>2021-04-25</th>
            <th>2021-04-26</th>
            <th>2021-04-27</th>
            <th>2021-04-28</th>
            <th>2021-04-29</th>
            <th>2021-04-30</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="textSmaller"
            v-for="assignedTurn of AssignedList"
            v-bind:key="assignedTurn.id"
          >
            <th scope="row" Style="display:none">
              {{ assignedTurn.id }}
            </th>
            <td class="boldtext">{{ assignedTurn.user }}</td>
            <td>
              {{ assignedTurn.date19.turnTemplate }} <br />
              {{ assignedTurn.date19.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date20.turnTemplate }} <br />
              {{ assignedTurn.date20.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date21.turnTemplate }} <br />
              {{ assignedTurn.date21.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date22.turnTemplate }} <br />
              {{ assignedTurn.date22.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date23.turnTemplate }} <br />
              {{ assignedTurn.date23.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date24.turnTemplate }} <br />
              {{ assignedTurn.date24.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date25.turnTemplate }} <br />
              {{ assignedTurn.date25.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date26.turnTemplate }} <br />
              {{ assignedTurn.date26.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date27.turnTemplate }} <br />
              {{ assignedTurn.date27.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date28.turnTemplate }} <br />
              {{ assignedTurn.date28.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date29.turnTemplate }} <br />
              {{ assignedTurn.date29.turnTemplateShedule }}
            </td>
            <td>
              {{ assignedTurn.date30.turnTemplate }} <br />
              {{ assignedTurn.date30.turnTemplateShedule }}
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
    title: 'Registro de Turnos',
    NotAssignedList: [],
    AssignedList: [],
  }),
  created: function () {
    this.LoadNotAssigned();
    this.LoadAssigned();
  },
  methods: {
    LoadNotAssigned: function () {
      var assignedData = new Array();
      var turnUsers = new Array();
      db.turns.forEach((turn) => {
        if (turn.maxSlots > turn.userId.length) {
          turn.userId.forEach((turnUserIds) => {
            var iCounter = 0;
            turnUsers.forEach((turnUser) => {
              if (turnUser.id == turnUserIds) {
                iCounter++;
              }
            });
            if (iCounter == 0) {
              var tempArray = new Array();
              db.users.forEach((users) => {
                if (users.id == turnUserIds) {
                  tempArray = {
                    id: turnUserIds,
                    name: users.firstName + ' ' + users.lastName,
                  };
                }
              });
              turnUsers.push(tempArray);
            }
          });
        }
      });
      turnUsers.forEach((turnPerUser) => {
        var dRow = {
          id: turnPerUser.id,
          user: turnPerUser.name,
          date19: this.getDataByDate('2021-04-19', turnPerUser.id),
          date20: this.getDataByDate('2021-04-20', turnPerUser.id),
          date21: this.getDataByDate('2021-04-21', turnPerUser.id),
          date22: this.getDataByDate('2021-04-22', turnPerUser.id),
          date23: this.getDataByDate('2021-04-23', turnPerUser.id),
          date24: this.getDataByDate('2021-04-24', turnPerUser.id),
          date25: this.getDataByDate('2021-04-25', turnPerUser.id),
          date26: this.getDataByDate('2021-04-26', turnPerUser.id),
          date27: this.getDataByDate('2021-04-27', turnPerUser.id),
          date28: this.getDataByDate('2021-04-28', turnPerUser.id),
          date29: this.getDataByDate('2021-04-29', turnPerUser.id),
          date30: this.getDataByDate('2021-04-30', turnPerUser.id),
        };

        assignedData.push(dRow);
      });
      this.NotAssignedList = assignedData;
    },
    LoadAssigned: function () {
      var assignedData = new Array();
      var turnUsers = new Array();
      db.turns.forEach((turn) => {
        if (turn.maxSlots <= turn.userId.length) {
          turn.userId.forEach((turnUserIds) => {
            var iCounter = 0;
            turnUsers.forEach((turnUser) => {
              if (turnUser.id == turnUserIds) {
                iCounter++;
              }
            });
            if (iCounter == 0) {
              var tempArray = new Array();
              db.users.forEach((users) => {
                if (users.id == turnUserIds) {
                  tempArray = {
                    id: turnUserIds,
                    name: users.firstName + ' ' + users.lastName,
                  };
                }
              });
              turnUsers.push(tempArray);
            }
          });
        }
      });
      turnUsers.forEach((turnPerUser) => {
        var dRow = {
          id: turnPerUser.id,
          user: turnPerUser.name,
          date19: this.getDataByDate('2021-04-19', turnPerUser.id),
          date20: this.getDataByDate('2021-04-20', turnPerUser.id),
          date21: this.getDataByDate('2021-04-21', turnPerUser.id),
          date22: this.getDataByDate('2021-04-22', turnPerUser.id),
          date23: this.getDataByDate('2021-04-23', turnPerUser.id),
          date24: this.getDataByDate('2021-04-24', turnPerUser.id),
          date25: this.getDataByDate('2021-04-25', turnPerUser.id),
          date26: this.getDataByDate('2021-04-26', turnPerUser.id),
          date27: this.getDataByDate('2021-04-27', turnPerUser.id),
          date28: this.getDataByDate('2021-04-28', turnPerUser.id),
          date29: this.getDataByDate('2021-04-29', turnPerUser.id),
          date30: this.getDataByDate('2021-04-30', turnPerUser.id),
        };

        assignedData.push(dRow);
      });
      this.AssignedList = assignedData;
    },
    getDataByDate: function (date, userId) {
      var resoult = {
        turnTemplate: '',
        turnTemplateShedule: '',
        turnTemplateDataType: '',
      };
      db.turns.forEach((turnperDate) => {
        if (turnperDate.date == date) {
          turnperDate.userId.forEach((idOffUser) => {
            if (idOffUser == userId) {
              if (parseInt(turnperDate.permitType) > 0) {
                db.turnTemplates.forEach((template) => {
                  if (template.id == turnperDate.turnTemplateId) {
                    resoult.turnTemplate = template.name;
                    resoult.turnTemplateShedule =
                      '(' + template.checkIn + ' - ' + template.checkOut + ')';
                    resoult.turnTemplateDataType = '1';
                  }
                });
              } else {
                var permicive;
                switch (parseInt(turnperDate.permitType)) {
                  case -1: {
                    permicive = 'Vacaciones';
                    break;
                  }
                  case -2: {
                    permicive = 'LICENCIA MÉDICA';
                    break;
                  }
                  case -3: {
                    permicive = 'OTRO';
                    break;
                  }
                  case -4: {
                    permicive = 'PERMISO ADMINISTRATIVO';
                    break;
                  }
                  case -5: {
                    permicive = 'PERMISO FALLECIMIENTO';
                    break;
                  }
                  case -6: {
                    permicive = 'CAPACITACIÓN';
                    break;
                  }
                  case -7: {
                    permicive = 'PERMISO SINDICAL';
                    break;
                  }
                  case -8: {
                    permicive = 'REUNIÓN';
                    break;
                  }
                  case -9: {
                    permicive = 'ACCIDENTES';
                    break;
                  }
                  case -10: {
                    permicive = 'COMPENSACIÓN';
                    break;
                  }
                  case -11: {
                    permicive = 'AMAMANTAMIENTO (FUERO)';
                    break;
                  }
                  case -12: {
                    permicive = 'PERMISO CON GOCE';
                    break;
                  }
                  case -13: {
                    permicive = 'ACCIDEPERMISO SIN GOCENTES';
                    break;
                  }
                }
                resoult.turnTemplate = permicive;
                resoult.turnTemplateDataType = '0';
              }
            }
          });
        }
      });
      return resoult;
    },
  },
};
</script>

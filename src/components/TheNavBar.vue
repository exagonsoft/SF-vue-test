<template>
  <div
    id="nav"
    class="fixedNav flex items-center p-3 space-x-3 bg-blue-500 w-full h-14"
  >
    <div>
      <img src="../assets/logo.png" class="logo" />
    </div>
    <router-link to="/" class="textWhite">Inicio</router-link>
    <router-link to="/usuarios" class="textWhite">Usuarios</router-link>
    <router-link to="/sucursales" class="textWhite">Sucursales</router-link>
    <router-link to="/plantillas" class="textWhite">Plantillas</router-link>
    <router-link to="/calendario" class="textWhite">Calendario</router-link>
  </div>
</template>

<script>
export default {};
</script>

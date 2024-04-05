<template>
    <div id="app">
      <h2>Connexion réussie!</h2>
      <p>Bienvenue, {{ username }}!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'loggedSuccess',
    data() {
      return {
        username: 'Utilisateur'};
    },
    components: {
    },
    methods: {
    }
  };
  </script>
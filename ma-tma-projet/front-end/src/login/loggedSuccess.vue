<template>
    <div>
      <h2>Connexion réussie!</h2>
      <p>Bienvenue, {{ username }}!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoggedSuccess',
    data() {
      return {
        username: '' // Vous pouvez récupérer le nom d'utilisateur connecté depuis le back-end
      };
    },
    methods: {
    }
  };
  </script>
  
<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Nom d'utilisateur:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Mot de passe:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  async function loginFunction(username, password, router) {
  try {
    const response = await axios.post('http://127.0.0.1:5000/login', {
      nom_utilisateur: username,
      mot_de_passe: password
    });

    console.log(response);

    if (response.status == 200) {
      console.log('Connexion réussie');
      router.push({path : '/loggedSuccess'});
    } else {
      console.log('Connexion échouée');
      return false; // Connexion échouée, retourne false
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return false; // Une erreur s'est produite, retourne false
  }
}

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        // Utilisez loginFunction ici
        await loginFunction(this.username, this.password, this.$router);
        // Autres actions après la soumission du formulaire
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la soumission du formulaire :', error);
      }
    }
  }
};

  

  </script>
  

<template>
  <div>
    <!-- Exemple de bouton pour naviguer vers la page de connexion -->
    <button @click="navigateToLogin">Page de connexion</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigateToLogin() {
      // Utilisation du routeur pour naviguer vers la page de connexion
      this.$router.push({ name: 'LoginForm' });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

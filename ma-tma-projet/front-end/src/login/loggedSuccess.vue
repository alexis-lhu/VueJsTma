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
    username: ''
  };
},
created() {
  this.username = this.$route.query.username;
  console.log('username:', this.username);
}
}
</script>

<template>
    <div>
        <h2>Connexion réussie!</h2>
        <p>Bienvenue, {{ username }}!</p>
    </div>
</template>

<script>
export default {
    name: 'LoggedSuccess',
    mounted() {
        const username = this.$route.params.username;
        console.log('Username:', username);
    }
}
</script>
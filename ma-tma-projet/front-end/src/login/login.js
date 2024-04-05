import axios from 'axios';

async function loginFunction(username, password, router) {
    try {
        const response = await axios.post('http://127.0.0.1:5000/login', {
            nom_utilisateur: username,
            mot_de_passe: password
        });

        if (router) {console.log('router exists');}
        
        if (response.status == 200) {
            if (response.data == "non") {
                console.log('Connexion refusée');
                document.querySelector('h2').textContent = 'Sale juif';
            } else {
                console.log('Connexion réussie');
                router.push({path : '/loggedSuccess', params : {username: username}});
            }
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        return false;
    }
}

export default loginFunction();
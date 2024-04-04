import axios from 'axios';
import { useRouter } from 'vue-router';

export default async function loginFunction(username, password) {
    const router = useRouter();
  try {
    const response = await axios.post('http://localhost:5000/login', {
      nom_utilisateur: username,
      mot_de_passe: password
    });

    if (response.data === true) {
      console.log('Connexion réussie');
      router.push('/loggedSuccess');
    } else {
      console.log('Connexion échouée');
      return false; // Connexion échouée, retourne false
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return false; // Une erreur s'est produite, retourne false
  }
}

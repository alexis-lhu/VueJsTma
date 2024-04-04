from flask import Flask, request, jsonify, session
from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Active CORS pour l'application Flask

app.secret_key = 'votre_clé_secrète'

# Utilisateur fictif pour la démonstration
utilisateur = {
    'id': 1,
    'nom_utilisateur': 'admin',
    'mot_de_passe': 'admin123'
}

# Page de connexion
@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        # Répondez simplement à la requête OPTIONS avec les en-têtes CORS appropriés
        return '', 204

    if request.method == 'POST':
        # Récupérer les données de la requête
        infos = request.get_json()
        nom_utilisateur = infos['nom_utilisateur']
        mot_de_passe = infos['mot_de_passe']
        if nom_utilisateur == utilisateur['nom_utilisateur'] and mot_de_passe == utilisateur['mot_de_passe']:
            # Si l'authentification réussit, enregistrez l'utilisateur dans la session
            session['connecte'] = True
            return '',200
        else:
            return '',401


if __name__ == '__main__':
    app.run(debug=True)












# Page de déconnexion
@app.route('/logout')
def logout():
    # Déconnectez l'utilisateur en supprimant la session
    session.pop('connecte', None)
    return jsonify({'message': 'Déconnexion réussie'})

# Page protégée nécessitant une connexion
@app.route('/logggedSuccess')
def logggedSuccess():
    # Vérifiez si l'utilisateur est connecté
    if 'connecte' in session:
        return jsonify({'message': 'Connecté'})
    else:
        return jsonify({'message': 'Non connecté'})


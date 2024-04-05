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
@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        infos = request.get_json()
        nom_utilisateur = infos['nom_utilisateur']
        mot_de_passe = infos['mot_de_passe']
        if nom_utilisateur == utilisateur['nom_utilisateur'] and mot_de_passe == utilisateur['mot_de_passe']:
            session['connecte'] = True
            return 'oui',200
        else:
            return 'non',200
    return 'non',200
        
        


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




if __name__ == '__main__':
    app.run(debug=True)










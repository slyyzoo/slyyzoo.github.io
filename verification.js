
// Vérification du Nom (2 à 30 caractères)
function validateNom(nom) {
    const error = document.getElementById('nom-error');
    if (nom.value.trim().length < 2 || nom.value.trim().length > 30) {
        error.textContent = "Le nom doit être entre 2 et 30 caractères";
    } else {
        error.textContent = "";
    }
}

// Vérification du Prénom (2 à 30 caractères)
function validatePrenom(prenom) {
    const error = document.getElementById('prenom-error');
    if (prenom.value.trim().length < 2 || prenom.value.trim().length > 30) {
        error.textContent = "Le prénom doit être entre 2 et 30 caractères";
    } else {
        error.textContent = "";
    }
}

// Vérification du format Email
function validateEmail(email) {
    const error = document.getElementById('email-error');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
        error.textContent = "Format d'email invalide (ex: exemple@domaine.com)";
    } else {
        error.textContent = "";
    }
}

// Vérification du Téléphone (10 chiffres)
function validateTel(tel) {
    const error = document.getElementById('tel-error');
    const regexTel = /^0[1-9]([ .\-]?\d{2}){4}$/; //// Regex téléphone FR : 10 chiffres (ex: 0612345678) avec espaces, points ou tirets autorisés
    if (!regexTel.test(tel.value.trim())) {
        error.textContent = "Le téléphone doit contenir 10 chiffres";
    } else {
        error.textContent = "";
    }
}

// Vérification du Sujet
function validateSujet(sujet) {
    const error = document.getElementById('sujet-error');
    if (sujet.value === "") {
        error.textContent = "Veuillez sélectionner un sujet";
    } else {
        error.textContent = "";
    }
}

// Vérification de la longueur du Message (10 à 500)
function validateMessage(message) {
    const error = document.getElementById('message-error');
    if (message.value.trim().length < 10 || message.value.trim().length > 500) {
        error.textContent = "Le message doit faire entre 10 et 500 caractères";
    } else {
        error.textContent = "";
    }
}

// Vérification de la case RGPD
function validateRgpd(rgpd) {
    const error = document.getElementById('rgpd-error');
    if (!rgpd.checked) {
        error.textContent = "Vous devez accepter le traitement de vos données";
    } else {
        error.textContent = "";
    }
}


// --- 3.b : PROGRAMME PRINCIPAL ---

// Attente du chargement complet du DOM
document.addEventListener("DOMContentLoaded", function() {
    
    // Récupération des éléments HTML
    const form = document.getElementById("contact-form");
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const tel = document.getElementById('telephone');
    const sujet = document.getElementById('sujet');
    const message = document.getElementById('message');
    const rgpd = document.getElementById('rgpd');
    const loader = document.getElementById('loader');

    // Écouteurs pour la validation en temps réel
    if (nom) nom.addEventListener('input', () => validateNom(nom));
    if (prenom) prenom.addEventListener('input', () => validatePrenom(prenom));
    if (email) email.addEventListener('input', () => validateEmail(email));
    if (tel) tel.addEventListener('input', () => validateTel(tel));
    if (sujet) sujet.addEventListener('change', () => validateSujet(sujet));
    if (message) message.addEventListener('input', () => validateMessage(message));
    if (rgpd) rgpd.addEventListener('change', () => validateRgpd(rgpd));

    // Contrôle global à la soumission du formulaire
    if (form) {
        form.addEventListener('submit', function(e) {
            
            // Re-validation de tous les champs
            validateNom(nom);
            validatePrenom(prenom);
            validateEmail(email);
            validateTel(tel);
            validateSujet(sujet);
            validateMessage(message);
            validateRgpd(rgpd);

            // Détection des erreurs actives
            const errors = document.querySelectorAll('.error');
            let hasError = false;

            errors.forEach(err => {
                if (err.textContent !== "") {
                    hasError = true;
                }
            });

            // Blocage de l'envoi si au moins une erreur existe
            if (hasError) {
                e.preventDefault();
            } else if (loader) {
                loader.style.display = "block";
            }
        });
    }
});
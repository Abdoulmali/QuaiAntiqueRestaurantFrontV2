const galerieImage = document.getElementById("allImage");

//Récupérer les informations des images
let monImage = getImage("titre", "../image/chef.jpg");


galerieImage.innerHTML = monImage;

function sanitizeHtml(text){
  const tempHtml = document.createElement('div');
  tempHtml.textContent = text;
  return tempHtml.innerHTML;
}

function getImage(titre, urlImage){
  titre = sanitizeHtml(titre);
  titre = sanitizeHtml(urlImage);
  return   ` <div class="col p-3">
      <div class="image-card text-white">
        <img src="${urlImage}" class="rounded w-100" />
        <p class="titre-image">${titre}</p>
        <div class="action-images-buttons" data-show="admin">
          <button type="button" class="btn btn-outline-light">
            <i
              class="bi bi-pencil-square"
              data-bs-toggle="modal"
              data-bs-target="#EditionPhotoModal"
            ></i>
          </button>
          <button type="button" class="btn btn-outline-light">
            <i
              class="bi bi-trash"
              data-bs-toggle="modal"
              data-bs-target="#DeletePhotoModal"
            ></i>
          </button>
        </div>
      </div> `;
}
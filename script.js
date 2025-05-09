async function fetchRandomDogImage() {
  try {
    console.log("buscando imagem de cachorro...");
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    const dogImageURL = data.message;

    console.log("Imagem de cachorro encontrada!");

    return dogImageURL;
  } catch (error) {
    console.error("Erro ao buscar imagem de cachorros: ", error);
    throw error;
  }
}

function displayDogImage(dogImageURL) {
  const imageElement = document.createElement("img");

  imageElement.src = dogImageURL;
  imageElement.alt = "Foto de um cachorro";
  imageElement.style.maxWidth = "100%";

  const container = document.getElementById("dog-container");

  container.innerHTML = "";
  container.appendChild(imageElement);
}

async function loadDogImage() {
  try {
    document.getElementById("status").textContent = "Carregando...";

    const dogImageURL = await fetchRandomDogImage();

    displayDogImage(dogImageURL);

    document.getElementById("status").textContent =
      "Imagem carregada com sucesso!";
  } catch (error) {
    document.getElementById("status").textContent = "Falha ao carregar imagem";
  }
}

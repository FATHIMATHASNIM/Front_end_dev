// Get gallery elements
const gallery = document.querySelector(".gallery");
const images = gallery.querySelectorAll("img");

// Get modal elements
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modalImage");
const close = document.querySelector(".close");

// Function to open the modal
function openModal(image) {
    modal.style.display = "block";
    modalImage.src = image.src;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Attach click event to each image
images.forEach((image) => {
    image.addEventListener("click", () => openModal(image));
});

// Attach click event to the close button
close.addEventListener("click", closeModal);

// Attach click event to the modal to close it
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


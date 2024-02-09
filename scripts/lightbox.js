var lightbox = document.getElementById("lightbox");
var domBody = document.body;
var images = document.getElementsByClassName("lightbox__image");

function showImage ( selectedImage ) {
    var image = images[selectedImage];
    var imageSrc = image.getAttribute("src");
    var imageCaption = image.getAttribute("alt");
    var imageIndex = image.getAttribute("data-index");
    var lightboxImage = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector("figcaption");
    lightboxImage.setAttribute("src", imageSrc);
    lightboxCaption.innerHTML = imageCaption;
    lightbox.setAttribute("data-index", imageIndex);
    imageIndex = selectedImage;
}

function closeLightbox() {
    if (lightbox.classList.contains("lightbox__open")) {
        lightbox.classList.remove("lightbox__open");
    }
    lightbox.classList.add("lightbox__close");

    if (domBody.classList.contains("lightbox__scrollbar-hide")) {
        domBody.classList.remove("lightbox__scrollbar-hide");
    }
    domBody.classList.add("lightbox__scrollbar-auto");

}

function openLightbox( selectedImage ) {
    console.log("openLightbox");
    if (lightbox.classList.contains("lightbox__close")) {
        lightbox.classList.remove("lightbox__close");
    }
    lightbox.classList.add("lightbox__open");
    if (domBody.classList.contains("lightbox__scrollbar-auto")) {
        domBody.classList.remove("lightbox__scrollbar-auto");
    }
    domBody.classList.add("lightbox__scrollbar-hide");
    showImage( selectedImage );
}

function nextImage() {
    console.log("nextButton");
    var imageIndex = lightbox.getAttribute("data-index");
    if (imageIndex < images.length - 1) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    lightbox.setAttribute("data-index", imageIndex);
    showImage( imageIndex );
}

function prevImage() {
    console.log("prevButton");
    var imageIndex = lightbox.getAttribute("data-index");
    if (imageIndex > 0) {
        imageIndex--;
    } else {
        imageIndex = images.length - 1;
    }
    lightbox.setAttribute("data-index", imageIndex);
    showImage( imageIndex );
}
function addKeyEvents () {
    window.addEventListener("keydown", function(event) {
        // if (event.key === "Escape") {
        //     closeLightbox();
        // }
        // if (event.key === "ArrowRight") {
        //     nextImage();
        // }
        // if (event.key === "ArrowLeft") {
        //     prevImage();
        // }
        switch (event.code) {
            case "Escape":
                closeLightbox();
                break;
            case "ArrowRight":
                nextImage();
                break;
            case "ArrowLeft":
                prevImage();
                break;
        }
    });
}
function removeKeyEvents() {
    
}
function createLightbox ( images ) {
    for (var i=0; i < images.length; i++) {
        var image = images[i];
        image.setAttribute("data-index", i);
        image.addEventListener("click", function() {
            var imageIndex = this.getAttribute("data-index");
            openLightbox( imageIndex );
            console.log("imageIndex: " + imageIndex);
        });
    
    }
    // showImage( 0 );

}

createLightbox(images);
addKeyEvents();

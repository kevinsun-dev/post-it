let _img = document.getElementById('post-it-img');
let drawing = new Image;
drawing.onload = function () {
    _img.src = this.src;
}

let latest_img = 9;
let index = latest_img; //latest image

function setImage() {
    if (window.location.hash) {
        let hash = window.location.hash.substring(1);
        try {
            index = parseInt(hash);
        } catch (e) { }
    }

    index = Math.min(Math.max(0, index), latest_img);

    drawing.src = 'img/' + index + '.jpg';
}

function locationHashChanged() {
    setImage();
}

document.getElementById('btn-left').onclick = () => {
    index--;
    index = Math.min(Math.max(0, index), latest_img);
    window.location.href = "#" + index;
}

document.getElementById('btn-right').onclick = () => {
    index++;
    index = Math.min(Math.max(0, index), latest_img);
    window.location.href = "#" + index;
}

window.onhashchange = locationHashChanged;

setImage();
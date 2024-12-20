const { create } = require('domain');
const fs = require('fs');
const request = require('request');

const images = {};



const download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};



function downloadImages() {
    Object.keys(images).forEach(key => {
        let image = images[key];
        download(image.mediaUrl + "~rt_auto-sc_300.300.png", "./us/wedding/images/" + image.mediaApiId + "~rt_auto-sc_300.300.png", function () {
            console.log("done");
    });
});
}

function fullSizeImages() {
    Object.keys(images).forEach(key => {
        let image = images[key];
        const height = image.height;
        const width = image.width;
        const params = `~rt_auto-cr_0.0.${width}.${height}-rs_${width}.${height}.png`;
        download(image.mediaUrl+params, "./us/wedding/photos/images/" + image.mediaApiId + params, function () {
            console.log("done");
    });
});
}

function cleanUp() {
    if (fs.existsSync("./us/wedding/images/")) {
        fs.rmdirSync("./us/wedding/images/", { recursive: true });
    }
    if (fs.existsSync("./us/wedding/photos/images/")) {
        fs.rmdirSync("./us/wedding/photos/images/", { recursive: true });
    }
    fs.mkdirSync("./us/wedding/images/");
    fs.mkdirSync("./us/wedding/photos/images/");

}

cleanUp();
downloadImages();
fullSizeImages();
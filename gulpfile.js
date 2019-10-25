const {src, dest} = require('gulp');
imagemin = require('gulp-imagemin'),
fs = require('fs'),
path = require('path');
imagemin = require('gulp-imagemin'),
//imageminWebp = require('imagemin-webp'),
imageminJpegtran = require('imagemin-jpegtran'),
imageminPngquant = require('imagemin-pngquant'),
// //imageminGifSicle = require('imagemin-gifsicle'),
imageminOptiPng = require('imagemin-optipng'),
function main() {
    console.log("task is live")
    return;
}

function compress() {
    return src('src/imgs/**/*.{jpg|png}')
    .pipe(imagemin([ 
        imagemin.jpegtran(),
        imagemin.optipng(),
        imageminJpegtran(),
        imageminPngquant()
    ]))
    .pipe(dest('src/imgs'))
}

exports.compress = compress;
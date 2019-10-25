const {src, dest} = require('gulp');
const imagemin = require('gulp-imagemin');
const fs = require('fs');
const path = require('path');
//imageminWebp = require('imagemin-webp'),
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
// //imageminGifSicle = require('imagemin-gifsicle'),

function main() {
    console.log("task is live")
    return;
}

function compress() {
    return src('src/imgs/**')
    .pipe(imagemin([ 
        imagemin.jpegtran(),
        imagemin.optipng(),
        imageminJpegtran(),
        imageminPngquant()
    ]))
    .pipe(dest('src/imgs'))
}

exports.compress = compress;
exports.default = main;
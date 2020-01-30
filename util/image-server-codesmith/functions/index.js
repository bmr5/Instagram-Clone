const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const app = express();

const linkArray = [
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/048.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/18166-shivling-whatsapp-image-and-dp.jpg',
  'http://www.fakeurl.io/fakeimage1.jpeg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/18193-%E0%A4%AD%E0%A5%8B%E0%A4%B2%E0%A5%87%E0%A4%A8%E0%A4%BE%E0%A4%A5-%E0%A4%B5%E0%A5%8D%E0%A4%B9%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B8%E0%A4%AA%E0%A5%8D%E0%A4%AA-%E0%A4%87%E0%A4%AE%E0%A5%87%E0%A4%9C%E0%A5%87%E0%A4%9C.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/18416-navratri-image-for-whatsapp-and-facebook.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/48-x-48-shower-base-view-larger-image-48-x-48-neo-angle-shower-pan.jpg',
  'http://www.fakeurl.io/fakeimage2.jpeg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/50393e0e4a271042dba377c568f6654e.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/6365035-windows-image.png',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Cockatoo_Sulphur-crested+3+(Harvey+Perkins).jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Cockatoo_Sulphur-crested+2+(Geoffrey+Dabb).jpg',
  'http://www.fakeurl.io/fakeimage3.jpeg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Gameplay-Image-1.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/KT002.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/LIHF14_200308091200.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Morning-With-Flower-Image-wg16610.gif',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Original_logo_windows_7_badge_by_18cjoj-d76ek5q_(1).png',
  'http://www.fakeurl.io/fakeimage4.jpeg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/R7312.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Thai_Ruby_Image_courtesy_Gemsjewelrythai.JPG',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Yellow-Rose-Image-Wallpapers-058.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/_DSC6348R.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/a67fc2855aa19d68056125f9678179ca.image.550x550.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/a8cb631f381df97d93a9f455ea44c7bf.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/ebook300.jpg.image.550x550.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/good+morning+image+in+gujarati.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/gwyddzephyrfinal.jpg',
  'http://www.fakeurl.io/fakeimage5.jpeg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/image+(1).jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/image.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/images.jpeg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/large_11234.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/low-profile-toilet-larger-mouse-over-the-image-to-magnify-high-profile-toilet-seat.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/mantis.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/media-box-image-shows-childrens-theatre-wctdracula-media-box-14991-image.png',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/media-box-image-shows-childrens-theatre-wctshrek-media-box-15009-image.png',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/outdoor-lighting-bollards-uk-bollard-lights-garden-light-full-image-for-exterior.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/stacks-image-afec165.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/stock-photo-image-of-a-mans-hand-showing-thumb-up-rainbow-flag-264495.jpg',
  'https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/wonderful-funny-animal-posters-and-interesting-ideas-of-cool-animals-pictures-demotivational-6.jpg',
];

app.use(cors());

app.get('/images', (req, res) => res.json(linkArray));

app.all('*', (req, res) => res.sendStatus(404));

exports.app = functions.https.onRequest(app);

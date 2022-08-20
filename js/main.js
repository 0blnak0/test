//切换图片
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'css/images/banner.jpg') {
      myImage.setAttribute('src', 'css/images/wallhaven-nmvyv8.jpg');
    } else {
      myImage.setAttribute('src', 'css/images/banner.jpg');
    }
}

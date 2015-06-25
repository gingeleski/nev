var backgroundCount = 6;
var profileImgCount = 6;

function randomizeBackground() {
    var num = Math.ceil( Math.random() * backgroundCount );
    document.body.background = 'img/background/bg' + num + '.jpg';
    document.body.style.backgroundSize = "cover";
}

function randomizeProfileImg() {
    var num = Math.ceil( Math.random() * profileImgCount );
    document.getElementById('profileImg').src = 'img/profile/pro' + num + '.png';
}

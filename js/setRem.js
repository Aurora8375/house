function setRem() {
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    console.log(client_w);
    client_w = client_w > 800 ? 800 : client_w;
    client_w = client_w < 350 ? 350 : client_w;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / 375) * 10 + 'px';
    console.log(client_w / 375 * 10 + 'px');
}
setRem();
var time = null;
window.onresize = function () {
    clearTimeout(time)
    time = setTimeout(setRem, 100)
}
var pinTimeout = null;
function changePassToBullet(id) {
    clearTimeout(pinTimeout);
    var str = id.val();
    if (str.length > 1) {
        var s = '';
        for (var i = 0;i< (str.length - 1);i++){
            s += "●";
        }
        id.val(s + str[str.length - 1]);
        pinTimeout = setTimeout(function () {
            id.val((id.val().substring(0, id.val().length - 1)) + "●");
        }, 1000);
    } else if (str.length === 1) {
        pinTimeout = setTimeout(function () {
            id.val("●");
        }, 1000);
    }
}

var isPalindrome = function(x) {
    let save = String(x);
    c = 0;
    for (let [z, d] = [0, 1]; z < save.length; z++, d++){
        if ((save[z]) == String(save[save.length - d])) {
            c++;
        }
        console.log( String(save[save.length - d]));

    }


    if (c == save.length) {
        return true
    }else {
        return false
    }

};

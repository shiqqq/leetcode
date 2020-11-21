/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 == 1){
        return false;
    }

    let map = new Map();
    map.set('{', '}');
    map.set('[', ']');
    map.set('(', ')');

    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            stack.push(map.get(s[i]));
        }else{
            if(s[i] !== stack.pop()){
                return false;
            }
        }
    }
    if(stack.length !== 0){
        return false;
    }
    return true;
};
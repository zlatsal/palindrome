function palindrome(str) {
    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    var reversed = smallStr.spplit("").reverse().join("");
    if (reversed === smallStr) return true;
        
    return false;
}

palindrome("eye");
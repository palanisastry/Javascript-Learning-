function ispalindrome(str)
{
    left =0;
    right =str.length-1;
    for (let i=0;i<str.length/2;i++){
        if (str[left] !== str[right]){   
            return false;
    }
    left++;
    right--;    
    }   
    return true;
}
console.log(ispalindrome("madam")); 
console.log(ispalindrome("palani"));
console.log(ispalindrome("racecar"));
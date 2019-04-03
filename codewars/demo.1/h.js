function generateHashtag(s) {  
    return s.toLowerCgenerateHashtagase().split(/\s+/).map(function(item, index) {  
        return item.slice(0, 1).toUpperCase() + item.slice(1);  
    }).join(' ');  
}  
console.log(generateHashtag("hello miss dong"));
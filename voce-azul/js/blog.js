document.addEventListener('DOMContentLoaded', function(){ 
    let searchbtn = document.getElementById('mobile-search-button');

    searchbtn.onclick = function(e) {
        let sb = document.querySelector('.searchbar');
        console.log(sb.classList);

        if(sb.classList.contains('mobile-search-bar')) {
            sb.classList.remove('mobile-search-bar');
        } else {
            sb.classList.add('mobile-search-bar');
        }
    }
}, false);
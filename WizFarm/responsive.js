window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    if (width < 500) {
        document.querySelector('header').style.display = 'none';
        document.querySelector('.mainName').style.fontSize = '2em';
        document.querySelector('.subName').style.fontSize = '1em';
        document.querySelector('.imgcontainer').style.justifyContent = 'center';
        document.querySelector('.imgSq').style.width = '80vw';
        document.querySelector('.imgSq').style.height = '80vh';
        document.querySelector('#event2').style.display = 'none';
        document.querySelector('#event3').style.display = 'none';
        document.querySelector('#event4').style.display = 'none';
    } else if (width < 1000) {
        document.querySelector('header').style.display = 'flex';
        document.querySelector('.mainName').style.fontSize = '3em';
        document.querySelector('.subName').style.fontSize = '1.5em';
        document.querySelector('.imgcontainer').style.justifyContent = 'space-between';
        document.querySelector('.imgSq').style.width = '40vw';
        document.querySelector('.imgSq').style.height = '40vh';
        document.querySelector('#event2').style.display = 'flex';
        document.querySelector('#event3').style.display = 'flex';
        document.querySelector('#event4').style.display = 'flex';
    } else {
        document.querySelector('header').style.display = 'flex';
        document.querySelector('.mainName').style.fontSize = '5em';
        document.querySelector('.subName').style.fontSize = '2em';
        document.querySelector('.imgcontainer').style.justifyContent = 'space-between';
        document.querySelector('.imgSq').style.width = '30vw';
        document.querySelector('.imgSq').style.height = '30vh';
        document.querySelector('#event2').style.display = 'flex';
        document.querySelector('#event3').style.display = 'flex';
        document.querySelector('#event4').style.display = 'flex';
    }
});

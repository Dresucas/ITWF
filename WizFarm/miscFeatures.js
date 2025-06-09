window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight * 0.9) {
        if (!document.querySelector('.scrollTop')) {
            var button = document.createElement('button');
            button.className = 'scrollTop';
            button.style.position = 'fixed';
            button.style.fontSize = '1em';
            button.style.bottom = '1em';
            button.style.right = '1em';
            button.style.background = 'black';
            button.style.width = '3em';
            button.style.height = '3em';
            button.style.borderRadius = '50%';
            button.style.border = 'none';
            button.style.cursor = 'pointer';
            button.style.outline = 'none';
            button.style.color = 'white';
            button.style.transition = 'transform 0.3s, box-shadow 0.3s';
            button.addEventListener('mouseenter', function() {
                button.style.transform = 'scale(1.1)';
                button.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
            });
            button.addEventListener('mouseleave', function() {
                button.style.transform = 'scale(1)';
                button.style.boxShadow = 'none';
            });
            button.style.zIndex = '1000';
            button.innerHTML = 'Up';
            button.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            document.body.appendChild(button);
        }
    } else if (document.querySelector('.scrollTop')) {
        document.querySelector('.scrollTop').remove();
    }
});

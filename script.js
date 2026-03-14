window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-links li a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
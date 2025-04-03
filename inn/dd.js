document.addEventListener('DOMContentLoaded', function() {


    const contactLink = document.querySelector('a[href="#cont"]');


    if (contactLink) {

        contactLink.addEventListener('click', function(event) {
            event.preventDefault();


            const contactSection = document.getElementById('cont');

            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});


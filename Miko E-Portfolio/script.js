document.addEventListener('DOMContentLoaded', () => {
    
    //Dynamic Content Toggle (Show/Hide Project Details)
    const detailButtons = document.querySelectorAll('.details-btn');
    
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                this.textContent = 'Show Less';
            } else {
                content.classList.add('hidden');
                this.textContent = 'View Details';
            }
        });
    });
    //Form Validation
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        if (!email.includes('@')) {
            feedback.style.color = 'red';
            feedback.textContent = 'Please enter a valid email address.';
        } else {
            feedback.style.color = 'white';
            feedback.textContent = 'Message sent successfully! Wait for a reply';
            contactForm.reset();
        }
    });
    document.getElementById('explore-btn').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
});
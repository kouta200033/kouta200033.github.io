const text = 'IT・Security・Programming';

let i = 0;

function type() {

    if (i < text.length) {

        document.getElementById('typing').textContent += text[i];

        i++;

        setTimeout(type, 90);
    }
}

type();

const fades = document.querySelectorAll('.fade');

fades.forEach(element => {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');
            }
        });

    });

    observer.observe(element);
});

document
    .getElementById('theme-toggle')
    .addEventListener('click', () => {

        document.body.classList.toggle('light');
    });
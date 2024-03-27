function createSection(headline, paragraph) {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    h2.textContent = headline;
    section.appendChild(h2);

    if (paragraph) {
        p.textContent = paragraph;
        section.appendChild(p);
    }

    return section;
}

function createProductSection(imageUrl, headline, description){
    const section = document.createElement('section');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    img.src = imageUrl;
    section.appendChild(img);

    h2.textContent = headline;
    section.appendChild(h2);

    if (description) {
        p.textContent = description;
        section.appendChild(p);
    }

    section.className = "product"

    return section;
}

export { createSection, createProductSection }
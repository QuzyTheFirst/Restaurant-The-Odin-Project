import { createSection, createProductSection } from "./section";
import calamariImg from "./images/calamari.jpg";
import saladImg from "./images/salad.jpg";
import mushroomsImg from "./images/mushrooms.jpg";
import shrimpImg from "./images/shrimps.jpg";

function createMenuPage(content){
    const section1 = createSection("Taste Haven Menu");
    const section2 = createProductSection(calamariImg,"Crispy Calamari", "Tender calamari rings lightly breaded and fried to perfection. Served with a zesty marinara sauce for dipping.");
    const section3 = createProductSection(saladImg, "Caprese Salad", "Fresh buffalo mozzarella, ripe tomatoes, and basil leaves drizzled with balsamic glaze and extra virgin olive oil.");
    const section4 = createProductSection(mushroomsImg, "Stuffed Mushrooms", "Juicy mushroom caps stuffed with a savory mixture of spinach, garlic, and parmesan cheese, then baked until golden brown.");
    const section5 = createProductSection(shrimpImg, "Shrimp Tempura", "Crispy tempura-battered shrimp served with a tangy soy dipping sauce and a side of pickled ginger.");

    content.appendChild(section1);
    content.appendChild(section2);
    content.appendChild(section3);
    content.appendChild(section4);
    content.appendChild(section5);
}

export {createMenuPage}
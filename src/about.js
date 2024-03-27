import { createSection } from "./section"

function createAboutPage(content){
    const section1 = createSection("About Taste Haven", "Welcome to Taste Haven, where passion for food meets dedication to hospitality. Founded in 2004, Taste Haven has been a beloved culinary destination in Daugavpils for 20 years. Our journey began with a simple vision: to create a dining experience that celebrates the joy of good food, shared with friends and family in a welcoming atmosphere.");
    const section2 = createSection("Our Story", "Taste Haven was born out of a love for great food and a desire to create a gathering place where guests could enjoy delicious cuisine in a relaxed setting. Our founder, [Founder's Name], drew inspiration from their travels around the world, discovering diverse flavors and culinary traditions. With a commitment to excellence and a passion for hospitality, Taste Haven quickly became a beloved fixture in the local dining scene.");
    const section3 = createSection("Our Philosophy", "At Taste Haven, we believe that food is more than just sustenance – it's a form of art that nourishes the body and soul. That's why we're dedicated to sourcing the freshest, highest-quality ingredients and transforming them into dishes that delight the senses. Our culinary philosophy is rooted in simplicity, authenticity, and creativity, allowing us to create memorable meals that leave a lasting impression.");

    content.appendChild(section1);
    content.appendChild(section2);
    content.appendChild(section3);
}

export {createAboutPage}
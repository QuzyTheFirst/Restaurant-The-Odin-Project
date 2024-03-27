import { createSection } from "./section";

function createHomePage(content){
    const section1 = createSection("Welcome to our restaurant!","Indulge your senses in an exquisite culinary journey at Taste Haven, where every dish is crafted with passion and precision. Nestled in the heart of Daugavpils, our restaurant offers a warm and inviting ambiance, perfect for intimate dinners, family gatherings, and celebrations alike.");
    const section2 = createSection("Our Culinary Philosophy", "At Taste Haven, we believe in the power of simplicity infused with creativity. Our culinary team meticulously selects the finest ingredients, sourced locally whenever possible, to create dishes that tantalize the taste buds and evoke a sense of comfort and satisfaction. From classic favorites to innovative creations, our menu reflects a harmonious blend of flavors from around the world, ensuring there's something to please every palate.");
    const section3 = createSection("Exceptional Dining Experience", "Whether you're craving a hearty meal after a long day or looking to savor a special occasion, Taste Haven promises an exceptional dining experience from start to finish. Our attentive staff is dedicated to providing impeccable service, ensuring that every visit leaves a lasting impression.");
    const section4 = createSection("Discover Our Menu", "Explore our diverse menu featuring a delectable array of appetizers, entrees, and desserts, all expertly crafted to please discerning taste buds. From succulent steaks and fresh seafood to vibrant vegetarian options, each dish is a testament to our commitment to quality and flavor.");

    content.appendChild(section1);
    content.appendChild(section2);
    content.appendChild(section3);
    content.appendChild(section4);
}

export {createHomePage}
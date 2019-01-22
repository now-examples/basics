import { Sushi } from "../../../types";

// Imagine this is a DB query.
export const getSushi = (type: Sushi["type"]): Sushi => {
  switch (type) {
    case "maki":
      return {
        type,
        description:
          "Maki is a type of sushi roll that includes toasted seaweed nori rolled around vinegar-flavored rice and various fillings, including raw seafood and vegetables. The word maki means “roll.”",
        pictureURL:
          "https://upload.wikimedia.org/wikipedia/commons/8/81/Maki_Sushi_Lunch_on_green_leaf_plate.jpg",
        title: "Maki"
      };
    case "temaki":
      return {
        type,
        description:
          "Temaki sushi, also known as hand rolled sushi, is a popular casual Japanese food. The conelike form of temaki incorporates rice, specially prepared seaweed called nori, and a variety of fillings known as neta.",
        pictureURL:
          "https://www.publicdomainpictures.net/pictures/270000/velka/japanese-food.jpg",
        title: "Temaki"
      };
    case "uramaki":
      return {
        type,
        description:
          "Uramaki is a sushi roll made with rice on the outside and seaweed on the inside. Uramaki can be made with a number of fillings.",
        pictureURL:
          "https://c1.staticflickr.com/1/772/20940700515_865e26d4a0_b.jpg",
        title: "Uramaki"
      };
    case "nigiri":
      return {
        type,
        description:
          "Nigiri is a hand-formed ball of rice, with a slice of fish over the top. If you take out the rice, you have Sashimi! Maki is a type of roll in which the seaweed wrap is on the outside of the roll.",
        pictureURL:
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Salmon_Nigiri_Sushi_with_chopsticks%2C_2008.jpg",
        title: "Nigiri"
      };
    case "sashimi":
      return {
        type,
        description:
          "Sashimi is a Japanese delicacy consisting of very fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce.",
        pictureURL:
          "https://c1.staticflickr.com/3/2441/3537413421_cd7cff0b70_b.jpg",
        title: "Sashimi"
      };
    case "sasazushi":
      return {
        type,
        description:
          "In Japanese, “sasa” is a bamboo leaf, and sasazushi is sushi consisting of rice and toppings wrapped in a bamboo leaf. Sasazushi is thought to have come from the Nagano prefecture during the Warring States period (1467–1573), and differing accounts say that its origin was either because food was served on bamboo leaves, or because Nagano locals were looking for a dish to impress the visiting samurai warlord of the time, Uesugi Kenshin. Toppings include a wide range of wild vegetables such as mugwort and bamboo shoots, walnuts, mushrooms, miso, shredded omelet and salmon.",
        pictureURL:
          "https://farm6.staticflickr.com/5580/14901914857_3f7aa6b2dc_k.jpg",
        title: "Sasazushi"
      };
    default:
      throw new Error("This sushi type does not exist.");
  }
};

import { getAuth, refresh } from "./auth";

// TEMPORARY
export interface ArticleSection {
  id: number;
  title: string;
  type: string;
  text?: string;
  imgUrl?: string;
}
export interface Blog {
  imgUrls: string[];
  title: string;
  display: string;
  id: number;
  sections: ArticleSection[];
  datePublished: string;
  category: string;
}
let articles: Blog[] = [
  {
    id: 0,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "guide",
    display:
      "Indonesia's Island Paradise: A Comprehensive Guide to Must-Visit Gems",
    sections: [
      {
        id: 0,
        title: "Intro",
        type: "INTR",
        text: "Indonesia, an archipelagic wonder in Southeast Asia, boasts an incredible array of islands that cater to every traveler's dream. From pristine beaches to cultural treasures, this diverse nation has something for everyone. In this article, we'll explore the top islands in Indonesia, highlighting both popular tourist destinations and hidden gems off the beaten path.",
      },
      {
        id: 1,
        title: "Bali - The Jewel of the Archipelago",
        type: "TXT",
        text: `Known as the "Island of the Gods," Bali is Indonesia's most iconic destination. Famous for its lush landscapes, vibrant culture, and stunning beaches, Bali offers a perfect blend of relaxation and adventure. From the sacred temples of Ubud to the surfers' paradise in Kuta, Bali is a must-visit for any traveler seeking a tropical escape.`,
      },
      {
        id: 2,
        title: "Komodo Island - Home of the Dragons",
        type: "TXT",
        text: `For the adventurous souls, Komodo Island is a unique gem. Apart from being the habitat of the Komodo dragon, the world's largest lizard, the island offers breathtaking landscapes, vibrant coral reefs, and unparalleled diving experiences. Exploring Komodo National Park is like stepping into a prehistoric world.
        `,
      },
      {
        id: 3,
        title: "Java - A Tapestry of Culture and Volcanoes",
        type: "TXT",
        text: `Java, the most populous island, is a cultural and historical treasure trove. From the ancient temples of Borobudur to the vibrant street life of Jakarta, Java offers a rich blend of tradition and modernity. Don't miss the chance to hike to the summit of Mount Bromo for a sunrise spectacle.        `,
      },
      {
        id: 4,
        title: "Gili Islands - Tranquil Oasis in Lombok",
        type: "TXT",
        text: `Nestled off the coast of Lombok, the Gili Islands (Gili Trawangan, Gili Meno, and Gili Air) are a paradise for beach lovers and underwater enthusiasts. These car-free islands boast crystal-clear waters, vibrant coral reefs, and a laid-back atmosphere that makes them perfect for a relaxing getaway.        `,
      },
      {
        id: 5,
        title: "Raja Ampat - The Crown Jewel of Coral Diversity",
        type: "TXT",
        text: `Raja Ampat, located in West Papua, is a haven for marine biodiversity. With its unparalleled coral reefs and diverse marine life, this archipelago is a mecca for snorkelers and scuba divers. Explore hidden lagoons, encounter rare species, and immerse yourself in the untouched beauty of this remote paradise.`,
      },
      {
        id: 6,
        title: "Sumatra - Untamed Wilderness and Orangutans",
        type: "TXT",
        text: `Sumatra, the sixth-largest island, is a haven for nature enthusiasts. Home to lush rainforests, vast lakes, and unique wildlife, Sumatra offers a chance to witness orangutans in their natural habitat at Gunung Leuser National Park. The beauty of Lake Toba and the adventurous Bukit Lawang are additional highlights.`,
      },
      {
        id: 7,
        title: "Flores - The Enchanting Island of Diversity",
        type: "TXT",
        text: `Flores, often overlooked, is a hidden gem with diverse landscapes. From the tri-colored Kelimutu Crater Lakes to traditional villages and unspoiled beaches, Flores showcases Indonesia's cultural and natural diversity. Embark on a journey through this island to discover its hidden wonders.`,
      },
      {
        id: 8,
        title: "Sulawesi - A Cultural Melting Pot",
        type: "TXT",
        text: `Sulawesi, shaped like an orchid, is a cultural melting pot with distinct traditions and landscapes. Dive into the vibrant markets of Makassar, explore the unique Toraja culture, and dive in the pristine waters of Bunaken Marine Park for an unforgettable experience.`,
      },
      {
        id: 9,
        title: "Pulau Weh - The Hidden Gem of Aceh",
        type: "TXT",
        text: `Pulau Weh, situated at the northwestern tip of Sumatra, is a secluded paradise for those seeking tranquility. With pristine beaches, excellent diving spots, and a relaxed atmosphere, Pulau Weh remains off the tourist radar, offering an authentic escape.        `,
      },
      {
        id: 10,
        title: "Conclusion - Crafting Your Indonesian Island Adventure",
        type: "CONC",
        text: `Indonesia, with its diverse islands, beckons travelers with a promise of adventure, cultural richness, and natural beauty. Whether you're drawn to the bustling energy of Bali or the untouched wilderness of Sumatra, each island has a unique story to tell. Embrace the diversity, savor the flavors, and embark on a journey through Indonesia's island paradise. Your adventure awaits!`,
      },
    ],
    datePublished: "27-01-2024",
    category: "popular-destinations",
  },
  {
    id: 1,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "tips",
    display:
      "Indonesia: A Diverse and Delightful Destination for Foreign Tourists",
    sections: [
      {
        id: 0,
        title: "Intro",
        type: "INTR",
        text: `Indonesia is a country that offers something for everyone. Whether you are looking for natural beauty, cultural diversity, historical heritage, or culinary adventure, you will find it in this archipelago of more than 17,000 islands. Indonesia is home to more than 300 ethnic groups, each with their own traditions, languages, religions, and cuisines. It is also rich in biodiversity, with more than 10% of the world's plants, 12% of the world's mammals, and 17% of the world's bird species. Indonesia is a place where you can experience the wonders of nature, the charm of culture, and the warmth of hospitality.`,
      },
      {
        id: 1,
        title: "",
        type: "TXT",
        text: `If you are planning to visit Indonesia, here are some tips and highlights that will help you make the most of your trip:`,
      },
      {
        id: 2,
        title: "",
        type: "BLT",
        text: `Choose your destination wisely. Indonesia is a vast and diverse country, and you cannot see everything in one visit. Depending on your interests and preferences, you can choose from a variety of destinations, such as Bali, Jakarta, Yogyakarta, Lombok, Komodo, Raja Ampat, Sumatra, Sulawesi, and many more. Each destination has its own attractions and features, so do some research before you book your flight and accommodation.      `,
      },
      {
        id: 3,
        title: "",
        type: "BLT",
        text: `Respect the local customs and laws. Indonesia is a predominantly Muslim country, with some regions having strict Islamic laws and regulations. You should always dress modestly, especially when visiting religious sites, and avoid public displays of affection. You should also be aware of the local etiquette, such as taking off your shoes before entering a house, greeting people with a smile and a handshake, and using your right hand for eating and giving. You should also avoid any involvement in illegal activities, such as drugs, gambling, or prostitution, as they can result in severe penalties.`,
      },
      {
        id: 4,
        title: "",
        type: "BLT",
        text: `Try the local food and drinks. Indonesia is a paradise for food lovers, as it offers a wide range of dishes and flavors, influenced by various cultures and regions. You can find everything from spicy curries, to sweet desserts, to exotic fruits, to refreshing beverages. Some of the most popular and delicious Indonesian dishes are nasi goreng (fried rice), rendang (spicy beef stew), sate (skewered meat), gado-gado (mixed vegetable salad), bakso (meatball soup), and mie goreng (fried noodles). You can also try some of the local drinks, such as teh botol (bottled tea), kopi luwak (civet coffee), es kelapa muda (young coconut water), and tuak (palm wine).`,
      },
      {
        id: 5,
        title: "",
        type: "BLT",
        text: `Explore the hidden gems and off-the-beaten-path spots. Indonesia is full of surprises and secrets, and you can discover some of the most amazing and unique places if you venture beyond the touristy areas. You can find hidden waterfalls, caves, beaches, islands, villages, temples, and more, that will make you feel like you are in a different world. Some of the hidden gems that you can visit are Tiu Kelep Waterfall in Lombok, Goa Jomblang in Yogyakarta, Belitung Island in Sumatra, Tana Toraja in Sulawesi, and Banda Islands in Maluku.`,
      },
      {
        id: 6,
        title: "",
        type: "BLT",
        text: `Enjoy the activities and adventures. Indonesia is not only a place to see, but also a place to do. You can find a variety of activities and adventures that will suit your taste and thrill level. You can go hiking, biking, rafting, diving, surfing, snorkeling, kayaking, fishing, wildlife watching, and more. You can also experience some of the cultural and traditional activities, such as watching a wayang (shadow puppet) show, joining a gamelan (percussion orchestra) workshop, learning batik (wax-resist dyeing) or ikat (tie-dyeing) techniques, or participating in a ceremony or festival.`,
      },
      {
        id: 7,
        title: "",
        type: "CONC",
        text: `Indonesia is a country that will captivate you with its diversity and delight you with its beauty. It is a destination that will make you want to come back again and again. So, what are you waiting for? Book your ticket and pack your bags, and get ready for an unforgettable journey to Indonesia.`,
      },
    ],
    datePublished: "27-01-2024",
    category: "popular-destinations",
  },
  {
    id: 2,
    imgUrls: ["images/toraja-cover.jpg"],
    title: "discovering",
    display:
      "Discovering Sulawesi: Unveiling Cultural Riches, Breathtaking Landscapes, and Vibrant Cities",
    sections: [
      {
        id: 0,
        title: "Intro",
        type: "INTR",
        text: `Nestled in the heart of Indonesia, Sulawesi Island stands as a captivating blend of cultural diversity and natural wonders. This unique destination boasts a tapestry of landscapes, from lush rainforests to pristine beaches, and cities that pulsate with vibrant energy. In this article, we'll embark on a journey through Sulawesi, exploring its cities and unveiling the must-visit places that make it a hidden gem for any avid traveler.`,
      },
      {
        id: 1,
        title: "Sulawesi's Tapestry - A Cultural and Geographic Marvel",
        type: "TXT",
        text: `Sulawesi, shaped like an orchid, is a haven for those seeking a unique Indonesian experience. The island is not only celebrated for its diverse landscapes but is also a melting pot of cultures. As you traverse Sulawesi, you'll encounter traditional villages, vibrant markets, and ancient customs that weave a rich tapestry of heritage.`,
      },
      {
        id: 2,
        title: "Makassar - Gateway to Sulawesi's Rich Heritage",
        type: "TXT",
        text: `Commence your Sulawesi exploration in Makassar, the bustling capital and the island's gateway. This city is a vibrant blend of historical significance and modern allure. Stroll through Fort Rotterdam, an imposing 17th-century fortress, and immerse yourself in the lively atmosphere of Losari Beach, where locals gather to savor mouthwatering seafood.`,
      },
      {
        id: 3,
        title: "Tana Toraja - A Cultural Odyssey Amidst Stunning Landscapes",
        type: "TXT",
        text: `Venture north to Tana Toraja, a region that unfolds like a cultural odyssey against a backdrop of breathtaking landscapes. Renowned for its elaborate funeral ceremonies and distinct traditional architecture, Tana Toraja offers a unique insight into the Torajan way of life. The terraced rice fields and lush hillsides create a mesmerizing setting for exploration.`,
      },
      {
        id: 4,
        title: "Bunaken Marine Park - Diving into Underwater Paradise",
        type: "TXT",
        text: `For aquatic enthusiasts, Bunaken Marine Park near Manado is a must-visit destination. Dive into the crystal-clear waters to discover an underwater paradise teeming with vibrant coral reefs and diverse marine life. The park's conservation efforts have preserved its pristine beauty, making it a haven for snorkelers and scuba divers alike.`,
      },
      {
        id: 5,
        title: "Gorontalo - A Hidden Gem for Nature Lovers",
        type: "TXT",
        text: `Gorontalo, often overlooked, is a hidden gem for nature lovers. The Limboto Lake, surrounded by lush hills, offers a tranquil escape, while the Olele Marine Park beckons with its pristine beaches and vibrant coral gardens. Gorontalo's untouched beauty provides a serene alternative to the more popular tourist spots.`,
      },
      {
        id: 6,
        title: "Palu - A City Rebuilding Amidst Natural Splendor",
        type: "TXT",
        text: `Palu, the capital of Central Sulawesi, is a city on the mend after the earthquake and tsunami in 2018. Despite its challenges, Palu boasts natural beauty, including the scenic Talise Beach and the Lore Lindu National Park. The city is a testament to resilience, offering travelers a glimpse into the indomitable spirit of Sulawesi.`,
      },
      {
        id: 7,
        title: "Poso - Tranquil Retreat Amidst Mountains and Lakes",
        type: "TXT",
        text: `Poso, situated in Central Sulawesi, is a serene retreat surrounded by mountains and lakes. The Bada Valley, with its ancient megaliths and archaeological sites, offers a journey back in time. Explore the tranquil Lake Poso, one of Sulawesi's largest lakes, and unwind in the peaceful ambiance that characterizes this off-the-beaten-path destination.`,
      },
      {
        id: 8,
        title: "Kendari - Gateway to Southeast Sulawesi's Charms",
        type: "TXT",
        text: `As you venture southeast, Kendari emerges as a gateway to the wonders of Southeast Sulawesi. This coastal city offers a blend of modernity and natural beauty. Explore the Wakatobi Islands, a renowned marine reserve, and witness the vibrant marine life that makes this region a paradise for underwater enthusiasts.`,
      },
      {
        id: 9,
        title: "Gorontalo - Exploring the Cultural Capital of North Sulawesi",
        type: "TXT",
        text: `Gorontalo, the cultural capital of North Sulawesi, captivates visitors with its traditional arts and vibrant festivals. The city's lively atmosphere, combined with its historical sites like the Otanaha Fortress, provides a unique glimpse into the region's rich heritage. Don't miss the chance to savor local delicacies in Gorontalo, known for its distinctive culinary offerings.`,
      },
      {
        id: 10,
        title: "Conclusion - Sulawesi's Allure Beyond the Beaten Path",
        type: "CONC",
        text: `Sulawesi's cities and landscapes offer a journey that goes beyond the ordinary, unveiling a destination that celebrates cultural richness and natural beauty. Whether exploring the bustling streets of Makassar, diving into the underwater wonders of Bunaken, or immersing yourself in the traditional rituals of Tana Toraja, Sulawesi promises a travel experience like no other. Embark on this adventure and discover the hidden treasures of Indonesia's captivating Sulawesi Island.`,
      },
    ],
    datePublished: "27-01-2024",
    category: "popular-destinations",
  },
];
async function refreshArticles() {
  console.log("Refreshing articles");
  if (process.env.NEXT_PUBLIC_ARTICLE_URL != null) {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_ARTICLE_URL + "/all");
      if (res.ok) {
        const blogs = await res.json();
        articles = blogs;
        console.log(blogs);
      }
    } catch (e) {
      window.alert("FAILED TO SEND REQUEST TO SERVER");
    }
  } else {
    console.warn("No ARTICLE_URL found");
  }
}

export async function getArticleOfType(type: string): Promise<Blog[]> {
  console.log("j");
  refreshArticles();
  return articles.filter((v) => type == v.category);
}
export async function getArticleByTitle(title: string): Promise<Blog | null> {
  refreshArticles();
  let blog = null;
  articles.forEach((a) => {
    if (a.title == title) {
      blog = a;
    }
  });
  return blog;
}

export async function getAllArticles() {
  await refreshArticles();
  return articles;
}

export async function searchArticles(query: string): Promise<Blog[]> {
  await refreshArticles();
  return articles.filter((a) => {
    let inASection = false;
    a.sections.forEach((s) => {
      if (s.text?.includes(query) || s.title.includes(query)) {
        inASection = true;
      }
    });
    return a.title.includes(query) || a.category.includes(query) || inASection;
  });
}
export default async function addArticle(payload: {
  title: string;
  category: string;
  sections: ArticleSection[];
}) {
  if (!getAuth()) {
    return;
  }
  if (process.env.NEXT_PUBLIC_ARTICLE_URL != null) {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_ARTICLE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAuth().accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        articles = await res.json();
        alert(`Successfully added article with code "${res.status}".`);
      } else if (res.status == 401) {
        refresh();
        // addArticle(payload);
      } else if (res.status == 400) {
        const body: { code: string; details: string; timestamp: string } =
          await res.json();
        alert(
          `${body.code}\nDetails: ${body.details}\nTimestamp: ${body.timestamp}`
        );
      } else {
        alert(`${res.status}: ${await res.json()}`);
      }
    } catch {
      alert("COULD NOT SEND REQUEST TO SERVER");
    }
  } else {
    console.warn("No ARTICLE_URL found");
  }
}

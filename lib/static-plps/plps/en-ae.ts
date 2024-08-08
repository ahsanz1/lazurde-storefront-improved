import { SingleRegionPlpData } from "lib/types/common";
import { generateFacets } from "../functions";
import { categoryIdByRegion } from "general-config";
import {
  bannerBrands,
  bannersDiamond,
  bannersFashionJewelry,
  bannersGiftsOccasions,
  bannersGiftsOccasionsBrand,
  bannersGold,
  bannersJewelry,
  bannersLoveEngagement,
  bannersMissl,
} from "../banners-en-ae";

export const enAe: SingleRegionPlpData = {
  lazurde: {
    lazurde: {
      seo: {
        title: "Buy L'azurde Jewelry in UAE | Page <number> | L'azurde UAE",
        description:
          "Explore our collection of L'azurde jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
      },
      banner: bannerBrands?.lazurde,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["lazurde"],
        }),
      },
    },
    waves: {
      seo: {
        title:
          "Buy Waves Fashion Jewelry in UAE  | Page <number> | L'azurde UAE",
        description:
          "Explore our collection of Waves jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
      },
      banner: bannerBrands?.waves,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["waves"],
        }),
      },
    },
    instyle: {
      seo: {
        title: "Buy Instyle Jewelry in UAE | Page <number> | L'azurde UAE",
        description:
          "Explore our collection of Instyle jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
      },
      banner: bannerBrands?.instyle,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["instyle"],
        }),
      },
    },
    "miss-l": {
      seo: {
        title: "Buy Miss L' Jewelry in UAE | Page <number> | L'azurde UAE",
        description:
          "Explore our collection of Miss L' fashion jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
      },
      banner: bannerBrands?.missl,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["missl"],
        }),
      },
    },
    "shop-by-brand": {
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        lazurde: {
          seo: {
            title: "Buy L'azurde Jewelry in UAE | Page <number> | L'azurde UAE",
            description:
              "Explore our collection of L'azurde jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
          },
          banner: bannerBrands?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
            }),
          },
        },
        instyle: {
          seo: {
            title: "Buy Instyle Jewelry in UAE | Page <number> | L'azurde UAE",
            description:
              "Explore our collection of Instyle jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
          },
          banner: bannerBrands?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyle"] }),
          },
        },
        "miss-l": {
          seo: {
            title:
              "Shop All Miss L' jewelry in UAE | Page <number> | L'azurde UAE",
            description:
              "Explore our collection of Miss L' fashion jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
          },
          banner: bannerBrands?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["missl"] }),
          },
        },
        waves: {
          seo: {
            title:
              "Buy Waves Fashion Jewelry in UAE  | Page <number> | L'azurde UAE",
            description:
              "Explore our collection of Waves jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.",
          },
          banner: bannerBrands?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["waves"] }),
          },
        },
      },
    },
    diamond: {
      seo: {
        title: `Buy Diamond Jewelry | Diamonds in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our exquisite collection of diamond jewelry online in UAE, including rings, necklaces, bracelets & more. Get free delivery & returns with options to buy now & pay later.`,
      },
      banner: bannersDiamond?.diamondJewelry,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Buy Diamond Necklaces & Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond necklaces & pendants online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              category: ["necklace"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Explore Our Exquisite Range of Diamond Necklaces & Pendants </h2>

                <p>Step into the world of diamond necklaces & pendants with L'azurde, where every piece is a celebration of timeless elegance and everlasting beauty. Explore our collection and find the perfect diamond necklace, pendant, tennis necklace, choker, or chain that will illuminate your style and make you feel like a true diamond among gems.</p>
             `,
              },
              content: {
                value: `
                   
                <h2>Diamond Necklaces and Pendants For Every Occasion From UAE</h2>
                
                <p>Elevate your decolletage with the symphony of our captivating diamond necklaces in UAE. Each piece is meticulously crafted to showcase the beauty of diamonds in all their glory. Whether you prefer a simple diamond necklace that exudes understated charm or a luxurious diamond choker that adds a touch of sophistication, our collection offers a variety of styles to suit every taste. One of our favorites is our range of diamond tennis necklaces that create an unbroken circle of love and beauty. You can even choose a simple diamond chain that’s perfect for amping up everyday ensembles. </p>
                
                <p>You can add a touch of magic to that plain chain you have in your collection with our exquisite diamond pendants. These elegant and versatile diamond pendants sparkle and shine to tell their own story and can be styled with different necklaces to create a personalized look. Our collection has diamond pendants that are perfect for both everyday wear and special occasions.</p>
                
                <h2>Diamond Necklaces & Pendants For Effortless Elegance for Every Day</h2>
                
                <p>Discover the allure of simple yet stunning diamond necklaces and pendants that effortlessly elevate your everyday style with us! We believe that diamonds are meant for forever but diamonds are also for every day. So, explore our collection and find everything from everyday pieces that will charm your heart to more magnificent pieces that will surely turn some heads. </p>
                
                <h2>FAQs:</h2>
                
                <h3>How to care for necklaces and pendants?</h3>
                <p>Simply soak your necklace or pendant in lukewarm soap water for a few hours and then pat dry with a dry cloth.</p>
                
                <h3>Is it OK to wear diamond necklace everyday?</h3>
                <p>Yes, You can if the necklace you have is stylsh with a simple design, also you can stack it with gold necklaces for cool look.</p>
                
                <h3>is it possible to stack diamond necklace?</h3>
                <p>Certainly! Stacking diamond necklaces is a trendy way to create a layered look. Opt for varying lengths and styles while ensuring a balanced and cohesive appearance.</p>
                
                `,
              },
            },
          ],
          schema: [
            {
              q: "How to care for necklaces and pendants?",
              a: "Simply soak your necklace or pendant in lukewarm soap water for a few hours and then pat dry with a dry cloth.",
            },
            {
              q: "Is it OK to wear a diamond necklace every day?",
              a: "Yes, you can if the necklace you have is stylish with a simple design. You can also stack it with gold necklaces for a cool look.",
            },
            {
              q: "Is it possible to stack a diamond necklace?",
              a: "Certainly! Stacking diamond necklaces is a trendy way to create a layered look. Opt for varying lengths and styles while ensuring a balanced and cohesive appearance.",
            },
          ],
        },
        rings: {
          seo: {
            title: `Buy Diamond Rings for Women in UAE | Diamond Ring Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond rings online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              category: ["rings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Discover the Allure of Diamond Rings</h2>

              <p>Immerse yourself in the world of diamond rings in UAE, where beauty and sophistication meet to create captivating ensembles. Our collection celebrates the joy of perfectly matched pieces that enhance your allure and celebrate your special moments. Whether you desire diamond rings, gold diamond rings, diamond rings for women, or diamond wedding rings, we invite you to explore and find the perfect symbol of your love and style that resonates with your unique spirit.</p>
              
             `,
              },
              content: {
                value: `
                <h2>Elevate Your Love Story with Diamond Wedding Rings</h2>
                <p>Celebrate the most cherished moments of life with our radiant diamond wedding rings. These exquisite rings symbolize the unbreakable bond between two hearts, capturing the essence of eternal love and commitment. Meticulously crafted and adorned with dazzling diamonds, our diamond wedding rings are a reflection of devotion and everlasting beauty. Embrace the allure of these precious symbols of love, crafted with precision to stand the test of time.</p>
                
                <h2>The Ultimate Glamour - Diamond Rings in UAE</h2>
                <p>Our collection boasts a wide range of options from 18-karat and 21-karat gold to diamonds in different cuts, shapes and carats. Each diamond is sourced ethically and set in a way that it shines with unmatched brilliance when wrapped in your fingers. You can also explore our range of diamond rings in UAE combined with colored stones or pearls that exude style. The choices are endless and we know so is your love for that perfect band. </p>
                
                <h2>FAQs:</h2>
                
                <h3>How long do diamond rings last?</h3>
                <p>Forever! That’s what makes them so special.</p>
                
                <h3>What is most important when buying a diamond ring?</h3>
                <p>You should check the carat and Size.</p>
                
                <h3>Should I wear a diamond ring every day?</h3>
                <p>Yes, most definitely. At L’azurde, we have a wide range of diamond rings that are meant for everyday styling.</p>
                
            
                `,
              },
            },
          ],
          schema: [
            {
              q: "How long do diamond rings last?",
              a: "Forever! That’s what makes them so special.",
            },
            {
              q: "What is most important when buying a diamond ring?",
              a: "You should check the carat and size.",
            },
            {
              q: "Should I wear a diamond ring every day?",
              a: "Yes, most definitely. At L’azurde, we have a wide range of diamond rings that are meant for everyday styling.",
            },
          ],
        },
        bracelets: {
          seo: {
            title: `Buy Diamond Bracelets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond bracelets online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.bracelets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              category: ["bracelets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Shop For Diamond Bracelets for Women From UAE</h2>
                <p>Indulge in sophistication with our stunning collection of diamond bracelets for women in UAE. Each piece is a celebration of femininity and grace, designed to complement every style and occasion. Whether you're looking for a diamond bangle to add a touch of glamour to your party outfit or a delicate diamond chain bracelet for everyday elegance, our collection offers a range of choices to suit your taste.</p>
             
                `,
              },
              content: {
                value: `
                 
                <h2>The Timeless Beauty of Diamond Tennis Bracelets </h2>
                <p>Embrace graceful glamour with our collection of diamond tennis bracelets. We have them in different carats and different cuts. You can choose from tennis bracelets with brilliant cut, baguette cut or even teardrop diamonds. These classic pieces feature a continuous line of brilliant diamonds, capturing the essence of timeless beauty. Elevate your style with the brilliance of these stunning bracelets, perfect for formal events or adding a touch of sophistication to your everyday look.</p>
                
                <h2>Diamond Bangle and Chain Bracelets</h2>
                <p>Apart from tennis bracelets, we also have a beautiful collection of diamond bangle and chain bracelets. These chic and versatile pieces can be worn solo or stacked with other bracelets to create a stylish ensemble. Adorn your wrists with the shimmering beauty of diamonds and let our diamond bangle and chain bracelets elevate your charm.</p>
                
                <p>With L’azurde UAE, you can experience the luxury of shopping for diamond bracelets with the convenience of online shopping. Our online store allows you to explore a wide selection of diamond bracelets from the comfort of your home. From exquisite diamond tennis bracelets that dazzle with every movement to intricately designed diamond charm bracelets that tell a story, find your perfect match with ease.</p>
                
                <h2>FAQs:</h2>
                
                <h3>How tight should a diamond bracelet be?</h3>
                <p>Tight enough that you are comfortable and the bracelet does not slip from your wrist.</p>
                
                <h3>Can I wear my diamond bracelet all the time?</h3>
                <p>Yes, you sure can. Diamonds are durable gemstones and are perfect for everyday wear.</p>
                
                <h3>Are diamond bracelets elastic or inelastic?</h3>
                <p>Diamond bracelets usually come with a clasp to hold them securely.</p>
                `,
              },
            },
          ],
          schema: [
            {
              q: "How tight should a diamond bracelet be?",
              a: "Tight enough that you are comfortable and the bracelet does not slip from your wrist.",
            },
            {
              q: "Can I wear my diamond bracelet all the time?",
              a: "Yes, you sure can. Diamonds are durable gemstones and are perfect for everyday wear.",
            },
            {
              q: "Are diamond bracelets elastic or inelastic?",
              a: "Diamond bracelets usually come with a clasp to hold them securely.",
            },
          ],
        },
        earrings: {
          seo: {
            title: `Buy Diamond Earrings for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond earrings online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              category: ["earrings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Shop For Exquisite Diamond Earrings for Women </h2>
              <p>Explore our elaborate and exquisite collection of diamond earrings for women, a symbol of sophistication and grace. You will be amazed by the attention to detail, the sparkle of the diamonds and the plethora of choices to choose from. Adorn your ears with the enchanting beauty of diamond dangle earrings or the mesmerizing allure of diamond drop earrings. Each design in our collection is a reflection of your refined taste.</p>
             

              `,
              },
              content: {
                value: `
                 
              <h2>Timeless Diamond Stud Earrings</h2>
              <p>Embrace the timeless beauty of diamond stud earrings, a classic must-have in every jewelry collection. You can choose from diamonds in the brilliant cut, baguette cut, teardrops, and more. Our diamond studs are crafted to exude simple elegance and subtle glamour. Whether for a special occasion or everyday wear, these diamond studs will add a touch of brilliance to your style.</p>
              
              <h2>Captivating Diamond Hoop Earrings </h2>
              <p>Classic gold hoops are the best but when they come with a dash of sparkle and shine, they are even better! Our diamond hoop earrings are a modern twist on classic glamour. These stunning earrings offer a bold and sophisticated look that complements any outfit. From delicate designs to bold statement pieces, our diamond hoop earrings are a celebration of individuality and style.</p>
              
              <h2>Effortless Elegance with Diamond Dangle and Drop Earrings</h2>
              <p>When you want something regal and elegant, then look no further than our diamond dangle and drop earrings collection. Let the sparkling diamonds gracefully dance from your ears, enhancing your every movement with beauty and grace. Our collection offers an array of designs, from subtle and delicate to dramatic and eye-catching.</p>
              
              <h2>Shine Without Any Piercing with Diamond Clip-On Earrings </h2>
              <p>Show off your glam side without any piercing with our stunning diamond clip-on earrings. Crafted for comfort and style, these earrings are the perfect choice for those who don't have pierced ears. Enjoy the same elegance and brilliance of diamond earrings with the convenience of clip-on designs.</p>
              
              <h2>Find Your Perfect Match With Earrings From UAE</h2>
              <p>Step into the world of diamond earrings in UAE with L’azurde, where every pair is a statement of elegance and brilliance. Discover our captivating collection of diamond stud earrings, hoop earrings, dangle earrings, drop earrings, and clip-on earrings, all available in 18k and 21k gold. A touch of glamour that will leave you sparkling with confidence.</p>
              
              <h2>FAQs:</h2>
              
              <h3>How long do diamond earrings last?</h3>
              <p>Forever! That’s what makes them so special.</p>
              
              <h3>What should you look for when buying a diamond earring?</h3>
              <p>You should check the carat and shape of the diamond.</p>
              
              <h3>Can you wear a diamond earring every day?</h3>
              <p>Yes, most definitely. Diamonds and gold are durable and perfect for everyday wear.</p>
           
                `,
              },
            },
          ],
          schema: [
            {
              q: "How long do diamond earrings last?",
              a: "Forever! That’s what makes them so special.",
            },
            {
              q: "What should you look for when buying a diamond earring?",
              a: "You should check the carat and shape of the diamond.",
            },
            {
              q: "Can you wear a diamond earring every day?",
              a: "Yes, most definitely. Diamonds and gold are durable and perfect for everyday wear.",
            },
          ],
        },
        sets: {
          seo: {
            title: `Buy Diamond Sets in UAE | Diamond Jewelry Sets | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond jewelry sets online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              category: ["sets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Shop For Diamond Sets with L’azurde UAE</h2>

                <p>At L’azurde, you can explore the world of diamond sets in UAE, where sparkling beauty and elegance combine to create stunning jewelry pieces. Explore our collection and find the perfect diamond necklace set, diamond wedding ring set, diamond bridal jewelry set, or diamond ring set that will captivate your heart and make every moment shine with radiance. You can choose from diamond sets made in classic yellow gold, contemporary white gold or elegant rose gold in 18-karat or 21-karat gold.</p>

                `,
              },
              content: {
                value: `
                
                  <h2>Dazzling Diamond Necklace Sets </h2>
                  <p>Adorn your neckline with a symphony of brilliance with our captivating diamond necklace sets. These enchanting sets are meticulously crafted to showcase the beauty of diamonds in all their glory. From delicate and dainty designs to bold and modern pieces, our diamond necklace sets will make you shine on any occasion.</p>

                  <h2>Celebrate The Perfect Union with our Diamond Sets</h2>
                  <p>Celebrate the perfect union of love with our exquisite diamond wedding ring sets and bridal jewelry sets. Each set is a testament to the eternal bond you share with your partner. Let our diamond sets be a reflection of your commitment and love, symbolizing the beginning of a beautiful journey together.</p>

                  <h2>Captivating Diamond Ring Sets </h2>
                  <p>Our diamond ring sets are designed with timeless glamour that meets modern sophistication. Whether you're looking for a dazzling engagement ring set to match your partner or a special gift for yourself or a loved one, our collection offers a variety of designs to suit every style and taste.</p>

                  <h2>Celebrate Life's Precious Moments with Diamond Sets</h2>
                  <p>Mark life's most precious moments with our extraordinary diamond sets. From engagements and weddings to anniversaries and other celebrations, our sets are designed to be a cherished reminder of love and joy. We believe in the best quality and each of our sets is made using diamonds that are ethically sourced and set with utmost precision that makes them sparkle from every angle. So, go ahead and make our diamond sets a part of your story, creating memories that last a lifetime. </p>

                  <h2>FAQs:</h2>

                  <h3>Can diamond sets be worn every day?</h3>
                  <p>A simple set of diamond studs and necklace can be worn every day as diamonds are highly durable and the strongest gemstone.</p>

                  <h3>What does a diamond set include?</h3>
                  <p>At L'azurde, we have diamond sets with necklace and earrings as well as sets that include everything from necklace, earrings, ring and bracelet.</p>

                  <h3>How can i choose a diamond jewelry set?</h3>
                  <p>Think about where you plan to wear the set. Is it for daily wear, special occasions, or both? This will influence the design and size of the set.</p>
                `,
              },
            },
          ],
          schema: [
            {
              q: "Can diamond sets be worn every day?",
              a: "A simple set of diamond studs and necklace can be worn every day as diamonds are highly durable and the strongest gemstone.",
            },
            {
              q: "What does a diamond set include?",
              a: "At L'azurde, we have diamond sets with necklace and earrings as well as sets that include everything from necklace, earrings, ring, and bracelet.",
            },
            {
              q: "How can I choose a diamond jewelry set?",
              a: "Think about where you plan to wear the set. Is it for daily wear, special occasions, or both? This will influence the design and size of the set.",
            },
          ],
        },
        "shop-all": {
          seo: {
            title: `Shop All - Diamond Jewelry | Page <number> | L'azurde UAE`,
            description: `Discover an exquisite collection of diamond jewelry online at L'azurde UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Our Bestselling Range of Diamond Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of best selling diamond jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `Buy Latest & New Diamond Jewelry Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of new diamond designs online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `Get Best Prices on Diamond Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond jewelry online in UAE, offering great value with best prices. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
            }),
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Yellow Gold Diamond Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of yellow gold diamond jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              metalColor: ["yellowGold"],
            }),
          },
        },
        "white-gold": {
          seo: {
            title: `Buy White Gold Diamond Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of white gold diamond jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              metalColor: ["whiteGold"],
            }),
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Rose Gold Diamond Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rose gold diamond jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              metalColor: ["roseGold"],
            }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Multicolor Gold Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of multicolor gold jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.mulitColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
          },
        },
        "under-1000": {
          seo: {
            title: `Buy Diamond Jewelry Under 1,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond jewelry under 1,000 AED online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              price: ["under1000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cecece", text: "New In" },
            },
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Diamond Jewelry Under 2,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond jewelry under 2,000 AED online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              price: ["1000to2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Diamond Jewelry Under 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond jewelry under 4,000 AED online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              price: ["2000to4000"],
            }),
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Diamond Jewelry Above 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond jewelry above 4,000 AED online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersDiamond?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeDiamonds"],
              price: ["4000above"],
            }),
          },
        },
      },
    },
    gold: {
      seo: {
        title: `Buy Gold Jewelry in UAE | Gold Designs | Page <number> | L'azurde UAE`,
        description: `Explore our exquisite collection of gold jewelry online, in UAE, including rings, necklaces, bracelets & more. Get free delivery & returns with options to buy now & pay later.`,
      },
      banner: bannersGold?.lOne,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Buy Gold Necklaces & Pendants in UAE | Gold Chain Necklace Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold necklaces & pendants online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldNecklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              category: ["necklace"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Buy Gold Necklaces and Pendants From UAE</h2>

                <p>Lose yourself in the enchanting world of gold necklaces and pendants, where elegance meets versatility. At L’azurde, UAE, we believe that jewelry is an extension of your personality and that’s why each piece in our collection is crafted with passion and fine artistry. Whether you desire gold necklaces for women, gold pendants, gold choker necklaces, gold chain necklaces, or, statement necklaces, we have just about everything. Choose classic gold necklaces and pendants in UAE for everyday styling to necklaces and pendants studded with diamonds, colored stones or pearls for those special occasions. </p>
                `,
              },
              content: {
                value: `
                
                <h2>Embrace Versatility with Gold Necklaces</h2>
                
                <p>Explore the versatility of our gold necklaces, featuring chic chokers that look bold and beautiful, statement necklaces that grace your neckline with charm and sophistication, layered necklaces that exude a chic vibe and chain necklaces that offer timeless elegance. Each gold necklace design is a tribute to exceptional craftsmanship and unique creativity. Whether you seek a dainty choker to make a subtle statement or a bold chain necklace to make a statement, our collection caters to diverse tastes and preferences.</p>
                
                <h2>Radiate Glamour with Gold Pendants</h2>
                
                <p>Gold pendants are perfect for adding a touch of personality and meaning to your ensemble. At L’azurde, each of our gold pendants is thoughtfully designed to reflect your personal style and hold sentimental value. You can choose to adorn your neck with a dazzling colored stone pendant, a diamond-studded pendant, or a delicate charm that complements your spirit. From minimalist designs to intricate symbols, our gold pendants offer endless possibilities to showcase your individuality and enhance your feminine charm.</p>
                
                <h2>FAQs:</h2>
                
                <h3>Can you leave a gold necklace on all the time?</h3>
                <p>Yes, you can wear a gold necklace all day.</p>
                
                <h3>What to look for when buying a gold necklace?</h3>
                <p>Check the karat when buying a gold necklace and it’s authenticity.</p>
                
                <h3>Do gold necklaces fade?</h3>
                <p>No, gold plating can fade but 18-karat or 21-karat gold necklaces don’t fade. </p>
                
                `,
              },
            },
          ],
          schema: [
            {
              q: "Can you leave a gold necklace on all the time?",
              a: "Yes, you can wear a gold necklace all day.",
            },
            {
              q: "What to look for when buying a gold necklace?",
              a: "Check the karat when buying a gold necklace and its authenticity.",
            },
            {
              q: "Do gold necklaces fade?",
              a: "No, gold plating can fade, but 18-karat or 21-karat gold necklaces don’t fade.",
            },
          ],
        },
        rings: {
          seo: {
            title: `Buy Gold Rings for Women in UAE | Gold Ring Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold rings online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              category: ["rings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Why should i go for the Gold Ring?</h2>
              <p>Are you looking for a gold ring for yourself or someone special? At L’azurde, we pride ourselves on offering a wide selection of gorgeous gold rings to suit every Customer.  Gold rings come in all styles and karats. You can purchase a ladies gold ring in 14K, 18K or 21K. The higher the karat, the softer the gold metal actually is. Have you ever considered the timeless beauty of gold wedding rings? This traditional jewelry piece shines in your choice of yellow, rose or white gold. A gold ring makes a treasured gift as a promise ring or engagement ring too. Slip a gold ring onto the finger of someone special and you’ll know you made the perfect jewelry choice.</p>
              
              `,
              },
              content: {
                value: `
                
              <h2>Wondering what to consider when buying a gold ring in UAE?</h2>
              <p>It’s really a matter of personal style. Are you a traditional person who likes the warmth and classic beauty of yellow gold? There are plenty of yellow gold rings available on L’azurde UAE. Do you tend to wear a lot of sterling silver jewelry? You might want to consider white gold rings that blend beautifully with silver accessories. Are you less traditional and think outside the box? How about a rose gold ring that speaks to your feminine side. No matter what you’re looking for—a gold heart ring, gold pinky ring or one-of-a-kind designer gold rings in UAE — you’re sure to find the right ring, right here.</p>
              
              <h2>Discover a large selection of gold rings online at L’azurde and experiment with several styles.</h2>
              <p>When you shop with L’azurde you know you’re getting high quality metals and exceptional craftsmanship. Some rings are meant to be layered, while others shine when worn solo. For UAE gold rings that are sure to capture attention, take a look at the L’azurde collection and enjoy the shopping experience.</p>
              
              <h2>FAQs:</h2>
              
              <h3>Can you wear a gold ring every day?</h3>
              <p>Yes. You can choose a minimal or elegant ring that would be perfect for everyday styling. At L’azurde we have a wide range of gold rings meant for everyday wear.</p>
              
              <h3>What type of gold is best for a ring?</h3>
              <p>Choose from either 18-karat or 21-karat gold rings.</p>
              
              <h3>Are gold rings better than diamonds?</h3>
              <p>Not really. Each has its own charm. It really depends on what you want and your like. </p>
                `,
              },
            },
          ],
          schema: [
            {
              q: "Can you wear a gold ring every day?",
              a: "Yes. You can choose a minimal or elegant ring that would be perfect for everyday styling. At L’azurde we have a wide range of gold rings meant for everyday wear.",
            },
            {
              q: "What type of gold is best for a ring?",
              a: "Choose from either 18-karat or 21-karat gold rings.",
            },
            {
              q: "Are gold rings better than diamonds?",
              a: "Not really. Each has its own charm. It really depends on what you want and your preference.",
            },
          ],
        },
        "bracelets-anklets": {
          seo: {
            title: `Buy Gold Bracelets & Anklets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold bracelets & anklets online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldBraceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              category: ["bracelets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Gold Bracelets and Anklets That Will Take You Places</h2>
                <p>Immerse yourself in the enchanting world of gold bracelets and anklets, where sophistication meets versatility. Each piece in our collection is a reflection of fine artistry and a genuine passion for creating cherished jewelry that resonates with your soul. Whether you're looking for gold bracelets or gold anklets or even both (because we have a beautiful collection of sets as well) or maybe even a specific style like a gold tennis bracelet or charm bracelet we have just about everything. Find the perfect adornment that captures your personality with our collection of gold bracelets and anklets.</p>
              
                `,
              },
              content: {
                value: `
                   
               <h2>Explore Our Gold Bracelets and Anklets In UAE</h2>
               <p>Gold anklets are just the piece of jewelry you need to add a touch of grace to your every step. Our range of gold anklets in Sausi Arabia is designed to complement various styles, from delicate chains that wrap around your ankle with elegance to beaded anklets that capture a Bohemian spirit. Embrace the art of anklet layering to create a look that showcases your personality and enhances your feminine charm. With L’azurde, you can find that gold anklet that adds a glimmer of radiance to your style.</p>
               
               <h2>Effortless Glamour with Gold Tennis Bracelets, Beaded Bracelets, and Charm Bracelets</h2>
               <p>Radiate timeless glamour with our exquisite collection of gold tennis bracelets, beaded bracelets, charm bracelets, chain bracelets, and bangles. Each bracelet is a testament to exceptional design and superior quality, making them cherished treasures that withstand the test of time. All of these are available in both 18-karat and 21-karat gold and you can choose from yellow gold, white gold, and rose gold. From the classic brilliance of tennis bracelets to the Bohemian charm of beaded bracelets and the sentimental elegance of charm bracelets, our gold bracelet collection in UAE offers a diverse range of styles to suit every taste.</p>
               
               <p>Go ahead and wrap your wrists and your feet in beauty that is made just for you!</p>
              
              <h2>FAQs:</h2>
              
              <h3>How tight should a gold bracelet be?</h3>
               <p>As tight as you are comfortable wearing it. </p>
               
               <h3>What to look for when buying a gold bracelet?</h3>
               <p>Check for the gold karat and if it is studded with diamonds, pearls or colored stones than you need to check for their quality.</p>
               
               <h3>Can you wear a gold bracelet every day?</h3>
               <p>Yes. At L’azurde we have a range of minimal and everyday gold bracelets that are perfect for everyday styling.</p>
                `,
              },
            },
          ],
          schema: [
            {
              q: "How tight should a gold bracelet be?",
              a: "As tight as you are comfortable wearing it.",
            },
            {
              q: "What to look for when buying a gold bracelet?",
              a: "Check for the gold karat, and if it is studded with diamonds, pearls, or colored stones, then you need to check for their quality.",
            },
            {
              q: "Can you wear a gold bracelet every day?",
              a: "Yes. At L’azurde we have a range of minimal and everyday gold bracelets that are perfect for everyday styling.",
            },
          ],
        },
        earrings: {
          seo: {
            title: `Buy Gold Earrings for Women in UAE | Gold Earring Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold earrings online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldEarrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              category: ["earrings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Unleash Your Inner Diva with Gold Earrings From UAE</h2>
              <p>Make a bold fashion statement with our dazzling gold hoop earrings in UAE. The classic hoop design takes on a luxurious twist with our gleaming gold creations. Whether you want to channel your inner diva or simply enhance your everyday look, these gold hoops will effortlessly elevate your style. Choose from a variety of sizes, textures, designs and hoops with diamonds, pearls or colored stones to find the perfect pair that suits your flair.</p>
           
              `,
              },
              content: {
                value: `
                     
              <h2>Embrace the Glamour of Gold Drop Earrings</h2>
              <p>Indulge in the glamour of gold with our exquisite collection of drop earrings. These delicately crafted masterpieces will gracefully sway with your every move. With pieces that are perfect for both formal occasions and casual gatherings, our gold drop earrings are here to leave a lasting impression. Elevate your jewelry collection with these stunning pieces that promise to become instant favorites.</p>
              
              <h2>Gold Clip-On Earrings - Beauty Without Piercing</h2>
              <p>For those who prefer the convenience of clip-on earrings, we present our elegant collection of gold clip-on earrings. No piercing required - you can now adorn your ears with beauty and comfort. Our clip-on earrings maintain the same level of craftsmanship and style, ensuring you never have to compromise on glamour. Treat yourself or surprise a loved one with these beautiful and easy-to-wear accessories.</p>
              
              <h2>Elevate Your Charm with Gold Dangle Earrings</h2>
              <p>Exude grace and sophistication with our enchanting gold dangle earrings. Whether you're dressing up for a special occasion or adding a touch of luxury to your daily attire, gold dangle earrings will instantly elevate your charm. We have some mesmerizing designs and intricate detailing that make them the perfect conversation starters, leaving everyone in awe of your impeccable taste. Embrace the allure of gold dangle earrings and embrace the spotlight wherever you go.</p>
              
              <h2>Classic Elegance - Gold Stud Earrings for Every Occasion</h2>
              <p>Looking for an enduring symbol of classic elegance? Our gold stud earrings are the epitome of refined beauty. These understated yet luxurious pieces will seamlessly integrate into your jewelry collection, effortlessly complementing any outfit or style. Whether you're heading to the office or attending a glamorous event, our gold stud earrings will always be your go-to choice for sophistication and grace.</p>
              
              <p>Go ahead and indulge in the allure of gold earrings from L’azurde UAE and explore our stunning collection today. Find the perfect pair that speaks to your style and personality. </p>
              
              <h2>FAQs:</h2>
              
              <h3>Is 18K gold good for earrings?</h3>
              <p>Yes. The gold content in 18K is 75%. It contains 18 parts of pure gold mixed with other six metals. It is the best choice of earrings if you have sensitive ears.</p>
              
              <h3>Can you wear gold earrings every day?</h3>
              <p>Yes. We have a wide range of everyday and elegant gold earrings that can take you from a workday to day out. </p>
              
              <h3>Why should we wear gold earrings?</h3>
              <p>Gold earrings are elegant, stylish and perfect for everyday styling or special occasions.</p>
                `,
              },
            },
          ],
          schema: [
            {
              q: "Is 18K gold good for earrings?",
              a: "Yes. The gold content in 18K is 75%. It contains 18 parts of pure gold mixed with other six metals. It is the best choice of earrings if you have sensitive ears.",
            },
            {
              q: "Can you wear gold earrings every day?",
              a: "Yes. We have a wide range of everyday and elegant gold earrings that can take you from a workday to day out.",
            },
            {
              q: "Why should we wear gold earrings?",
              a: "Gold earrings are elegant, stylish, and perfect for everyday styling or special occasions.",
            },
          ],
        },
        sets: {
          seo: {
            title: `Buy Gold Jewelry Sets in UAE | Gold Sets | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry sets online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              category: ["sets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                    <h2>Discover the Allure of Gold Sets</h2>

                    <p>Gold sets are the perfect way to instantly create a coordinated look that will leave a lasting impression on every occasion. And when the gold sets are simply this enchanting, you want to go ahead and quickly find that perfect gold set for life!</p>

                    <p>At L’azurde, you can immerse yourself in the enchanting world of gold sets, where each piece is created with precision and style and is a testament to fine craftsmanship. Our collection celebrates the joy of perfectly matched pieces that enhance your allure and celebrate your special moments. Whether you desire complete gold jewelry sets, gold necklace set, gold bridal jewelry set, gold ring set, or gold wedding ring set, our range of UAE gold sets invites you to explore and find the perfect piece that tells your unique story. We guarantee that you will find a gold set that will become a cherished memory for a lifetime with us. </p>

                `,
              },
              content: {
                value: `
                  
                <h2>The Ultimate Glamour - Complete Gold Jewelry Sets in UAE.</h2>

                <p>Indulge in the ultimate glamour with our complete gold jewelry sets in UAE that encompass a variety of jewelry pieces to adorn you from head to toe. From opulent necklaces to elegant earrings, from graceful bracelets to mesmerizing rings, our complete gold sets leave no detail unattended. Embrace the versatility of complete gold jewelry sets in UAE that effortlessly enhance your style for any occasion, making you the center of attention and the epitome of grace.</p>

                <h2>Embrace Your Special Day with Gold Bridal Jewelry Sets and Gold Wedding Rings Set</h2>

                <p>Mark your day of love with something special… something that you will cherish for a lifetime. Like our radiant gold bridal jewelry sets and gold wedding ring sets. Our bridal jewelry sets are designed to make your wedding day unforgettable, with exquisite necklaces, earrings, and bracelets that add a touch of grace to your beauty. When it comes to a gold wedding ring set, each piece evokes eternal love and symbolizes the unbreakable bond between two hearts. </p>

                <p>We have a wide range of gold sets and you can choose from yellow gold, white gold and rose gold pieces. What’s more? There are diamonds, colored stones, pearls and other gemstones that shine as brightly as you. So go ahead and check out our collection and we guarantee you will find that gold set that you have always been looking for.</p>

                <h2>FAQs:</h2>
                <h3>Can gold sets be worn every day?</h3>
                <p>A simple gold set can be worn every day and since gold is durable metal it can handle everyday wear and tear.</p>

                <h3>What comes in a gold set?</h3>
                <p>A gold set includes either a simple necklace and earring set or a complete set of necklace, earrings, ring and a bracelet.</p>
                `,
              },
            },
          ],
          schema: [
            {
              q: "Can gold sets be worn every day?",
              a: "A simple gold set can be worn every day, and since gold is a durable metal, it can handle everyday wear and tear.",
            },
            {
              q: "What comes in a gold set?",
              a: "A gold set includes either a simple necklace and earring set or a complete set of necklace, earrings, ring, and a bracelet.",
            },
          ],
        },
        "half-sets": {
          seo: {
            title: `Buy Half Gold Jewelry Sets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of half set gold jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldHalfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              type: ["halfSets"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All - Gold Jewelry | Page <number> | L'azurde UAE`,
            description: `Discover an exquisite collection of gold jewelry online at L'azurde UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldShopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
            }),
          },
        },
        "coins-bars": {
          seo: {
            title: `Buy Coins Bars Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of coins bars jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldCoinsBars,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              category: ["gold"],
              type: ["goldCoin", "goldBar"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Our Bestselling Range of Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of best selling gold jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldBestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `Buy Latest Gold Earring, Ring & Necklace Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of exquisite new gold designs online in UAE. Shop the latest gold rings with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldNewIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `Get Best Prices on Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry online in UAE, offering great value with best prices. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.goldSpecialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
            }),
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Yellow Gold Jewelry for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of yellow gold jewelry online in UAE, including rings, necklaces, and more. Enjoy free delivery, free returns, and options to buy now & pay later.`,
          },
          banner: bannersGold?.goldYellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              metalColor: ["yellowGold"],
            }),
          },
        },
        "white-gold": {
          seo: {
            title: `Buy White Gold Jewelry for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of white gold jewelry online in UAE, including rings, necklaces, and more. Enjoy free delivery, free returns, and options to buy now & pay later.`,
          },
          banner: bannersGold?.goldWhiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              metalColor: ["whiteGold"],
            }),
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Rose Gold Jewelry for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rose gold jewelry online in UAE, including rings, necklaces, and more. Enjoy free delivery, free returns, and options to buy now & pay later.`,
          },
          banner: bannersGold?.goldRoseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              metalColor: ["roseGold"],
            }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Multicolor Gold Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of multicolor gold jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.mulitColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Colored Stone Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our exquisite collection of colored stone gold jewelry online in the UAE, showcasing beautiful designs. Enjoy free delivery, easy returns, and flexible payment options.`,
          },
          banner: bannersGold?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              stone: ["coloredStones"],
            }),
          },
        },
        pearls: {
          seo: {
            title: `Buy Pearl Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of elegant pearl gold jewelry online in the UAE, featuring exquisite designs. Shop with free delivery, convenient returns, and options to buy now & pay later.`,
          },
          banner: bannersGold?.goldPearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              stone: ["pearls"],
            }),
          },
        },
        "under-500": {
          seo: {
            title: `Shop Gold Jewelry Under 500 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry under 500 AED online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              price: ["under500"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cecece", text: "New In" },
            },
          },
        },
        "500-1000": {
          seo: {
            title: `Discover Gold Jewelry Under 1,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry under 1,000 AED online in the UAE, showcasing exquisite designs. Shop with free delivery, convenient returns, and options to buy now & pay later.`,
          },
          banner: bannersGold?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              price: ["500to1000"],
            }),
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Gold Jewelry Under 2,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry under 2,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, free returns, and options to buy now & pay later.`,
          },
          banner: bannersGold?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              price: ["1000to2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `Explore Gold Jewelry Under 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Discover our collection of gold jewelry under 4,000 AED online in the UAE, showcasing exquisite designs. Shop with free delivery, easy returns, and options to buy now & pay later.`,
          },
          banner: bannersGold?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              price: ["2000to4000"],
            }),
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Gold Jewelry Above 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry above 4,000 AED online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGold?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["lazurdeGold"],
              price: ["4000above"],
            }),
          },
        },
      },
    },
    "fashion-jewelry": {
      seo: {
        title: `Buy Fashion Jewelry for Women in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our exquisite collection of fashion jewelry online in UAE, including rings, necklaces, bracelets & more. Get free delivery & returns with options to buy now & pay later.`,
      },
      banner: bannersFashionJewelry?.LoneCategory,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Shop Fashion Necklaces & Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion necklaces & pendants online in the UAE, featuring exquisite designs. Enjoy free delivery, easy returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `Buy Fashion Rings for Women | Ring Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion rings & bands online in the UAE, showcasing exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              category: ["rings"],
            }),
          },
        },
        "bracelets-anklets": {
          seo: {
            title: `Buy Fashion Bracelets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion bracelets & anklets online in UAE, offering exquisite designs. Shop with free delivery & returns with options to buy now & pay later.`,
          },

          banner: bannersFashionJewelry?.braceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `Buy Fashion Earrings for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion earrings online in the UAE, featuring exquisite designs. Shop with free delivery, convenient returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              category: ["earrings"],
            }),
          },
        },
        sets: {
          seo: {
            title: `Buy Fashion Jewelry Sets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion jewelry sets online in the UAE, showcasing exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              category: ["sets"],
            }),
          },
        },
        "half-sets": {
          seo: {
            title: `Buy Fashion Jewelry Half Sets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion jewelry half sets online in the UAE, offering exquisite designs. Shop with free delivery & returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.halfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              type: ["halfSets"],
            }),
          },
        },
        kids: {
          seo: {
            title: `Buy Fashion Jewelry for Kids in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our exquisite collection of kids fashion jewelry online in UAE, including rings, necklaces, bracelets & more. Get free delivery & returns with options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.kids,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              collection: ["kids"],
            }),
          },
        },
        mens: {
          seo: {
            title: `Buy Fashion Jewelry for Men in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our exquisite collection of men's fashion jewelry online in the UAE, including rings, chains, bracelets & more. Get free delivery & returns with options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.mens,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              collection: ["mens", "unisex"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All - Fashion Jewelry | Page <number> | L'azurde UAE`,
            description: `Discover an exquisite collection of fashion jewelry online in UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Our Bestselling Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bestselling fashion jewelry brands online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.bestSeller,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `Buy Latest & New Fashion Jewelry Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of new fashion jewelry designs online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `Get Best Prices on Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion jewelry online in the UAE, offering great value with best prices. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],
            }),
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Yellow Gold Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of yellow gold fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              metalColor: ["yellowGold"],
            }),
          },
        },
        "white-gold": {
          seo: {
            title: `Buy White Gold Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of white gold fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              metalColor: ["whiteGold"],
            }),
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Rose Gold Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rose gold fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              metalColor: ["roseGold"],
            }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Rose Multicolor Gold Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of multicolor gold fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.multicolorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
          },
        },
        "gold-plated": {
          seo: {
            title: `Buy Gold Plated Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold plated fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.goldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              metalColor: ["goldPlated"],
            }),
          },
        },
        "sterling-silver": {
          seo: {
            title: `Buy Sterling Silver Fashion Jewelry | 925 Silver in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of 925 sterling silver fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.sterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              metalColor: ["sterlingSilver"],
            }),
          },
        },
        diamonds: {
          seo: {
            title: `Buy Fashion Diamond Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.diamond,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              diamonds: ["diamonds"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Colored Stone Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of colored stone fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              stone: ["coloredStones"],
            }),
          },
        },
        pearls: {
          seo: {
            title: `Buy Pearl Fashion Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of pearl fashion jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              stone: ["pearls"],
            }),
          },
        },
        "under-500": {
          seo: {
            title: `Buy Fashion Jewelry Under 500 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion jewelry under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              price: ["under500"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cecece", text: "New In" },
            },
          },
        },
        "500-1000": {
          seo: {
            title: `Buy Fashion Jewelry Under 1,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion jewelry under 1,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              price: ["500to1000"],
            }),
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Fashion Jewelry Under 2,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion jewelry under 2,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              price: ["1000to2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Fashion Jewelry Under 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of fashion jewelry under 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              price: ["2000to4000"],
            }),
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Fashion Jewelry Above 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our fashion jewelry collection above 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersFashionJewelry?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl", "instyle", "waves"],

              price: ["4000above"],
            }),
          },
        },
      },
    },
    "love-engagement": {
      seo: {
        title:
          "Buy Bridal, Engagement & Wedding Jewelry in UAE | Page <number> | L'azurde UAE",
        description: `Explore our collection of bridal jewelry online in UAE including rings, necklaces, bracelets and more. Shop with free delivery, free returns & options to buy now & pay later.`,
      },
      banner: bannersLoveEngagement?.LoneCategory,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({}, [
          {
            type: ["twins", "eternity", "solitaire"],
          },
          {
            category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
            collection: ["lazurdeDiamonds", "lazurdeGold"],
          },
        ]),
      },
      contentSection: [
        {
          text: {
            value: `
          <h2>Shop For Engagement Jewelry In UAE</h2>

          <p>Step into a world of romance and all things love with our captivating collection of love and engagement jewelry. Whether you're ready to propose, celebrate your wedding day, make a grand gesture on Valentine’s Day or want to find the perfect piece for your bridal ensemble, our timeless designs will forever symbolize your love story.</p>
        `,
          },
          content: {
            value: `
            
          <h2>Seal Your Promise with Stunning Engagement Rings</h2>
          <p>Discover the perfect expression of your commitment with our stunning engagement rings. Each ring is a work of art, capturing the essence of love and devotion. Choose from an array of designs, from classic solitaires to intricate halo settings, to find the one that perfectly reflects your unique love story. Fall in love all over again with our breathtaking collection of engagement rings.</p>
          
          <h2>Timeless Elegance with Wedding Rings</h2>
          <p>Celebrate the beginning of your forever with our timeless wedding rings. Crafted with utmost care and precision, our wedding bands are a true testament to enduring love. Whether you desire a simple and elegant band or a dazzling diamond-studded design, our collection offers a variety of options to symbolize your unbreakable bond. </p>
          
          <h2>Radiate Grace with Exquisite Bridal Jewelry</h2>
          <p>Look your very best on your special day with our exquisite bridal jewelry collection. From elegant necklaces in 18K and 21K gold to dazzling earrings studded with diamonds, pearls or colored stones, our collection has something for every bride. Each piece is thoughtfully crafted to add a touch of grace and glamour to your once-in-a-lifetime moment.</p>
          
          <h2>Forever Captivated - Gold Engagement Rings</h2>
          <p>Mark your commitment with the warm and timeless glow of our gold engagement rings. Crafted in the finest quality gold, these rings embody a sense of permanence and lasting beauty. Whether you prefer classic yellow gold, romantic rose gold, or contemporary white gold, our collection offers an array of choices to suit your style.</p>
          
          <h2>The Brilliance Of Diamond Engagement Rings</h2>
          <p>Declare your love with diamond engagement rings from our stunning collection of love and engagement jewelry. Each diamond is ethically sourced and selected for its exceptional sparkle and fire, ensuring that your ring truly stands out. Symbolizing eternal love, our diamond engagement rings capture the light of your relationship, making every moment shine with joy and love.</p>
          
          <h2>The Perfect Union - Matching Wedding Bands</h2>
          <p>Commemorate your union with our exquisite matching wedding bands. These perfectly paired sets are a reflection of your unbreakable bond and shared journey. Crafted to complement each other, our matching wedding bands symbolize the unity of your love and the promise of a lifetime together.</p>
          
          <p>Love is a feeling that cannot be expressed by words but it can be expressed the best with our love and engagement jewelry collection. So, go ahead and declare your love with a piece from L'azurde's UAE lovely range.</p>
          
          <h2>FAQs:</h2>
          
          <h3>Which stone is best for an engagement ring?</h3>
          <p>It depends on what you and your partner like.</p>
          
          <h3>What color of the ring is best for engagement?</h3>
          <p>Any color that you like!</p>
          
          <h3>Why an engagement ring is important?</h3>
          <p>An engagement ring is meant to mark your love!</p>
          
          <h3>What are the 4 types of engagement rings?</h3>
          <p>The 4 types of engagement rings are solitaire, diamond band, halo, and trilogy rings.</p>
          
          `,
          },
        },
      ],
      schema: [
        {
          q: "Which stone is best for an engagement ring?",
          a: "It depends on what you and your partner like.",
        },
        {
          q: "What color of the ring is best for engagement?",
          a: "Any color that you like!",
        },
        {
          q: "Why is an engagement ring important?",
          a: "An engagement ring is meant to mark your love!",
        },
        {
          q: "What are the 4 types of engagement rings?",
          a: "The 4 types of engagement rings are solitaire, diamond band, halo, and trilogy rings.",
        },
      ],
      children: {
        "twin-rings": {
          seo: {
            title: `Buy Twin Rings | Twin Engagement Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of twin rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.twinRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["twins"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Celebrate Love with Twin Rings </h2>

              <p>Celebrate your love like never before with L’azurde UAE’s scintillating collection of twin rings. Explore our collection of twin diamond rings and twin engagement rings, and discover the perfect expression of your love and eternal commitment. </p>
           
              `,
              },
              content: {
                value: `
                   
              <h2>Twin Rings: Two Hearts, One Love and Endless Brilliance</h2>
              <p>Unveil the brilliance of twin diamond rings that perfectly symbolize the intertwining of two hearts. With each diamond representing an inseparable connection, our twin rings are an extraordinary expression of your shared love. Embark on a journey of elegance and charm, and let our twin diamond rings sparkle with endless brilliance.</p>
              
              <p>Our twin engagement rings are designed to celebrate the joyous moment of your engagement. These stunning sets beautifully represent the coming together of two souls in perfect harmony. As you take the next step in your journey together, let our twin engagement rings be a reflection of your commitment and the beginning of a lifetime of love.</p>
              
              <h2>The Beauty of Twin Ring Sets From UAE</h2>
              <p>Adorn your fingers with the beauty of twin rings, a testament to the depth of your love. We have a beautiful collection of twin ring sets made in 18K and 21K as well as in classic yellow gold, contemporary white gold and the ever-elegant rose gold. Choose the one that speaks to you and make a statement of love and devotion with our twin rings that shine as brightly as your hearts.</p>
              
              <p>Let our twin rings set your love story aglow with timeless beauty.</p>
              
              <h2>FAQs:</h2>
              
              <h3>What are twin rings for?</h3>
              <p>Twin rings are perfect for couples looking for something to celebrate their love.</p>
              
              <h3>What are twin rings made of?</h3>
              <p>Our collection has twin rings made of simple gold bands or eternity bands or statement rings studded with diamonds.</p>
              
              <h3>Can I wear the twin rings on their own?</h3>
              <p>Absolutely! Twin rings can be worn individually for a distinct style or together for a coordinated look. It's all about your preference and versatility.</p>
              
                `,
              },
            },
          ],
          schema: [
            {
              q: "What are twin rings for?",
              a: "Twin rings are perfect for couples looking for something to celebrate their love.",
            },
            {
              q: "What are twin rings made of?",
              a: "Our collection has twin rings made of simple gold bands or eternity bands or statement rings studded with diamonds.",
            },
            {
              q: "Can I wear the twin rings on their own?",
              a: "Absolutely! Twin rings can be worn individually for a distinct style or together for a coordinated look. It's all about your preference and versatility.",
            },
          ],
        },
        "solitaire-rings": {
          seo: {
            title: `Buy Solitaire Rings | Solitaire Engagement Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of solitaire engagement rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.solitaireRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["solitaire"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Solitaire Diamond Rings - Brilliance in Its Purest Form</h2>
                <p>Indulge in brilliance with our stunning solitaire diamond rings. Each ring showcases a single, exquisite diamond set on a beautiful metal band, allowing its natural beauty to take center stage. Whether you prefer a classic round cut or a mesmerizing princess cut, our solitaire diamond rings are a celebration of individuality and elegance.</p>
                
              `,
              },
              content: {
                value: `
                <h2>Solitaire Engagement Rings For The Perfect Proposal</h2>
                <p></p>Celebrate love's ultimate expression with our solitaire engagement rings. These exceptional rings serve as the perfect symbol of your commitment and devotion. Choose a solitaire engagement ring that perfectly captures the uniqueness of your love story, setting the stage for a lifetime of cherished memories.
                
                <h2>Elevate Your Style with Solitaire Rings From UAE</h2>
                <p>Up your everyday style and make an understated statement with solitaire rings in UAE. Our collection offers a variety of solitaire pieces to complement any ensemble. Whoever said solitaries are only meant for proposals and engagements? Go ahead and embrace the simplicity of solitaire jewelry and let it be a reflection of your refined taste.</p>
                
                <p>Embrace the beauty of simplicity with our solitaire rings, perfect for every occasion. Whether you're celebrating a special milestone or looking for an everyday statement piece, our solitaire rings add a touch of sophistication to any outfit. Let the brilliance of a single diamond shine brightly as a symbol of your unique style.</p>
                
                <h2>FAQs:</h2>
                
                <h3>What is special about a solitaire ring?</h3>
                <p>A solitaire ring is special because it has just one sparkling diamond in the center of a mostly plain band. </p>
                
                <h3>How do you take care of a solitaire ring?</h3>
                <p>Simply wipe clean with a damp cloth to remove dirt or stains.</p>
                
                <h3>What shape is a solitaire ring?</h3>
                <p>The most popular solitaire ring is a brilliant cut diamond solitaire ring, however, you get princess cut and other cuts of the solitaire rings as well.</p>
                
                `,
              },
            },
          ],
          schema: [
            {
              q: "What is special about a solitaire ring?",
              a: "A solitaire ring is special because it has just one sparkling diamond in the center of a mostly plain band.",
            },
            {
              q: "How do you take care of a solitaire ring?",
              a: "Simply wipe clean with a damp cloth to remove dirt or stains.",
            },
            {
              q: "What shape is a solitaire ring?",
              a: "The most popular solitaire ring is a brilliant cut diamond solitaire ring, however, you get princess cut and other cuts of the solitaire rings as well.",
            },
          ],
        },
        "eternity-rings": {
          seo: {
            title: `Buy Eternity Rings | Eternity Engagement Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of eternity engagement rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.eternityRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["eternity"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Eternity Diamond Rings - Brilliance That Knows No End</h2>
                <p>Our collection of stunning eternity rings redefines brilliance. Each of our exquisite eternity rings for women features an unbroken circle of dazzling diamonds, representing a love that lasts a lifetime. Each diamond is carefully chosen for its exceptional beauty and set in a way that makes every diamond sparkle the brightest from every angle. Simply put, our eternity rings are a true testament to your love. </p>
                `,
              },
              content: {
                value: `
                 
                <h2>Diamond Eternity Bands for Your Special Day</h2>
                <p>Celebrate the beauty of eternity and forever ever after with our diamond eternity bands. Designed for your special day, each of our diamond eternity bands is crafted to perfection. Depending on your choice, you can choose an eternity band in either classic yellow gold, contemporary white gold or elegant rose gold. </p>
                <p>Whether you're looking for a wedding band that symbolizes your everlasting union or a meaningful anniversary gift, our collection offers an array of designs that will make your heart skip a beat.</p>
                
                <h2>Shop For Eternity Rings for Women In UAE</h2>
                <p>We have a wide range of eternity rings in UAE, a timeless symbol of devotion and love. Our collection features an exquisite range of designs, from classic full eternity bands to elegant half-eternity rings. Each ring is crafted to perfection, reflecting the uniqueness of the woman who wears it.</p>
                
                <h2>Eternity Rings For Forever and Beyond </h2>
                <p>Each of our eternity rings is meant to encapsulate the sentiment of endless love, making it a cherished gift for anniversaries, birthdays, or other meaningful events. Whether you want to surprise your loved one or express your love, nothing beats a classic eternity ring. </p>
                
                <p>Explore our collection and find the perfect eternity diamond ring that makes your heart sing. Let eternity rings be the embodiment of your love story, forever and beyond.</p>
                
                <h2>FAQs:</h2>
                
                <h3>What is the purpose of an eternity ring?</h3>
                <p>Eternity rings are a promise of eternal love and make the perfect choice for proposals, engagements, anniversaries or any other occasion where you want to express your love.</p>
                
                <h3>Can you wear an eternity ring every day?</h3>
                <p>Yes, beacuse of its elegant design.</p>
                
                <h3>How do I choose wedding gold pieces that match my dress?</h3>
                <p>Consider the neckline and style of your dress. V-neck dresses pair well with pendant necklaces, while strapless dresses work with statement earrings</p>
                
                `,
              },
            },
          ],
          schema: [
            {
              q: "What is the purpose of an eternity ring?",
              a: "Eternity rings are a promise of eternal love and make the perfect choice for proposals, engagements, anniversaries or any other occasion where you want to express your love.",
            },
            {
              q: "Can you wear an eternity ring every day?",
              a: "Yes, because of its elegant design.",
            },
            {
              q: "How do I choose wedding gold pieces that match my dress?",
              a: "Consider the neckline and style of your dress. V-neck dresses pair well with pendant necklaces, while strapless dresses work with statement earrings.",
            },
          ],
        },
        "gold-sets": {
          seo: {
            title: `Buy Gold Bridal Sets | Gold Wedding Sets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold bridal sets online in the UAE, offering exquisite designs. Shop engagement gold set with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.goldSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["jewelrySets"],
              collection: ["lazurdeGold"],
            }),
          },
        },
        "diamond-sets": {
          seo: {
            title: `Buy Diamond Bridal Sets | Engagement Bridal Sets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond bridal sets online in the UAE, offering exquisite designs. Shop engagement bridal set with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.diamondSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["jewelrySets"],
              collection: ["lazurdeDiamonds"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All - Engagement & Wedding Jewelry | Page <number> | L'azurde UAE`,
            description: `Discover an exquisite collection of bridal, engagement & wedding jewelry online at L'azurde UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["twins", "eternity", "solitaire"],
              },
              {
                category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                collection: ["lazurdeDiamonds", "lazurdeGold"],
              },
            ]),
          },
        },

        lazurde: {
          seo: {
            title: `Buy L'azurde Bridal Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of L'azurde bridal & engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["lazurde"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        instyle: {
          seo: {
            title: `Buy Instyle Bridal Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Instyle bridal & engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["instyle"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "miss-l": {
          seo: {
            title: `Buy Miss L' Bridal Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' bridal & engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["missl"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        waves: {
          seo: {
            title: `Buy Waves Bridal Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Waves bridal & engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["waves"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Our Bestselling Range of Engagement Jewelry | Page <number> | L'azurde UAE`,
            description: `Explore our collection of best-selling engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.bestSeller,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["twins", "eternity", "solitaire"],
              },
              {
                category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                collection: ["lazurdeDiamonds", "lazurdeGold"],
              },
            ]),
          },
        },
        "new-in": {
          seo: {
            title: `Buy Latest & New Engagement Jewelry For Women | Page <number> | L'azurde UAE`,
            description: `Explore our collection of the latest & new engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                newIn: ["newIn"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "special-price": {
          seo: {
            title: `Best Engagement Jewelry Prices For Women | Page <number> | L'azurde UAE`,
            description: `Explore our collection of engagement jewelry online in the UAE, offering great value with best prices. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["twins", "eternity", "solitaire"],
              },
              {
                category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                collection: ["lazurdeDiamonds", "lazurdeGold"],
              },
            ]),
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Yellow Gold Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of yellow gold engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["yellowGold"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "white-gold": {
          seo: {
            title: `Buy White Gold Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of white gold engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["whiteGold"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Rose Gold Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rose gold engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["roseGold"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Multicolor Gold Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of multicolor gold jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.multicolorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: [
                  "yellowRoseGold",
                  "yellowWhiteGold",
                  "yellowWhiteRoseGold",
                  "whiteRoseGold",
                ],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "gold-plated": {
          seo: {
            title: `Buy Gold Plated Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold plated engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.goldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["goldPlated"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "sterling-silver": {
          seo: {
            title: `Buy Sterling Silver Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of sterling silver engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.sterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["sterlingSilver"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        diamonds: {
          seo: {
            title: `Buy Diamond Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.diamond,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                diamonds: ["diamonds"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Colored Stone Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of colored stone engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                stone: ["coloredStones"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        pearls: {
          seo: {
            title: `Buy Pearl Engagement Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of pearl engagement jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                stone: ["pearls"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "under-500": {
          seo: {
            title: `Bridal & Engagement Jewelry Under 500 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bridal & engagement jewelry under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["under500"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "500-1000": {
          seo: {
            title: `Bridal & Engagement Jewelry Under 1,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bridal & engagement jewelry under 1,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["500to1000"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "1000-2000": {
          seo: {
            title: `Bridal & Engagement Jewelry Under 2,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bridal & engagement jewelry under 2,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["1000to2000"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "2000-4000": {
          seo: {
            title: `Bridal & Engagement Jewelry Under 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bridal & engagement jewelry under 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["2000to4000"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
        "4000-above": {
          seo: {
            title: `Bridal & Engagement Jewelry Above 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bridal & engagement jewelry above 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersLoveEngagement?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["4000above"],
              },
              [
                {
                  type: ["twins", "eternity", "solitaire"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamonds", "lazurdeGold"],
                },
              ]
            ),
          },
        },
      },
    },
    "gift-occasions": {
      seo: {
        title: `Buy Jewelry Gifts for Women | Gifts for Her in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of jewelry gifts for women in UAE including rings, necklaces, bracelets and more. Shop with free delivery, free returns & options to buy now & pay later.`,
      },
      banner: bannersGiftsOccasions?.giftsOccasions,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Buy Gift Necklaces & Pendants for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gift necklaces & pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `Buy Gift Rings for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gift rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["rings"],
            }),
          },
        },
        "bracelets-anklets": {
          seo: {
            title: `Buy Gift Bracelets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gift bracelets & anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.bracelets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `Buy Gift Earrings for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gift earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["earrings"],
            }),
          },
        },
        sets: {
          seo: {
            title: `Buy Jewelry Set Gift Box for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry set gift boxes online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["sets"],
            }),
          },
        },
        "half-sets": {
          seo: {
            title: `Buy Jewelry Half Sets Gift for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry half sets gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.halfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["halfSets"],
            }),
          },
        },
        kids: {
          seo: {
            title: `Buy Jewelry Gift for Kids in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts for kids online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.kids,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["kids"],
            }),
          },
        },
        mens: {
          seo: {
            title: `Buy Jewelry Gift for Mens in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts for mens online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.mens,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["mens", "unisex"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All - Jewelry Gifts | Page <number> | L'azurde UAE`,
            description: `Discover an exquisite collection of jewelry gifts online at L'azurde UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.shopAll,
          bannerWithcards: null,
          plpComponent: {},
        },
        lazurde: {
          seo: {
            title: "Buy L'azurde Jewelry in UAE | Page <number> | L'azurde UAE",
            description: `Explore our collection of L'azurde jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurde"] }),
          },
        },
        instyle: {
          seo: {
            title: `Buy Instyle Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Instyle jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyle"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `Buy Miss L' Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["missl"] }),
          },
        },
        waves: {
          seo: {
            title: `Buy Waves Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Waves jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["waves"] }),
          },
        },
        "coins-bars": {
          seo: {
            title: `Buy Coins Bars Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of coins bars jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.coinsBars,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: "gold",
              type: ["goldBar", "goldCoin"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Our Bestselling Range of Jewelry Gifts For Every Occasion | Page <number> | L'azurde UAE`,
            description: `Explore our collection of best-selling jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.bestSellers,
          bannerWithcards: null,
          plpComponent: {},
        },
        "new-in": {
          seo: {
            title: `Buy Latest & New Jewelry Gifts For Women | Page <number> | L'azurde UAE`,
            description: `Explore our collection of the latest & new jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `Best Jewelry Gift Prices For Women | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts online in the UAE, offering great value with best prices. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.specialPrice,
          bannerWithcards: null,
          plpComponent: {},
        },
        "yellow-gold": {
          seo: {
            title: `Buy Yellow Gold Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of yellow gold jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["yellowGold"] }),
          },
        },
        "white-gold": {
          seo: {
            title: `Buy White Gold Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of white gold jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["whiteGold"] }),
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Rose Gold Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rose gold jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["roseGold"] }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Multicolor Gold Jewelry Online in UAE| Page <number> | L'azurde UAE`,
            description: `Explore our collection of multicolor gold jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.mulitColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
          },
        },
        "gold-plated": {
          seo: {
            title: `Buy Gold Plated Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold plated jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.goldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["goldPlated"] }),
          },
        },
        "sterling-silver": {
          seo: {
            title: `Buy Sterling Silver Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of sterling silver jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.sterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["sterlingSilver"] }),
          },
        },
        diamonds: {
          seo: {
            title: `Buy Diamond Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamond jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              diamonds: ["diamonds"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Colored Stone Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of colored stone jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["coloredStones"],
            }),
          },
        },
        pearls: {
          seo: {
            title: `Buy Pearl Jewelry Gifts in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of pearl jewelry gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["pearls"],
            }),
          },
        },
        "under-500": {
          seo: {
            title: `Gift Jewelry Under 500 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["under500"] }),
          },
        },
        "500-1000": {
          seo: {
            title: `Gift Jewelry Under 1,000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts under 1,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["500to1000"] }),
          },
        },
        "1000-2000": {
          seo: {
            title: `Gift Jewelry Under 2,000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts under 2,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["1000to2000"] }),
          },
        },
        "2000-4000": {
          seo: {
            title: `Gift Jewelry Under 4,000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts under 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["2000to4000"] }),
          },
        },
        "4000-above": {
          seo: {
            title: `Gift Jewelry Above 4,000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry gifts above 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasions?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["4000above"] }),
          },
        },
      },
    },
    "gifts-occasions": {
      seo: {
        title: `Buy Jewelry Gifts for Women | Gifts for Her in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of jewelry gifts for women in UAE including rings, necklaces, bracelets and more. Shop with free delivery, free returns & options to buy now & pay later.`,
      },
      banner: bannersGiftsOccasionsBrand?.lOne,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        lazurde: {
          seo: {
            title: `Buy L’azurde Jewelry As The Perfect Gift For Any Occasion | Page <number> | L'azurde UAE`,
            description: `Explore our collection of L'azurde gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasionsBrand?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurde"] }),
          },
        },
        instyle: {
          seo: {
            title: `Buy Instyle Jewelry As The Perfect Gift For Any Occasion | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Instyle gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasionsBrand?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyle"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `Buy Miss L' Jewelry As The Perfect Gift For Any Occasion | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasionsBrand?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["missl"] }),
          },
        },
        waves: {
          seo: {
            title: `Buy Waves Jewelry As The Perfect Gift For Any Occasion | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Waves gifts online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersGiftsOccasionsBrand?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["waves"] }),
          },
        },
      },
    },
    jewelry: {
      seo: {
        title: "Buy Jewelry for Women in UAE | Page <number> | L'azurde UAE",
        description:
          "Explore our exquisite collection of jewelry online in UAE, including rings, necklaces, bracelets & more. Get free delivery & returns with options to buy now & pay later.",
      },
      banner: bannersJewelry?.LOne,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Buy Necklaces & Pendants in UAE | Necklace Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of necklaces & pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelrynecklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `Buy Rings for Women | Ring Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rings & bands online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["rings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Captivating Rings for Women </h2>
 
              <p>At L’azurde, sophistication meets creativity. Each ring design in our collection is a testament to timeless beauty and exceptional craftsmanship, making them cherished treasures that endure the test of time. Whether you seek a ring for everyday styling, a regal queen ring, a fashionable pinky ring, a striking statement ring, or an infinity band that symbolizes eternal love, our page invites you to explore and find the perfect ring that resonates with your unique spirit.</p>
             `,
              },
              content: {
                value: `
                   
             <h2>Shop For Exquisite Rings Designs Online</h2>
             
             <p>When it comes to forevers we have the most beautiful collection of eternity and wedding bands. From diamonds to solitaires to classic pave diamond bands, our wedding bands and engagement rings are just what you need to mark your day of love. </p>
              
             <p>Our queen rings are here to help you unleash your inner queen with their regal charm and opulence. Adorn your fingers with the resplendent beauty of royalty and make a statement that demands attention. For a touch of bold elegance, explore our pinky rings, designed to add a touch of sophistication and flair to your pinky finger. Our range of statement rings and two-headed rings is endless because we know you love options and each one of them is simply beautiful. Embrace the spirit of empowerment and confidence with these exquisite rings that celebrate your uniqueness.</p>
              
              <h2>Shop For Rings From UAE</h2>
              
             <p>Be the center of attention with our remarkable collection of rings at L’azurde UAE. Crafted with meticulous attention to detail, these rings feature bold designs and eye-catching gemstones that sparkle with brilliance. From classic yellow gold rings, and sophisticated white gold rings to the ever-elegant rose gold rings, at L’azurde there is a ring in every precious metal. You can also choose from diamonds in different cuts, pristine pearls and colored stones that will leave a lasting impression. Discover the power of self-expression through our collection of rings in UAE that will elevate your style to new heights.</p>
             
             <h2>FAQs:</h2>
             
             <h3>How to measure ring size at home?</h3>
              <p>Use a string and wrap it around the base of your finger. Either mark the point with a pen or cut the string where the ends meet. Measure the string with a ruler to get the diameter of the ring. </p>
              
              <h3>What finger do I wear a ring on?</h3>
              <p>An engagement or wedding ring is usually worn either on the left or right ring finger depending on your traditions and culture. For fashion rings it really depends on you. You can choose to wear it on any finger you like.</p>
              
              <h3>Can I wear a ring on my middle finger?</h3>
              <p>Yes, it is a personal preference.</p>
              
              <h3>What are the different ring styles?</h3>
              <p>You can choose from statement rings, two-headed rings, diamond rings, eternity bands, pinky rings, queen rings, bands and more.</p>
             
                  `,
              },
            },
          ],
          schema: [
            {
              q: "How to measure ring size at home?",
              a: "Use a string and wrap it around the base of your finger. Either mark the point with a pen or cut the string where the ends meet. Measure the string with a ruler to get the diameter of the ring.",
            },
            {
              q: "What finger do I wear a ring on?",
              a: "An engagement or wedding ring is usually worn either on the left or right ring finger depending on your traditions and culture. For fashion rings it really depends on you. You can choose to wear it on any finger you like.",
            },
            {
              q: "Can I wear a ring on my middle finger?",
              a: "Yes, it is a personal preference.",
            },
            {
              q: "What are the different ring styles?",
              a: "You can choose from statement rings, two-headed rings, diamond rings, eternity bands, pinky rings, queen rings, bands, and more.",
            },
          ],
        },
        "bracelets-anklets": {
          seo: {
            title: `Buy Bracelets for Women | Bracelets & Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bracelets & anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryBraceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["bracelets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Explore the Beauty of Bracelets and Anklets From UAE</h2>

                <p>Step into a world of wrist adornments that epitomize grace and sophistication. Our collection of bracelets in UAE is a celebration of timeless elegance, offering a diverse range of styles to suit every woman's taste. From delicate chains that exude femininity to bold bangles that make a statement, our bracelets are meticulously crafted to accentuate your beauty and elevate your style. Choose from all-time classics like a diamond-studded tennis bracelet or a minimal chain links bracelet that never fails to charm. Discover the perfect bracelet to complement your individuality and create cherished moments that last a lifetime.</p>
              
                `,
              },
              content: {
                value: `
                  
                <h2>Wrap Up Your Style: Choosing the Perfect Bracelet or Anklet</h2>
                <p>Be enchanted by the brilliance of diamonds, pearls, and colored stones, expertly set in lustrous white gold, yellow gold and rose gold metals. Each bracelet in our collection is a timeless treasure that captures hearts and leaves a lasting impression. Whether you seek a stackable arm candy or a standalone statement piece, our bracelets offer endless possibilities to showcase your individuality and sense of style.</p>
                
                <h2>Ankle Perfection: Explore The Beauty Of Anklets</h2>
                
                <p>Let your ankles shine with our gorgeous collection of anklets. Delicate and delightful, our anklets are designed to evoke a sense of carefree elegance. Whether you prefer a minimalist chain or a beaded anklet that adds a touch of Bohemian flair, we have the perfect ankle adornment to complement your style. Embrace the art of anklet layering to create a look that reflects your free spirit and enhances your feminine charm.</p>
                
                <p>Go ahead and shop for bracelets and anklets in UAE, we guarantee you won't be disappointed.</p>
                
                <h2>FAQs:</h2>
                
                <h3>What are the different types of bracelets?</h3>
                <p>There are so many options when it comes to bracelets - tennis bracelets, beaded bracelets, charm bracelets, chain bracelets, bangle bracelets and more.</p>
                
                <h3>How should you wear bracelets?</h3>
                <p>You can either wear a single bracelet that matches your ensemble or stack coordinated ones to create your own look.</p>
                
                <h3>How do I choose a bracelet?</h3>
                <p>While it can be difficult to choose one when you look at our collection, you can decide depending on different factors like the occasion, your personality, your outfit or the stone. "</p>
                
                `,
              },
            },
          ],
          schema: [
            {
              q: "What are the different types of bracelets?",
              a: "There are so many options when it comes to bracelets - tennis bracelets, beaded bracelets, charm bracelets, chain bracelets, bangle bracelets, and more.",
            },
            {
              q: "How should you wear bracelets?",
              a: "You can either wear a single bracelet that matches your ensemble or stack coordinated ones to create your own look.",
            },
            {
              q: "How do I choose a bracelet?",
              a: "While it can be difficult to choose one when you look at our collection, you can decide depending on different factors like the occasion, your personality, your outfit, or the stone.",
            },
          ],
        },
        earrings: {
          seo: {
            title: `Buy Earrings for Women | Earring Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryEarrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["earrings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>Embrace Versatility with Drop, Dangle, Stud, Clip-On, and Hoop Earrings </h2>
                <p>Get ready to be blown away by the versatility of our earring designs! We have everything a girl needs. From earrings in classic yellow gold, mesmerizing white gold to the ever-elegant rose gold. And yes, all of our range is made of either 18-karat or 21-karat gold. </p>
               `,
              },
              content: {
                value: `'
                
               <h2>Check Our Stunning Collection of Earrings in UAE</h2>
               <p>Choose from hoop earrings that frame your face with grace, drop earrings that sway with every step, and dangle earrings that add a touch of movement and charm. Discover the timeless elegance of stud earrings that never go out of style and the comfort of clip-on earrings for those without pierced ears. Our range of earrings in UAE caters to diverse preferences, ensuring you find the perfect pair that complements your unique style and personality.</p>
                <p>Whether you are a diamond girl or prefer something more subtle like plain gold or you like a little bit of color like our colored stone range of earrings, there is something for everyone. We also have a gorgeous collection of pearl earrings that are classy yet modern. </p>
                
               <h2>Shop For Earrings For Women At L’azurde </h2>
                <p>At L’azurde we believe every piece of jewelry is an extension of your personality. That’s why every pair is a testament to fine craftsmanship and we have a genuine passion for creating exquisite jewelry. Our earrings for women celebrate the essence of femininity and offer an array of designs that speak to your heart. So, shop for earrings and create a stunning jewelry collection that includes everything - hoop earrings, drop earrings, dangle earrings, stud earrings, clip-on earrings, and more. Discover our range and get ready to embrace the allure of accessories that enhance your natural beauty.</p>
               
               <h2>FAQs:</h2>
               
               <h3>Which type of earrings do girls like most?</h3>
                <p>The kind of earrings you choose really depends on your personality and preferences but an elegant pair of hoops and studs are classics that every girl likes to own.</p>
                
                <h3>What earrings can you wear every day?</h3>
                <p>You can choose from classic hoops, diamond studs or even minimal drop earrings. Our collection has a wide range of everyday earrings.</p>
                
                <h3>How do I choose the right earrings?</h3>
                <p>Choosing the right earrings depends on the occasion, the outfit and the look you are trying to create. </p>
                
                <h3>What size earrings should I wear?</h3>
                <p>Any size that you are comfortable wearing. It is really all about you and your preferences when it comes to earrings.</p>
                
                `,
              },
            },
          ],
          schema: [
            {
              q: "Which type of earrings do girls like most?",
              a: "The kind of earrings you choose really depends on your personality and preferences, but an elegant pair of hoops and studs are classics that every girl likes to own.",
            },
            {
              q: "What earrings can you wear every day?",
              a: "You can choose from classic hoops, diamond studs, or even minimal drop earrings. Our collection has a wide range of everyday earrings.",
            },
            {
              q: "How do I choose the right earrings?",
              a: "Choosing the right earrings depends on the occasion, the outfit, and the look you are trying to create.",
            },
            {
              q: "What size earrings should I wear?",
              a: "Any size that you are comfortable wearing. It is really all about you and your preferences when it comes to earrings.",
            },
          ],
        },
        sets: {
          seo: {
            title: `Buy Jewelry Sets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry sets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelrySets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["sets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Discover Exquisite Jewelry Sets For Every Occasion</h2>
 
              <p>Immerse yourself in the world of jewelry sets, where beauty and harmony meet to create captivating ensembles. Our collection celebrates the joy of perfectly matched pieces that enhance your every day and celebrate your special moments. Whether you desire a necklace set, wedding ring set, bridal jewelry set, pearl jewelry set, or half jewelry set, we have just about everything. Tell your unique story with a jewelry set that is sure to become a cherished memory for a lifetime.</p>
             `,
              },
              content: {
                value: `
                
              <h2>Unveil Your Love Story with Bridal Jewelry Sets in UAE</h2>
              
             <p>Make your special day a memorable one with our enchanting wedding ring set and bridal jewelry sets. Mark your eternal love with a wedding rings set that symbolizes your commitment and devotion. Each ring is crafted with precision and adorned with exquisite diamonds, solitaires or gemstones that shine as brightly as your love. For the bride seeking perfection on her special day, our bridal jewelry sets in UAE offer a radiant combination of necklaces, earrings, and bracelets, ensuring you glow with beauty and grace as you walk down the aisle. Whether you love the classic yellow gold, the elegant white gold, or want to go your own way with a classic rose gold set, our range of jewelry sets will leave you spoilt for choices.</p>
              
              <h2>Embrace Timeless Elegance with Pearl Jewelry Sets and Half Jewelry Sets</h2>
              
              <p>Pearls are timeless and so are our pearl jewelry sets, where lustrous pearls are artfully combined with 18-karat and 21-karat gold metal to create a breathtaking display of elegance. Our pearl necklace and earring sets exude sophistication and grace, making them perfect for both formal affairs and everyday chic. Additionally, explore the versatility of our half-jewelry sets, featuring necklaces paired with stunning bracelets or earrings, offering a touch of brilliance that effortlessly enhances your style.</p>
              
              <p>With L’azurde jewelry sets, dressing up for any occasion is easy. So, go ahead and explore our beautiful collection of jewelry sets and find the one that speaks your style.</p>
             
             <h2>FAQs:</h2>
             
             <h3>What does a jewelry set consist of?</h3>
              <p>A full jewelry set includes a necklace, bracelet, ring and a pair of earrings. A half jewelry set will include either a necklace along with a pair of earrings or a bracelet or maybe a set of earrings and a ring. </p>
              
              <h3>How do you match jewelry together?</h3>
              <p>You can always choose a jewelry set from L’azurde without bothering to mix and match pieces of jewelry together. Or if you want to go all DIY then you can explore our vast range and find co-ordinated pieces of jewelry to create your own jewelry set.</p>
             
             <h3>Can I wear a jewelry set with other metals or gemstones?</h3>
             <p>Yes, pairing a jewelry set with other metals or gemstones can add dimension. Ensure the combination complements the set's overall design</p>
             
              `,
              },
            },
          ],
          schema: [
            {
              q: "What does a jewelry set consist of?",
              a: "A full jewelry set includes a necklace, bracelet, ring, and a pair of earrings. A half jewelry set will include either a necklace along with a pair of earrings or a bracelet or maybe a set of earrings and a ring.",
            },
            {
              q: "How do you match jewelry together?",
              a: "You can always choose a jewelry set from L’azurde without bothering to mix and match pieces of jewelry together. Or if you want to go all DIY, then you can explore our vast range and find coordinated pieces of jewelry to create your own jewelry set.",
            },
            {
              q: "Can I wear a jewelry set with other metals or gemstones?",
              a: "Yes, pairing a jewelry set with other metals or gemstones can add dimension. Ensure the combination complements the set's overall design.",
            },
          ],
        },
        "half-sets": {
          seo: {
            title: `Buy Jewelry Half Sets for Women in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry half sets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryHalfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["halfSets"],
            }),
          },
        },
        kids: {
          seo: {
            title: `Buy Jewelry for Kids Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry for kids online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryKids,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["kids"],
            }),
          },
        },
        mens: {
          seo: {
            title: `Buy Jewelry for Mens Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry for Mens online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryMens,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["mens", "unisex"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All - Jewelry | Page <number> | L'azurde UAE`,
            description: `Discover an exquisite collection of jewelry online at L'azurde UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryShopAll,
          bannerWithcards: null,
          plpComponent: {},
        },
        lazurde: {
          seo: {
            title: `Buy L'azurde Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of L'azurde jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurde"] }),
          },
        },
        instyle: {
          seo: {
            title: `Buy Instyle Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Instyle jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyle"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `Buy Miss L' Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["missl"] }),
          },
        },
        waves: {
          seo: {
            title: `Buy Waves Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Waves jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["waves"] }),
          },
        },
        "coins-bars": {
          seo: {
            title: `Buy Coins Bars Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Coins Bars jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryCoinsBars,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: "gold",
              type: ["goldBar", "goldCoin"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Our Bestselling Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bestselling jewelry brands online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryBestSellers,
          bannerWithcards: null,
          plpComponent: {},
        },
        "new-in": {
          seo: {
            title: `Buy Latest & New Jewelry Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of new jewelry designs online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryNewIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `Get Best Prices on Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry online in the UAE, offering great value with best prices. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelrySpecialPrice,
          bannerWithcards: null,
          plpComponent: {},
        },
        "yellow-gold": {
          seo: {
            title: `Buy Yellow Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of yellow gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryYellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["yellowGold"] }),
          },
          contentSection: [
            {
              text: {
                value: `
            
            <h2>Buy Yellow Gold Jewelry Online In UAE</h2>
            <p>Indulge in the warmth of luxury with our yellow gold jewelry collection. As you buy yellow gold jewelry in UAE from L'azurde, you bring home a piece of elegance and heritage that stands the test of time. Each jewelry piece is meticulously crafted to capture the essence of opulence, making it a cherished addition to your collection.</p>
        `,
              },
              content: {
                value: `
                  
            <h2>Yellow Gold Jewelry For Every Occasion</h2>
            <p>Elevate your style with the radiance of yellow gold jewelry. Whether you're seeking a statement-making necklace for a day out or a delicate pair of earrings for a workday, our collection offers an array of designs to complement your unique taste. Our collection has both 18K yellow gold and 21K yellow gold jewelry, so you can choose the one that suits you the best. </p>
            
            <h2>Explore Our Exquisite Range of Yellow Gold Jewelry</h2>
            
            <p>Our collection has everything from yellow gold necklaces, rings, earrings, bracelets, and more. For the ones who love a little bit extra, choose from yellow gold jewelry that comes studded with diamonds, pearls or colored stones. The elegance of yellow gold against the radiance of gemstones is simply irresistible. </p>
            
            <p>Each piece is a celebration of the rich history and elegance of yellow gold. Immerse yourself in the allure of yellow gold jewelry and let its captivating charm leave a lasting impression. </p>
            
            <h2>FAQs:</h2>
            
            <h3>Is yellow gold good for jewelry?</h3>
            <p>Yes. Yellow gold is durable and perfect for jewlery like earrings, rings, necklaces and more.</p>
            
            <h3>Does yellow gold jewelry change color?</h3>
            <p>No. Yellow gold lasts forever and may only need to be cleaned for dirt or dust over a period of time.</p>
            
            <h3>Does yellow gold last long?</h3>
            <p>Yes. Yellow gold is a durable metal and can last for decades.</p>
            
            <h3>How do you take care of yellow gold?</h3>
            <p>Simply soak your jewelry in lukewarm water for a few hours and wipe clean with a dry cloth.</p>
            `,
              },
            },
          ],
          schema: [
            {
              q: "Is yellow gold good for jewelry?",
              a: "Yes. Yellow gold is durable and perfect for jewelry like earrings, rings, necklaces, and more.",
            },
            {
              q: "Does yellow gold jewelry change color?",
              a: "No. Yellow gold lasts forever and may only need to be cleaned for dirt or dust over a period of time.",
            },
            {
              q: "Does yellow gold last long?",
              a: "Yes. Yellow gold is a durable metal and can last for decades.",
            },
            {
              q: "How do you take care of yellow gold?",
              a: "Simply soak your jewelry in lukewarm water for a few hours and wipe clean with a dry cloth.",
            },
          ],
        },
        "white-gold": {
          seo: {
            title: `Buy White Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of white gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryWhiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["whiteGold"] }),
          },

          contentSection: [
            {
              text: {
                value: `
              <h2>The Radiance of White Gold Jewelry From UAE</h2>
              <p>Discover the allure of white gold, a precious metal that adds a unique twist to classic beauty. Our white gold jewelry in UAE showcases the perfect blend of tradition and contemporary flair. Whether you're looking for classic and plain white gold jewelry or go for something more sparkly with diamonds, colored stones or pearls, our pieces will elevate your style with their luminous glow.</p>
              
           
              `,
              },
              content: {
                value: `
              <h2>Seal Your Love with The Brilliance of White Gold Wedding Rings</h2>
              <p>Celebrate the eternal bond of love with our breathtaking white gold wedding rings. Each ring symbolizes the unbreakable commitment and the promise of a lifetime together. Crafted with the utmost care, our white gold wedding rings are designed to shine as bright as your love, making them the perfect expression of your devotion on your special day.</p>
              
              <h2>White Gold Diamond Rings - A Symbol of Forever</h2>
              <p>Experience the brilliance of white gold diamond rings that sparkle with every gesture. Our diamond-adorned white gold rings are a celebration of love and sophistication. Be mesmerized by the dazzling display of light and fire, capturing the essence of your eternal love in an exquisite piece of jewelry.</p>
              
              <h2>Explore The Timeless Glamour Of White Gold Earrings and Necklaces</h2>
              <p>Adorn yourself with timeless glamour through our collection of white gold earrings and necklaces. Whether you're attending a special event or adding elegance to your daily ensemble, these pieces will complement your style with grace and sophistication. The luminous beauty of white gold will effortlessly elevate your charm on any occasion.</p>
              
              <h2>White Gold Bracelets and Chains</h2>
              <p>Elevate your wrist with sublime beauty with our extensive collection of white gold bracelets and chains. Each piece is designed to be a statement of your impeccable taste and style. Whether you choose a delicate chain or a bold bracelet, our white gold jewelry will become a treasured addition to your collection.</p>
              
              <p>Step into the world of white gold jewelry with L’azurde UAE, where sophistication and allure blend seamlessly. The timeless pieces will captivate your heart and are here to enhance your style. Embrace the brilliance of white gold and celebrate the beauty of elegance with our captivating designs.</p>
              
              <h2>FAQs:</h2>
              
              <h3>How long does white gold last?</h3>
              <p>White gold is a durable metal and can last long but you might have to get it replated every 10 years or so.</p>
              
              <h3>Is white gold easy to maintain?</h3>
              <p>Yes. Simply soak your white gold jewelry in lukewarm water with 2-3 drops of dish soap for a few hours and then wipe dry.</p>
              
              <h3>Is it possible to wear all of my jewelry in white gold?</h3>
              <p>Absolutely, you can. White gold is a versatile and modern choice that complements various styles and occasions</p>
              `,
              },
            },
          ],
          schema: [
            {
              q: "How long does white gold last?",
              a: "White gold is a durable metal and can last long but you might have to get it replated every 10 years or so.",
            },
            {
              q: "Is white gold easy to maintain?",
              a: "Yes. Simply soak your white gold jewelry in lukewarm water with 2-3 drops of dish soap for a few hours and then wipe dry.",
            },
            {
              q: "Is it possible to wear all of my jewelry in white gold?",
              a: "Absolutely, you can. White gold is a versatile and modern choice that complements various styles and occasions.",
            },
          ],
        },
        "rose-gold": {
          seo: {
            title: `Buy Rose Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rose gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryRoseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["roseGold"] }),
          },
          contentSection: [
            {
              text: {
                value: `
            <h2>Buy Rose Gold Jewelry Online In UAE</h2>
            <p>Indulge in the regal allure of rose gold jewelry in UAE with L’azurde. As you buy rose gold jewelry from us, you bring home a piece of elegance and heritage that stands the test of time. Each jewelry piece is meticulously crafted to capture sophistication, making it a cherished addition to your collection.</p>
         `,
              },
              content: {
                value: `
                 
            <h2>Rose Gold Jewelry For Every Occasion</h2>
            <p>Stand out and make a statement with the charm of rose gold jewelry. Whether you're seeking a statement-making necklace for a day out or a delicate pair of earrings for a workday, our collection offers an array of designs to complement your unique taste. Our collection has both 18K rose gold and 21K rose gold jewelry, so you can choose the one that suits you the best. </p>
            
            <h2>Explore gorgeous rose gold necklaces, rings, earrings, bracelets, and more. </h2>
            
            <p>You can choose from classic plain rose gold jewelry or go for something that comes studded with colored stones, diamonds or pearls. Rose gold has the ability to blend and shine against any gemstone.</p>
            
            <p>Each piece in our rose gold jewelry collection is a testament to our craftsmanship and love for all things elegant and beautiful. Immerse yourself in the allure of rose gold jewelry and let its captivating charm leave a lasting impression. </p>
            
            <h2>FAQs:</h2>
            
            <h3>Does rose gold go with everything?</h3>
            <p>Yes. Rose gold jewelry is perfect for styling just about any outfit.</p>
            
            <h3>Does rose gold look good on all skin tones?</h3>
            <p>Yes. Gold and especially rose gold looks absolutely stunning on every skin tone.</p>
            
            <h3>Can rose gold be worn everyday?</h3>
            <p>Yes. Rose gold is a durable metal and can be worn every day.</p>
            
              `,
              },
            },
          ],
          schema: [
            {
              q: "Does rose gold go with everything?",
              a: "Yes. Rose gold jewelry is perfect for styling just about any outfit.",
            },
            {
              q: "Does rose gold look good on all skin tones?",
              a: "Yes. Gold and especially rose gold looks absolutely stunning on every skin tone.",
            },
            {
              q: "Can rose gold be worn everyday?",
              a: "Yes. Rose gold is a durable metal and can be worn every day.",
            },
          ],
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Multicolor Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of multicolor gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryMultiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
          },
        },
        "gold-plated": {
          seo: {
            title: `Buy Gold Plated Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold plated jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryGoldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["goldPlated"] }),
          },
          contentSection: [
            {
              text: {
                value: ` 
            <h2>Gold-Plated Jewelry in UAE </h2>
            <p>Indulge in opulence with our gold-plated jewelry in UAE. Our designs are made to enhance your style and add a touch of glamour to any ensemble. From intricate gold-plated necklaces to delicate gold-plated earrings, discover the beauty of gold without compromising on quality or craftsmanship.</p>
            `,
              },
              content: {
                value: `
               
            <h2>Shop Gold Plated Jewelry Online - Accessible Luxury at Your Convenience</h2>
            <p>Discover accessible luxury at your convenience with our online gold-plated jewelry store. Whether you want a scintillating necklace for that next cocktail party or a charming bracelet to elevate your everyday wardrobe, you can shop for anything with just a click of a button. Browse through our wide range of designs at your convenience and find the perfect piece to elevate your style. With our online shopping experience, you can explore the allure of gold-plated jewelry from the comfort of your home, making it easier than ever to shine with elegance.</p>
            
            <p>We believe that exquisite jewelry should be accessible to all. That’s why our gold-plated jewelry collection offers a wide range of prices, making it easier for you to find the perfect piece that suits your budget and style. So, go ahead and embrace the allure of gold-plated jewelry and sparkle with confidence with L’azurde.</p>
            
            <h2>FAQs:</h2>
            
            <h3>How long does gold-plated jewelry last?</h3>
            <p>If you care for your jewelry properly then gold-plated jewelry can last you up to 5 years or more.</p>
            
            <h3>Is gold-plated jewelry good to wear every day?</h3>
            <p>Yes, with proper care and keeping it away from harsh chemicals or excessive heat you can wear gold-plated jewelry every day.</p>
            
            <h3>How do you take care of gold-plated jewelry?</h3>
            <p>Keep your gold-plated jewelry away from harsh chemicals, perfumes or heat to make them last longer.</p>
            
            <h3>How do you keep gold-plated from fading?</h3>
            <p>To keep your gold-plated jewelry from fading always store it in a pouch or box and away from other pieces of jewelry.</p>
           
              `,
              },
            },
          ],
          schema: [
            {
              q: "How long does gold-plated jewelry last?",
              a: "If you care for your jewelry properly then gold-plated jewelry can last you up to 5 years or more.",
            },
            {
              q: "Is gold-plated jewelry good to wear every day?",
              a: "Yes, with proper care and keeping it away from harsh chemicals or excessive heat you can wear gold-plated jewelry every day.",
            },
            {
              q: "How do you take care of gold-plated jewelry?",
              a: "Keep your gold-plated jewelry away from harsh chemicals, perfumes or heat to make them last longer.",
            },
            {
              q: "How do you keep gold-plated from fading?",
              a: "To keep your gold-plated jewelry from fading always store it in a pouch or box and away from other pieces of jewelry.",
            },
          ],
        },
        "sterling-silver": {
          seo: {
            title: `Buy Sterling Silver Jewelry | 925 Silver in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of 925 sterling silver jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelrySterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["sterlingSilver"] }),
          },
          contentSection: [
            {
              text: {
                value: `
            <h2>Discover the Brilliance of 925 Silver</h2>

            <p>Step into the world of sterling silver jewelry made from the finest quality, 925 silver and combined with fine artistry to create pieces that will leave you spellbound. Our collection celebrates the joy of beautifully crafted silver rings, silver necklaces, silver chains, and silver diamond jewelry that are all designed to enhance your allure and celebrate your unique style. We also have a stunning collection of men’s jewelry including, silver rings for men, silver bracelets for men, or silver chains for men. Explore our 925 sterling silver jewelry in UAE and find the perfect piece that resonates with your spirit.</p>
         `,
              },
              content: {
                value: `
                  
            <h2>Shop Dazzling Silver Jewelry For Every Occasion in UAE.</h2>
            
            <p>Indulge in the sparkle of silver diamond rings and necklaces that capture attention and hearts. Our collection boasts a range of exquisite silver diamond rings, each one adorned with dazzling diamonds in different cuts and carats that shimmer with brilliance. You will also find sterling silver jewelry studded with colored stones and pristine pearls that ooze elegance and feminine flair. Each piece is designed to complement different styles and occasions. </p>
            
            <h2>Timeless Sophistication - Silver Jewelry For Every Occasion</h2>
            <p>At L’azurde you will find the most extensive and gorgeous collection of sterling silver jewelry in UAE. So, go ahead and lose yourself in the beauty of silver with us!</p>
            
            <h2>FAQs:</h2>
            
            <h3>Is sterling silver easy to maintain?</h3>
            <p>Yes. All you need to do is store them in a clean box and wipe them clean when needed. </p>
            
            <h3>Is it OK to wear sterling silver every day?</h3>
            <p>Yes, absolutely.</p>
            
            <h3>How long does sterling silver last?</h3>
            <p>If you care well then sterling silver can last you for up to 20 to 30 years.</p>
            
            <h3>Is sterling silver safe for the skin?</h3>
            <p>Sterling silver is made of 92.5% silver and 7.5% copper and this blend of two metals makes it hypoallergenic and just perfect for every skin type.</p>
           
              `,
              },
            },
          ],
          schema: [
            {
              q: "Is sterling silver easy to maintain?",
              a: "Yes. All you need to do is store them in a clean box and wipe them clean when needed.",
            },
            {
              q: "Is it OK to wear sterling silver every day?",
              a: "Yes, absolutely.",
            },
            {
              q: "How long does sterling silver last?",
              a: "If you care well then sterling silver can last you for up to 20 to 30 years.",
            },
            {
              q: "Is sterling silver safe for the skin?",
              a: "Sterling silver is made of 92.5% silver and 7.5% copper, and this blend of two metals makes it hypoallergenic and just perfect for every skin type.",
            },
          ],
        },
        diamonds: {
          seo: {
            title: `Buy Diamond Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of diamonds online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryDiamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              diamonds: ["diamonds"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Colored Stone Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of colored stone jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryColoredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["coloredStones"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
            <h2>Embrace The Beauty Of Colored Stones Jewelry</h2>

            <p>Immerse yourself in the world of colored stones jewelry in UAE with L’azurde, where hues come alive and beauty knows no bounds. Let these vibrant colored stones be an expression of your unique self, reflecting your individuality with every glance. </p>
        
            `,
              },
              content: {
                value: `
                  
            <h2>Radiate Sunshine with Yellow Stones Jewelry</h2>
            
            <p>Add a touch of sunshine to your style with our breathtaking yellow stones jewelry. These vibrant gems symbolize joy and positivity, illuminating your look with their warmth and cheerful glow. Whether you prefer a sunny yellow sapphire or a dazzling citrine, our collection of yellow stones jewelry promises to brighten every day with its radiant charm.</p>
            
            <h2>Mesmerizing Amethyst Stones and Turquoise Stones Jewelry</h2>
            
            <p>Experience the regal allure of amethyst stones, amber stones and other colored stones that are designed to captivate with its beauty. Our collection showcases luxurious hues of colored stones in various exquisite designs. Turquoise stones represent peace and serenity, evoking the feeling of serene blue waters. Adorn yourself with turquoise necklaces or turquoise rings, and let the soothing energy of these stones accompany you on your journey to calmness and balance.</p>
            <p>From delicate amethyst earrings to statement turquoise rings, with our colored stones collection, you can embrace the sophistication and elegance that these royal stones offer.</p>
            
            <h2>Enchanting Emerald - Unveil the Green Splendor</h2>
            
            <p>Experience the allure of nature's green splendor with our captivating emerald rings and emerald necklaces. The emerald is a symbol of renewal and vitality and embodies the beauty of lush landscapes. Our emerald jewelry celebrates the vibrant shades of green, adding a touch of elegance to every ensemble.</p>
            
            <h2>The Passionate Red - Ruby Rings and Necklaces</h2>
            
            <p>Rubies have been a favorite for centuries and rightly so! Experience the fiery passion of ruby rings and ruby necklaces with our mesmerizing collection. Our ruby jewelry captures the intense red hues, symbolizing affection and boldness. Whether you're looking for a stunning ruby ring or a captivating ruby necklace, let these passionate gems ignite your spirit and captivate your heart.</p>
            
            <h2>Shop For Gemstone Jewelry In UAE</h2>
            
            <p>Experience the timeless beauty of our gemstone jewelry in UAE, where each piece is a masterpiece of artistry and elegance. Our curated selection showcases a myriad of colors, shapes, and styles, ensuring that you find the perfect gemstone jewelry that complements your personality and style.</p>
            
            <h2>FAQs:</h2>
            
            <h3>Why do people wear gemstone jewelry?</h3>
            <p>Each gemstone has a unique energy and property, while some people wear it for its specific properties, some simply wear it because they are just beautiful.</p>
            
            <h3>How do I choose a piece of gemstone jewelry?</h3>
            <p>You need to check the color, clarity and carat of the gemstone before you choose one.</p>
            
            <h3>How can you tell the quality of a gemstone?</h3>
            <p>The quality of a gemstone depends on its color and carat.</p>
            
            <h3>What is the most used gemstone in jewelry?</h3>
            <p>There is no surprise there because it is undoubtedly a diamond.</p>
              `,
              },
            },
          ],
          schema: [
            {
              q: "Why do people wear gemstone jewelry?",
              a: "Each gemstone has a unique energy and property, while some people wear it for its specific properties, some simply wear it because they are just beautiful.",
            },
            {
              q: "How do I choose a piece of gemstone jewelry?",
              a: "You need to check the color, clarity and carat of the gemstone before you choose one.",
            },
            {
              q: "How can you tell the quality of a gemstone?",
              a: "The quality of a gemstone depends on its color and carat.",
            },
            {
              q: "What is the most used gemstone in jewelry?",
              a: "There is no surprise there because it is undoubtedly a diamond.",
            },
          ],
        },
        pearls: {
          seo: {
            title: `Buy Pearl Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of pearl jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryPearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["pearls"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>Pearl Jewelry: Nature's Precious Gems From UAE</h2>
              <p>Indulge in the enchanting allure of pearls, nature's precious gems of grace. Our pearl jewelry in UAE showcases the unrivaled beauty of these organic treasures. From lustrous pearl necklaces that grace your neckline to delicate pearl earrings that illuminate your face, we have you covered. </p>
           
              `,
              },
              content: {
                value: `
                 
              <h2>Shop For Pearl Necklaces, Earrings, Bracelets, and Rings</h2>
              <p>Experience classic elegance with our curated collection of pearl necklaces, pearl earrings, pearl bracelets, and pearl rings. Our pearl jewelry designs celebrate the understated beauty of pearls, making them the perfect choice for any occasion. Choose from pearls set beautifully in intricate designs made from classic yellow gold, dazzling white gold and romantic rose gold metal. Whether you're dressing up for a special event or adding a touch of sophistication to your everyday ensemble, our pearl jewelry is the epitome of timeless style.</p>
              
              <h2>Timeless Glamour & Timeless Beauty with Our Pearl Jewelry</h2>
              <p>Our exquisite pearl necklaces are masterpieces of craftsmanship, showcasing the natural radiance of pearls. Whether you prefer a single pearl pendant or a multi-strand pearl necklace, our pearl jewelry collection offers a variety of styles to suit your taste. When it comes to pearl earrings, we have classic pearl studs to intricately designed pearl drop earrings, each pair exuding a sense of sophistication and femininity. </p>
              
              <p>Adorn your wrists and fingers with graceful beauty through our pearl bracelets and rings. Our pearl bracelets add a touch of sophistication to your look, while our pearl rings make a statement of refined elegance. Whether worn alone or stacked with other jewelry, these graceful adornments are a timeless addition to your collection.</p>
              
              <p>Embrace the elegance and grace of pearls as they become an integral part of your style. Explore our collection of pearl necklaces, earrings, bracelets, and rings, and elevate your sophistication with the beauty of pearls.</p>
              
              <h2>FAQs:</h2>
              
              <h3>How long does pearl jewelry last?</h3>
              <p>When taken care of, a piece of pearl jewelry can last a lifetime and more. Pearls are the most durable gemstone.</p>
              
              <h3>Can you wear pearl jewelry every day?</h3>
              <p>Yes. Pearls are durable and a simple pearl necklace or studs are perfect for everyday wear.</p>
              
              <h3>How do you maintain pearls?</h3>
              <p>Gently wipe pearl jewelry with a cloth to remove any dirt, perfume, or sweat before storing them.</p>
              `,
              },
            },
          ],
          schema: [
            {
              q: "How long does pearl jewelry last?",
              a: "When taken care of, a piece of pearl jewelry can last a lifetime and more. Pearls are the most durable gemstone.",
            },
            {
              q: "Can you wear pearl jewelry every day?",
              a: "Yes. Pearls are durable and a simple pearl necklace or studs are perfect for everyday wear.",
            },
            {
              q: "How do you maintain pearls?",
              a: "Gently wipe pearl jewelry with a cloth to remove any dirt, perfume, or sweat before storing them.",
            },
          ],
        },
        "under-500": {
          seo: {
            title: `Buy Jewelry Under 500 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelryUnder500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["under500"] }),
          },
        },
        "500-1000": {
          seo: {
            title: `Buy Jewelry Under 1,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry under 1,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelry500to1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["500to1000"] }),
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Jewelry Under 2,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry under 2,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelry1000to2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["1000to2000"] }),
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Jewelry Under 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry under 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelry2000to4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["2000to4000"] }),
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Jewelry Above 4,000 AED in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our jewelry collection above 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersJewelry?.jewelry4000andAbove,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["4000above"] }),
          },
        },
      },
    },
    "lab-grown-diamonds": {
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Buy Necklaces & Pendants in UAE | Necklace Designs | Page <number> | L'azurde UAE`,
            description: `Explore our collection of necklaces & pendants online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `Buy Rings for Women | Ring Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of rings & bands online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              category: ["rings"],
            }),
          },
        },
        bracelets: {
          seo: {
            title: `Buy Bracelets for Women | Bracelets & Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bracelets & anklets online in UAE, offering exquisite designs. Shop with free delivery & returns with options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `Buy Earrings for Women | Earring Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bracelets & anklets online in UAE, offering exquisite designs. Shop with free delivery & returns with options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              category: ["earrings"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All - Jewelry | Page <number> | L'azurde UAE`,
            description: `Discover an exquisite collection of jewelry online in UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Our Bestselling Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of bestselling jewelry brands online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `Buy Latest & New Jewelry Designs in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of new jewelry designs online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              newIn: ["newIn"],
            }),
          },
        },
        "under-6000": {
          seo: {
            title: `Buy Gold Jewelry Under 500 SAR in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry under 500 SAR online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              price: ["under6000"],
            }),
          },
        },
        "6000-10000": {
          seo: {
            title: `Buy Gold Jewelry Under 1,000 SAR in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of gold jewelry under 1,000 SAR online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              price: ["6000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `Buy Jewelry Under 2000 SAR in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of jewelry under 2000 SAR online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurde"],
              collection: ["eterna"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
  },
  missl: {
    "shop-all": {
      seo: {
        title: `Shop All - Miss L' Jewelry | Page <number> | L'azurde UAE`,
        description: `Discover an exquisite collection of Miss L' jewelry online at L'azurde UAE. Shop with free delivery, free returns & options to buy now & pay later.`,
      },
      banner: bannersMissl?.shopAll,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "best-sellers": {
      seo: {
        title: `Buy Our Bestselling Range of Miss L' Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of best Miss L' jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.bestSellers,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "new-in": {
      seo: {
        title: `Buy Latest & New Miss L' Designs in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of new Miss L' designs online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.newIn,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], newIn: ["newIn"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "special-price": {
      seo: {
        title: `Get Best Prices on Miss L' Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' jewelry online in the UAE, offering great value with the best prices. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.specialPrice,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "yellow-gold": {
      seo: {
        title: `Buy Miss L' Yellow Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' yellow gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.yellowGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["missl"],
          metalColor: ["yellowGold"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "white-gold": {
      seo: {
        title: `Buy Miss L' White Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' white gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.whiteGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["missl"],
          metalColor: ["whiteGold"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "rose-gold": {
      seo: {
        title: `Buy Miss L' Rose Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' rose gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.roseGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["missl"],
          metalColor: ["roseGold"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "multicolor-gold": {
      seo: {
        title: `Buy Miss L' Multicolor Gold Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' multicolor gold jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.multiColorGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["missl"],
          metalColor: [
            "yellowWhiteGold",
            "whiteRoseGold",
            "yellowWhiteRoseGold",
            "yellowRoseGold",
          ],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    diamonds: {
      seo: {
        title: `Buy Miss L' Diamond Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' diamond jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.diamond,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], diamonds: ["diamonds"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "colored-stones": {
      seo: {
        title: `Buy Miss L' Colored Stone Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' colored stone jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.coloredStone,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["missl"],
          stone: ["coloredStones"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    essentials: {
      seo: {
        title: `Buy Miss L' Essentials Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' essentials jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.essentials,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], collection: ["essentials"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "under-500": {
      seo: {
        title: `Miss L' Jewelry Under 500 AED | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' jewelry under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.under500,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], price: ["under500"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "500-1000": {
      seo: {
        title: `Miss L' Jewelry Under 1,000 AED | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' jewelry under 1,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.under1000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], price: ["500to1000"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "1000-2000": {
      seo: {
        title: `Miss L' Jewelry Under 2,000 AED | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' jewelry under 2,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.under2000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], price: ["1000to2000"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "2000-4000": {
      seo: {
        title: `Miss L' Jewelry Under 4,000 AED | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' jewelry under 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.under4000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], price: ["2000to4000"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "4000-above": {
      seo: {
        title: `Miss L' Jewelry Above 4,000 AED | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' jewelry above 4,000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.above4000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], price: ["4000above"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "necklaces-pendants": {
      seo: {
        title: `Buy Miss L' Necklaces & Pendants | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' necklaces & pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.necklacesPendants,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], category: ["necklace"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        "shop-all": {
          seo: {
            title: `Shop All Miss L' Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Shop All Miss L' Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "pendants-chain": {
          seo: {
            title: `Buy Miss L' Pendants Chain in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Pendants Chain online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.pendantsChain,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              type: ["pendantChain"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pendants: {
          seo: {
            title: `Buy Miss L' Pendants Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Pendants jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.pendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              type: ["pendant"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        choker: {
          seo: {
            title: `Buy Miss L' Choker Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Choker Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.chokar,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              type: ["choker"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        layered: {
          seo: {
            title: `Buy Miss L' Layered Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Layered Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.layered,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              type: ["layered"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        chains: {
          seo: {
            title: `Buy Miss L' Chains Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Chains Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.chains,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              type: ["chainNecklace"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        charms: {
          seo: {
            title: `Buy Miss L' Charms Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Charms Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.charms,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              type: ["charmsNecklace"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Miss L' Best Sellers Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Best Sellers Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `Buy Miss L' New In Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' New In Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              newIn: ["newIn"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `Buy Miss L' Special Price Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Special Price Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Miss L' Yellow Gold Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Yellow Gold Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              metalColor: ["yellowGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `Buy Miss L' White Gold Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' White Gold Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              metalColor: ["whiteGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Miss L' Rose Gold Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rose Gold Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              metalColor: ["roseGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Miss L' Multicolor Gold Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Multicolor Gold Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.multiColoredGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `Buy Miss L' Diamonds Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Diamonds Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              diamonds: ["diamonds"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Miss L' Colored Stones Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Colored Stones Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              stone: ["coloredStones"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `Buy Miss L' Pearls Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Pearls Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              stone: ["pearls"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `Buy Miss L' Essential Necklaces And Pendants in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Essential Necklaces And Pendants online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              collection: ["essentials"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-500": {
          seo: {
            title: `Buy Miss L' Necklaces And Pendants Under 500 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Necklaces And Pendants under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              price: ["under500"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "500-1000": {
          seo: {
            title: `Buy Miss L' Necklaces And Pendants Between 500-1000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Necklaces And Pendants between 500-1000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              price: ["500to1000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Miss L' Necklaces And Pendants Between 1000-2000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Necklaces And Pendants between 1000-2000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              price: ["1000to2000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Miss L' Necklaces And Pendants Between 2000-4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Necklaces And Pendants between 2000-4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              price: ["2000to4000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Miss L' Necklaces And Pendants Above 4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Necklaces And Pendants above 4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.neckPend?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["necklace"],
              price: ["4000above"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
      },
    },
    rings: {
      seo: {
        title: `Buy Miss L' Rings | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.rings?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], category: ["rings"] }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        statement: {
          seo: {
            title: `Buy Miss L' Statement Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Statement Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.statement,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              type: ["statement"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "two-headed": {
          seo: {
            title: `Buy Miss L' Two Headed Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Two Headed Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.twoHeaded,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              type: ["twoHeaded"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        eternity: {
          seo: {
            title: `Buy Miss L' Eternity Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Eternity Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.eternity,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              type: ["eternity"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        band: {
          seo: {
            title: `Buy Miss L' Band Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Band Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.band,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              type: ["band"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All Miss L' Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Shop All Miss L' Rings online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Miss L' Best Sellers Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Best Sellers Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `Buy Miss L' New In Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' New In Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              newIn: ["newIn"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `Buy Miss L' Special Price Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Special Price Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Miss L' Yellow Gold Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Yellow Gold Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              metalColor: ["yellowGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `Buy Miss L' White Gold Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' White Gold Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              metalColor: ["whiteGold"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Miss L' Rose Gold Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rose Gold Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              metalColor: ["roseGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Miss L' Multicolor Gold Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Multicolor Gold Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.multiColoredGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `Buy Miss L' Diamonds Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Diamonds Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              diamonds: ["diamonds"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Miss L' Colored Stones Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Colored Stones Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              stone: ["coloredStones"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `Buy Miss L' Pearls Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Pearls Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              stone: ["pearls"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `Buy Miss L' Essentail Rings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Essentail Rings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              collection: ["essentials"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-500": {
          seo: {
            title: `Buy Miss L' Rings Under 500 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rings Under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              price: ["under500"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "500-1000": {
          seo: {
            title: `Buy Miss L' Rings Between 500-1000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rings Between 500-1000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              price: ["500to1000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Miss L' Rings Between 1000-2000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rings Between 1000-2000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              price: ["1000to2000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Miss L' Rings Between 2000-4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rings Between 2000-4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              price: ["2000to4000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Miss L' Rings Above 4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rings Above 4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.rings?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["rings"],
              price: ["4000above"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
      },
    },
    "bracelets-anklets": {
      seo: {
        title: `Buy Miss L' Bracelets & Anklets | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' bracelets & anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.braceletsAnklets?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], category: ["bracelets"] }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        chain: {
          seo: {
            title: `Buy Miss L' Chain Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Chain Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.chain,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              type: ["chainBracelet"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        cuff: {
          seo: {
            title: `Buy Miss L' Cuff Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Cuff Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.cuff,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              type: ["cuff"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        bangle: {
          seo: {
            title: `Buy Miss L' Bangle Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Bangle Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.bangle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              type: ["bangle"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        charm: {
          seo: {
            title: `Buy Miss L' Charm Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Charm Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.charm,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              type: ["charmsBracelets"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All Miss L' Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Shop All Miss L' Bracelets Anklets online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Miss L' Best Sellers Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Best Sellers Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `Buy Miss L' New In Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' New In Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              newIn: ["newIn"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `Buy Miss L' Special Price Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Special Price Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Miss L' Yellow Gold Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Yellow Gold Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              metalColor: ["yellowGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `Buy Miss L' White Gold Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' White Gold Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              metalColor: ["whiteGold"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Miss L' Rose Gold Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rose Gold Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              metalColor: ["roseGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Miss L' Multicolor Gold Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Multicolor Gold Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.multiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `Buy Miss L' Diamonds Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Diamonds Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              diamonds: ["diamonds"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Miss L' Colored Stones Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Colored Stones Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              stone: ["coloredStones"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `Buy Miss L' Pearls Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Pearls Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              stone: ["pearls"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `Buy Miss L' Essential Bracelets Anklets in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Essential Bracelets Anklets online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              collection: ["essentials"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-500": {
          seo: {
            title: `Buy Miss L' Bracelets Anklets Under 500 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Bracelets Anklets under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              price: ["under500"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "500-1000": {
          seo: {
            title: `Buy Miss L' Bracelets Anklets Between 500-1000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Bracelets Anklets between 500-1000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              price: ["500to1000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Miss L' Bracelets Anklets Between 1000-2000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Bracelets Anklets between 1000-2000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              price: ["1000to2000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Miss L' Bracelets Anklets Between 2000-4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Bracelets Anklets between 2000-4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              price: ["2000to4000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Miss L' Bracelets Anklets Above 4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Bracelets Anklets above 4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.braceletsAnklets?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["bracelets"],
              price: ["4000above"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
      },
    },
    earrings: {
      seo: {
        title: `Buy Miss L' Earrings | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
      },
      banner: bannersMissl?.earrings?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["missl"], category: ["earrings"] }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        stud: {
          seo: {
            title: `Buy Miss L' Stud Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Stud Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.stud,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              type: ["stud"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        chandelier: {
          seo: {
            title: `Buy Miss L' Chandelier Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Chandelier Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.chandelier,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              type: ["chandelier"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        hoop: {
          seo: {
            title: `Buy Miss L' Hoop Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Hoop Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.hoop,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              type: ["hoop"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        drop: {
          seo: {
            title: `Buy Miss L' Drop Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Drop Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.drop,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              type: ["drop"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "clip-on": {
          seo: {
            title: `Buy Miss L' Clip On Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Clip On Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.clipOn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              type: ["clipOn"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        cuff: {
          seo: {
            title: `Buy Miss L' Cuff Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Cuff Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.cuff,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              type: ["cuff"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All Miss L' Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Shop All Miss L' Earrings online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Miss L' Best Sellers Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Best Sellers Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `Buy Miss L' New In Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' New In Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              newIn: ["newIn"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `Buy Miss L' Special Price Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Special Price Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Miss L' Yellow Gold Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Yellow Gold Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              metalColor: ["yellowGold"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `Buy Miss L' White Gold Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' White Gold Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              metalColor: ["whiteGold"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Miss L' Rose Gold Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rose Gold Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              metalColor: ["roseGold"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Miss L' Multicolor Gold Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Multicolor Gold Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.multiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `Buy Miss L' Diamonds Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Diamonds Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              diamonds: ["diamonds"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Miss L' Colored Stones Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Colored Stones Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              stone: ["coloredStones"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `Buy Miss L' Pearls Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Pearls Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              stone: ["pearls"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `Buy Miss L' Essential Earrings in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Essential Earrings online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              stone: ["essentials"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-500": {
          seo: {
            title: `Buy Miss L' Earrings Under 500 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Earrings under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              price: ["under500"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "500-1000": {
          seo: {
            title: `Buy Miss L' Earrings Between 500-1000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Earrings between 500-1000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              price: ["500to1000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Miss L' Earrings Between 1000-2000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Earrings between 1000-2000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              price: ["1000to2000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Miss L' Earrings Between 2000-4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Earrings between 2000-4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              price: ["2000to4000"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Miss L' Earrings Above 4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Earrings above 4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.earrings?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              category: ["earrings"],
              price: ["4000above"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
      },
    },
    kids: {
      seo: {
        title: `Buy Miss L' Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
        description: `Explore our collection of Miss L' for Kids Jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
      },
      banner: bannersMissl?.kids?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["missl"],
          collection: ["kids"],
        }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Buy Miss L' Necklaces & Pendants Kids Jewelry Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Necklaces Pendants Kids Jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              category: ["necklace"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        rings: {
          seo: {
            title: `Buy Miss L' Rings Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rings Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              category: ["rings"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "bracelets-anklets": {
          seo: {
            title: `Buy Miss L' Bracelets & Anklets for Kids Online in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Bracelets Anklets Kids Jewelry online in UAE, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.braceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              category: ["bracelets"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        earrings: {
          seo: {
            title: `Buy Miss L' Earrings Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Earrings Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              category: ["earrings"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "shop-all": {
          seo: {
            title: `Shop All Miss L' Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Shop All Miss L' Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `Buy Miss L' Best Sellers Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Best Sellers Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `Buy Miss L' New In Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' New In Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              newIn: ["newIn"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `Buy Miss L' Special Price Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Special Price Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `Buy Miss L' Yellow Gold Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Yellow Gold Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              metalColor: ["yellowGold"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `Buy Miss L' White Gold Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' White Gold Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              metalColor: ["whiteGold"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `Buy Miss L' Rose Gold Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Rose Gold Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              metalColor: ["roseGold"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Miss L' Multicolor Gold Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Multicolor Gold Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.multiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              metalColor: [
                "yellowWhiteGold",
                "whiteRoseGold",
                "yellowWhiteRoseGold",
                "yellowRoseGold",
              ],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `Buy Miss L' Diamonds Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Diamonds Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              diamonds: ["diamonds"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `Buy Miss L' Colored Stones Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Colored Stones Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              stone: ["coloredStones"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `Buy Miss L' Pearls Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Pearls Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              stone: ["pearls"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `Buy Miss L' Essential Kids Jewelry in UAE | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Essential Kids Jewelry online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids", "essentials"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-500": {
          seo: {
            title: `Buy Miss L' Kids Jewelry Under 500 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Kids Jewelry under 500 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              price: ["under500"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "500-1000": {
          seo: {
            title: `Buy Miss L' Kids Jewelry Between 500-1000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Kids Jewelry between 500-1000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              price: ["500to1000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "1000-2000": {
          seo: {
            title: `Buy Miss L' Kids Jewelry Between 1000-2000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Kids Jewelry between 1000-2000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              price: ["1000to2000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "2000-4000": {
          seo: {
            title: `Buy Miss L' Kids Jewelry Between 2000-4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Kids Jewelry between 2000-4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              price: ["2000to4000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "4000-above": {
          seo: {
            title: `Buy Miss L' Kids Jewelry Above 4000 AED | Page <number> | L'azurde UAE`,
            description: `Explore our collection of Miss L' Kids Jewelry above 4000 AED online in the UAE, offering exquisite designs. Shop with free delivery, hassle-free returns, and options to buy now & pay later.`,
          },
          banner: bannersMissl?.kids?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["missl"],
              collection: ["kids"],
              price: ["4000above"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
      },
    },
  },
};

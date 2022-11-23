import React from "react";

import "../styles/faqbody.css";
import Faq from "./Faq";

export default () => {
  const faqList = [
    {
      question:
        "Why KidBucha? How is it different from other Kombucha on the market?",
      answer:
        "KidBucha is alive, raw and exactly what kombucha is meant to be! KidBucha is a high quality, probiotic, antioxidant, organic acid rich drink that is meant for the young, old and everything in between! Plus, KidBucha is 100% natural, free of artificial flavors and colors and tastes amazing! \n\nOther kombucha drinks on the market have been pasteurized, carbonated, and stripped from its natural form and turned into a glorified soda pop. Not KidBucha!",
    },
    {
      question:
        "What are the benefits of consuming probiotic foods vs supplementing with probiotics?",
      answer:
        "By consuming KidBucha, you are getting probiotics, antioxidants, organic acids, in the most natural way with an array of live active strains that aren’t created in a lab. Purchasing probiotics can be very expensive, with no guarantee that they are doing any good. \n\nYou may notice that many Kombucha companies are adding patented probiotics at the time of bottling. A probiotic pill or addition of probiotic will never be as good as the natural occurring microorganisms found in the food itself. There are several reasons why they may be doing this. \n\n\t1. Pasteurizing - They may be heating the Kombucha to kill off all the yeast/bacteria to create a stable, long shelf-life product. \n\t2. Rapid Ferment – A rapid ferment is where production time is sped up, creating more product in a short amount of time. This process does not allow enough time to develop a good amount of strong, healthy bacteria. They will typically dilute with a Kombucha Vinegar and carbonate to mask the sourness from the vinegar. \n\t3. Extended Ferment - They are fermenting for too long where the good bacteria diminish, and the product is more of a Kombucha Vinegar (high in organic acids) that has to be highly diluted and most likely carbonated. \n\t4. Sterile Filtering – Just like it sounds, they are using a filter that removes all microorganisms and sterilizes the Kombucha, creating a clear, more shelf-stable product.",
    },
    {
      question: "Health Benefits that may come from consuming Fermented Foods:",
      answer:
        "1. Enhance Digestion/Nutrient absorption \n2. Detox the liver/cleanse the body naturally \n3. Relieve constipation \n4. Improve neonatal health \n5. Weight loss \n6. Balance the gut flora \n7. Help fight off disease causing microorganisms \n8. Promote immune health \n9. Increase energy and focus \n10. Reduce inflammation/manage IBS, Crohn’s and Ulcerative Colitis \n11. Oral health \n12. May help to stimulate serotonin levels (the feel-good hormone that aids in the feelings of well- being). It may also ease anxiety, depression and boost the brain cognitive function (ability to think, learn and remember)",
    },
    {
      question: "How is KidBucha made?",
      answer:
        "KidBucha is made with reverse osmosis water, organic cane sugar and organic green tea that is fermented for 3-4 weeks under the best care. The SCOBY (symbiotic culture of bacteria and yeast) produces bacteria and yeast that feast upon the sugar, caffeine and antioxidants provided from the tea mixture, and in return creates a probiotic, organic acid, polyphenol rich, powerhouse drink. When Kombucha is made right, it is an antipathogenic drink, meaning pathogens (harmful microorganisms) cannot make a home and survive in KidBucha. Compare it to the body. If our immune system is compromised, we may become sick. When our immune system is in peak condition, we do not get sick since pathogens cannot survive in a healthy environment. Pathogens are attracted to unhealthy, unbalanced environments where they create havoc. \n\nWhen KidBucha is ready, the large yeast particles are removed, keeping all the good microorganisms and acids behind, bottled and flavored with organic juices, non-GMO and/or organic natural flavor infusions and a small amount of allulose. There are no artificial colors or flavorings. Our 8-ounce KidBucha contains a minimum of 50% kombucha (4 total ounces) and tastes great! WOW!",
    },
    {
      question: "What is allulose and why is it used in KidBucha?",
      answer:
        "Allulose is a ‘rare’, plant-based sugar that is found in small amounts in certain foods including jackfruit, figs, and raisins. It is 70% as sweet as sugar, bakes and freezes like sugar and tastes like sugar with no aftertaste. It is a monosaccharide that is absorbed by the body but not metabolized so its nearly calorie-free. It will not raise blood sugar levels and it does not ferment in the belly so the chances of bloating from consuming allulose are slim. Allulose is NOT a sugar alcohol. Allulose is also diabetic and keto friendly! Why not use allulose? \n\nThe Bucha Barn uses Allulose in KidBucha since we want KidBucha to be a nutrition dense, low sugar drink that is enjoyable for anyone looking to enjoy the benefits of Kombucha.",
    },
    {
      question: "Is KidBucha safe?",
      answer:
        "KidBucha is very safe, anti-pathogenic and enjoyable by many who have never acquired the taste of traditional Kombucha. KidBucha is temperature controlled so it must be kept cold. Since KidBucha is alive, it could further ferment if it is left in a cozy environment. We do add a very small amount of organic concentrated vinegar powder at the time of bottling that works as a natural preservative and inhibits the growth of some yeast and bad bacteria for extra measure. Please keep refrigerated until ready to drink.",
    },
    {
      question: "Does KidBucha have alcohol?",
      answer:
        "All fermented foods create trace amounts of alcohol in the fermentation process. Ethanol is part of the natural preservation of the fermented food. To ensure KidBucha is safe, we do not over-ferment, we do not do a 2nd fermentation, we remove most of the yeast prior to bottling which does not affect the probiotics, alcohol test each batch and immediately refrigerate once flavored to slow the fermentation process down to a halt. KidBucha must remain cold until ready to drink to maintain stability. The organic concentrated vinegar powder that is added as a natural preservative, may inhibit further fermentation of the yeast that may be left behind, without harming any of the goodness inside KidBucha.",
    },
    {
      question: "Where can I buy KidBucha?",
      answer:
        "You came to the right place!! KidBucha can only be sold within the state of Utah. Please order online for local delivery, or you can place an order for pick up at The Bucha Barn in Mapleton, Utah. If you have any questions, feel free to contact us.",
    },
  ];

  return (
    <div className="faq-body">
      <h1>Frequently Asked Questions</h1>
      {faqList.map((item, idx) => (
        <Faq key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

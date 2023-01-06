import React, { useState } from "react";

import "../styles/faqbody.css";
import Faq from "./Faq";

const FaqBody = (props) => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqList = [
    {
      question:
        "Why KidBucha? How is it different from other Kombucha on the market?",
      answer:
        "KidBucha is alive, raw, unpasteurized and exactly what kombucha is meant to be! KidBucha is a high quality, probiotic, antioxidant, full of enzymes, rich in organic acids, drink, that is meant for the young, old and everyone in between! Plus, KidBucha is 100% natural, balanced, free of artificial flavors and colors and tastes amazing!",
    },
    {
      question:
        "What are the benefits of consuming probiotic foods vs supplementing with probiotics?",
      answer:
        "By consuming KidBucha, you are getting an array of good bacteria, antioxidants, enzymes, vitamins, organic acids, in the most natural way! The good stuff in KidBucha is natural occurring and not created in a lab. \n\nIf you are familiar with kombucha, you may notice that many kombucha companies are adding patented probiotics at the time of bottling along with additional acids. A probiotic pill or addition of probiotic/acids will never be as good as the natural occurring microorganisms found in the food itself. Purchasing probiotics can be very expensive as well, with no guarantee to their effectiveness. There are several reasons why many kombucha brands are adding these: \n\n1. Pasteurizing – This is a process of heating the kombucha to kill off all the yeast/bacteria to create a stable, longer shelf-life product. \n2. Rapid Ferment – A rapid ferment is where production time is sped up, creating more product in a short amount of time. This process does not allow enough time to develop a good amount of strong, healthy bacteria. The rapid ferment is diluted with kombucha vinegar to try to get the flavor as close to a perfectly brewed batch of kombucha. There is very little, if any, natural occurring bacteria in this process. \n3. Extended Ferment – The longer kombucha ferments it turns into kombucha vinegar, like what is used in #2 above. The good bacteria diminish with time, and the product becomes an organic acid dense kombucha vinegar that is diluted with carbonation in the final product to help with the vinegar taste and sourness. \n4. Sterile Filtering – Just like it sounds, a fine filter is used that removes all microorganisms and sterilizes the kombucha, removing all the good stuff, creating a clear, shelf-stable product with a very low chance of survival of any bacteria remaining. \n5. Marketing and advertising! It really is enticing to see 1 bottle of kombucha containing 9 billion probiotics in it.",
    },
    {
      question: "Health Benefits that may come from consuming Fermented Foods:",
      answer:
        "1. Cancer fighting abilities \n2. Enhance digestion and nutrient absorption \n3. Detox the liver and cleanse the body naturally \n4. Relieve constipation \n5. Improve neonatal health \n6. Aid in weight loss by rebalancing the body naturally \n7. Balance gut flora \n8. Help fight off disease causing pathogens \n9. Promote immune health \n10. Improve pancreas function \n11. Increase energy and focus \n12. Reduce inflammation and manage IBS, Crohn’s and Ulcerative Colitis \n13. Beneficial for heart disease, diabetes, fatty liver disease and liver damage \n14. Assist in oral health \n15. Improve Mood - May help to stimulate serotonin levels (the feel-good hormone that aids in the \nfeelings of well-being). It may also ease anxiety, depression and boost the brain cognitive \nfunction (ability to think, learn and remember) \n16. Targets candida yeast \n17. Reduce cholesterol",
    },
    {
      question: "How is KidBucha made?",
      answer:
        "KidBucha is made with an organic kombucha culture (SCOBY), reverse osmosis water, organic cane sugar and organic green/oolong tea that is fermented for 2-4 weeks. The SCOBY (symbiotic culture of bacteria and yeast) produces bacteria and yeast that feast upon the sugar, caffeine and antioxidants (polyphenols) from the tea mixture. In synergy with each other, a probiotic, antioxidant, enzyme, organic acid, powerhouse drink is born. Kombucha is an anti-pathogenic drink, meaning pathogens (harmful microorganisms) cannot survive in KidBucha. Compare it to the body. When our immune system is compromised, we become sick. When our immune system is in peak condition, our immune system (microbiome) blocks and prevents pathogens from taking over, killing them off before they become a problem. Pathogens can only survive in unhealthy, unbalanced environments. \n\nWhen KidBucha is ready to drink, the yeast particles are filtered out since their job is done and we want to prevent the yeast from alcohol fermentation. Most people do not like to drink yeast floaties in kombucha (safe and healthy to drink), so we have found this to be the best approach while still maintaining all the natural good stuff. We then bottle, flavor with organic, non-GMO juices and natural flavors, organic spices and a small amount of allulose. There are no artificial colors or flavorings. Both our 4-ounce and 8-ounce KidBucha contains a minimum of 50% kombucha and tastes great! New flavors are coming all the time!",
    },
    {
      question: "What is allulose and why is it used in KidBucha?",
      answer:
        "Allulose is a ‘rare’, plant-based sugar that is found in small amounts in certain foods including jackfruit, figs, and raisins. It is 70% as sweet as sugar, bakes and freezes like sugar and tastes like sugar with no aftertaste. It is a monosaccharide that is absorbed by the body but not metabolized so its nearly calorie- free. It will not raise blood sugar levels and it does not ferment in the belly or in kombucha, so the chances of stomach discomfort are slim. Allulose is NOT a sugar alcohol, and it is diabetic, kosher and keto friendly! Why not use allulose? We use allulose in KidBucha since we want KidBucha to be a nutrition dense, low sugar drink that is enjoyable for anyone looking to enjoy the benefits of kombucha.",
    },
    {
      question: "Is KidBucha safe?",
      answer:
        "KidBucha is very safe! It is naturally anti-pathogenic and enjoyable by many who have never acquired the taste of traditional kombucha. KidBucha is temperature controlled so it must be kept cold. Since KidBucha is alive, it could further ferment if it is left in a warm and cozy environment. We remove most of the yeast before bottling to help with stability, but the yeast is very nutritious and safe to eat. We do add a very small amount of liquid plant extract at the time of bottling that works as a natural preservative and inhibits the growth of some yeast and bad bacteria for extra measure, and it does not alter the flavor or harm the good stuff. Please always keep KidBucha refrigerated until ready to drink. \nDisclaimer: It is always recommended to consult with your doctor before trying anything new; especially if pregnant or nursing or have a compromised immune system.",
    },
    {
      question: "Does KidBucha have alcohol?",
      answer:
        "All fermented foods create trace amounts of alcohol in the fermentation process. Ethanol is part of the natural preservation of the fermented food created by the yeast. To ensure KidBucha is safe, the yeast particles are filtered out once their job is done. The yeast is totally safe and healthy to drink but this also helps prevent further fermentation. The yeast work hard during the fermentation process, consuming most of the sugar and in return, it produces organic acids, vitamins, and enzymes. Yeast particles are much larger than the bacteria so all the microorganisms (probiotics), antioxidants and acids remain after removing most of the yeast. There will always be a small amount of yeast left behind but by reducing the amount of yeast and by using limited sugar sources (allulose will not feed yeast and does not ferment) we are creating a superior product. We do not over-ferment, we ferment at lower temperatures (yeast are more active at warmer temperatures), we do not do a 2 nd ferment, and we alcohol test each batch to make sure we are providing a safe product. Once bottled and flavored, we immediately refrigerate to slow the fermentation process down to a halt. KidBucha must remain cold until ready to drink to maintain stability. The liquid plant extract that is added as a natural preservative at time of bottling, may inhibit further fermentation of the yeast that may be left behind, without harming any of the goodness inside KidBucha.",
    },
    {
      question: "Why doesn’t KidBucha do a 2nd ferment",
      answer:
        "To get a natural effervescent (carbonation effect) that a lot of people like in kombucha you would have to do a 2 nd anaerobic (no oxygen) fermentation cycle if you choose not to force carbonate. This is typically done after flavoring and bottling. The kombucha is left at room temperature for several days in a tightly sealed container. The yeast consumes any remaining sugar from flavoring and turn the sugar into CO2/ethanol. The more effervescent you have the more alcohol you have, and you must be careful, since the bottle could explode as CO2 builds up in the bottle. You would never want to shake kombucha that has been carbonated or 2 nd fermented as it could blow up in your face. There is just no way to control the stability of kombucha this way or to ensure a safe non-alcoholic product. We do NOT do a 2 nd ferment for all the reasons above. We’ve made KidBucha into a smooth, refreshing, juice-like drink with every bottle cap displaying, “Don’t be shy, shake me up”. I have never seen a kombucha drink that instructs you to shake it up!",
    },
    {
      question: "Where can I buy KidBucha?",
      answer:
        "KidBucha can only be sold within the state of Utah through pick up or local delivery. Once the website is up and running, BuchaBarn.com, you can order there, or reach out directly. If you have any questions, feel free to contact us. \n\n4-ounce KidBucha - $1.75 plus tax* \n8-ounce KidBucha - $3.25 plus tax* \n\n*Utah requires sales and restaurant tax on prepared food (Utah County is 7.25% plus 1% restaurant tax)",
    },
  ];

  return (
    <div className="faq-body">
      <h1>Frequently Asked Questions</h1>
      {faqList.map((item, idx) => (
        <Faq
          key={idx}
          idx={idx}
          openIdx={openIdx}
          setOpenIdx={setOpenIdx}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default FaqBody;

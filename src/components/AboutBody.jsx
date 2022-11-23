import React from "react";

import "../styles/faqbody.css";

export default () => {
  const aboutPara =
    "In 1992 when I was 13 years old, my family moved from Valencia, CA, to Mapleton, Utah. My mom was introduced to Kombucha shortly after our move. She was given a SCOBY from a neighbor and began making this interesting, mushroom look-alike, tea. The jar of tea sat in a corner on the counter, out of direct sunlight, undisturbed for a couple weeks. I thought it was strange, but I was excited about every new health kick that I was willing to try anything. When it was ready to be drank, I fell in love at first sip! Not because I knew it was healthy but because my body knew it was what I needed. My mom told me to drink 4 ounces a day, but I couldn’t stop at just 4 ounces a day. I drank this amazing drink and became connected to the natural energy it gave me and the slightly sour taste that came with a bite. Delish! Kombucha was not found in stores at this time so you had to be lucky to find someone that had a SCOBY to share. \n\nIn 2010, my family moved to Gilbert, AZ. I remember walking into a Sprout’s Grocery Store and coming across an array of Kombucha drinks. I got excited, grabbing several to try. There were some that were flavored, and others that were in their raw, original state. There it began where Kombucha became a staple in my life, again! \n\nMy daughter, Ella, loved kombucha from the time she tasted it as a baby in 2013. She would get excited for her droplets of kombucha. To this day, she still loves her kombucha and drinks it daily. I attribute kombucha to her good health. Although she has become a picky eater, she rarely gets sick and always has amazing energy and full of creative brain energy. Kombucha is a staple in her life! \n\nMy youngest son, Jack, who is currently 5 years old, was never interested in kombucha. I call him my ‘kombucha baby’ because it was the only thing I could stomach when I was pregnant with him. With my history of having premature babies (due to lack of producing progesterone), I knew kombucha is what my body needed with the probiotics and antioxidants to support my body. I didn’t realize the impact it would have on Jack in the womb. Jack was born at 29 weeks gestation. He did not need a ventilator, c- pap, oxygen or help breathing. He was a healthy baby boy that weighed 3lbs 5 oz. I had several nurses ask me what my secret was. I told them, “Kombucha!”. Every response I received was, “what’s that?” \n\nAs I mentioned earlier, Jack was never interested in kombucha; at least, not until I created KidBucha in 2022. Jack, unlike his sister who drinks kombucha regularly, is always getting sick. I was determined to find a way to get him to like it so his body would crave it. My plan worked! I created a kid friendly, low sugar, kombucha drink that Jack is asking for daily. Right now, his favorite is cherry punch. He finishes his glass of kombucha faster than his sister! Go KidBucha! \n\nI challenge you to try Kidbucha for yourself and see the benefits it can bring to you and your loved ones.";
  return (
    <div className="faq-body">
      <h1>About Us</h1>
      <p className="about-para">{aboutPara}</p>
    </div>
  );
};

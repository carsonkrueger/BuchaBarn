import React from "react";

import "../styles/faqbody.css";

const AboutBody = (props) => {
  const aboutPara =
    "In 1992 when I was 13 years old, my family moved from Valencia, CA, to Mapleton, Utah. My mom was introduced to kombucha shortly after our move by my grandpa. My mom began making this interesting, mushroom look-alike, tea. The jar of tea sat in a corner on the counter, out of direct sunlight, undisturbed for a couple weeks. I thought it was strange, but I was excited about every new health fad and excited to give it a try. I fell in love at first sip! Not because I knew it was healthy but because my body needed it! My mom told me to drink 4 ounces a day, but I couldn’t stop at just 4 ounces a day. My body and mind craved it, and I was immediately connected to the natural energy it gave me and it was delicious! Kombucha was not found in stores at this time, so you had to be lucky to find someone with a SCOBY that was willing to share. \n\nIn 2010, my family moved to Gilbert, AZ. I remember walking into a Sprout’s Grocery Store and coming across an array of kombucha drinks. I got excited, grabbing several to try. There were some that were flavored, and others that were in their raw, original state. There it began where kombucha became a staple in my life, again! \n\nMy daughter, Ella, loved kombucha from the time she tasted it as a baby in 2013. She would get excited for her droplets of kombucha. To this day, she still loves her kombucha and drinks it daily. I attribute kombucha to her good health. Although she has become a picky eater, she rarely gets sick and always has amazing energy and full of creative brain energy. Kombucha is a daily part of her life. \n\nWhen I was pregnant with my youngest son in 2016, the only thing I could stomach was kombucha. I knew our little guy was going to be born early so I was somewhat prepared, having previous premature babies. I didn’t realize our little Jack would be born at 29 weeks gestation. Jack was born weighing 3 lbs. 5 oz and was a completely healthy baby that didn’t need any assistance with breathing. He was a “feeder and grower” is what they call them in the NICU. I had several nurses ask me what my secret was. I told them, “Kombucha!” Every response I received was, “what’s that?” \n\nJack has never been interested in kombucha. I thought for sure since he drank it every day in the womb, he would naturally love it! It wasn’t until I created KidBucha in 2022 that he finally found his love for kombucha! \n\nI know kombucha can be an acquired taste for many. My goal is to assist your taste buds into loving it and in return, your body will crave it! When our body and mind is in balance, we crave the foods we need. I challenge you to try Kidbucha for yourself and see the benefits it can bring to you and your loved ones.";
  return (
    <div className="faq-body">
      <h1>About Us</h1>
      <p className="about-para">{aboutPara}</p>
    </div>
  );
};

export default AboutBody;

const techArticlesComments = [
  {
    articleId: 0,
    id: 0,
    comment:
      "This is amazing news! I've been waiting for the right moment to get a Model 3, and now with the full $7,500 tax credit, it's a no-brainer. Tesla is making it even more enticing to join the electric revolution. Count me in!",
    user: "JohnTeslaFan23",
    date: "2023-06-10T14:27:21Z",
  },
  {
    articleId: 0,
    id: 1,
    comment:
      "Woohoo! Tesla just made my day. With the full tax credit for all new Model 3s, they're making electric vehicles more affordable than ever. It's a win for the environment and for anyone looking to embrace the future of transportation",
    user: "EVEnthusiast87",
    date: "2023-06-10T16:13:45Z",
  },
  {
    articleId: 0,
    id: 2,
    comment:
      "As a strong advocate for renewable energy, I applaud Tesla's decision. The full $7,500 tax credit for the Model 3 is a step in the right direction for sustainable transportation. It's time to spread the word and encourage others to make the switch in 2023!",
    user: "GreenDrive2022",
    date: "2023-06-10T17:45:59Z",
  },
  {
    articleId: 0,
    id: 3,
    comment:
      "Tesla's latest announcement has me revved up for the upcoming year! The full tax credit for the Model 3 means more affordable electric driving for all. It's a win-win situation for my wallet and the environment. Looking forward to exploring new horizons in 2023!",
    user: "AmyEcoWarrior",
    date: "2023-06-10T18:57:12Z",
  },
  {
    articleId: 0,
    id: 4,
    comment:
      "It's official – Tesla is leading the charge towards a greener future! The full $7,500 tax credit for the Model 3 is a significant milestone in making electric vehicles accessible to a wider audience. Count me in as I drive towards sustainability in 2023!",
    user: "ElectricRoadTripper",
    date: "2023-06-10T19:30:08Z",
  },
  {
    articleId: 0,
    id: 5,
    comment:
      "Tesla continues to amaze with their commitment to clean energy and affordability. The full tax credit for the Model 3 is a testament to their dedication. I can't wait to make the switch to electric in 2023 and contribute to a more sustainable world!",
    user: "GreenRevolutionary",
    date: "2023-06-10T20:51:36Z",
  },
  {
    articleId: 1,
    id: 6,
    comment:
      "This news is surprising! T. Rowe Price marking down its stake in Canva by 67.6% is significant. It makes me curious about the reasons behind this decision.",
    user: "InvestorInsight23",
    date: "2023-06-10T20:51:36Z",
  },
  {
    articleId: 1,
    id: 7,
    comment:
      "Wow, that's a substantial markdown. T. Rowe Price must have some concerns about Canva's performance. I wonder how this will impact the company's future.",
    user: "StockSavvy21",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 1,
    id: 8,
    comment:
      "As an investor, I'm always cautious when I see such a significant markdown. It's crucial to analyze the underlying factors and reassess the investment thesis.",
    user: "MarketWatcher88",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 1,
    id: 9,
    comment:
      "I'm surprised by T. Rowe Price's decision. Canva seemed to be on a promising trajectory. I'll be keeping a close eye on any further developments.",
    user: "InvestmentEnthusiast42",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 1,
    id: 10,
    comment:
      "This markdown raises questions about Canva's future growth prospects. It's crucial to understand the factors driving T. Rowe Price's decision and reassess the investment case.",
    user: "PortfolioAnalyzer72",
    date: "2023-06-10T22:22:08Z",
  },

  {
    articleId: 2,
    id: 11,
    comment:
      "This court ruling is a significant win for the moderators. Meta being found liable and the firing of moderators being blocked is a step towards ensuring fair treatment and better working conditions.",
    user: "FreeSpeechAdvocate",
    date: "2023-06-10T20:51:36Z",
  },
  {
    articleId: 2,
    id: 12,
    comment:
      "I'm glad to see the court standing up for the rights of moderators. It's important to hold platforms accountable for their actions and protect the individuals who contribute to the online community.",
    user: "DigitalRightsWarrior",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 2,
    id: 13,
    comment:
      "This ruling sets a precedent for the protection of moderators' rights. It sends a strong message to Meta and other platforms that they must prioritize the well-being and fair treatment of their content moderators.",
    user: "OnlineJusticeAdvocate",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 2,
    id: 14,
    comment:
      "The court's decision to block the firing of moderators is a step towards recognizing the valuable role they play in content moderation. It's a victory for those who tirelessly work to maintain the integrity of online platforms.",
    user: "ModerationSupporter",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 2,
    id: 15,
    comment:
      "This court ruling highlights the importance of treating moderators fairly and respecting their rights. It's a positive development towards creating a more equitable and respectful online environment.",
    user: "DigitalEthicsAdvocate",
    date: "2023-06-10T22:22:08Z",
  },
  {
    articleId: 3,
    id: 16,
    comment:
      "It's fascinating to see the capabilities of AI advancements like GPT-4 being applied to gaming. This AI becoming an expert Minecraft player is a testament to the power of machine learning and its potential in various fields.",
    user: "TechEnthusiast21",
    date: "2023-06-10T20:51:36Z",
  },
  {
    articleId: 3,
    id: 17,
    comment:
      "This is a remarkable achievement that showcases the versatility of AI. I'm excited to witness the advancements in gaming with the integration of powerful language models like GPT-4.",
    user: "GameTechFanatic",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 3,
    id: 18,
    comment:
      "GPT-4's ability to become an expert Minecraft player highlights the vast potential of AI in gaming. It opens up new possibilities for enhancing gameplay experiences and pushing the boundaries of virtual worlds.",
    user: "AIEnthusiastDev",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 3,
    id: 19,
    comment:
      "I'm impressed by the progress made by AI in the gaming realm. This achievement demonstrates the evolving nature of technology and its impact on player experiences. Exciting times lie ahead!",
    user: "GamingInnovator",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 3,
    id: 20,
    comment:
      "The integration of GPT-4 into Minecraft showcases the potential of AI to learn and excel in complex environments. It's a testament to the continuous advancements in machine learning and its applications in gaming.",
    user: "TechGamerGeek",
    date: "2023-06-10T22:22:08Z",
  },
  {
    articleId: 4,
    id: 21,
    comment:
      "Competition in the age of AI brings both excitement and concerns. It's crucial to strike a balance between innovation and ensuring fair market dynamics for the benefit of consumers and businesses alike.",
    user: "MarketObserver82",
    date: "2023-06-10T20:51:36Z",
  },
  {
    articleId: 4,
    id: 22,
    comment:
      "The rise of AI introduces new challenges for competition. It's essential to monitor and regulate AI-powered systems to prevent anti-competitive practices and promote a level playing field.",
    user: "CompetitionWatchdog",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 4,
    id: 23,
    comment:
      "AI-driven competition requires proactive measures to address potential monopolistic tendencies. Striking the right balance between innovation and fair competition is crucial for a thriving market.",
    user: "BusinessEthicsAdvocate",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 4,
    id: 24,
    comment:
      "Competition concerns in the age of AI highlight the need for robust regulatory frameworks. Safeguarding fair competition ensures a healthy marketplace and fosters innovation.",
    user: "RegulatoryExpert2023",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 4,
    id: 25,
    comment:
      "As AI becomes more prevalent, competition dynamics require careful examination. It's vital to address potential issues around data monopolies and promote healthy competition for the benefit of consumers.",
    user: "TechPolicyEnthusiast",
    date: "2023-06-10T22:22:08Z",
  },
  {
    articleId: 5,
    id: 26,
    comment:
      "Apple has a track record of delivering innovative products. It will be interesting to see how they approach AR and VR and whether they can set new standards in this space.",
    user: "AppleFanatic99",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 5,
    id: 27,
    comment:
      "The AR and VR market is ripe for disruption. Apple's expertise in design and user experience might give them an advantage in creating compelling AR and VR experiences.",
    user: "DesignEnthusiast2023",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 5,
    id: 28,
    comment:
      "Apple has a history of entering markets and redefining them. If anyone can make AR and VR more accessible and user-friendly, it could be Apple.",
    user: "TechInnovator23",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 5,
    id: 29,
    comment:
      "Apple's focus on seamless integration and ecosystem could be a game-changer for AR and VR. They have the potential to revolutionize the way we experience digital content.",
    user: "AppleEcosystemUser",
    date: "2023-06-10T22:22:08Z",
  },
  {
    articleId: 6,
    id: 30,
    comment: "How to prepare a hardware startup for raising a Series A?",
    user: "StartupEnthusiast",
    date: "2023-06-10T20:51:36Z",
  },
  {
    articleId: 6,
    id: 31,
    comment:
      "Building a solid foundation and demonstrating traction are key when preparing for a Series A round. It's important to have a clear roadmap, strong team, and compelling product to attract investors.",
    user: "InvestmentAdvisor23",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 6,
    id: 32,
    comment:
      "Prioritize scalability and show potential investors that your hardware startup has a clear path to growth. Develop a strong business plan and showcase your market opportunity to stand out in the Series A funding landscape.",
    user: "BusinessStrategyExpert",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 6,
    id: 33,
    comment:
      "Series A funding often requires demonstrating product-market fit and a solid customer base. Focus on building a strong customer acquisition strategy and showcase your early successes to attract investors.",
    user: "CustomerSuccessAdvocate",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 6,
    id: 34,
    comment:
      "Raising a Series A round for a hardware startup can be challenging but rewarding. Be prepared to articulate your unique value proposition, address investor concerns, and showcase your competitive advantage in the market.",
    user: "HardwareStartupFounder",
    date: "2023-06-10T22:22:08Z",
  },

  {
    articleId: 7,
    id: 35,
    comment:
      "The dual-screen design of Lenovo's Yoga Book 9i offers a unique and versatile user experience. It allows for improved productivity, multitasking, and creativity on a laptop.",
    user: "LenovoFanatic99",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 7,
    id: 36,
    comment:
      "Lenovo has truly pushed the boundaries with the Yoga Book 9i. The dual-screen functionality opens up new possibilities for content creators, professionals, and everyday users alike.",
    user: "TechInnovator23",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 7,
    id: 37,
    comment:
      "The Yoga Book 9i showcases Lenovo's commitment to innovation and user-centric design. The dual-screen setup enhances productivity and allows for seamless interaction with digital content.",
    user: "DesignEnthusiast2023",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 7,
    id: 38,
    comment:
      "Lenovo's Yoga Book 9i is a game-changer in the laptop market. The dual-screen feature provides an immersive and efficient computing experience for both work and entertainment purposes.",
    user: "TechReviewerPro",
    date: "2023-06-10T22:22:08Z",
  },
  {
    articleId: 7,
    id: 39,
    comment:
      "The dual-screen design of Lenovo's Yoga Book 9i offers a new level of productivity and creativity. It's exciting to see how technology continues to evolve and enhance our computing experiences.",
    user: "TechEnthusiast2023",
    date: "2023-06-10T22:45:15Z",
  },
  {
    articleId: 7,
    id: 40,
    comment:
      "Lenovo's Yoga Book 9i brings innovation to the laptop market with its dual-screen setup. It provides a unique and immersive user experience for various tasks and applications.",
    user: "DigitalCreator23",
    date: "2023-06-10T23:08:22Z",
  },
  {
    articleId: 7,
    id: 41,
    comment:
      "The dual-screen functionality of Lenovo's Yoga Book 9i offers enhanced versatility and productivity. It's a step forward in reimagining how we interact with laptops and utilize screen real estate.",
    user: "TechEnthusiastPro",
    date: "2023-06-10T23:31:45Z",
  },
  {
    articleId: 8,
    id: 42,
    comment:
      "While Snapchat's AI bot may have limitations, it's reassuring to know that privacy and security are prioritized. Sending nudes accidentally can be a serious concern, and Snapchat's precautions are commendable.",
    user: "PrivacyAdvocate2023",
    date: "2023-06-10T21:14:42Z",
  },
  {
    articleId: 8,
    id: 43,
    comment:
      "Snapchat's AI bot may not be the smartest, but its commitment to preventing sensitive content from being sent unintentionally is a crucial feature. It's better to err on the side of caution when it comes to privacy.",
    user: "DigitalSafetyEnthusiast",
    date: "2023-06-10T21:37:19Z",
  },
  {
    articleId: 8,
    id: 44,
    comment:
      "The lack of intelligence in Snapchat's AI bot might be a drawback, but its purpose of preventing accidental transmission of explicit content is commendable. Prioritizing user safety is always a positive move.",
    user: "SnapchatUser99",
    date: "2023-06-10T21:59:55Z",
  },
  {
    articleId: 8,
    id: 45,
    comment:
      "Snapchat's AI bot may not be the smartest one out there, but it fulfills its main purpose of protecting users from potentially embarrassing situations. It's a reassuring feature for many Snapchat users.",
    user: "SocialMediaEnthusiast23",
    date: "2023-06-10T22:22:08Z",
  },
  {
    articleId: 8,
    id: 46,
    comment:
      "Snapchat's AI bot may not be the most advanced, but its focus on preventing unwanted explicit content is a valuable aspect. User privacy and protection should always be a priority.",
    user: "DigitalPrivacyDefender",
    date: "2023-06-10T22:45:15Z",
  },
];

export default techArticlesComments;

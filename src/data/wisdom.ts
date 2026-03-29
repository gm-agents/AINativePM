export interface WisdomItem {
  quote: string;
  insight: string;
  guest: string;
  guestTitle: string;
  episodeTitle: string;
  youtubeId: string;
  tags: string[];
  audience: 'starting-out' | 'seasoned';
}

export const wisdomItems: WisdomItem[] = [
  // ── STARTING OUT / TRANSITIONING ────────────────────────────────────────────

  {
    quote:
      "If you simply wake up every day trying to have the biggest impact you can, how you do every part of your day — that's a really good guiding light.",
    insight:
      "Forget politics, promotion, or empire-building. The simplest north star for any new PM is ruthless focus on impact. Everything else is noise.",
    guest: "Ian McAllister",
    guestTitle: "Former PM Leader, Uber · Amazon · Airbnb",
    episodeTitle: "What it takes to become a top 1% PM",
    youtubeId: "example-ian",
    tags: ["career", "mindset", "impact"],
    audience: "starting-out",
  },
  {
    quote:
      "The biggest mistake new PMs make is jumping to solutions. Your job is not to call the shots — it's to understand problems, then edit possibilities.",
    insight:
      "Most people enter product wanting to build the thing they already have in mind. The real skill is falling in love with the problem, not your solution.",
    guest: "Jiaona Zhang (JZ)",
    guestTitle: "SVP Product, Webflow · ex-Airbnb, WeWork, Dropbox",
    episodeTitle: "Building minimum lovable products and thriving as a PM",
    youtubeId: "example-jz",
    tags: ["mindset", "discovery", "new PM"],
    audience: "starting-out",
  },
  {
    quote:
      "As a PM you have very little true authority. A lot of it is all through influence — you're not calling the shots, you're editing possibilities.",
    insight:
      "The sooner you accept that the PM role is about persuasion and partnership — not control — the faster you'll stop fighting the role and start thriving in it.",
    guest: "Jiaona Zhang (JZ)",
    guestTitle: "SVP Product, Webflow · ex-Airbnb, WeWork, Dropbox",
    episodeTitle: "Building minimum lovable products and thriving as a PM",
    youtubeId: "example-jz2",
    tags: ["influence", "leadership", "new PM"],
    audience: "starting-out",
  },
  {
    quote:
      "The best paths into PM: an APM program, an internal transfer from a product-adjacent role, shadowing a PM and taking on work, or joining an early startup where everyone gets their hands dirty.",
    insight:
      "You don't need a perfect background to break in. Product-adjacent roles — customer success, sales engineering, design — are often the fastest on-ramp. Proximity beats credentials.",
    guest: "Annie Pearl",
    guestTitle: "CPO, Calendly · ex-Box",
    episodeTitle: "Behind the scenes of Calendly's rapid growth",
    youtubeId: "example-annie",
    tags: ["career", "transition", "breaking in"],
    audience: "starting-out",
  },
  {
    quote:
      "For new PMs: communicate, prioritize, and execute. Those are the core building blocks. Get good at those three and the rest follows.",
    insight:
      "Senior PMs obsess over strategy and vision. But early in your career, mastering the basics — writing clearly, saying no to the right things, shipping — is what separates the best from the rest.",
    guest: "Ian McAllister",
    guestTitle: "Former PM Leader, Uber · Amazon · Airbnb",
    episodeTitle: "What it takes to become a top 1% PM",
    youtubeId: "example-ian2",
    tags: ["skills", "execution", "new PM"],
    audience: "starting-out",
  },
  {
    quote:
      "Find something you can be really, really known for. You could be known for shepherding the most complex launches, or working cross-functionally — make that your thing.",
    insight:
      "Early-career PMs who try to be good at everything stay average. Pick one superpower and become the go-to person for it. That reputation compounds.",
    guest: "Jiaona Zhang (JZ)",
    guestTitle: "SVP Product, Webflow · ex-Airbnb, WeWork, Dropbox",
    episodeTitle: "Building minimum lovable products and thriving as a PM",
    youtubeId: "example-jz3",
    tags: ["career", "specialization", "personal brand"],
    audience: "starting-out",
  },
  {
    quote:
      "If you want to transition into PM, look at the internal job board — the move works best when you're already in a product-adjacent role and can start doing the work before you have the title.",
    insight:
      "The most successful internal transfers to PM don't wait for permission. They start doing PM work — writing specs, joining discovery sessions, advocating for users — while still in their current role.",
    guest: "Annie Pearl",
    guestTitle: "CPO, Calendly · ex-Box",
    episodeTitle: "Behind the scenes of Calendly's rapid growth",
    youtubeId: "example-annie2",
    tags: ["transition", "career", "breaking in"],
    audience: "starting-out",
  },

  // ── SEASONED PMs ──────────────────────────────────────────────────────────────

  {
    quote:
      "Ask yourself: if you were the CEO of this company, would you fully fund your own team? Frankly, most people I ask that question to don't know the answer right away.",
    insight:
      "The low-impact PM death spiral starts innocuously — small features, cosmetic improvements — until the next round of layoffs. Aligning every team goal to no more than one step from company goals is the antidote.",
    guest: "Matt LeMay",
    guestTitle: "Author, Product Management in Practice · Impact First Product Teams",
    episodeTitle: "The one question that saves product careers",
    youtubeId: "ts9ZvlkeWGs",
    tags: ["strategy", "impact", "leadership"],
    audience: "seasoned",
  },
  {
    quote:
      "There are three levels of product work: impact, execution, and optics. Most team conflict comes from people operating at different levels without realising it.",
    insight:
      "When a PM is optimizing for optics (looking good in reviews) and an engineer is optimizing for execution (shipping cleanly), they'll clash — not because they're wrong, but because they're playing different games. Naming the level changes everything.",
    guest: "Shreyas Doshi",
    guestTitle: "Former PM Leader, Stripe · Twitter · Google",
    episodeTitle: "4 questions Shreyas Doshi wishes he'd asked himself sooner",
    youtubeId: "atS060bNpE0",
    tags: ["strategy", "team dynamics", "leadership"],
    audience: "seasoned",
  },
  {
    quote:
      "Most execution problems are really strategy problems in disguise. When teams can't ship, look upstream — the strategy probably isn't clear enough to make decisions from.",
    insight:
      "It's tempting to fix execution with more process. But if people don't understand *why* they're building what they're building, no amount of standup cadence or project management tooling will save you.",
    guest: "Shreyas Doshi",
    guestTitle: "Former PM Leader, Stripe · Twitter · Google",
    episodeTitle: "4 questions Shreyas Doshi wishes he'd asked himself sooner",
    youtubeId: "atS060bNpE0",
    tags: ["strategy", "execution", "diagnosis"],
    audience: "seasoned",
  },
  {
    quote:
      "There was a perception that some people were intrinsically good at strategy and others weren't — as if there was a strategy gene. The answer is: anyone can build great product strategy through a clear, repeatable process.",
    insight:
      "Strategy isn't a talent, it's a skill. Chandra's process — starting with why people don't understand what you're building, then working backwards to a written strategy — turned Headspace's product around and led to his promotion to CPO.",
    guest: "Chandra Janakiraman",
    guestTitle: "CPO, VRChat · ex-Meta, Headspace, Zynga, Amazon",
    episodeTitle: "An operator's guide to product strategy",
    youtubeId: "example-chandra",
    tags: ["strategy", "leadership", "frameworks"],
    audience: "seasoned",
  },
  {
    quote:
      "The AI models you're using today are the worst AI models you will ever use for the rest of your life. If you're building something that barely works right now, keep going — in two months, the models will make it sing.",
    insight:
      "The biggest mistake experienced PMs make with AI is evaluating product ideas against current model capabilities. The right question is: will this be magical when models improve? If yes, build it now.",
    guest: "Kevin Weil",
    guestTitle: "CPO, OpenAI · ex-Instagram, Twitter",
    episodeTitle: "OpenAI's CPO on how AI changes must-have skills, moats, and startup playbooks",
    youtubeId: "scsW6_2SPC4",
    tags: ["AI", "product strategy", "building"],
    audience: "seasoned",
  },
  {
    quote:
      "Product strategy should delight customers in hard-to-copy, margin-enhancing ways. If your strategy could be copied by a well-funded competitor next quarter, it's not a strategy — it's a feature.",
    insight:
      "Gibson Biddle's DHM framework from Netflix cuts through strategic vagueness. A good strategy has all three: customer delight, a competitive moat, and a business model that gets stronger over time.",
    guest: "Gibson Biddle",
    guestTitle: "Former VP Product, Netflix · Chegg",
    episodeTitle: "DHM product strategy framework and 5 Netflix case studies",
    youtubeId: "example-gibson",
    tags: ["strategy", "frameworks", "moat"],
    audience: "seasoned",
  },
  {
    quote:
      "If you aren't prototyping with AI to build the thing you want to build, you're doing it wrong. NLX — natural language experience — is the new UX.",
    insight:
      "The CPO of Microsoft's productivity suite argues that PMs who aren't personally building with AI tools are losing the ability to shape what they're asking engineers to build. Taste requires hands-on experience.",
    guest: "Aparna Chennapragada",
    guestTitle: "CPO, Microsoft · ex-Robinhood, Google",
    episodeTitle: "Microsoft CPO: If you aren't prototyping with AI, you're doing it wrong",
    youtubeId: "HbbfXAWcuUo",
    tags: ["AI", "prototyping", "product craft"],
    audience: "seasoned",
  },
  {
    quote:
      "Influence is the skill AI can't replace. If you don't have the buy-in and backing of your key stakeholders, you can't build great products — no matter how good the idea.",
    insight:
      "As AI handles more of the tactical PM work, the uniquely human edge becomes the ability to build trust, align organizations, and move people. The PMs who invest in influence now will be the ones who thrive.",
    guest: "Jessica Fain",
    guestTitle: "VP Product, Webflow · ex-Slack",
    episodeTitle: "The art of influence: The single most important skill AI can't replace",
    youtubeId: "example-jessica",
    tags: ["influence", "AI era", "leadership"],
    audience: "seasoned",
  },
];

export const startingOutWisdom = wisdomItems.filter(
  (w) => w.audience === 'starting-out'
);

export const seasonedWisdom = wisdomItems.filter(
  (w) => w.audience === 'seasoned'
);

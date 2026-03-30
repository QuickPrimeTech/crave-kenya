export const siteConfig = {
  name: "CRAVE",
  subtitle: "KILIMANI",
  description:
    "Experience exceptional cuisine at Crave Kenya Kilimani. Premium dining with carefully crafted dishes in an elegant atmosphere.",

  restaurant: {
    name: "Crave Kenya Kilimani",
    location: "Kilimani, Nairobi",
    hours: {
      weekday: "12:00 PM - 11:00 PM",
      weekend: "12:00 PM - 12:00 AM",
    },
    phone: "+254 (0) 123 456 789",
    email: "reservations@cravekenya.com",
  },

  social: {
    instagram: {
      handle: "@crave_kenya",
      url: "https://www.instagram.com/crave_kenya/",
      followers: "12K+",
    },
    google:
      "https://google.com/maps?sca_esv=a02f3e9b87f4a5a7&output=search&q=crave+kenya",
  },

  navigation: [
    { label: "menu", href: "/menu" },
    { label: "Offers", href: "/offers" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "#testimonials" },
  ],

  cta: {
    primary: "Reserve Table",
    reservationLink: "#reserve",
  },

  testimonials: [
    {
      id: 1,
      name: "Sarah Kimani",
      title: "Food Critic",
      image: "👩‍🍳",
      content:
        "Crave Kenya Kilimani is a testament to culinary excellence. Every dish is a masterpiece that celebrates local flavors with international sophistication.",
      fullReview:
        "I have dined at some of the finest establishments across the continent, but Crave Kenya Kilimani stands out as a beacon of culinary innovation and refinement. The chef's dedication to sourcing the finest local ingredients while maintaining world-class preparation techniques is truly commendable. Every element of the dining experience, from the thoughtfully curated wine pairings to the impeccable service, demonstrates a commitment to excellence that extends far beyond the plate. This is not merely a restaurant; it is a celebration of Kenyan gastronomy elevated to its highest form.",
      rating: 5,
      date: "2 months ago",
      verified: true,
    },
    {
      id: 2,
      name: "James Ochieng",
      title: "Regular Guest",
      image: "👨‍💼",
      content:
        "The ambiance, the service, the food - everything is exceptional. This is where I bring my most important guests. Never disappointed.",
      fullReview:
        "For the past three years, I have made Crave Kenya Kilimani my go-to destination for important business dinners and personal celebrations. The consistency in quality is remarkable. Whether I'm bringing international clients or celebrating milestones with loved ones, the team here never fails to deliver an unforgettable experience. The sommelier's recommendations are always spot-on, the kitchen handles special dietary requests with grace, and the staff remembers regulars like myself with genuine warmth. This establishment has become more than a restaurant—it's a partner in my most memorable moments.",
      rating: 5,
      date: "1 month ago",
      verified: true,
    },
    {
      id: 3,
      name: "Amara Hassan",
      title: "Celebration Planner",
      image: "👩‍🎨",
      content:
        "We celebrated our anniversary here and it was perfection. The team went above and beyond to make our evening unforgettable.",
      fullReview:
        "My husband and I celebrated our 10th wedding anniversary at Crave Kenya Kilimani, and it exceeded every expectation. The team coordinated with us weeks in advance to understand the significance of the occasion and tailored every detail accordingly. From the personalized menu they created to the surprise champagne toast orchestrated by the manager, every moment felt thoughtfully designed for us. The kitchen prepared dishes that told the story of our journey together. We left with hearts full and already planning our return for our next milestone.",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
    },
    {
      id: 4,
      name: "David Mwangi",
      title: "Business Executive",
      image: "👨‍💼",
      content:
        "The perfect venue for business dinners. Professional service, incredible food, and a sophisticated atmosphere.",
      fullReview:
        "As someone who hosts frequent business dinners, I appreciate establishments that understand the balance between excellent cuisine and an environment conducive to meaningful conversation. Crave Kenya Kilimani nails this perfectly. The acoustics are thoughtfully designed—conversations remain private while the atmosphere remains vibrant. The kitchen's ability to execute complex dishes with precision is evident in every course. The staff is trained to provide service that is present without being intrusive. For any executive looking to impress clients or partners, this is the place.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
    },
    {
      id: 5,
      name: "Elizabeth Ouma",
      title: "Travel Blogger",
      image: "👩‍✈️",
      content:
        "A culinary gem in Nairobi. The flavors are bold, authentic, and beautifully presented.",
      fullReview:
        "I travel extensively and taste cuisine from various cultures, and I can confidently say that Crave Kenya Kilimani represents the very best of contemporary Kenyan gastronomy. The restaurant celebrates local ingredients and traditional cooking techniques while embracing modern culinary arts. The sea urchin prepared with cassava root was revelatory, and the grass-fed beef with indigenous vegetables was simply divine. This is not fusion food for its own sake; it's thoughtful cooking that honors heritage while pushing boundaries. If you're visiting Nairobi, this is an absolute must-visit.",
      rating: 5,
      date: "3 days ago",
      verified: true,
    },
  ],

  dishes: [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herb butter",
      price: "KES 1,850",
      image: "/dishes/grilled-salmon.jpg",
    },
    {
      id: 2,
      name: "Beef Steak",
      description: "Prime cut with rosemary jus",
      price: "KES 2,450",
      image: "/dishes/beef-steak.jpg",
    },
    {
      id: 3,
      name: "Seafood Pasta",
      description: "Prawns, clams, and fresh basil",
      price: "KES 1,650",
      image: "/dishes/pasta-seafood.jpg",
    },
    {
      id: 4,
      name: "Herb Chicken",
      description: "Crispy chicken breast with vegetables",
      price: "KES 1,450",
      image: "/dishes/chicken-dish.jpg",
    },
    {
      id: 5,
      name: "Vegetarian Bowl",
      description: "Seasonal vegetables with tahini",
      price: "KES 950",
      image: "/dishes/vegetarian-bowl.jpg",
    },
  ],

  offers: [
    {
      id: 1,
      title: "Happy Hour Special",
      description: "20% off on selected beverages from 5 PM - 7 PM daily",
      badge: "WEEKDAYS",
    },
    {
      id: 2,
      title: "Weekend Brunch",
      description: "Unlimited cocktails with lunch - only KES 2,500 per person",
      badge: "WEEKENDS",
    },
    {
      id: 3,
      title: "Group Reservations",
      description: "Special menu and pricing for groups of 8 or more",
      badge: "EXCLUSIVE",
    },
  ],
};

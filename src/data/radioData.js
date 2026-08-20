export const currentBroadcast = {
  id: "live-now",
  title: "Campus Vibes",
  host: "DJ Sarah",
  frequency: "98.4 FM PCTE Voice",
  category: "Student Hits & Top Charts",
  listenerCount: 248,
  currentTime: "45:12",
  remainingTime: "-14:48",
  progressPercentage: 75,
  isLive: true,
  studio: "Studio 2 • Broadcast Wing",
  description: "Bringing you the freshest indie anthems, trending student requested tracks, and banter right from the PCTE Studio booth.",
  audioStreamUrl: "https://streams.ilovemusic.de/iloveradio1.mp3",
  secondaryAudioUrl: "https://stream.zeno.fm/f3wvbbqmdg8uv",
  image: "/images/shows/campus-vibes.svg",
  hostAvatar: "/images/hosts/dj-sarah.svg",
  bitrates: ["320kbps HD", "128kbps Standard", "64kbps Data Saver"],
  upNext: [
    { time: "05:00 PM", title: "Top 10 Campus Countdown", host: "DJ Sarah" },
    { time: "05:30 PM", title: "Student Shoutout Marathon", host: "DJ Sarah & Guest" },
    { time: "06:00 PM", title: "Acoustic Evenings & Chai", host: "RJ Mehak" },
  ]
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Live Radio", path: "/live" },
  { label: "Shows", path: "/shows" },
  { label: "Schedule", path: "/schedule" },
  { label: "Podcasts", path: "/podcasts" },
  { label: "Announcements", path: "/announcements" },
  { label: "Student Voices", path: "/student-voices" },
  { label: "Events", path: "/events" },
  { label: "About", path: "/about" },
];

export const featuresList = [
  {
    id: "feature-1",
    icon: "FiRadio",
    title: "24/7 Live Campus Stream",
    description: "Uninterrupted high-definition audio broadcasting straight from the central PCTE studio directly to your mobile or laptop.",
    tag: "HD Audio"
  },
  {
    id: "feature-2",
    icon: "FiMic",
    title: "Student-Led Podcasts",
    description: "Honest conversations, tech explorations, entrepreneurship journeys, and campus culture hosted entirely by students.",
    tag: "Weekly Drops"
  },
  {
    id: "feature-3",
    icon: "FiBell",
    title: "Campus News & Alerts",
    description: "Instant updates on fest registrations, academic schedules, sports fixtures, placement drives, and cultural club meetups.",
    tag: "Real-time"
  },
  {
    id: "feature-4",
    icon: "FiMusic",
    title: "Curated Student Playlists",
    description: "Handpicked playlists covering lo-fi study beats, indie folk, Punjabi pop, rock jams, and late-night ambient tracks.",
    tag: "Diverse Genres"
  }
];

export const featuredShows = [
  {
    id: "campus-vibes",
    title: "Campus Vibes",
    host: "DJ Sarah",
    category: "Music & Hits",
    time: "Mon - Fri • 04:00 PM - 06:00 PM",
    badge: "LIVE NOW",
    isLive: true,
    listeners: "248 listening",
    rating: 4.9,
    episodesCount: 142,
    description: "The hottest chartbusters, campus shoutouts, and rapid-fire banter to power your evening college commute.",
    image: "/images/shows/campus-vibes.svg",
    hostAvatar: "/images/hosts/dj-sarah.svg",
    imageBg: "from-purple-900/60 to-indigo-950/80",
    accentColor: "#c4b5fd",
    hostBio: "Sarah is a Final Year B.Tech student and Lead Radio Jockey at PCTE Radio. Passionate about indie pop, live music festivals, and student stories.",
    episodes: [
      { id: "ep-101", title: "Ep. 142: Pre-Fest Hype & Indie Jam", duration: "54 mins", date: "Today", plays: "1.2k" },
      { id: "ep-102", title: "Ep. 141: Monsoon Melodies & Chai Talks", duration: "48 mins", date: "Yesterday", plays: "980" },
      { id: "ep-103", title: "Ep. 140: Battle of Bands Special Preview", duration: "52 mins", date: "3 days ago", plays: "1.5k" },
    ]
  },
  {
    id: "morning-express",
    title: "The Morning Express",
    host: "RJ Aryan & RJ Simran",
    category: "Morning Buzz",
    time: "Mon - Sat • 08:00 AM - 10:00 AM",
    badge: "Daily Kickoff",
    isLive: false,
    listeners: "310 avg listeners",
    rating: 4.8,
    episodesCount: 220,
    description: "Wake up with high-energy tunes, weather check, PCTE canteen specials, and campus headline roundups.",
    image: "/images/shows/morning-express.svg",
    hostAvatar: "/images/hosts/rj-aryan.svg",
    imageBg: "from-amber-900/40 to-slate-900/80",
    accentColor: "#fed7aa",
    hostBio: "Aryan (MBA) and Simran (Journalism) bring you unmatched morning chemistry, daily horoscope laughs, and quick news bytes.",
    episodes: [
      { id: "ep-201", title: "Ep. 220: Exam Season Survival Guide", duration: "60 mins", date: "Aug 19", plays: "2.1k" },
      { id: "ep-202", title: "Ep. 219: Canteen Chronicles & Breakfast Debate", duration: "55 mins", date: "Aug 18", plays: "1.8k" },
    ]
  },
  {
    id: "tech-talks",
    title: "Tech Talks & Startups",
    host: "Innovators Club & Prof. Sharma",
    category: "Tech & Career",
    time: "Wed & Fri • 02:00 PM - 03:30 PM",
    badge: "Podcast Series",
    isLive: false,
    listeners: "185 avg listeners",
    rating: 4.95,
    episodesCount: 68,
    description: "Conversations with alumni founders, coding club captains, hackathon winners, and AI breakthrough analysis.",
    image: "/images/shows/tech-talks.svg",
    hostAvatar: "/images/hosts/prof-sharma.svg",
    imageBg: "from-cyan-900/40 to-slate-900/80",
    accentColor: "#a5f3fc",
    hostBio: "Curated by the Dept of Computer Science and Student Innovation Cell, featuring guest interviews from top tech startups.",
    episodes: [
      { id: "ep-301", title: "Ep. 68: From Campus Project to ₹1Cr Seed Fund", duration: "42 mins", date: "Aug 16", plays: "3.4k" },
      { id: "ep-302", title: "Ep. 67: AI Tools Every Student Must Master in 2026", duration: "38 mins", date: "Aug 13", plays: "2.9k" },
    ]
  },
  {
    id: "acoustic-chai",
    title: "Acoustic Evenings & Chai",
    host: "RJ Mehak",
    category: "Unplugged Sessions",
    time: "Tue & Thu • 06:30 PM - 08:00 PM",
    badge: "Live Jam",
    isLive: false,
    listeners: "290 avg listeners",
    rating: 4.9,
    episodesCount: 94,
    description: "Student singer-songwriter live recordings, poetry verses, storytelling, and soothing acoustic melodies.",
    image: "/images/shows/acoustic-chai.svg",
    hostAvatar: "/images/hosts/rj-mehak.svg",
    imageBg: "from-rose-900/40 to-slate-900/80",
    accentColor: "#fecdd3",
    hostBio: "Mehak is a vocalist and poet who hosts live unplugged acoustic sessions directly from the acoustic studio booth.",
    episodes: [
      { id: "ep-401", title: "Ep. 94: Sufi & Indie Fusion Jam", duration: "50 mins", date: "Aug 15", plays: "2.7k" },
      { id: "ep-402", title: "Ep. 93: Original Student Poetry & Strings", duration: "45 mins", date: "Aug 11", plays: "1.9k" },
    ]
  },
  {
    id: "hostel-diaries",
    title: "Hostel Diaries Late Night",
    host: "RJ Kabir & Guests",
    category: "Late Night Special",
    time: "Fri & Sat • 10:30 PM - 12:00 AM",
    badge: "Trending",
    isLive: false,
    listeners: "420 avg listeners",
    rating: 4.92,
    episodesCount: 88,
    description: "Late night confessions, horror stories, exam stress relief, midnight song dedications, and unfiltered campus lore.",
    image: "/images/shows/hostel-diaries.svg",
    hostAvatar: "/images/hosts/rj-kabir.svg",
    imageBg: "from-violet-950/70 to-zinc-950/90",
    accentColor: "#ddd6fe",
    hostBio: "Kabir hosts the most requested late-night midnight show, taking live listener calls and hostel shoutouts.",
    episodes: [
      { id: "ep-501", title: "Ep. 88: Block C Midnight Paranormal Stories", duration: "65 mins", date: "Aug 17", plays: "4.8k" },
      { id: "ep-502", title: "Ep. 87: End Sem Prep Banter & Maggie Debates", duration: "58 mins", date: "Aug 10", plays: "3.9k" },
    ]
  },
  {
    id: "sports-roundup",
    title: "Varsity Sports Roundup",
    host: "PCTE Sports Department",
    category: "Sports & Fitness",
    time: "Saturday • 11:00 AM - 12:30 PM",
    badge: "Weekly Recap",
    isLive: false,
    listeners: "150 avg listeners",
    rating: 4.7,
    episodesCount: 52,
    description: "Inter-college cricket, football leagues, basketball tournament scores, and athlete interviews.",
    image: "/images/shows/sports-roundup.svg",
    hostAvatar: "/images/hosts/rj-aryan.svg",
    imageBg: "from-emerald-950/60 to-slate-950/90",
    accentColor: "#a7f3d0",
    hostBio: "Covering live tournaments, athlete training diets, and victory ceremonies across all PCTE sports clubs.",
    episodes: [
      { id: "ep-601", title: "Ep. 52: Cricket Trophy Quarterfinals Preview", duration: "40 mins", date: "Aug 14", plays: "1.1k" },
    ]
  }
];

export const podcastsData = [
  {
    id: "pod-1",
    title: "The Campus Founder Blueprint",
    host: "Innovators Club",
    category: "Entrepreneurship",
    episodesCount: 18,
    rating: 4.9,
    description: "Deep dive conversations with PCTE alumni who built thriving companies straight from their college dorms.",
    coverImage: "/images/podcasts/founder-blueprint.svg",
    latestEpisode: "Bootstrapping an EdTech Venture with ₹20,000",
    duration: "45 mins",
    author: "Karan Johar (Batch '21)"
  },
  {
    id: "pod-2",
    title: "Placement Decoded & Mock Drills",
    host: "PCTE Placement Cell",
    category: "Career & Growth",
    episodesCount: 24,
    rating: 4.95,
    description: "Acing technical interviews, resume teardowns, HR round secrets, and salary negotiation insights.",
    coverImage: "/images/podcasts/placement-decoded.svg",
    latestEpisode: "How I Cracked a 28 LPA Package as a Fresher",
    duration: "52 mins",
    author: "Shubham Verma"
  },
  {
    id: "pod-3",
    title: "Beyond the Syllabus",
    host: "Student Media Guild",
    category: "Culture & Philosophy",
    episodesCount: 14,
    rating: 4.85,
    description: "Exploring psychology, cinema, modern literature, student mental wellness, and life beyond grades.",
    coverImage: "/images/podcasts/beyond-syllabus.svg",
    latestEpisode: "Overcoming Imposter Syndrome in College",
    duration: "38 mins",
    author: "Ananya & Team"
  },
  {
    id: "pod-4",
    title: "Sound & Beats Lab",
    host: "PCTE Music Society",
    category: "Music Production",
    episodesCount: 12,
    rating: 4.8,
    description: "Music theory, DAW tutorials (FL Studio, Logic), beat making contests, and student artist features.",
    coverImage: "/images/podcasts/beats-lab.svg",
    latestEpisode: "Sampling Punjabi Folk into Modern Synthwave",
    duration: "44 mins",
    author: "DJ Gurpreet"
  }
];

export const weeklySchedule = {
  Monday: [
    { time: "08:00 AM - 10:00 AM", title: "The Morning Express", host: "RJ Aryan", tag: "Morning Buzz", category: "Music", image: "/images/shows/morning-express.svg" },
    { time: "10:30 AM - 12:00 PM", title: "Campus News Flash & Notices", host: "Student Council", tag: "Notices", category: "News", image: "/images/shows/tech-talks.svg" },
    { time: "01:00 PM - 02:30 PM", title: "Midday Lo-Fi Chillout", host: "DJ AutoMix", tag: "Music", category: "Music", image: "/images/shows/acoustic-chai.svg" },
    { time: "04:00 PM - 06:00 PM", title: "Campus Vibes", host: "DJ Sarah", tag: "LIVE NOW", isLive: true, category: "Hits", image: "/images/shows/campus-vibes.svg" },
    { time: "07:00 PM - 08:30 PM", title: "Indie Pop Showcase", host: "RJ Tanya", tag: "Hits", category: "Music", image: "/images/shows/campus-vibes.svg" },
  ],
  Tuesday: [
    { time: "08:00 AM - 10:00 AM", title: "The Morning Express", host: "RJ Simran", tag: "Morning Buzz", category: "Music", image: "/images/shows/morning-express.svg" },
    { time: "11:00 AM - 12:30 PM", title: "Placement Pulse & Interview Tips", host: "Career Cell", tag: "Career", category: "Talk", image: "/images/podcasts/placement-decoded.svg" },
    { time: "04:00 PM - 06:00 PM", title: "Campus Vibes", host: "DJ Sarah", tag: "Live Radio", category: "Hits", image: "/images/shows/campus-vibes.svg" },
    { time: "06:30 PM - 08:00 PM", title: "Acoustic Evenings & Chai", host: "RJ Mehak", tag: "Unplugged", category: "Music", image: "/images/shows/acoustic-chai.svg" },
  ],
  Wednesday: [
    { time: "08:00 AM - 10:00 AM", title: "The Morning Express", host: "RJ Aryan & RJ Simran", tag: "Morning Buzz", category: "Music", image: "/images/shows/morning-express.svg" },
    { time: "02:00 PM - 03:30 PM", title: "Tech Talks & Startups", host: "Innovators Club", tag: "Podcasts", category: "Tech", image: "/images/shows/tech-talks.svg" },
    { time: "04:00 PM - 06:00 PM", title: "Campus Vibes", host: "DJ Sarah", tag: "Live Radio", category: "Hits", image: "/images/shows/campus-vibes.svg" },
    { time: "08:00 PM - 09:30 PM", title: "Punjabi Beats Explosion", host: "DJ Gurpreet", tag: "Dance", category: "Music", image: "/images/podcasts/beats-lab.svg" },
  ],
  Thursday: [
    { time: "08:00 AM - 10:00 AM", title: "The Morning Express", host: "RJ Simran", tag: "Morning Buzz", category: "Music", image: "/images/shows/morning-express.svg" },
    { time: "01:00 PM - 02:00 PM", title: "Faculty Spotlight & Insights", host: "Guest Faculty", tag: "Academic", category: "Talk", image: "/images/hosts/prof-sharma.svg" },
    { time: "04:00 PM - 06:00 PM", title: "Campus Vibes", host: "DJ Sarah", tag: "Live Radio", category: "Hits", image: "/images/shows/campus-vibes.svg" },
    { time: "06:30 PM - 08:00 PM", title: "Acoustic Evenings & Chai", host: "RJ Mehak", tag: "Unplugged", category: "Music", image: "/images/shows/acoustic-chai.svg" },
  ],
  Friday: [
    { time: "08:00 AM - 10:00 AM", title: "The Morning Express", host: "RJ Aryan", tag: "Morning Buzz", category: "Music", image: "/images/shows/morning-express.svg" },
    { time: "02:00 PM - 03:30 PM", title: "Tech Talks & Startups", host: "Innovators Club", tag: "Podcasts", category: "Tech", image: "/images/shows/tech-talks.svg" },
    { time: "04:00 PM - 06:00 PM", title: "Campus Vibes - Weekend Warmup", host: "DJ Sarah", tag: "Live Radio", category: "Hits", image: "/images/shows/campus-vibes.svg" },
    { time: "10:30 PM - 12:00 AM", title: "Hostel Diaries Late Night", host: "RJ Kabir", tag: "Confessions", category: "Late Night", image: "/images/shows/hostel-diaries.svg" },
  ],
  Saturday: [
    { time: "09:00 AM - 11:00 AM", title: "Weekend Brunch & Retro Hits", host: "RJ Rohit", tag: "Retro", category: "Music", image: "/images/shows/campus-vibes.svg" },
    { time: "11:00 AM - 12:30 PM", title: "Varsity Sports Roundup", host: "Sports Club", tag: "Sports", category: "Sports", image: "/images/shows/sports-roundup.svg" },
    { time: "05:00 PM - 07:00 PM", title: "EDM Sunset Sessions", host: "DJ Nikhil", tag: "Electronic", category: "Music", image: "/images/events/sunset-acoustic.svg" },
    { time: "10:30 PM - 12:00 AM", title: "Hostel Diaries Late Night", host: "RJ Kabir", tag: "Confessions", category: "Late Night", image: "/images/shows/hostel-diaries.svg" },
  ],
  Sunday: [
    { time: "10:00 AM - 12:00 PM", title: "The Sunday Chill Zone", host: "RJ Tanya", tag: "Lo-Fi", category: "Music", image: "/images/shows/acoustic-chai.svg" },
    { time: "02:00 PM - 04:00 PM", title: "Top 20 Campus Countdown", host: "DJ Sarah & Aryan", tag: "Countdown", category: "Hits", image: "/images/shows/campus-vibes.svg" },
    { time: "06:00 PM - 07:30 PM", title: "International Student Spotlight", host: "Global Exchange", tag: "Culture", category: "Talk", image: "/images/shows/tech-talks.svg" },
  ]
};

export const campusAnnouncements = [
  {
    id: "ann-1",
    date: "TODAY",
    title: "Annual Cultural Fest 'Koshish' Auditions Open",
    category: "Fest Alert",
    summary: "Auditions for RJ hunt, battle of bands, and drama club kicks off this Friday in Audi-2. Open to all students.",
    author: "Cultural Affairs Directorate",
    priority: "High",
    deadline: "Friday, 5:00 PM",
    image: "/images/events/koshish-fest.svg"
  },
  {
    id: "ann-2",
    date: "YESTERDAY",
    title: "Live DJ Booth Requests Enabled on Web Portal",
    category: "Radio Update",
    summary: "Students can now request songs directly through the PCTE Campus Radio web portal with instant RJ queue confirmation.",
    author: "PCTE Media Cell",
    priority: "Normal",
    deadline: "Ongoing",
    image: "/images/shows/campus-vibes.svg"
  },
  {
    id: "ann-3",
    date: "2 DAYS AGO",
    title: "Inter-College Hackathon 2026 Registration Deadline",
    category: "Tech Event",
    summary: "Submit your team entries before midnight this Sunday. ₹1,00,000 in prize pools + internship fast tracks.",
    author: "Dept of Computer Science",
    priority: "Urgent",
    deadline: "Sunday Midnight",
    image: "/images/shows/tech-talks.svg"
  },
  {
    id: "ann-4",
    date: "AUG 17",
    title: "Hostel Night Cricket Tournament Fixtures Released",
    category: "Sports",
    summary: "Matches begin under floodlights from 8:00 PM. Full schedule posted outside the sports complex.",
    author: "Sports Cell",
    priority: "Normal",
    deadline: "Starts Aug 22",
    image: "/images/shows/sports-roundup.svg"
  }
];

export const studentShoutouts = [
  {
    id: "shout-1",
    author: "Rohan & CSE Batch '26",
    message: "Huge shoutout to DJ Sarah for playing our study track during the lab exam sprint!",
    songRequested: "Starboy - The Weeknd",
    timeAgo: "10 mins ago",
    status: "Played On Air"
  },
  {
    id: "shout-2",
    author: "Priya (BBA Dept)",
    message: "Happy Birthday to Neha from Block C Hostel! Please play this for her!",
    songRequested: "Until I Found You - Stephen Sanchez",
    timeAgo: "25 mins ago",
    status: "Up Next in Queue"
  },
  {
    id: "shout-3",
    author: "Robotics Club",
    message: "Congratulations to our team for winning 1st place in the Northern Tech Challenge!",
    songRequested: "Can't Hold Us - Macklemore",
    timeAgo: "1 hour ago",
    status: "Played On Air"
  },
  {
    id: "shout-4",
    author: "Kavya & Manav",
    message: "Wishing good luck to everyone participating in tomorrow's debate championship!",
    songRequested: "Viva La Vida - Coldplay",
    timeAgo: "2 hours ago",
    status: "Queued"
  }
];

export const campusEvents = [
  {
    id: "event-1",
    title: "Koshish 2026: The Annual Youth Festival",
    date: "OCT 14 - 16, 2026",
    venue: "Main Campus Grounds & Audi 1",
    category: "Mega Cultural Fest",
    description: "3 days of non-stop dance, drama, battle of bands, fashion showcases, and celebrity star night.",
    badge: "Registration Open",
    tag: "Flagship Event",
    bannerImage: "/images/events/koshish-fest.svg"
  },
  {
    id: "event-2",
    title: "Radio RJ Hunt 2026: Find Your Voice",
    date: "AUG 28, 2026 • 02:00 PM",
    venue: "Radio Studio Room 204, Block-B",
    category: "Auditions",
    description: "Audition to become the official voice of PCTE Campus Radio 98.4 FM. Win a dedicated weekly prime-time slot.",
    badge: "Audition Call",
    tag: "Radio Club",
    bannerImage: "/images/events/rj-hunt.svg"
  },
  {
    id: "event-3",
    title: "Sunset Unplugged Acoustic Jam",
    date: "SEP 05, 2026 • 05:30 PM",
    venue: "Central Lawn Amphitheatre",
    category: "Live Music",
    description: "Live student acoustic performances, open mic poetry, chai stalls, and lantern lighting.",
    badge: "Free Entry",
    tag: "Music Society",
    bannerImage: "/images/events/sunset-acoustic.svg"
  },
  {
    id: "event-4",
    title: "Battle of the Bands: Campus Rumble",
    date: "SEP 20, 2026 • 04:00 PM",
    venue: "Auditorium 2",
    category: "Band Contest",
    description: "Rock, metal, and fusion bands from northern institutes compete for the golden guitar trophy.",
    badge: "16 Bands Competing",
    tag: "Live Fest",
    bannerImage: "/images/events/battle-bands.svg"
  }
];

export const stationTeam = [
  {
    name: "Dr. K. S. Kang",
    role: "Patron & Director General",
    dept: "PCTE Group of Institutes",
    imageInitials: "KK",
    avatar: "/images/hosts/prof-sharma.svg"
  },
  {
    name: "Prof. Harpreet Kaur",
    role: "Faculty In-Charge & Advisory",
    dept: "Department of Journalism & Media",
    imageInitials: "HK",
    avatar: "/images/hosts/rj-simran.svg"
  },
  {
    name: "DJ Sarah",
    role: "Lead Student RJ & Station Head",
    dept: "B.Tech CSE, 4th Year",
    imageInitials: "DS",
    avatar: "/images/hosts/dj-sarah.svg"
  },
  {
    name: "RJ Aryan",
    role: "Morning Express Show Lead",
    dept: "MBA, 2nd Year",
    imageInitials: "RA",
    avatar: "/images/hosts/rj-aryan.svg"
  },
  {
    name: "RJ Simran",
    role: "News Anchor & Features RJ",
    dept: "B.A. Journalism, 3rd Year",
    imageInitials: "RS",
    avatar: "/images/hosts/rj-simran.svg"
  },
  {
    name: "Kabir Dhillon",
    role: "Chief Sound Engineer & Producer",
    dept: "B.Tech IT, 3rd Year",
    imageInitials: "KD",
    avatar: "/images/hosts/rj-kabir.svg"
  }
];

export const stationFAQs = [
  {
    q: "How can I listen to PCTE Campus Radio outside the college?",
    a: "You can tune in 24/7 anywhere worldwide via this official web portal or on 98.4 FM within a 15km perimeter of the PCTE Ludhiana campus."
  },
  {
    q: "How can I apply to become an on-air RJ or Podcast host?",
    a: "We conduct auditions at the start of each semester. You can also submit an audition voice demo anytime via our Join / Login portal!"
  },
  {
    q: "Can I dedicate a song or send a shoutout to someone?",
    a: "Yes! Use our Student Voices portal or click 'Request Song' on any page to queue your song for the live on-air DJ."
  },
  {
    q: "Where is the physical radio station located?",
    a: "Our master broadcast studio is in Room 204, Block-B, Campus II, PCTE Institutes, Baddowal, Ludhiana, Punjab."
  }
];

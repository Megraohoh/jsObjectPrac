//Write all objects, properties, and values for campaign
//variables with inherent properties that protect similar to writable
const candidate = Object.create({
    enumerable: true,
    writable: false,
    candidate_name: "Lord Voldemort (He Who Must Not Be Named)",
    district: "The World",
    biography: "Quite the character! He has changed his name at least once and it can't be said. Fun fact: our Lord has kinda died before.",
    mission_statement: "Wants to live forever and rule."
})

const images = Object.create({
    enumerable: true,
    writable: false,
    headshot: "headshot.jpg",
    family_portrait: "family.jpg",
    constituents: "peopleHeRules.jpg"
})
const statements = Object.create({
    enumerable: true,
    writable: false,
    taxes: "Taxes don't interest me, only power and fear.",
    jobs: "Do your job as my Death Eaters see fit or you will be terminated.",
    infrastructure: "Infrastructure should reflect my cold and hard policies.",
    health_care: "The health of all witches and wizards is an absolute focus. All mudbloods will be exterminated for the betterment of all.",
    crime_enforcement: "Greyback will be the head of my policy force and his enforcement will be at his discretion."
})
 const links = Object.create({
     enumerable: true,
     writable: false,
     donate_link: "#",
     vote_link: "##"
 })

 const volunteers = Object.create({
     enumerable: true,
     writable: false,
     title: "Death Eater",

     volunteer_one: {
        first_name: "Draco",
        last_name: "Malfoy",
        address: "Malfoy Manor",
        email: "secretly_wants_potter@gmail.com",
        phone_number: "+41 123-456789",
        availability: "Available as my Lord needs me.",
        activities: "Taunting Harry Potter, getting punched by a mudblood, wishing my father loved me, being a snitch for the Dark Lord."
    },
     volunteer_two: {
        first_name: "Blaise",
        last_name: "Zabini",
        address: "Malfoy Manor",
        email: "darkmagic4eva@gmail.com",
        phone_number: "+41 987-654321",
        availability: "Available as my Lord needs me.",
        activities: "General soldiering for the Dark Lord, slaughtering mudblooks, lurking randomly"
    }
 })
 const events = Object.create({
     august_event: {
         event_name: "Mudblood Bonfire",
         event_location: "Quidditch World Cup Campsite",
         event_time: "Midnight"
     },
     june_event: {
         event_name: "The Dark Lord's Return",
         event_location: "Muggle Graveyard; Little Hangleton",
         event_time: "Sundown"
     }
 })
//Write all objects, properties, and values for campaign
//variables with inherent properties that protect similar to writable
const candidate = Object.create({}, {
    enumerable: true,
    writable: false,
    district: "Hogwarts",
    biography: "Quite the character! He has changed his name at least once and it can't be said. Fun fact: our Lord has kinda died before.",
    mission_statement: "Wants to live forever and rule."
})

const images = Object.create({}, {
    enumerable: true,
    writable: false,
    headshot: "headshot.jpg",
    family_portrait: "family.jpg",
    constituents: "peopleHeRules.jpg"
})
const statements = Object.create({}, {
    enumerable: true,
    writable: false,
    taxes: "Taxes don't interest me, only power and fear.",
    jobs: "Do your job as my Death Eaters see fit or you will be terminated.",
    infrastructure: "Infrastructure should reflect my cold and hard policies.",
    health_care: "The health of all witches and wizards is an absolute focus. All mudbloods will be exterminated for the betterment of all.",
    crime_enforcement: "Greyback will be the head of my policy force and his enforcement will be at his discretion."
})
 const links = Object.create({}, {
     enumerable: true,
     writable: false,
     donate_link: "#",
     vote_link: "##"
 })

 const volunteers = Object.create({}, {
     enumerable: true,
     writable: false,
     title: "Death Eater",
     first_name: ,
     last_name: ,
     address: ,
     email: ,
     phone_number: ,
     availability: ,
     activities: ,
 })
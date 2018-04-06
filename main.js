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

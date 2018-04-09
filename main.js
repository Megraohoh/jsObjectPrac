//Write all objects, properties, and values for campaign variables with inherent properties that protect similar to writable
const candidate = Object.create({
    candidate_name: {
        enumerable: true,
        writable: false,
        value: "Lord Voldemort (He Who Must Not Be Named)"
    },
    district: {
        enumerable: true,
        writable: false,
        value:"The World"
    },
    biography: {
        enumerable: true,
        writable: false,
        value: "Quite the character! He has changed his name at least once and it can't be said. Fun fact: our Lord has kinda died before."
    },
    mission_statement: {
        enumerable: true,
        writable: false,
        value:"Wants to live forever and rule."
    }
})

const images = Object.create({
    headshot: {
        enumerable: true,
        writable: false,
        value: "headshot.jpg"
    },
    family_portrait: {
        enumerable: true,
        writable: false,
        value: "family.jpg"
    },
    constituents: {
        enumerable: true,
        writable: false,
        value: "peopleHeRules.jpg"
    }
})
const statements = Object.create({
    taxes: {
        enumerable: true,
        writable: false,
        value: "Taxes don't interest me, only power and your fear."
    },
    jobs: {
        enumerable: true,
        writable: false,
        value: "Do your job as my Death Eaters see fit or you will be terminated."
    },
    infrastructure: {
        enumerable: true,
        writable: false,
        value: "Infrastructure should reflect my cold and hard policies."
    },
    health_care: {
        enumerable: true,
        writable: false,
        value: "The health of all witches and wizards is an absolute focus. All mudbloods will be exterminated for the betterment of all."
    },
    crime_enforcement: {    
        enumerable: true,
        writable: false,
        value:"Greyback will be the head of my police force and his enforcement will be at his discretion."
    }
})
 const links = Object.create({
     donate_link: {
        enumerable: true,
        writable: false,
        value: "DonateEverythingToTheDarkLord.uk.com"
    },
     vote_link: {
        enumerable: true,
        writable: false,
        value: "VoteForDominance.uk.com"}
 })

 const volunteers = Object.create({
     volunteer_one: {
        enumerable: true,
        writable: false,
        title: "Death Eater",
        first_name: "Draco",
        last_name: "Malfoy",
        address: "Malfoy Manor",
        email: "secretly_wants_potter@gmail.com",
        phone_number: "+41 123-456789",
        availability: "Available as my Lord needs me.",
        activities: "Taunting Harry Potter, getting punched by a mudblood, wishing my father loved me, being a snitch for the Dark Lord."
    },
     volunteer_two: {
        enumerable: true,
        writable: false,
        title: "Death Eater", 
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
         enumerable: true,
         writable: false,
         event_name: "Mudblood Bonfire",
         event_location: "Quidditch World Cup Campsite",
         event_time: "Midnight"
     },
     june_event: {
         enumerable: true,
         writable: false,
         event_name: "The Dark Lord's Return",
         event_location: "Muggle Graveyard; Little Hangleton",
         event_time: "Sundown"
     }
 })

 //After you have defined all the objects for representing the data, write a corresponding function for each one whose purpose is to change the state of the object. Then invoke each function, and pass a reference to the correct object to it and modify a property.

//writing function with arguments, second line to replace the value when arguments are passed through the function when the function gets invoked
 function update (objectToChange, propertyToChange, updatedInfo) {
     objectToChange[propertyToChange] = updatedInfo;
 }
 //here the function is invoked. Interpreter sees the named object and follows the tree to align arguments with properties/values
 update(candidate, "mission_statement", "Kill Harry Potter." )
//console.log(candidate);

//Use document.createElement() to build an <article> element representing Elizabeth. The id property of the element should be her congressional district, and its content should be her platform data. Once the element has been created, insert it into the DOM
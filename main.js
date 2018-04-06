//Write all objects, properties, and values for campaign
const campaignTrack = Object.create({}, {
    district: {
        enumerable: true,
        writable: false,
        value: "Hogwarts" 
    },
    platformStatements: {
        enumerable: true,
        writable: false, 
        value: ["For Taxes", "Job Creation", "Infrastructure Needs to be Overhauled", "Health Care is for Everyone", "Against Crime", "Wants 'For the People' Enforcement"]
    },
    campaignURL: {
        enumerable: true,
        writable: false,
        value: "donate.to.me.com"
    },
    calendar: {
        enumerable: true,
        writable: false,
        value: ""
    },
    volenteerInfo: {
        enumerable: true,
        writable: false,
        //values--consider document.getElementByID like in flash exercise
        value: // Volunteer information Name Address Email Phone number Availability What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
    },
    biography: {
        enumerable: true,
        writable: false,
        value: "Elizabeth is actually Dumbledore."
    },
    imageGallery: {
        enumerable: true,
        writable: false,
        value: //pull from CSS? headshot, family, constituents
    },
    missionStatement: {
        enumerable: true,
        writable: false,
        value: "To conquer the world...I mean help people."
    },
    url-vote: {
        enumerable: true,
        writable: false,
        value: ""
    }
})

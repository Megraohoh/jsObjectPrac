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
    }
})
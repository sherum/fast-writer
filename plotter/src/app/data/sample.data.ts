import {IStory} from "../models/story";

export const testStorys = [


  {
    title: "Space Mage",
    userId: "12344asnwdbc",
    author: "woodyard",
    genre: "science_fiction",
    maguffin: "An astronaut doing routine satellite maintenance is sucked into a parallel universe where magic and science coexist.",
    summary: "A man must escape an alternate reality while people seek to exploit and imprison him .",
    id: "2"

  },
  {
    title: "Holy Cow",
    userId: "12344asnwdbc",
    author: "woodyard",
    genre: "horror",
    maguffin: "A talking cow shares information about treasure.",
    summary: "A boy looking for meaning in life searches for an unlikely prize.",
    id: "1"
  },
  {
    title: "Explosive Descent",
    userId: "12344asnwdbc",
    author: "woodyard",
    genre: "mystery",
    maguffin: "A commercial airliner explodes on its desceent into Nashville.",
    summary: "A former undercover reporter struggles to retain her sanity after a series of traumatic events.",
    id: "3"

  }
];

export const testPlots = [
  {
    id: "1P",
    storyId: "1",
    name: "Why am I here",
    plotType: "character",
    description: "Johnny feels down about his future.",
    parent: ""

  }, {
    id: "2P",
    storyId: "3",
    name: "Crazy",
    plotType: "arc",
    description: "Felicia deals with her degrading mental health.",
    parent: ""

  }, {
    id: "3P",
    storyId: "3",
    name: "My hero Grambone",
    plotType: "arc",
    description: "Felicia's hero worship of her boss.",
    parent: ""

  }

];

export const testEvents = [
  {
    id: "1E",
    storyId: "1",
    name: "Goes for a walk",
    description: "Johnny storms out of the house frustrated.",
    plotId: "1P",
    //date? : Date,
    location: "1L" //location ID
  },
  {
    id: "2e",
    storyId: "1",
    name: "Johnny gets lost",
    description: "Johnny realizes he's lost.",
    plotId: "1P"
    //date? : Date,
    //location? : string; //location ID
  },
  {
    id: "3E",
    storyId: "2",
    name: "The jig is up.",
    description: "Felicia has a nightmare at work.",
    plotId: "2P",
    //date? : Date,
    location: "2L" //location ID
  },
  {
    id: "4E",
    storyId: "2",
    name: "Johnny gets lost",
    description: "Johnny realizes he's lost.",
    plotId: "1P"
    //date? : Date,
    //location? : string; //location ID
  }

];
export const testLocations = [
  {
    id: "1L",
    storyId: "1",
    name: "Johnny's house"
  },
  {
    id: "2L",
    storyId: "3",
    name: "Nashville Bi-Weekly"
  }
];

export const testPersons = [
  {
    id: "1C",
    storyId: "1",
    name: "Johnny Smith"
  },
  {
    id: "2C",
    storyId: "3",
    name: "Felicia Martin"
  },
  {
    id: "3C",
    storyId: "3",
    name: "Rex Grambone"
  }
];

export const testThings = [
  {
    id: "1T",
    storyId: "1",
    name: "Pocket watch",
    description: "a watch with a broken chain"
  },
  {
    id: "2T",
    storyId: "2",
    name: "PDA",
    description: "a pocket computer"
  },
  {
    id: "3T",
    storyId: "3",
    name: "Buddy",
    description: "Beretta 21A pistol"
  }
];

export const testScenes = [
  {
    id: "2SS",
    storyId: "3",
    name: "Home Cooking",
    linkedPlot: ""
  },
  {
    id: "3SS",
    storyId: "3",
    name: "Divine Guilt",
    linkedPlot: ""
  },
  {
    id: "5SS",
    storyId: "3",
    name: "Missing Time",
    linkedPlot: ""
  }, {
    id: "6SS",
    storyId: "2",
    name: "Launch Sequence",
    linkedPlot: ""
  },
  {
    id: "7SS",
    storyId: "2",
    name: "Void Arrival",
    linkedPlot: ""
  },
  {
    id: "8SS",
    storyId: "1",
    name: "Johnny Storm",
    linkedPlot: ""
  },
];


export const newStory = {
  title: "",
  userId: "",
  author: "",
  genre: "",
  maguffin: "",
  summary: "",
  id: "0"
}
export const newPlot = {
  id: "",
  storyId: "",
  name: "",
  plotType: "",
  description: "",
  parent: ""
}
export const newScene = {
  id: "",
  storyId: "",
  name: "",
  linkedPlot: ""
}
export const newPerson = {
  id: "",
  storyId: "",
  name: ""
}
export const newEvent = {
  id: "",
  storyId: "",
  name: "",
  description: "",
  plotId: "",
  location: "",
  date: ""
}
export const newLocation = {
  id: "",
  storyId: "",
  name: ""
}
export const newThing = {
  id: "",
  storyId: "",
  name: "",
  description: ""
}



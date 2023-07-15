export let GENRE =[

  {name:'crime'},
  {name:'mystery'},
  {name:'fantasy'},
  {name:'romance'},
  {name:'science_fiction'},
  {name:'horror'},
  {name:'historical'},
  {name:'non_fiction'}
];



export interface IStory {
  title:string;
  userId:string;
  author:string;
  genre:string;
  maguffin:string;
  summary:string;
  id:string;

}

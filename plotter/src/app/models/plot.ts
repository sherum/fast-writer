export interface IPlot {
  id: string;
  storyId: string;
  name: string;
  plotType: string;
  description: string;
  parent?: string;

}

export const PLOTTYPE= [
  {name:'Arc'},
  {name:'Character'},
  {name:'Global'},
  {name:'Local'},
  {name:'Location'}
];

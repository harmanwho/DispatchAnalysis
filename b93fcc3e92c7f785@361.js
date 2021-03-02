// https://observablehq.com/@harmanwho/could-boston-polices-responsiveness-be-a-reason-for-declin@361
import define1 from "./7764a40fe6b83ca1@416.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["911-daily-dispatch-count-by-agency.csv",new URL("./files/20ef617294cf61d9edb9ecef5b3a27fc9c49a3a95ef0534eee150079e9b7d8ba29e97aecf41c163417f55e8c88b842f98d880d657564bca5c94736cb830b6d4c",import.meta.url)],["Screen Shot 2021-03-01 at 7.54.44 PM.png",new URL("./files/09a4c7141184527af44b70858980a2db60aac7705e4d6ba1ff2069e6a6945cf76569c2ed729003883b9c599409320a0d7bec8b386a3b47972806d20e70d79e62",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Could Boston Police's responsiveness be a reason for decline in crime rate over the years?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*A department-wise comparison of 911 daily dispatch calls from 2010-2014 with the FBI crime rate statistics to indentify reasons of decline in Boston Crime Rate over time.*`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Created by [Harman Sidhu](http://github.com/harmanwho)`
)});
  main.variable(observer()).define(["vl","width","chartData"], function(vl,width,chartData)
{
  const brush = vl.selectInterval().encodings('x');
  const click = vl.selectMulti().encodings('color');
  
  const scale = {
    domain: ["BFD", "BPD", "EMS"],
    range: ["gold", "steelblue", "maroon"]
  }
  
  const scatterPlot = vl.markCircle()
    .encode(
      vl.color().value("lighgray")
        .if(brush, vl.color().fieldN('dept').scale(scale).title('Department')),
      vl.x().fieldT("Date").timeUnit("monthdateyear").title('Date'),
      vl.y().fieldQ("dispatchValue").title('Units Dispatched per day'),
      vl.tooltip([vl.fieldT("Date"), vl.fieldQ("dispatchValue"), vl.fieldN("dept"), vl.fieldQ("Total")]),
      
    )
    .width(width)
    .height(500)
    .select(brush)
    .transform(vl.filter(click));
  
//   const linePlot = vl.markLine()
//     .encode(
//       vl.color().value("lighgray")
//         .if(brush, vl.color().fieldN('dept').scale(scale).title('Department')),
//       vl.x().fieldT("Date").timeUnit("monthdateyear").title('Date'),
//       vl.y().fieldQ("dispatchValue").title('Units Dispatched per day'),
//       vl.tooltip([vl.fieldT("Date"), vl.fieldQ("dispatchValue"), vl.fieldN("dept"), vl.fieldQ("Total")]),
      
//     )
//     .width(width)
//     .height(300)
//     .select(brush)
//     .transform(vl.filter(click));
  
  
  const barPlot = vl.markBar()
    .encode(
      vl.color().value('lightgray')
        .if(click, vl.color().fieldN('dept').scale(scale).title('Department')),
      vl.x().sum("dispatchValue").title('Total Dispatch'),
      vl.y().fieldN("dept").scale({domain: scale.domain}).title('Department')
    )
    .width(width)
    .select(click)
    .transform(vl.filter(brush));

  const totalLine = vl.markLine()
    .encode(
      vl.average("Total")
    )
    .width(width)
    .select(click)
    .transform(vl.filter(brush));
  
  // const layeredPlot = vl.layer(scatterPlot, linePlot);
  
  return vl.vconcat(scatterPlot, barPlot)
    .data(chartData)
    .autosize({type: 'fit-x', contains: 'padding'})
    .render();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`## Insights`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `* According the graph, it can be seen that there has been a significant increase in Boston Police Department(BPD) daily dispatches over the years 2010 to 2013 and 2014, staying close in 2013 and 2014. However, Boston Fire Department(BFD) and EMS(Emergency services) have seen similar dispatch trends over the years.
* Upon selecting data from the graph, we can see the total number of dispatches per department on the bar chart below; when selected data year by year we can see that the total dispatches significantly increase only for the BPD
* Increased number of dispatches can be a result of either of two things: Rise in crime in Boston or Increased community awareness and police activity to tackle the crime rate`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Conclusion`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `As suggested in the [FBI Crime Rate trend for Boston](https://www.macrotrends.net/cities/us/ma/boston/crime-rate-statistics), there was in a decline in crime rate (from Voilent Crimes: Murder/Homicide, Robbery etc. to Non-voilent Crimes: Property Theft, Burglary etc.) which aligns with increased responsiveness of BPD over the years.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Over the years, people are becoming more aware and trying to educate others about the drawbacks of measures taken by law enforcements and question their effectiveness. Although, not everyone in the power has been accepting to critisism but many officials have realised the power of working together with the community for a safer and more peaceful city.

As quoted in this [article](https://www.bostonglobe.com/metro/2016/01/15/major-crime-drops-boston/TrO5ZAhmOD3bFDqdBX8vwN/story.html): the crime rate in Boston was on a ten year low in 2015, adhering to the trend from 2010 to 2014. The showed a decline in Major crime in Boston over the years with a decrease in number of fatal and violent crimes.

During this timeline extending to present year, Boston police has worked with community to understand everyday life on the streets, listened to activists, taken measures to tackle the problem of rasicm among police officers and other measures to keep the city safe. Which in turn made a lot of citizens feel part of the law enforcement, resulting in a comparatively better crime rate situation in Boston. Efforts like [this](https://www.boston25news.com/news/boston-police-city-officials-join-community-for-peace-walk/393666215/) seem to have paid off given there is always room for improvement and there is a long way to go.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `*Below is an image depicting Major crime in Boston over the years:*`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("Screen Shot 2021-03-01 at 7.54.44 PM.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### Target Users:`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `This analysis of the visualization along with the compared data can be very useful for *Law enforcement researchers* to show effectiveness of police efforts, for *activists*, *citizens* to see an factual view of crime rates and the power of working as a community to tackle problems`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Process followed`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `### What?
The department wise dispatch temporal data was observed from [data.boston.gov](https://data.boston.gov/dataset/911-daily-dispatch-count-by-agency). This data is from Nov 1, 2010 to Apr 21, 2014. To create the department-wise insights the data had to be transformed and split into more rows, which was done using JavaScript as seen below. 

#### Data and Dataset types:
* Dataset type: Temporal
* Attribute types: Categorical and Ordered(Quantitative)
* Ordering direction: Sequential
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `
#### *Data Transformation:*`
)});
  main.variable(observer("chartData")).define("chartData", ["data"], function(data)
{
  const transformedData = [];
  for(let i=0; i<data.length; i++) {
    let tempObj;
    let deptArray = ["BFD", "BPD", "EMS"];
    for(let j=0; j<deptArray.length; j++) {
      tempObj = {...data[i]};
      tempObj.dept = deptArray[j];
      tempObj.dispatchValue = tempObj[tempObj.dept];
      delete tempObj.BPD;
      delete tempObj.EMS;
      delete tempObj.BFD;
      transformedData.push(tempObj);
    }
  }
  return transformedData;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md `### Why?
Tasks identified:
* Evaluate and compare dispatch values of different departments/agencies across the timeline; identify the differences and trends amongst the three departments
* Conclude the evaluated differences and trends with the hypotheses by comparing the data with Boston police crime reports and the FBI detailed crime rate reports for Boston

### How?
* The visualization of dispatch data is done by selecting a certain timeline on scatter plot using the bar plot as an idiom to see the total dispatch calls for each department. And, this works vice-versa as well to see individual scatter plots by selecting bars from the bar plot.
* *Dispatch Value* and *Date* have been used as the y and x channels respectively combined with the color coded *Department* as seen on both the charts`
)});
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("911-daily-dispatch-count-by-agency.csv").csv()
)});
  return main;
}

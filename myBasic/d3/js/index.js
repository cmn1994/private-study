//数据显示--------------------------------
// var theData = [1,2,4];
// console.log(d3.select("body").data([1]));
// var p = d3.select("body").selectAll("p")
//     .data(theData)
//     .enter()
//     .append("p")
//     .text(function(d,i){
//         var addedNumber = 2;
//         var tempNumber;
//         //把输入数据加上2
//         tempNumber = d+ addedNumber;
//         return 'i=' + i +'、' + tempNumber;
//     })

//同心圆--------------------------------
// const circleRadii = [40,20,10];
// let svgContainer = d3.select('body')                //创建一个svg
//     .append('svg')
//     .attr('width',200)
//     .attr('height',200);
//
// let circles = svgContainer.selectAll('circle')      //根据data创建circle
//     .data(circleRadii)
//     .enter()
//     .append('circle');
//
// let circleAttr = circles.attr('cx',50)
//     .attr('cy',50)
//     .attr('r',(d) => d)
//     .style('fill',(d) => {
//         switch(d){
//             case 40: return 'skyblue';break;
//             case 20: return 'yellow';break;
//             case 10: return 'red';break;
//             default: return 'black';
//         }
//     });

//网格结构三个圆--------------------------------
// const spaceCircles = [30,70,110];
// let svg1 = d3.select('body')
//     .append('svg')
//     .attr('width',300)
//     .attr('height',300)
//     .style('border','2px solid black');
//
// let circle1 = svg1.selectAll('circle')
//     .data(spaceCircles)
//     .enter()
//     .append('circle');
//
// let circle1Attr = circle1
//     .attr('cx',d => d)
//     .attr('cy',d => d)
//     .attr('r',20)
//     .style('fill',(d) => {
//         switch(d){
//             case 30: return 'skyblue';break;
//             case 70: return 'yellow';break;
//             case 110: return 'red';break;
//             default: return 'black';
//         }
//     });


//基于json数据三个圆--------------------------------
// const jsonCircles = [
// {
//     "x_axis":30,
//     "y_axis":30,
//     "radius":20,
//     "color":"green"
// },{
//     "x_axis":70,
//     "y_axis":70,
//     "radius":20,
//     "color":"purple"
// },{
//     "x_axis":110,
//     "y_axis":100,
//     "radius":20,
//     "color":"red"
// }];
//
// let svg2 = d3.select('body')
//     .append('svg')
//     .attr('width',300)
//     .attr('height',300)
//     .style('border','2px solid blue');
//
// let circle2 = svg2.selectAll('circle')
//     .data(jsonCircles)
//     .enter()
//     .append('circle');
//
// let circle2Attr = circle2
//     .attr('cx',d => d.x_axis)
//     .attr('cy',d => d.y_axis)
//     .attr('r',d => d.radius)
//     .style('fill',d => d.color);


//条形图--------------------------------
// const dataset = [];
// for(var i=0; i<15;i++) {
//     var randomNum = Math.ceil(Math.random() * 1500);
//     dataset.push(randomNum);
// };


// d3.select('.allbar').selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .attr('class','bar')
//     .style('height',d => {
//         var maxHeight = 200;
//         var maxData = Math.max.apply(null,dataset);

//         return Math.ceil(d * maxHeight / maxData)  + 'px';
//     });

//svg条形图--------------------------------
// const w = 800;
// const h = 250;
// const marginR = 20;

// var svg = d3.select('.mysvg')
//     .append('svg')
//     .attr('width',w)
//     .attr('height',h)

// svg.selectAll('rect')
//     .data(dataset)
//     .enter()
//     .append('rect')
//     .attr('x', (d,i) => i * (20 + marginR) + 50)
//     .attr('y', (d,i) => {
//         var maxHeight = 200;
//         var maxData = Math.max.apply(null,dataset);
//         var barH =  Math.ceil(d * maxHeight / maxData);
//         return Math.ceil(h-barH)
//     })
//     .attr('width',20)
//     .attr('height',d => {
//         var maxHeight = 200;
//         var maxData = Math.max.apply(null,dataset);
//         return Math.ceil(d * maxHeight / maxData);
//     });

// svg.selectAll('text')
//     .data(dataset)
//     .enter()
//     .append('text')
//     .text(d => d)
//     .attr('x', (d,i) => i * (20 + marginR) + 50 - 5)
//     .attr('y', (d,i) => {
//         var maxHeight = 200;
//         var maxData = Math.max.apply(null,dataset);
//         var barH =  Math.ceil(d * maxHeight / maxData);
//         return Math.ceil(h-barH) - 5 ;
//     })


//svg散点图--------------------------------
// const w2 = '100%';
// const h2 = 250;
// var dataset3 = [
//     [10, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//     [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
// ];
//
// var svg2 = d3.select('.sandian')
//     .append('svg')
//     .attr('width',w2)
//     .attr('height',h2)
//
//
// svg2.selectAll('circle')
//     .data(dataset3)
//     .enter()
//     .append('circle')
//     .attr('cx',d => d[0])
//     .attr('cy',d => d[1])
//     .attr('r', d => Math.sqrt(100 - d[1]))
// svg2.selectAll('text')
//     .data(dataset3)
//     .enter()
//     .append('text')
//     .attr('x',d => d[0] + 5)
//     .attr('y',d => d[1])
//     .attr('fill','red')
//     .text(d => `(${d[0]},${d[1]})`)



//比例尺--------------------------------
// const w3 = 400;
// const h3 = 200;
// const padding = 20;
// var dataset4 = [
//     [10, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//     [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
// ];
//
// //Create scale functions
// var xScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset4, d => d[0])])
//     .range([0, w3]);
//
//
// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset4, d => d[1] )])
//     .range([0, h3]);
//
// var svg2 = d3.select('.sandian')
//     .append('svg')
//     .attr('width',w3)
//     .attr('height',h3)
//
//
// svg2.selectAll('circle')
//     .data(dataset4)
//     .enter()
//     .append('circle')
//     .attr('cx',d => xScale(d[0]))
//     .attr('cy',d => yScale(d[1]))
//     .attr('r', d => Math.sqrt(100 - d[1]))
// svg2.selectAll('text')
//     .data(dataset4)
//     .enter()
//     .append('text')
//     .attr('x',d => xScale(d[0]) + 5)
//     .attr('y',d => yScale(d[1]))
//     .attr('fill','red')
//     .text(d => `(${d[0]},${d[1]})`)


// 创建坐标轴--------------------------------
// const w3 = 500;
// const h3 = 300;
// const padding = 20;
// var dataset4 = [
//     [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
//     [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
// ];


// var xScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset4, d => d[0])])
//     .range([padding, w3 - padding * 2 ]);


// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset4, d => d[1] )])
//     .range([h3 - padding, padding]);

// var rScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset4, d => d[1]) ])
//     .range([2, 5]);


// var svg2 = d3.select('.sandian')
//     .append('svg')
//     .attr('width',w3)
//     .attr('height',h3)


// svg2.selectAll('circle')
//     .data(dataset4)
//     .enter()
//     .append('circle')
//     .attr('cx',d => xScale(d[0]) + 30)
//     .attr('cy',d => yScale(d[1]))
//     .attr('r', d => rScale(d[1]))
// svg2.selectAll('text')
//     .data(dataset4)
//     .enter()
//     .append('text')
//     .attr('x',d => xScale(d[0]) + 35)
//     .attr('y',d => yScale(d[1]))
//     .attr('fill','red')
//     .text(d => `(${d[0]},${d[1]})`)

// var formatAsPercentage = d3.format("1");//设置刻度的格式,enUs.format的别名。



// var xAxis = d3.axisBottom()
//     .scale(xScale)
//     .ticks(5)//自定义刻度的生成和格式化方式。最多刻度数，连上原点
//     .tickFormat(formatAsPercentage);  //明确地指定刻度格式。

// var yAxis = d3.axisRight()
//     .scale(yScale)
//     .ticks(5);

// svg2.append('g')
//     .attr('class','axis')
//     .attr('transform',`translate(0,${ h3 - padding})`)
//     .call(xAxis);
// //创建Y轴
// svg2.append("g")
//     .attr("class", "axis")
//     .attr("transform", `translate(${padding},0)`)
//     .call(yAxis);



//--------------demo海拔图！！---------------------
var altW = 600;
var altH = 400;
var altPadding = 40;
var altArr = [{"lat":"41.1727517","lon":"80.2608022","speed":"5.00","alt":"1107.17","time":"1494989195","status":"2","distance":0},{"lat":"41.1728239","lon":"80.2607917","speed":"5.00","alt":"1107.17","time":"1494989197","status":"0","distance":0.01},{"lat":"41.1730543","lon":"80.2604439","speed":"5.00","alt":"1107.17","time":"1494989200","status":"0","distance":0.05},{"lat":"41.1731707","lon":"80.2603493","speed":"5.25","alt":"1107.29","time":"1494989203","status":"0","distance":0.07},{"lat":"41.1734351","lon":"80.2600484","speed":"5.50","alt":"1107.40","time":"1494989207","status":"0","distance":0.11},{"lat":"41.1735260","lon":"80.2600044","speed":"5.50","alt":"1107.27","time":"1494989209","status":"0","distance":0.12},{"lat":"41.1736317","lon":"80.2599002","speed":"4.50","alt":"1107.10","time":"1494989212","status":"0","distance":0.13},{"lat":"41.1739861","lon":"80.2593567","speed":"5.75","alt":"1107.36","time":"1494989217","status":"0","distance":0.19},{"lat":"41.1741319","lon":"80.2593086","speed":"5.25","alt":"1107.26","time":"1494989220","status":"0","distance":0.21},{"lat":"41.1741833","lon":"80.2593119","speed":"5.25","alt":"1107.23","time":"1494989221","status":"0","distance":0.22},{"lat":"41.1743041","lon":"80.2592231","speed":"5.25","alt":"1107.14","time":"1494989224","status":"0","distance":0.24},{"lat":"41.1746225","lon":"80.2590417","speed":"5.50","alt":"1107.05","time":"1494990133","status":"1","distance":0.28},{"lat":"41.1748312","lon":"80.2588563","speed":"5.50","alt":"1107.05","time":"1494990138","status":"0","distance":0.31},{"lat":"41.1749160","lon":"80.2587879","speed":"5.50","alt":"1107.22","time":"1494990140","status":"0","distance":0.32},{"lat":"41.1750099","lon":"80.2587575","speed":"5.75","alt":"1107.29","time":"1494990142","status":"0","distance":0.33},{"lat":"41.1753024","lon":"80.2585435","speed":"3.94","alt":"1107.53","time":"1494990149","status":"0","distance":0.37}];


//x轴(距离)比例尺
var xScale = d3.scaleLinear()
    .domain([altArr[0].distance, altArr.pop().distance])   //取值范围
    .range([altPadding,altW - altPadding]);

//x轴(海拔)比例尺
var yScale = d3.scaleLinear()
    .domain([altArr[0].alt, altArr.pop().alt])
    .range([altH - altPadding, altPadding]);

var altSvg = d3.select('.zhexian')
    .append('svg')
    .attr('width',600)
    .attr('height',500)

var formatAsPercentage = d3.format("1");//设置刻度的格式,enUs.format的别名。

var xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(5)//自定义刻度的生成和格式化方式。最多刻度数，连上原点
    .tickFormat(formatAsPercentage);  //明确地指定刻度格式。

var yAxis = d3.axisRight()
    .scale(yScale)
    .ticks(5);

altSvg.append('g')
    .attr('class','axis')
    .attr('transform',`translate(0,${ altH - altPadding})`)
    .call(xAxis);
//创建Y轴
altSvg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${altPadding},0)`)
    .call(yAxis);

var area = d3.area()
    .x(function(d) { return xScale(d.distance); }) // <-D
    .y0(yScale(0)) // <-E
    .y1(function(d) { return yScale(d.alt); }); // <-F


altSvg.selectAll("path.area") // <-G
    .data(altArr)
    .enter()
    .append("path")
    .attr("class", "area")
    .attr("d", function(d){return area(d);}); // <-H



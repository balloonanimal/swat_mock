var width = 800;
var height = 400;
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var projection = d3.geo.albers()
    .center([0,0])
    .rotate([75.353,-39.904,-75])
    .scale([3700000])
    .translate([width/2, height/2]);

//     .center([20.65,39.9049])
var path = d3.geo.path()
    .projection(projection);

var stuff = svg.append("g");
var swat = svg.append("g");

d3.json("buildings.json", function(json){
    swat.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#aaa")
        .attr("stroke", "black")
});

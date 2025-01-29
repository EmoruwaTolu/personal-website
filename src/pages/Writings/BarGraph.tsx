import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

type TeamData = {
  year: number;
  team: string;
  rORTG: number;
};

const data: TeamData[] = [
    { year: 2004, team: "DAL", rORTG: 9.2 },
    { year: 2005, team: "PHO", rORTG: 8.4 },
    { year: 2016, team: "GSW", rORTG: 8.1 },
    { year: 2002, team: "DAL", rORTG: 7.7 },
    { year: 2010, team: "PHO", rORTG: 7.7 },
    { year: 1997, team: "CHI", rORTG: 7.7 },
    { year: 1998, team: "UTA", rORTG: 7.6 },
    { year: 2024, team: "BOS", rORTG: 7.5 },
    { year: 2007, team: "PHO", rORTG: 7.5 },
    { year: 1996, team: "CHI", rORTG: 7.5 },
];

const BarGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const container = containerRef.current;

    if (!container) return;

    const width = container.clientWidth;
    const height = 500;
    const margin = { top: 20, right: 30, bottom: 50, left: 50 };

    // Clear existing content
    svg.selectAll("*").remove();

    // Set up scales
    const xScale = d3
        .scaleBand()
        .domain(data.map((d) => `${d.year} ${d.team}`))
        .range([margin.left, width - margin.right])
        .padding(0.2);

    const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.rORTG)!])
        .nice()
        .range([height - margin.bottom, margin.top]);

    // Draw bars
    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", (d) => xScale(`${d.year} ${d.team}`)!)
        .attr("y", (d) => yScale(d.rORTG))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - margin.bottom - yScale(d.rORTG))
        .attr("fill", "#69b3a2");

    // Add X axis
    svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end");

    svg
        .selectAll("text.bar-label")
        .data(data)
        .join("text")
        .attr("class", "bar-label")
        .attr("x", (d) => xScale(`${d.year} ${d.team}`)! + xScale.bandwidth() / 2)
        .attr("y", (d) => yScale(d.rORTG) - 5)
        .attr("text-anchor", "middle")
        .text((d) => d.rORTG.toFixed(1))
        .attr("fill", "black")
        .style("font-size", "12px");

    // Add Y axis
    svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale));

    // Add labels
    svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")


    svg
        .append("text")
        .attr("x", -(height / 2))
        .attr("y", 15)
        .attr("transform", "rotate(-90)")
        .attr("text-anchor", "middle")
        .text("rORTG");

    svg
        .attr("width", width)
        .attr("height", height);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarGraph;

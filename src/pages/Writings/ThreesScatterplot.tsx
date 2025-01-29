import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './offences.css';

interface ThreesScatterplotProps {
}

const ThreesScatterplot: React.FC<ThreesScatterplotProps> = () => {

    const threePointAttempts = [49.1, 42.5, 42.6, 37.1, 36.4, 34.5, 34.5, 30.4, 33.4, 26.1, 24.6].reverse();
    const seasons = [
        "2024-25", "2023-24", "2022-23", "2021-22", "2020-21", "2019-20",
        "2018-19", "2017-18", "2016-17", "2015-16", "2014-15"
    ].reverse();

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const validData = threePointAttempts
            .map((value, index) => ({ x: index, y: value, season: seasons[index] }))
            .filter(d => !isNaN(d.y));

        // Function to render the chart
        const renderChart = () => {
            const container = containerRef.current;

            if (!container) return;

            // Get container dimensions
            const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
            const margin = { top: 20, right: 30, bottom: 50, left: 50 };
            const width = containerWidth - margin.left - margin.right;
            const height = containerHeight - margin.top - margin.bottom;

            // Clear any existing SVG
            d3.select(container).select('svg').remove();

            // Create SVG container
            const svg = d3
                .select(container)
                .append('svg')
                .attr('width', containerWidth)
                .attr('height', containerHeight);

            // Create scales
            const xScale = d3
                .scaleLinear()
                .domain([0, validData.length - 1])
                .range([margin.left, width + margin.left]);

            const yScale = d3
                .scaleLinear()
                .domain([0, d3.max(validData, d => d.y) || 0])
                .range([height + margin.top, margin.top]);

            // Add axes
            svg.append('g')
                .attr('transform', `translate(0,${height + margin.top})`)
                .call(
                    d3.axisBottom(xScale).ticks(validData.length).tickFormat((d: any) => seasons[d])
                )
                .selectAll("text")
                .attr("transform", "rotate(-45)")
                .style("text-anchor", "end");

            svg.append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(yScale));

            // Line generator
            const line = d3
                .line<{ x: number; y: number }>()
                .x(d => xScale(d.x))
                .y(d => yScale(d.y));

            // Add the line
            svg.append('path')
                .datum(validData)
                .attr('fill', 'none')
                .attr('stroke', 'blue')
                .attr('stroke-width', 2)
                .attr('d', line);

            // Add scatterplot points
            svg.selectAll('circle')
                .data(validData)
                .join('circle')
                .attr('cx', d => xScale(d.x))
                .attr('cy', d => yScale(d.y))
                .attr('r', 5)
                .attr('fill', 'red');

            // Add labels to points
            svg.selectAll('text.label')
                .data(validData)
                .join('text')
                .attr('class', 'label')
                .attr('x', d => xScale(d.x))
                .attr('y', d => yScale(d.y) - 10)
                .attr('text-anchor', 'middle')
                .attr('font-size', '10px')
                .text(d => d.y.toFixed(1));

            // Add chart title
            svg.append('text')
                .attr('x', containerWidth / 2)
                .attr('y', margin.top)
                .attr('text-anchor', 'middle')
                .attr('font-size', '16px')
                .text('Three-Point Attempts by Season');
        };

        // Initial render
        renderChart();

        // Add resize listener
        window.addEventListener('resize', renderChart);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', renderChart);
            d3.select(containerRef.current).select('svg').remove();
        };
    }, [threePointAttempts, seasons]);

    return(
        <div className='scatterplot-threes' ref={containerRef} style={{ width: '100%', height: '100%' }} >
            
        </div>
    )
};

export default ThreesScatterplot;
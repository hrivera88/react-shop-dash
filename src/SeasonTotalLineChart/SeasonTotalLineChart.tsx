import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import type { SeasonTotalLineChartData } from '../types';

const lineChartTheme = {
	axis: {
		domain: {
			line: {
				stroke: '#64748b',
			},
		},
		ticks: {
			text: {
				fill: '#64748b',
			},
			line: {
				stroke: '#475569',
			},
		},
		legend: {
			text: {
				fill: '#64748b',
				fontSize: 14,
			},
		},
	},
	grid: {
		line: {
			stroke: '#cbd5e1',
		},
	},
	legends: {
		text: {
			fontSize: 14,
		},
	},
};

const SeasonTotalLineChart: React.FC<SeasonTotalLineChartData> = ({ data }) => {
	return (
		<ResponsiveLine
			data={data}
			theme={lineChartTheme}
			margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
			xScale={{ type: 'point' }}
			yScale={{
				type: 'linear',
				stacked: true,
				min: 'auto',
				max: 'auto',
				reverse: false,
			}}
			yFormat=" >-.2f"
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Season',
				legendOffset: 36,
				legendPosition: 'middle',
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Total Purchase Amount (USD)',
				legendOffset: -40,
				legendPosition: 'middle',
			}}
			pointSize={4}
			pointColor={{ theme: 'background' }}
			pointBorderWidth={2}
			pointBorderColor={{ from: 'serieColor' }}
			pointLabelYOffset={-12}
			useMesh={true}
			legends={[
				{
					anchor: 'bottom-right',
					direction: 'column',
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: 'left-to-right',
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: 'circle',
					symbolBorderColor: 'rgba(0, 0, 0, .5)',
					effects: [
						{
							on: 'hover',
							style: {
								itemBackground: 'rgba(0, 0, 0, .03)',
								itemOpacity: 1,
							},
						},
					],
				},
			]}
		/>
	);
};

export default SeasonTotalLineChart;

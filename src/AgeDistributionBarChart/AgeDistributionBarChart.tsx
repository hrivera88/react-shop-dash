import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import type { AgeDistributionBarChartData } from '../types';

const barChartTheme = {
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

const AgeDistributionBarChart: React.FC<AgeDistributionBarChartData> = ({
	data,
}) => {
	return (
		<>
			<ResponsiveBar
				data={data}
				theme={barChartTheme}
				keys={['count']}
				indexBy="age"
				valueScale={{ type: 'linear' }}
				indexScale={{ type: 'band', round: true }}
				colors={{ scheme: 'nivo' }}
				colorBy="indexValue"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Age',
					legendPosition: 'middle',
					legendOffset: 32,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Count',
					legendPosition: 'middle',
					legendOffset: -40,
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
				legends={[
					{
						dataFrom: 'keys',
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 120,
						translateY: 0,
						itemsSpacing: 2,
						itemWidth: 100,
						itemHeight: 20,
						itemTextColor: '#64748b',
						itemDirection: 'left-to-right',
						itemOpacity: 0.85,
						symbolSize: 10,
						effects: [
							{
								on: 'hover',
								style: {
									itemOpacity: 1,
								},
							},
						],
					},
				]}
				animate={true}
				motionConfig="stiff"
			/>
		</>
	);
};

export default AgeDistributionBarChart;

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import type { PurchaseByGenderBarChartData } from '../types';

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

const PurchaseByGenderBarChart: React.FC<PurchaseByGenderBarChartData> = ({
	data,
}) => {
	return (
		<>
			<ResponsiveBar
				data={data}
				theme={barChartTheme}
				keys={['total']}
				indexBy="gender"
				colorBy="indexValue"
				margin={{ top: 50, right: 50, bottom: 50, left: 75 }}
				padding={0.3}
				valueScale={{ type: 'linear' }}
				indexScale={{ type: 'band', round: true }}
				colors={{ scheme: 'nivo' }}
				borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Gender',
					legendPosition: 'middle',
					legendOffset: 32,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Total Purchase Amount (USD)',
					legendPosition: 'middle',
					legendOffset: -55,
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
				animate={true}
				motionConfig="stiff"
			/>
		</>
	);
};

export default PurchaseByGenderBarChart;

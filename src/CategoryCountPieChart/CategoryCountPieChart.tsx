import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import type { CategoryCountBarChartData } from '../types';

const pieChartTheme = {
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
			fontSize: 12,
		},
	},
};

const CategoryCountPieChart: React.FC<CategoryCountBarChartData> = ({
	data,
}) => {
	return (
		<>
			<ResponsivePie
				theme={pieChartTheme}
				data={data}
				margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.5}
				padAngle={0.7}
				cornerRadius={3}
				activeOuterRadiusOffset={8}
				colors={{ scheme: 'nivo' }}
				borderWidth={1}
				borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor="#64748b"
				arcLinkLabelsThickness={2}
				arcLinkLabelsColor={{ from: 'color' }}
				arcLabelsSkipAngle={10}
				arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
			/>
		</>
	);
};

export default CategoryCountPieChart;

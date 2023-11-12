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
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
				legends={[
					{
						anchor: 'bottom',
						direction: 'row',
						justify: false,
						translateX: 0,
						translateY: 56,
						itemsSpacing: 0,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: '#64748b',
						itemDirection: 'left-to-right',
						itemOpacity: 1,
						symbolSize: 18,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: '#f47560',
								},
							},
						],
					},
				]}
			/>
		</>
	);
};

export default CategoryCountPieChart;

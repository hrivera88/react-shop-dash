import React from 'react';
import type { ShippingTypePreferencePieData } from '../types';
import { ResponsivePie } from '@nivo/pie';

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

const ShippingPreferencePieChart: React.FC<ShippingTypePreferencePieData> = ({
	data,
}) => {
	return (
		<ResponsivePie
			data={data}
			theme={pieChartTheme}
			margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsSkipAngle={10}
			arcLabelsTextColor={{
				from: 'color',
				modifiers: [['darker', 2]],
			}}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: 'ruby',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'c',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'go',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'python',
					},
					id: 'dots',
				},
				{
					match: {
						id: 'scala',
					},
					id: 'lines',
				},
				{
					match: {
						id: 'lisp',
					},
					id: 'lines',
				},
				{
					match: {
						id: 'elixir',
					},
					id: 'lines',
				},
				{
					match: {
						id: 'javascript',
					},
					id: 'lines',
				},
			]}
		/>
	);
};

export default ShippingPreferencePieChart;

import React from 'react';
import type { PurchaseAmountByStateChartData } from '../types';
import { ResponsiveChoropleth } from '@nivo/geo';

const choroplethChartTheme = {
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

const PurchaseAmountByStateChart: React.FC<PurchaseAmountByStateChartData> = ({
	data,
	geoJSON,
}) => {
	return (
		<ResponsiveChoropleth
			data={data}
			theme={choroplethChartTheme}
			features={geoJSON.features}
			margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
			colors="nivo"
			domain={[0, 1000]}
			unknownColor="#666666"
			label="properties.NAME"
			valueFormat=".2s"
			projectionScale={200}
			projectionTranslation={[1, 1]}
			projectionRotation={[0, 0, 0]}
			enableGraticule={false}
			graticuleLineColor="#dddddd"
			borderWidth={0.5}
			borderColor="#152538"
			legends={[
				{
					anchor: 'bottom-left',
					direction: 'column',
					justify: true,
					translateX: 20,
					translateY: -100,
					itemsSpacing: 0,
					itemWidth: 94,
					itemHeight: 18,
					itemDirection: 'left-to-right',
					itemTextColor: '#444444',
					itemOpacity: 0.85,
					symbolSize: 18,
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000000',
								itemOpacity: 1,
							},
						},
					],
				},
			]}
		/>
	);
};

export default PurchaseAmountByStateChart;

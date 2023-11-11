import React from 'react';
import jsonData from './shopping_trends.json';
import type { ShoppingTrend } from './types';
import AgeDistributionBarChart from './AgeDistributionBarChart/AgeDistributionBarChart';

const ageDistribution = jsonData.reduce(
	(acc: Record<string, number>, current: ShoppingTrend) => {
		const age = current.Age;
		acc[age] = acc[age] !== undefined ? acc[age] + 1 : 1;
		return acc;
	},
	{}
);

// Convert the age distrubution to a format suitable for the chart
const chartData = Object.entries(ageDistribution).map(([age, count]) => ({
	age,
	count,
}));

const App: React.FC = () => {
	return (
		<>
			<div className="w-screen box-border h-screen">
				<div className="w-full rounded drop-shadow p-2">
					<div className="p-2 w-full rounded bg-white drop-shadow">
						<h2 className="font-bold text-slate-600">Our Customers By Age</h2>
						<div className="w-full text-slate-600 h-72">
							<AgeDistributionBarChart data={chartData} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;

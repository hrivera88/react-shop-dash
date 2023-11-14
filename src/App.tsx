import React from 'react';
import jsonData from './shopping_trends.json';
import stateData from './state.json';
import type {
	ShoppingTrend,
	GenderTotal,
	CategoryAccumulator,
	CategorySeasonTotals,
	SeasonAmounts,
	PurchaseAmountByState,
	ShippingTypeAccumulator,
} from './types';
import AgeDistributionBarChart from './AgeDistributionBarChart/AgeDistributionBarChart';
import PurchaseByGenderBarChart from './PurchaseByGenderBarChart/PurchaseByGenderBarChart';
import CategoryCountPieChart from './CategoryCountPieChart/CategoryCountPieChart';
import SeasonTotalLineChart from './SeasonTotalLineChart/SeasonTotalLineChart';
import PurchaseAmountByStateChart from './PurchaseAmountByStateChart/PurchaseAmountByStateChart';
import ReviewRatingPurchaseImpactChart from './ReviewRatingPurchaseImpactChart/ReviewRatingPurchaseImpactChart';
import ShippingPreferencePieChart from './ShippingPreferencePieChart/ShippingPreferencePieChart';

// Count the number of customers in each Age group
const ageDistribution = jsonData.reduce(
	(acc: Record<string, number>, current: ShoppingTrend) => {
		const age = current.Age;
		acc[age] = acc[age] !== undefined ? acc[age] + 1 : 1;
		return acc;
	},
	{}
);
// Convert the age distrubution to a format suitable for the chart
const ageDistributionChartData = Object.entries(ageDistribution).map(
	([age, count]) => ({
		age,
		count,
	})
);

// Calculate the total purchase amount for each gender
const aggregateByGender = jsonData.reduce(
	(acc: GenderTotal, current: ShoppingTrend) => {
		const gender = current.Gender;
		const purchaseAmount =
			current['Purchase Amount (USD)'] !== ''
				? parseFloat(current['Purchase Amount (USD)'])
				: 0;
		if (acc[gender] === undefined) {
			acc[gender] = { gender, total: 0 };
		}
		acc[gender].total += purchaseAmount;
		return acc;
	},
	{}
);
// Convert the gender comparison data to a format suitable for the chart
const purchaseByGenderData = Object.values(aggregateByGender);

// Count the occurences of each category
const categoryCounts = jsonData.reduce(
	(acc: CategoryAccumulator, { Category }) => {
		acc[Category] = (typeof acc[Category] === 'number' ? acc[Category] : 0) + 1;
		return acc;
	},
	{}
);
const categoryCountPieChartData = Object.entries(categoryCounts).map(
	([id, value]) => ({
		id,
		label: id,
		value,
	})
);

// Create a Set for Categories in Shopping Trends
const seasonTotalCategories = new Set(jsonData.map((item) => item.Category));
// Create a Set for Seasons in Shopping Trends
const seasonTotalSeasons = new Set(jsonData.map((item) => item.Season));
// Create an Category objects with purchase amounts for each Season
const seasonTotalByCategoryandSeason = Array.from(seasonTotalCategories).reduce(
	(acc: CategorySeasonTotals, category) => {
		acc[category] = Array.from(seasonTotalSeasons).reduce(
			(seasonAcc: SeasonAmounts, season) => {
				seasonAcc[season] = 0;
				return seasonAcc;
			},
			{}
		);
		return acc;
	},
	{}
);
jsonData.forEach((item) => {
	const category = item.Category;
	const season = item.Season;
	const parsedAmount = parseFloat(item['Purchase Amount (USD)']);
	const purchaseAmount = isNaN(parsedAmount) ? 0 : parsedAmount;
	seasonTotalByCategoryandSeason[category][season] = purchaseAmount;
});
// Convert data to an Array that fits the Nivo Line Chart schema
const seasonTotalLineChartData = Object.keys(
	seasonTotalByCategoryandSeason
).map((category) => ({
	id: category,
	data: Object.keys(seasonTotalByCategoryandSeason[category]).map((season) => ({
		x: season,
		y: seasonTotalByCategoryandSeason[category][season],
	})),
}));

// Aggregate Data for Purchase Amount By State Chloropleth Chart
const purchaseAmountsByState = jsonData.reduce(
	(acc: PurchaseAmountByState, item) => {
		const state = item.Location;
		const parsedAmount = parseFloat(item['Purchase Amount (USD)']);
		const purchaseAmount = isNaN(parsedAmount) ? 0 : parsedAmount;
		acc[state] =
			(typeof acc[state] === 'number' ? acc[state] : 0) + purchaseAmount;
		return acc;
	},
	{}
);
const purchaseAmountByStateData = Object.keys(purchaseAmountsByState).map(
	(state) => ({
		id: state,
		value: purchaseAmountsByState[state],
	})
);

// Transform Data for Review Raings Impact Scatter Plot
const reviewRatingScatterData = jsonData.map((customer) => ({
	x: parseFloat(customer['Review Rating']),
	y: parseInt(customer['Purchase Amount (USD)'], 10),
	id: customer['Customer ID'],
}));

// Aggregate Data for Shipping Pie Chart
const shippingPreferencePieData = jsonData.reduce(
	(acc: ShippingTypeAccumulator, value) => {
		const shippingType = value['Shipping Type'];
		if (acc[shippingType] === undefined) {
			acc[shippingType] = { id: shippingType, label: shippingType, value: 1 };
		} else {
			acc[shippingType].value += 1;
		}
		return acc;
	},
	{}
);
const formattedShippingPieData = Object.values(shippingPreferencePieData);

const App: React.FC = () => {
	return (
		<>
			<div className="w-screen box-border h-screen">
				<div className="w-full px-4 py-2">
					<div className="p-2 w-full rounded bg-white drop-shadow">
						<h2 className="font-bold text-slate-600">Our Customers By Age</h2>
						<div className="w-full text-slate-600 h-72">
							<AgeDistributionBarChart data={ageDistributionChartData} />
						</div>
					</div>
				</div>
				<div className="flex w-full px-4 gap-2 py-2 flex-row">
					<div className="w-1/3 rounded drop-shadow">
						<div className="p-2 w-full rounded bg-white drop-shadow">
							<h2 className="font-bold text-slate-600">
								Purchase Amount (USD) Total By Gender
							</h2>
							<div className="w-full text-slate-600 h-80">
								<PurchaseByGenderBarChart data={purchaseByGenderData} />
							</div>
						</div>
					</div>
					<div className="w-1/3 rounded drop-shadow">
						<div className="p-2 w-full rounded bg-white drop-shadow">
							<h2 className="font-bold text-slate-600">
								Popularity of Inventory Categories
							</h2>
							<div className="w-full text-slate-600 h-80">
								<CategoryCountPieChart data={categoryCountPieChartData} />
							</div>
						</div>
					</div>
					<div className="w-1/3 rounded drop-shadow">
						<div className="p-2 w-full rounded bg-white drop-shadow">
							<h2 className="font-bold text-slate-600">
								Shipping Type Preferences
							</h2>
							<div className="w-full text-slate-600 h-80">
								<ShippingPreferencePieChart data={formattedShippingPieData} />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full px-4 py-2">
					<div className="rounded bg-white drop-shadow p-2">
						<h2 className="font-bold text-slate-600">
							Category Purchase Amounts (USD) By Season
						</h2>
						<div className="w-full text-slate-600 h-96">
							<SeasonTotalLineChart data={seasonTotalLineChartData} />
						</div>
					</div>
				</div>
				<div className="flex flex-row w-full px-4 py-2 gap-2">
					<div className="w-1/2">
						<div className="rounded bg-white drop-shadow p-2">
							<h2 className="font-bold text-slate-600">
								Purchase Amounts (USD) By State
							</h2>
							<div className="w-full text-slate-600 h-96">
								<PurchaseAmountByStateChart
									data={purchaseAmountByStateData}
									geoJSON={stateData}
								/>
							</div>
						</div>
					</div>
					<div className="w-1/2">
						<div className="rounded bg-white drop-shadow p-2">
							<h2 className="font-bold text-slate-600">
								Review Ratings Impact On Purchases
							</h2>
							<div className="w-full text-slate-600 h-96">
								<ReviewRatingPurchaseImpactChart
									id="Purchases"
									data={reviewRatingScatterData}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;

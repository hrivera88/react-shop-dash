export interface ShoppingTrend {
	'Customer ID': string;
	Age: string;
	Gender: string;
	'Item Purchased': string;
	Category: string;
	'Purchase Amount (USD)': string;
	Location: string;
	Size: string;
	Color: string;
	Season: string;
	'Review Rating': string;
	'Subscription Status': string;
	'Payment Method': string;
	'Shipping Type': string;
	'Discount Applied': string;
	'Promo Code Used': string;
	'Previous Purchases': string;
	'Preferred Payment Method': string;
	'Frequency of Purchases': string;
}

export interface AgeDistributionBarChartData {
	data: Array<{
		age: string;
		count: number;
	}>;
}

export type GenderTotal = Record<string, { gender: string; total: number }>;
export interface PurchaseByGenderBarChartData {
	data: Array<{
		gender: string;
		total: number;
	}>;
}

export type CategoryAccumulator = Record<string, number>;
export interface CategoryCountBarChartData {
	data: Array<{
		id: string;
		label: string;
		value: number;
	}>;
}

export type SeasonAmounts = Record<string, number>;
export type CategorySeasonTotals = Record<string, SeasonAmounts>;
export interface SeasonTotalLineChartData {
	data: Array<{
		id: string;
		data: Array<{
			x: string;
			y: number;
		}>;
	}>;
}

export type PurchaseAmountByState = Record<string, number>;
interface ChloroplethData {
	id: string;
	value: number;
}
type coordArray = number | number[] | coordArray[];
interface GeoJSONData {
	type: string;
	features: Array<{
		type: string;
		properties: {
			GEO_ID: string;
			STATE: string;
			NAME: string;
			LSAD: string;
			CENSUSAREA: number;
		};
		geometry: {
			type: string;
			coordinates: coordArray;
		};
	}>;
}
export interface PurchaseAmountByStateChartData {
	data: ChloroplethData[];
	geoJSON: GeoJSONData;
}

export interface ReviewRatingPurchaseImpactChartData {
	id: string;
	data: Array<{
		id: string;
		x: number;
		y: number;
	}>;
}

export type ShippingTypeAccumulator = Record<
	string,
	{ id: string; label: string; value: number }
>;
export interface ShippingTypePreferencePieData {
	data: Array<{
		id: string;
		label: string;
		value: number;
	}>;
}

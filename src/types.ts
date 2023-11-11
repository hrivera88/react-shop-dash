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

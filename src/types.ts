export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type Sale = {
  id: number;
  date: string;
  volume: number;
  total: number;
  gender: Gender;
  categoryName: string;
  paymentMethod: string;
  storeName: string;
};

export type SalesByDateType = {
  date: string;
  sum: number;
};

export type SalesByPaymentMethod = {
  description: string;
  sum: number;
};

export type SalesByStore = {
  storeName: string;
  sum: number;
};

export type SalesResponse = {
  content: Sale[];
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

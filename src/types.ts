export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByDateType = {
  date: string;
  sum: number;
};

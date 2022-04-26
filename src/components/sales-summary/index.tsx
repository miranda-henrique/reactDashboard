import './styles.css';
import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/red-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/yellow-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/blue-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/green-icon.svg';
import { FilterData, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  avg: 0,
  count: 0,
  max: 0,
  min: 0,
};

function SalesSummary({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params: params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params]);

  return (
    <div className="sales-summary-container">
      <SalesSummaryCard
        value={Number(summary?.avg?.toFixed(2))}
        label="Média"
        icon={<DoneIcon />}
      />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;

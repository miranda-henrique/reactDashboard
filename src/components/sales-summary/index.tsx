import './styles.css';
import SalesSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/red-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/yellow-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/blue-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/green-icon.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={630} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={120} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={230} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;

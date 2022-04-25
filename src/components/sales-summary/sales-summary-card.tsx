import './styles.css';

type Props = {
  icon: React.ReactNode;
  value: number;
  label: string;
};

function SalesSummaryCard({ value, label, icon }: Props) {
  return (
    <div className="sales-summary-card base-card">
      {icon}
      <h3 className="sales-summary-card-value">{value}</h3>
      <h3 className="sales-summary-card-label">{label}</h3>
    </div>
  );
}

export default SalesSummaryCard;

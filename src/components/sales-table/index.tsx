import { useEffect, useMemo, useState } from 'react';
import { FilterData, Sale, SalesResponse } from '../../types';
import { formatDate, formatGender, formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

const extraParams = {
  page: 0,
  size: 12,
  sort: 'date,desc',
};

function SalesTable({ filterData }: Props) {
  const params = useMemo(() => buildFilterParams(filterData, extraParams), [filterData]);
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    makeRequest
      .get<SalesResponse>('/sales', { params: params })
      .then((response) => {
        setSales(response.data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params]);

  return (
    <div className="sales-table-container base-card">
      <h3 className="sales-table-title">Vendas recentes</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de Pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>#{sale.id}</td>
              <td>{formatDate(sale.date)}</td>
              <td>{formatGender(sale.gender)}</td>
              <td>{sale.categoryName}</td>
              <td>{sale.storeName}</td>
              <td>{sale.paymentMethod}</td>
              <td>{formatPrice(sale.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;

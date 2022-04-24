import './styles.css';
import 'flatpickr/dist/themes/material_blue.css';

import FlatPicker from 'react-flatpickr';
import flatpickrlib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

flatpickrlib.localize(Portuguese);

function Filter() {
  const onChangingDate = (dates: Date[]) => {
    console.log({ dates });
  };

  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          showMonths: 2,
        }}
        className="filter-input"
        onChange={onChangingDate}
        placeholder="Selecione um período"
      />
      <select className="filter-input">
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;

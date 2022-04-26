import './styles.css';
import 'flatpickr/dist/themes/material_blue.css';

import FlatPicker from 'react-flatpickr';
import flatpickrlib from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import React, { useState } from 'react';
import { FilterData, Gender } from '../../types';

flatpickrlib.localize(Portuguese);

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [dates, setDate] = useState<Date[]>([]);
  const [gender, setGender] = useState<Gender>();

  const onChangingDate = (dates: Date[]) => {
    if (dates.length === 2) {
      setDate(dates);
      onFilterChange({ dates: dates, gender: gender });
    }
  };

  const onChangingGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value as Gender;
    setGender(selectedGender);
    onFilterChange({ dates: dates, gender: selectedGender });
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
      <select className="filter-input" value={gender} onChange={onChangingGender}>
        <option value="">Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;

import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { useRef, useState } from 'react';
import { formatOpts, sortByOpts } from './formatOptions';
import { formatStyles } from './select-format-styles';
import { orderStyles } from './select-order-styles';
import { ReactComponent as Picker } from './indicator.svg';
import { ReactComponent as Search } from '../../images/search.svg';
import 'react-datepicker/dist/react-datepicker.css';
import css from './SearchForm.module.css';
import './datePicker.css';

const SearchForm = () => {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const pickerRef = useRef();

  const openDatepicker = () => {
    setIsCalendarOpen(true);
    pickerRef.current.setOpen(true);
  };

  return (
    <form className={css.form}>
      <label>
        <span className={css.lableText}>Title Starts With</span>
        <input className={css.search} type="search" name="query" placeholder="Enter text" />
        <Search className={css.icon} />
      </label>
      <label>
        <span className={css.lableText}>Format</span>
        <Select defaultValue={formatOpts[0]} onChange={setSelectedFormat} options={formatOpts} styles={formatStyles} />
      </label>
      <label>
        <span className={css.lableText}>Order by</span>
        <Select defaultValue={sortByOpts[0]} onChange={setSelectedOrder} options={sortByOpts} styles={orderStyles} />
      </label>
      <label>
        <span className={css.lableText}>Start Year</span>
        <DatePicker
          className={css.dateInput}
          wrapperClassName="datepicker"
          selected={startDate}
          dateFormat="dd/MM/yyyy"
          shouldCloseOnSelect={true}
          onChange={date => setStartDate(date)}
          onBlur={e => setIsCalendarOpen(false)}
          ref={pickerRef}
          dropdownMode="select"
        />
        <Picker className={`${css.picker} ${isCalendarOpen && css.active}`} onClick={openDatepicker} />
      </label>
    </form>
  );
};

export default SearchForm;

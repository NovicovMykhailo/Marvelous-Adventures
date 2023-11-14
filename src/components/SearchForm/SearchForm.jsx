import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { formatOpts, sortByOpts } from './formatOptions';
import toastId from 'elements/Toasts/toastId';

import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getObjFromParams, resetDate, filteredQuery } from 'helpers';

import { ReactComponent as Picker } from './indicator.svg';
import { ReactComponent as Search } from '../../images/search.svg';
import Loader from 'elements/Loader/Loader';

import { formatStyles } from './select-format-styles';
import { orderStyles } from './select-order-styles';
import css from './SearchForm.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import InfoToast from '../../elements/Toasts/InfoToast';

const SearchForm = ({ isSet, disabled }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const values = getObjFromParams(searchParams);
  const { state } = useLocation();

  const [searchQue, setSearchQue] = useState('');

  const [selectedFormat, setSelectedFormat] = useState(
    values.format
      ? formatOpts[formatOpts.indexOf(formatOpts.find(({ value }) => value === values.format))]
      : formatOpts[0]
  );
  const [selectedOrder, setSelectedOrder] = useState(
    values.orderBy
      ? sortByOpts[sortByOpts.indexOf(sortByOpts.find(({ value }) => value === values.orderBy))]
      : sortByOpts[0]
  );
  const [startDate, setStartDate] = useState(values.startYear ? new Date(values.startYear) : null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const pickerRef = useRef();

  useEffect(() => {
    setSearchQue(values.title ? values.title : state?.name ? state.name : '');
  }, [state?.name, values?.title]);

  const renderYearContent = year => {
    const tooltipText = `Tooltip for year: ${year}`;
    return <span title={tooltipText}>{year}</span>;
  };
  useEffect(()=>{
    function submitByEnterKey(e){
    if(e.target.name ==="searchForm"){
      if(e.code === 'Enter' || e.code === 'NumpadEnter'  ){
        onSubmit()
      }}
    }
    window.addEventListener('keydown', submitByEnterKey)
    return ()=> window.removeEventListener('keydown', submitByEnterKey)
  })

  const onSubmit = () => {
    if (searchQue !== '') {
      const paramsObj = {
        orderBy: `${selectedOrder?.value}` || null,
        startYear: `${resetDate(startDate)}`,
        format: `${selectedFormat?.value}` || null,
        title: `${searchQue}` || null,
      };
      setSearchParams(filteredQuery(paramsObj));
      isSet(prev => (prev += 1));
    } else {
      toast(<InfoToast />, { toastId: toastId.info });
    }
  };

  return (
    <form className={css.form}>
      <label>
        <span className={css.lableText}>Title Starts With</span>
        <input
          className={css.search}
          type="search"
          placeholder="Enter text"
          name='searchForm'
          value={searchQue}
          required={true}
          disabled={disabled}
          onChange={e => setSearchQue(e.target.value)}
        />
        {disabled ? <Loader /> : <Search className={css.icon} onClick={onSubmit} />}
      </label>
      <label>
        <span className={css.lableText}>Format</span>
        <Select defaultValue={selectedFormat} onChange={setSelectedFormat} options={formatOpts} styles={formatStyles} />
      </label>
      <label>
        <span className={css.lableText}>Order by</span>
        <Select defaultValue={selectedOrder} onChange={setSelectedOrder} options={sortByOpts} styles={orderStyles} />
      </label>
      <span className={css.datePicker}>
        <span className={css.lableText}>Start Year</span>
        <DatePicker
          className={css.dateInput}
          wrapperClassName="datepicker"
          selected={startDate}
          maxDate={new Date()}
          renderYearContent={renderYearContent}
          showYearPicker
          dateFormat="yyyy"
          onChange={date => setStartDate(date)}
          onCalendarOpen={() => setIsCalendarOpen(true)}
          onCalendarClose={() => setIsCalendarOpen(false)}
          ref={pickerRef}
          isClearable
          placeholderText="Any date"
          dropdownMode="select"
        />
        <Picker
          className={`${css.picker} ${isCalendarOpen && css.active}`}
          onClick={() => pickerRef.current.setOpen(true)}
        />
      </span>
    </form>
  );
};

export default SearchForm;

import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { formatOpts, sortByOpts } from './formatOptions';
import toastId from 'elements/Toasts/toastId';

import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { getObjFromParams, resetDate, filteredQuery, isEnglish, isSpiderName } from 'helpers';

import { ReactComponent as Picker } from './indicator.svg';
import { ReactComponent as Search } from '../../images/search.svg';

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
  useEffect(() => {
    function submitByEnterKey(e) {
      if (e.target.name === 'searchForm') {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
          onSubmit();
        }
      }
    }
    window.addEventListener('keydown', submitByEnterKey);
    return () => window.removeEventListener('keydown', submitByEnterKey);
  });

  const onSubmit = () => {
    if (searchQue !== '') {
      const paramsObj = {
        orderBy: `${selectedOrder?.value}` || null,
        startYear: `${resetDate(startDate)}`,
        format: `${selectedFormat?.value}` || null,
        title: `${isSpiderName(searchQue)}` || null,
      };
      setSearchParams(filteredQuery(paramsObj));
      isSet(prev => (prev += 1));
    } else {
      toast(<InfoToast />, { toastId: toastId.info });
    }
  };

  function removeAtribute() {
    const select1 = document.querySelector('#select1 input');
    const select2 = document.querySelector('#select2 input')
    select1.removeAttribute('autocorrect');
    select2.removeAttribute('autocorrect');

  }
  setTimeout(() => {
    removeAtribute();
  }, 1500);

  return (
    <form className={css.form}>
      <div className={css.label}>
        <p className={css.lableText}>Title Starts With</p>
        <input
          className={css.search}
          type="search"
          placeholder="Enter text"
          name="searchForm"
          value={searchQue}
          required={true}
          disabled={disabled}
          title={searchQue}
          onChange={e => setSearchQue(isEnglish(e.target.value))}
        />
        {<Search className={css.icon} onClick={onSubmit} />}
      </div>
      <div className={css.label}>
        <p className={css.lableText}>Format</p>
        <Select
          defaultValue={selectedFormat}
          onChange={setSelectedFormat}
          options={formatOpts}
          styles={formatStyles}
          id="select1"
        />
      </div>
      <div className={css.label}>
        <p className={css.lableText}>Order by</p>
        <Select
          defaultValue={selectedOrder}
          onChange={setSelectedOrder}
          options={sortByOpts}
          styles={orderStyles}
          id="select2"
        />
      </div>
      <div className={css.datePicker}>
        <p className={css.lableText}>Start Year</p>
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
      </div>
    </form>
  );
};

export default SearchForm;

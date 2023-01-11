import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';
import { Input } from './Filter.styled';
import { useEffect } from 'react';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  useEffect(() => {
    return () => {
      dispatch(setFilter(''));
    };
  }, [dispatch]);

  function onChange(e) {
    const query = e.currentTarget.value;
    dispatch(setFilter(query));
  }
  return (
    <Input
      value={filter}
      name="filter"
      onChange={onChange}
      type="text"
      placeholder="Type to search"
    />
  );
}

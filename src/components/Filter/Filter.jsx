import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
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

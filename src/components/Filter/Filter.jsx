import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Box } from 'components/reusableComponents';
import { Title } from 'components/reusableComponents';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  function onChange(e) {
    const query = e.currentTarget.value;
    dispatch(setFilter(query));
  }
  return (
    <Box>
      <Title>Type to search</Title>
      <input value={filter} name="filter" onChange={onChange} type="text" />
    </Box>
  );
}

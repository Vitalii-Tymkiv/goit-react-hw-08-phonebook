import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContacts } from 'redux/contacts/filterSlice';
import { Label, LabelName, Input } from './Filter.styled';
import { GoSearch } from 'react-icons/go';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleInput = event => {
    dispatch(filterContacts(event.target.value));
  };
  const filterId = nanoid();
  return (
    <Label>
      <LabelName>
        <GoSearch style={{ verticalAlign: 'middle', marginRight: '5px' }} />
        Find contacts by name
      </LabelName>
      <Input
        id={filterId}
        type="text"
        name="name"
        value={filter}
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInput}
      ></Input>
    </Label>
  );
};

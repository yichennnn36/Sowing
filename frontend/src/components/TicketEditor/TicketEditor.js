import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker, Radio, Input, Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { categoryColors, availableLocations, timeFormator } from '../../utils';
import PropTypes from 'prop-types';
import error from '../../constants/error';
import {
  selectTickets,
  postTicketAsync,
  setPostTicketError,
  editTicketAsync,
} from '../../redux/reducers/ticketReducer';
import {
  TicketEditorWrapper,
  Editor,
  InputBlock,
  InputRadioBlock,
  Label,
  ButtonClose,
  StyleButton,
  ButtonSaveBlock,
  CategoryRadio,
  Alert
} from './TicketEditorStyle';

const TicketEditor = ({
  isAddTicket,
  setIsAddTicket,
  ticketStatus
}) => {
  const [inputValue, setInputValue] = useState({
    title: '',
    location: '',
    start_date: '',
    end_date: '',
    category: 1,
    status: ticketStatus
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const ticketsData = useSelector(selectTickets);
  const ticket = useRef({});

  const handleClose = () => {
    setIsAddTicket(() => ({
      id: null,
      open: false
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue(inputValue => ({
      ...inputValue,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setInputValue(inputValue => ({
      ...inputValue,
      location: value,
    }));
  };

  const handleDateChange = (value, dateString) => {
    const [start_date, end_date] = dateString;
    setInputValue(inputValue => ({
      ...inputValue,
      start_date,
      end_date
    }));
  };

  const handleSave = () => {
    setErrorMessage(null);
    dispatch(setPostTicketError(null));

    const { title, location, start_date, end_date } = inputValue;
    if (!title || !location || !start_date || !end_date) {
      return setErrorMessage(error.EMPTY_FILEDS.required);
    }
    isAddTicket.id ?
      dispatch(editTicketAsync(inputValue)) :
      dispatch(postTicketAsync(inputValue));
    setIsAddTicket(false);
  };

  if (isAddTicket.id) {
    [ticket.current] = ticketsData.filter(item => item.ticket_id === isAddTicket.id);
  }

  useEffect(() => {
    setInputValue((inputValue) => ({
      ...inputValue,
      ...ticket.current
    }));
  }, [isAddTicket.id]);

  const {
    title,
    location,
    content,
    start_date,
    end_date,
    category
  } = ticket.current;

  return (
    <TicketEditorWrapper>
      <Editor>
        <ButtonClose
          onClick={handleClose}
          icon={<CloseCircleOutlined />}
        />

        <InputBlock>
          <Label htmlFor="title">* Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Write the place you want to go!"
            onChange={handleInputChange}
            defaultValue={title}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="location">* Location</Label>
          <Select
            id="location"
            placeholder="Choose one place"
            onChange={handleSelectChange}
            defaultValue={location}
          >
            {availableLocations.map((location, index) => (
              <Select.Option key={index} value={location}>
                {location}
              </Select.Option>
            ))}
          </Select>
        </InputBlock>

        <InputBlock>
          <Label htmlFor="content">Content</Label>
          <Input.TextArea
            id="content"
            name="content"
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={handleInputChange}
            defaultValue={content}
          />
        </InputBlock>

        {start_date ?
          (
            <InputBlock>
              <Label htmlFor="date">* Date</Label>
              <DatePicker.RangePicker
                id="date"
                onChange={handleDateChange}
                defaultValue={[timeFormator(start_date), timeFormator(end_date)]}
                format="YYYY-MM-DD"
              />
            </InputBlock>
          ) :
          (
            <InputBlock>
              <Label htmlFor="date">* Date</Label>
              <DatePicker.RangePicker
                id="date"
                onChange={handleDateChange}
                format="YYYY-MM-DD"
              />
            </InputBlock>
          )
        }

        <InputRadioBlock>
          <Label>* Category</Label>
          <Radio.Group
            name="category"
            defaultValue={category}
            onChange={handleInputChange}
          >
            {
              categoryColors.map((radio, index) => (
                <CategoryRadio
                  key={index}
                  color={radio.color}
                  value={radio.label}
                />
              ))
            }
          </Radio.Group>
        </InputRadioBlock>
        {errorMessage && <Alert>{errorMessage}</Alert>}
        <ButtonSaveBlock onClick={handleSave}>
          <StyleButton>Save</StyleButton>
        </ButtonSaveBlock>
      </Editor>
    </TicketEditorWrapper>
  )
};

TicketEditor.propTypes = {
  isAddTicket: PropTypes.object,
  setIsAddTicket: PropTypes.func,
  ticketStatus: PropTypes.string
};

export default TicketEditor;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DatePicker, Radio, Input, Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { categoryColors, availableLocations } from '../../utils';
import error from '../../constants/error';
import {
  postTicketAsync,
  setPostTicketError
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
    const {
      title,
      location,
      start_date,
      end_date,
    } = inputValue;
    if (!title || !location || !start_date || !end_date) {
      setErrorMessage(error.EMPTY_FILEDS.required);
      return;
    }
    dispatch(postTicketAsync(inputValue));
    setIsAddTicket(false);
  };

  return (
    <TicketEditorWrapper>
      <Editor>
        <ButtonClose
          onClick={() => setIsAddTicket(false)}
          icon={<CloseCircleOutlined />}
        />

        <InputBlock>
          <Label htmlFor="title">* Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Write the place you want to go!"
            onChange={handleInputChange}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="location">* Location</Label>
          <Select
            id="location"
            placeholder="Choose one place"
            onChange={handleSelectChange}
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
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="date">* Date</Label>
          <DatePicker.RangePicker
            id="date"
            onChange={handleDateChange}
          />
        </InputBlock>

        <InputRadioBlock>
          <Label>* Category</Label>
          <Radio.Group name="category" defaultValue={categoryColors[0].label} onChange={handleInputChange}>
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
  setIsAddTicket: PropTypes.func,
  ticketStatus: PropTypes.string
};

export default TicketEditor;
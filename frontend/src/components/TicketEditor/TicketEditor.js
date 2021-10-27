import React, { useState } from 'react';
import { DatePicker, Radio, Input } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import error from '../../constants/error';
import { categoryColors, availableLocations } from '../../utils';
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
  id,
  ticketsData,
  setTicketsData,
  setIsAddTicket,
  ticketStatus
}) => {

  const [inputValue, setInputValue] = useState({
    title: '',
    locations: '',
    description: '',
    startDate: '',
    endDate: '',
    category: 1,
  });
  const [errMessage, setErrMessage] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleDateChange = (value, dateString) => {
    const [startDate, endDate] = dateString;

    setInputValue({
      ...inputValue,
      startDate,
      endDate
    });
  };

  const handleSave = () => {
    const {
      title,
      locations,
      description,
      startDate,
      endDate,
      category,
    } = inputValue;

    if (!title || !locations || !startDate || !endDate) {
      setErrMessage([error.EMPTY_FILEDS.required]);
    }


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
          <Label htmlFor="locations">* Location</Label>
          <Input
            id="locations"
            list="location-list"
            name="locations"
            onChange={handleInputChange}
          />
          <datalist id="location-list">
            {availableLocations.map((location, index) => <option key={index} value={location} />)}
          </datalist>
        </InputBlock>

        <InputBlock>
          <Label htmlFor="description">Description</Label>
          <Input.TextArea
            id="description"
            name="description"
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
        {errMessage.length > 0 && <Alert>{errMessage[0]}</Alert>}
        <ButtonSaveBlock>
          <StyleButton onClick={handleSave}>Save</StyleButton>
        </ButtonSaveBlock>
      </Editor>
    </TicketEditorWrapper>
  )
}

export default TicketEditor;
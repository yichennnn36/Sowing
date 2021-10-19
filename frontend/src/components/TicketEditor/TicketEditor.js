import React, { useState } from 'react';
import { Input, DatePicker, Button, Radio } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { categoryColors, availableLocations } from '../../utils';
import {
  TicketEditorWrapper,
  Editor,
  InputBlock,
  InputRadioBlock,
  Label,
  ButtonDelete,
  ButtonSaveBlock,
  CategoryRadio
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
    startDate: '',
    endDate: '',
    category: 1,
  });

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
      startDate,
      endDate,
      category,
    } = inputValue;

    const column = ticketsData.columns[ticketStatus.columnId];
    const newTickets = Array.from(column.ticketIds);

    newTickets.splice(newTickets.length, 0, `ticket-${id}`);

    const newColumn = {
      ...column,
      ticketIds: newTickets
    };

    const postTickets = async () => {
      const response = await fetch(`http://localhost:3003/tickets`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          id: `ticket-${id}`,
          title,
          locations,
          startDate,
          endDate,
          category,
          status: ticketStatus.status
        })
      });
      const data = await response.json();
      return data;
    };

    const postColumns = async () => {
      const response = await fetch(`http://localhost:3003/columns`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          ...ticketsData.columns,
          [newColumn.id]: newColumn
        })
      });
      const data = await response.json();
      return data;
    };

    const post = async () => {
      const data = await Promise.all([
        postTickets(),
        postColumns()
      ]);
      return data;
    }

    post();
    setIsAddTicket(false);
  };

  return (
    <TicketEditorWrapper>
      <Editor>
        <ButtonDelete
          onClick={() => setIsAddTicket(false)}
          icon={<CloseCircleOutlined />}
        />

        <InputBlock>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Write the place you want to go!"
            onChange={handleInputChange}
          />
        </InputBlock>

        <InputBlock>
          <Label htmlFor="locations">Location</Label>
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
          <Label htmlFor="date">Date</Label>
          <DatePicker.RangePicker
            id="date"
            onChange={handleDateChange}
          />
        </InputBlock>

        <InputRadioBlock>
          <Label>Category</Label>
          <Radio.Group name="category" onChange={handleInputChange}>
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

        <ButtonSaveBlock>
          <Button onClick={handleSave}>Save</Button>
        </ButtonSaveBlock>
      </Editor>
    </TicketEditorWrapper>
  )
}

export default TicketEditor;
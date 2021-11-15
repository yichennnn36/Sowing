import { useEffect } from 'react';
import PropTypes from 'prop-types';
import usePost from '../../hooks/usePost';
import moment from 'moment';
import { DatePicker, Radio, Input, Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { categoryColors, availableLocations, dateFormat } from '../../utils';
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
  const {
    errorMessage,
    setInputValue,
    ticket,
    handleClose,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
    handleSave
  } = usePost({ isAddTicket, setIsAddTicket, ticketStatus });

  useEffect(() => {
    setInputValue((inputValue) => ({
      ...inputValue,
      ...ticket.current
    }));
  }, [setInputValue, ticket, isAddTicket.id]);

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
            {availableLocations.map((item, index) => (
              <Select.Option key={index} value={item.location}>
                {item.location}
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
                defaultValue={[moment(start_date, dateFormat), moment(end_date, dateFormat)]}
                format={dateFormat}
              />
            </InputBlock>
          ) :
          (
            <InputBlock>
              <Label htmlFor="date">* Date</Label>
              <DatePicker.RangePicker
                id="date"
                onChange={handleDateChange}
                format={dateFormat}
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

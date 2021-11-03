import { Button } from 'antd';
import { PushpinFilled } from '@ant-design/icons';
import { categoryColors } from '../../utils';
import { TagWrapper } from './FilterButtonStyle';

const FilterButton = () => {
  const handleFilter = (color) => {

  };

  return (
    <TagWrapper>
      {
        categoryColors.map((radio, index) => (
          <Button
            key={index}
            shape="circle"
            icon={<PushpinFilled />}
            style={{ background: `${radio.color}`, color: `white` }}
            category={radio.label}
            onClick={handleFilter}
          />
        )
        )
      }
    </TagWrapper>
  )
};

export default FilterButton;
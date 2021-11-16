import PropTypes from 'prop-types';
import { availableLocations } from '../../utils';
import { ReactComponent as Sprout } from '../../image/sowing-icon4.svg';
import {
  MapContainer,
  MapImage,
  GridMap,
  Row,
  Square,
  SproutIcon
} from './MapMarkStyle';

const MapMark = ({ locationInfo, handleShowInfo }) => {
  let grid = new Array(20);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(20).fill(null);
  }
  availableLocations.map((data) => {
    const { location, coordinates } = data;
    return grid[coordinates[0]][coordinates[1]] = location;
  });

  return (
    <MapContainer>
      <MapImage />
      <div>
        <GridMap>
          {
            grid.map((row, y) => {
              return (
                <Row key={y}>
                  {
                    row.map((col, y) => {
                      return (
                        <Square key={y}>
                          {
                            locationInfo.map((item, index) => {
                              const { location, sum } = item;

                              return (
                                location === col && sum !== 0 &&
                                <SproutIcon
                                  key={index}
                                  location={location}
                                  onClick={() => handleShowInfo(location)}
                                >
                                  <Sprout />
                                </SproutIcon>
                              )
                            })
                          }
                        </Square>
                      )
                    })
                  }
                </Row>
              )
            })
          }
        </GridMap>
      </div>
    </MapContainer>
  )
};

MapMark.propTypes = {
  locationInfo: PropTypes.array
};

export default MapMark;

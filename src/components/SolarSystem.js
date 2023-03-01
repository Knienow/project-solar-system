import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          planets
            .map((planet) => (
              <li key={ planet.name }>
                <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
              </li>
            ))
        }
      </div>
    );
  }
}

SolarSystem.defaultProps = {
  planets: [],
};

// SolarSystem.propTypes = {
//   planets: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     image: PropTypes.string,
//   })),
// };

export default SolarSystem;

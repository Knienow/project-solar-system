import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map((mission) => (
          <li key={ mission.name }>
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          </li>
        ))}
      </div>
    );
  }
}

export default Missions;

import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <section>
        <div className="App">
          <Header />
          <main>
            <SolarSystem />
            <Title />
            <Missions />
          </main>
        </div>
      </section>
    );
  }
}

export default App;

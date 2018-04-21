import React from 'react';
import { Container, Icon } from 'semantic-ui-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Devices from './home/Pie.js';
import UserData from './home/UserData.js';
import Traffic from './home/Bar.js';
import HeatMap from './home/heatMap.js';


const Statistics = () => {
  return (
    <main className='schools'>
      <Container fluid>
        <Tabs>
          <div className='tabs-wrp'>
            <TabList>
              <Tab><Icon name='desktop' />Devices</Tab>
              <Tab><Icon name='users' />Users Data</Tab>
              <Tab><Icon name='users' />Traffic</Tab>
              <Tab><Icon name='users' />Screen Clicks</Tab>
            </TabList>
          </div>
          <div className='content-wrp'>
            <TabPanel>
              <Devices className='component'/>
            </TabPanel>
            <TabPanel>
              <UserData className='component'/>
            </TabPanel>
            <TabPanel>
              <Traffic className='component'/>
            </TabPanel>
            <TabPanel>
              <HeatMap className='component'/>
            </TabPanel>
          </div>
        </Tabs>
      </Container>
    </main>
  );
};

export default Statistics;

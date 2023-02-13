import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const RootEvent = () => (
  <>
    <EventsNavigation />
    <Outlet />
  </>
);

export default RootEvent;

import { Link } from 'react-router-dom';

const EVENTS = [
  {
    id: 'e1',
    title: 'Event 1',
  },
  {
    id: 'e2',
    title: 'Event 2',
  },
  {
    id: 'e2',
    title: 'Event 2',
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map(event => (
          <li key={event.id}>
            <Link to={event.title}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;

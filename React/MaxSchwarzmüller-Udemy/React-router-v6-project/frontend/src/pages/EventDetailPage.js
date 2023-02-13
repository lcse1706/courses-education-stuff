import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      <p>text</p>
    </>
  );
};

export default EventDetailPage;

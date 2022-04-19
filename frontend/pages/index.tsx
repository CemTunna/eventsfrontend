import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Event } from '../typings';
import EventItem from 'Components/EventItem';
import EventsButtonLink from 'Components/eventsButtonLink';
import Title from 'Components/Title';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from 'Styles/Home.module.css';
interface HomeProps {
  events: Event[];
}
const Home: NextPage<HomeProps> = ({ events }) => {
  return (
    <Layout>
      <Title>Upcoming Events</Title>
      {events.length === 0 && <Title>No events to show</Title>}
      {events.map((event: Event) => (
        <EventItem key={event.id} event={event} />
      ))}
      {events.length > 0 && (
        <EventsButtonLink link='/events' className={styles.btn}>
          View All Events <ArrowForwardIosIcon />
        </EventsButtonLink>
      )}
    </Layout>
  );
};

export default Home;
export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
};

import type { NextPage } from 'next';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Event } from '../../typings';
import EventItem from 'Components/EventItem';
import Title from 'Components/Title';
import { GetServerSideProps } from 'next';
import qs from 'qs';
import { useRouter } from 'next/router';
import styles2 from 'Styles/Link.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EventsLink from 'Components/EventsLink';
import classNames from 'classnames';
interface SearchPageProps {
  events: Event[];
}
const SearchPage: NextPage<SearchPageProps> = ({ events }) => {
  const router = useRouter();
  return (
    <Layout title='Search Results'>
      <EventsLink
        link='/events'
        className={classNames(styles2.btn, styles2.btnActive)}
      >
        <ArrowBackIosIcon style={{ color: '#fff', marginRight: 10 }} /> Go Back
      </EventsLink>
      {events.length === 0 ? (
        <Title>No events to show</Title>
      ) : (
        <Title>Search Results for {router.query.term}</Title>
      )}
      {events.map((event: Event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Layout>
  );
};

export default SearchPage;
export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
};

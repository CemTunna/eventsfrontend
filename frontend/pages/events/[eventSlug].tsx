import React from 'react';
import Layout from 'Components/layout/Layout';
import { API_URL } from 'Config/index';
import { Event } from '../../typings';
import { GetServerSideProps } from 'next';
import styles from 'Styles/Event.module.css';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Title from 'Components/Title';
import SubTitle from 'Components/SubTitle';
import Text from 'Components/Text';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles2 from 'Styles/Link.module.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EventsLink from 'Components/EventsLink';
import type { NextPage } from 'next';

interface EventProps {
  event: Event;
}

const EventPage: NextPage<EventProps> = ({ event }) => {
  const router = useRouter();

  return (
    <Layout title='Event Details'>
      <Grid className={styles.event}>
        <span style={{ color: '#fff' }}>
          {new Date(event.date).toLocaleDateString('en-US')} at {event.time}
        </span>
        <Title className={styles.title}>{event.name}</Title>
        {event.image && (
          <Grid className={styles.image}>
            <Image
              src={event.image.formats.medium.url}
              width={960}
              height={600}
            />
          </Grid>
        )}
        <SubTitle>Performers:</SubTitle>
        <Text>{event.performers}</Text>
        <SubTitle>Description:</SubTitle>
        <Text>{event.description}</Text>
        <SubTitle>Venue: {event.venue}</SubTitle>
        <Text>{event.address}</Text>
        <EventsLink
          link='/events'
          className={classNames(styles2.btn, styles2.btnActive)}
        >
          <ArrowBackIosNewIcon style={{ marginRight: 10 }} /> Go Back
        </EventsLink>
      </Grid>
    </Layout>
  );
};

export default EventPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`${API_URL}/events?slug=${query.eventSlug}`);
  const events = await res.json();
  return {
    props: {
      event: events[0],
    },
  };
};

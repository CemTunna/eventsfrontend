import React, { useState } from 'react';
import Layout from 'Components/layout/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from 'Config/index';
import styles from 'Styles/Form.module.css';
import EventsButton from 'Components/Button';
import Title from 'Components/Title';
import { Button, Grid, InputLabel, TextField } from '@mui/material';
import EventsInput from 'Components/Input';
const AddEventPage = () => {
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
  });
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <Layout title='Add New Event'>
      <EventsButton className={styles.btn} link='/events'>
        Go Back
      </EventsButton>
      <Title className={styles.title}>Add Event</Title>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid className={styles.grid}>
          <Grid>
            <InputLabel htmlFor='name' style={{ color: '#f64c72' }}>
              Event Name
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.name}
              onChange={handleInputChange}
              type='text'
              id='name'
              name='name'
            />
          </Grid>

          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='performers'>
              Performers
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.performers}
              onChange={handleInputChange}
              type='text'
              id='performers'
              name='performers'
            />
          </Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='venue'>
              Venue
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.venue}
              onChange={handleInputChange}
              type='text'
              id='venue'
              name='venue'
            />
          </Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='address'>
              Address
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.address}
              onChange={handleInputChange}
              type='text'
              id='address'
              name='address'
            />
          </Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='date'>
              Date
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.date}
              onChange={handleInputChange}
              type='date'
              id='date'
              name='date'
            />
          </Grid>

          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='time'>
              Time
            </InputLabel>
            <EventsInput
              className={styles.inpt}
              value={values.time}
              onChange={handleInputChange}
              type='text'
              id='time'
              name='time'
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <InputLabel style={{ color: '#f64c72' }} htmlFor='description'>
              Description
            </InputLabel>
            <TextField
              type='text'
              name='description'
              id='description'
              multiline
              style={{ width: '100%' }}
              minRows={5}
              value={values.description}
              onChange={handleInputChange}
              InputProps={{
                className: styles.area,
              }}
            />
          </Grid>

          <Button type='submit' className={styles.btn}>
            Add event
          </Button>
        </Grid>
      </form>
    </Layout>
  );
};

export default AddEventPage;

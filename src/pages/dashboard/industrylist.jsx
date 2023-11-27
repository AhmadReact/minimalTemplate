import { Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BookingNewest from 'src/sections/overview/booking/booking-newest';
import { _bookingNew } from 'src/_mock';
import { Container } from '@mui/system';
import { useSettingsContext } from 'src/components/settings';
import { PostListView } from 'src/sections/blog/view';
import CompanyListView from 'src/sections/blog/view/company-list-view';
import IndustryListView from 'src/sections/blog/view/industry-list-view';
// ----------------------------------------------------------------------

export default function IndustryList() {
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Dashboard: Industry List</title>
      </Helmet>
      <IndustryListView />
    </>
  );
}

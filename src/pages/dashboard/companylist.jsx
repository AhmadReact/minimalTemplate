import { Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BookingNewest from 'src/sections/overview/booking/booking-newest';
import { _bookingNew } from 'src/_mock';
import { Container } from '@mui/system';
import { useSettingsContext } from 'src/components/settings';
import { PostListView } from 'src/sections/blog/view';
import CompanyListView from 'src/sections/blog/view/company-list-view';
// ----------------------------------------------------------------------

export default function CompanyList() {
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Dashboard: Company List</title>
      </Helmet>

      <CompanyListView />
    </>
  );
}

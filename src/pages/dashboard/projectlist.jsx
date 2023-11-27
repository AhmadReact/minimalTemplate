import { Grid, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BookingNewest from 'src/sections/overview/booking/booking-newest';
import { _bookingNew } from 'src/_mock';
import { Container } from '@mui/system';
import { useSettingsContext } from 'src/components/settings';
// ----------------------------------------------------------------------

export default function ProjectList() {
  const settings = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Dashboard: Project List</title>
      </Helmet>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <Typography
          variant="h4"
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          Project List
        </Typography>

        <Grid xs={12}>
          <BookingNewest title="Project List" list={_bookingNew} />
        </Grid>
        <Grid xs={12}>
          <BookingNewest title="Project List" list={_bookingNew} />
        </Grid>
      </Container>
    </>
  );
}

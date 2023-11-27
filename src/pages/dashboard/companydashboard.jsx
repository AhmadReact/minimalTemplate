import { Container } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Helmet } from 'react-helmet-async';
import { _analyticPosts, _bookingNew, _jobs } from 'src/_mock';
import AnalyticsNews from 'src/sections/overview/analytics/analytics-news';
import { BookingItem } from 'src/sections/overview/booking/booking-newest';
import { UserListView } from 'src/sections/user/view';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import JobDetailsCandidates from 'src/sections/job/job-details-candidates';
import { Typography } from '@mui/material';
// ----------------------------------------------------------------------

export default function CompanyDashboard() {
  const currentJob = _jobs.filter((job) => job.id === 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2')[0];

  const list = _bookingNew;
  return (
    <>
      <Helmet>
        <title> Dashboard: Company Dashboard</title>
      </Helmet>

      <UserListView title="Board members list" />
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={8}>
            <AnalyticsNews title="Projects" list={_analyticPosts} />
          </Grid>
          <Grid xs={6} md={6} lg={4}>
            <Card>
              <CardHeader title="Industry" sx={{ mb: 1 }} />
              {list.slice(-1).map((item) => (
                <div style={{ margin: '22px' }}>
                  <BookingItem key={item.id} item={item} />
                </div>
              ))}
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          sx={{
            my: { xs: 3, md: 5 },
          }}
        >
          Employee List
        </Typography>

        <JobDetailsCandidates candidates={currentJob?.candidates} />
      </Container>
    </>
  );
}

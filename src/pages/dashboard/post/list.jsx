import { Helmet } from 'react-helmet-async';

import CompanyListView from 'src/sections/blog/view/company-list-view';

// ----------------------------------------------------------------------

export default function PostListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Post List</title>
      </Helmet>

      <CompanyListView />
    </>
  );
}

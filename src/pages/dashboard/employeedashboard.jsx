import { Helmet } from 'react-helmet-async';
import CompanyWorkWith from 'src/sections/employee/companyworkwith';

// ----------------------------------------------------------------------

export default function EmployeeDashboard() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Blank</title>
      </Helmet>

      <CompanyWorkWith />
    </>
  );
}

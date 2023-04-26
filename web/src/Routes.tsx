// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import AnalyticsLayout from './layouts/AnalyticsLayout/AnalyticsLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={AnalyticsLayout}>
        <Set wrap={ScaffoldLayout} title="Kpis" titleTo="kpis" buttonLabel="New Kpi" buttonTo="newKpi">
          <Route path="/kpis/new" page={KpiNewKpiPage} name="newKpi" />
          <Route path="/kpis/{id:Int}/edit" page={KpiEditKpiPage} name="editKpi" />
          <Route path="/kpis/{id:Int}" page={KpiKpiPage} name="kpi" />
          <Route path="/kpis" page={KpiKpisPage} name="kpis" />
        </Set>
        <Set wrap={ScaffoldLayout} title="CompanyPerformances" titleTo="companyPerformances" buttonLabel="New CompanyPerformance" buttonTo="newCompanyPerformance">
          <Route path="/company-performances/new" page={CompanyPerformanceNewCompanyPerformancePage} name="newCompanyPerformance" />
          <Route path="/company-performances/{id:Int}/edit" page={CompanyPerformanceEditCompanyPerformancePage} name="editCompanyPerformance" />
          <Route path="/company-performances/{id:Int}" page={CompanyPerformanceCompanyPerformancePage} name="companyPerformance" />
          <Route path="/company-performances" page={CompanyPerformanceCompanyPerformancesPage} name="companyPerformances" />
        </Set>
        <Set wrap={ ScaffoldLayout} title="SalesPeople" titleTo="salesPeople" buttonLabel="New SalesPerson" buttonTo="newSalesPerson">
          <Route path="/sales-people/new" page={SalesPersonNewSalesPersonPage} name="newSalesPerson" />
          <Route path="/sales-people/{id:Int}/edit" page={SalesPersonEditSalesPersonPage} name="editSalesPerson" />
          <Route path="/sales-people/{id:Int}" page={SalesPersonSalesPersonPage} name="salesPerson" />
          <Route path="/sales-people" page={SalesPersonSalesPeoplePage} name="salesPeople" />
        </Set>
      </Set>
      <Set wrap={AnalyticsLayout}>
        <Route path="/" page={DashboardPage} name="dashboard" />
        <Route path="/dynamic-dashboard" page={DynamicDashboardPage} name="dynamicDashboard" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

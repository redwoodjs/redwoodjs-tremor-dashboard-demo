// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AnalyticsLayout from './layouts/AnalyticsLayout/AnalyticsLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={AnalyticsLayout}>
        <Route path="/" page={DashboardPage} name="dashboard" />
        <Route path="/dynamic-dashboard" page={DynamicDashboardPage} name="dynamicDashboard" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

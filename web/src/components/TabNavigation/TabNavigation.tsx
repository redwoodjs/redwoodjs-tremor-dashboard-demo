import { NavLink, routes } from '@redwoodjs/router'

const TabNavigation = () => {
  const tabs = [
    { name: 'Static', href: routes.dashboard() },
    { name: 'Dynamic', href: routes.dynamicDashboard() },
    { name: 'Sales People', href: routes.salesPeople() },
    { name: 'Company Performance', href: routes.companyPerformances() },
    { name: 'KPI', href: routes.kpis() },
    { name: 'About', href: routes.about() },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="px-8">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          // defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <NavLink
                key={tab.name}
                to={tab.href}
                activeClassName="whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium border-blue-500 text-blue-500"
                className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-blue-300 hover:text-blue-700"
              >
                {tab.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default TabNavigation

import TabNavigation from "src/components/TabNavigation/TabNavigation"

type AnalyticsLayoutProps = {
  children?: React.ReactNode
}

const AnalyticsLayout = ({ children }: AnalyticsLayoutProps) => {
  return <div className="h-screen bg-slate-50">
    <TabNavigation/>
      {children}
    </div>
}

export default AnalyticsLayout

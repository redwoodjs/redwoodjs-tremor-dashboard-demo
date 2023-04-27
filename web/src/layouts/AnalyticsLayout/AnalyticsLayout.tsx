import TabNavigation from "src/components/TabNavigation/TabNavigation"
import Footer from "src/components/Footer/Footer"

type AnalyticsLayoutProps = {
  children?: React.ReactNode
}

const AnalyticsLayout = ({ children }: AnalyticsLayoutProps) => {
  return <div className="h-screen bg-slate-50">
    <TabNavigation/>
      {children}
    <Footer/>
    </div>
}

export default AnalyticsLayout

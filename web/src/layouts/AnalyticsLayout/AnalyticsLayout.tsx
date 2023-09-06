import Footer from 'src/components/Footer/Footer'
import TabNavigation from 'src/components/TabNavigation/TabNavigation'

type AnalyticsLayoutProps = {
  children?: React.ReactNode
}

const AnalyticsLayout = ({ children }: AnalyticsLayoutProps) => {
  return (
    <main className="h-screen bg-slate-50 dark:bg-slate-950">
      <TabNavigation />
      {children}
      <Footer />
    </main>
  )
}

export default AnalyticsLayout

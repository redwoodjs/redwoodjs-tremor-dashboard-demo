type AnalyticsLayoutProps = {
  children?: React.ReactNode
}

const AnalyticsLayout = ({ children }: AnalyticsLayoutProps) => {
  return <div className="h-screen bg-slate-50">{children}</div>
}

export default AnalyticsLayout

import { useEffect } from 'react'
import SummaryChart from './_components/SummaryChart'

const DashBoard = () => {
  useEffect(() => {
    document.title = 'Dashboard | Dashboard'
  }, [])

  return (
    <div className="w-full overflow-scroll">
      <SummaryChart />
      <p className="mt-6 text-xl font-semibold text-center">Biểu đồ</p>
    </div>
  )
}

export default DashBoard

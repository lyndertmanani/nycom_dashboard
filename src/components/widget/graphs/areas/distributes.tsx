
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from './test_data';//replace with supabase to fetch data dynamically



const chartSetting = {
    xAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 750,
    height: 400,
  };

const Distributes = () => {
    return (
        <>
          <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
        </>
    )
}
export default Distributes
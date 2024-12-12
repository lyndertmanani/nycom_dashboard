
import { BarChart } from '@mui/x-charts/BarChart';

const Thematic = () => {
    return (
        <>
         <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={750}
      height={400}
    />
        </>
    )
}
export default Thematic
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'
import './index.css'

const COLORS = ['#006400', '#8B0000', '#FFC107']

const PieChartComponent = ({data}) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  if (!data || data.length === 0 || total === 0) {
    return null
  }
  return (
    <div className="pie-chart-container">
      <h3 className="pie-chart-title">Match Statistics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={60}
            outerRadius={80}
            fill="#ffffff"
            dataKey="value"
            label={({percent}) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map(entry => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[entry.value % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComponent

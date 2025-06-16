"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Littérature", value: 43, color: "#8B5CF6" },
  { name: "Sciences", value: 26, color: "#06B6D4" },
  { name: "Histoire", value: 17, color: "#10B981" },
  { name: "Philosophie", value: 10, color: "#F59E0B" },
  { name: "Art", value: 4, color: "#EF4444" },
]

export function DistributionChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry) => (
              <span style={{ color: entry.color }}>
                {value} {entry.payload.value}%
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

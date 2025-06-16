"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  { name: "1 Mai", value: 4 },
  { name: "5 Mai", value: 7 },
  { name: "10 Mai", value: 3 },
  { name: "15 Mai", value: 9 },
  { name: "20 Mai", value: 6 },
  { name: "25 Mai", value: 8 },
  { name: "30 Mai", value: 5 },
]

export function ActivityChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
          <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} maxBarSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

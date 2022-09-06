import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

const Chart_data = () => {
  Chart.register(...registerables)

  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [40, 29, 60, 71, 36, 45, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 77,
            stepValue: 11,
          },
        },
      ],
    },
  }

  return (
    <>
      <Bar data={data} options={options} />
    </>
  )
}

export default Chart_data

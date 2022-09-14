import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { useSelector } from 'react-redux'

const Chart_data = () => {
  Chart.register(...registerables)
  const { park } = useSelector(state=>state.parkReducer.park_data);

  const data = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '몬스터 파크 진행률',
        data: [
          park[0].count,
          park[1].count, 
          park[2].count, 
          park[3].count, 
          park[4].count, 
          park[5].count, 
          park[6].count
        ],
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
      y: {
        suggestedMin: 0,
        suggestedMax: 77,
        ticks: {
          stepSize: 11
        }
      }
    }
  }

  return (
    <>
      <Bar data={data} options={options} />
    </>
  )
}

export default Chart_data

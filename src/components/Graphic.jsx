import React, {useRef, useEffect} from 'react'
import Chart from 'chart.js'
import { rgbToHex } from '@material-ui/core'


const Graphic = ({stats,pokemonName}) => {
    const chartRef=useRef()
   
    let newStats=Object.values(stats)
    console.log(newStats)
    useEffect(()=>{
        let canvas=chartRef.current.getContext("2d")

        new Chart(canvas,{
            type: "radar",
            data: {
                labels: ["HP", "Attack", "Defense", "Special Attack","Special Defense", "Speed"],
                datasets: [
                    {
                        label: 'Pokemon Name',
                        data:[45, 49, 49, 65, 65, 45],
                        backgroundColor:'rgba(244,24,0,0.2)',
            
                        borderColor:'rgba(244,24,0,0.3)',
                        pointBackgroundColor:'rgba(244, 24, 0, 0.3)'
                    }
                ]
            },
            options: {
                responsive:true,
                scale: {
                   
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        min:0,
                        max:100,
                    },
                },
            }
        })

    },[])


    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    )
}

export default Graphic

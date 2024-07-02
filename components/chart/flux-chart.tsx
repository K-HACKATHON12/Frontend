'use client'
import { useEffect, useRef } from 'react';
import { Chart, ChartOptions } from 'chart.js/auto';

export function FluxChart() {
    const chartRef = useRef<Chart | null>(null);

    const data = [
        184, 376, 159, 340, 270, 4501, 2130, 20370, 28044, 178, 110, 3306, 1162, 6123, 1456, 109];

    useEffect(() => {
        const canvas = document.getElementById('fluxChart') as HTMLCanvasElement | null;

        if (canvas) {
            const ctx = canvas.getContext('2d');

            if (ctx) {
                if (chartRef.current) {
                    chartRef.current.destroy();
                }

                const chartData = {
                    labels: data.map((_, i) => i + 1),
                    datasets: [
                        {
                            data: data,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                };

                const options: ChartOptions<'bar'> = {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: '유동 인구',
                            },
                            ticks: {
                                display: false,
                            },
                        },
                    },
                };

                chartRef.current = new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: options,
                });
            }
        }
    }, [data]);

    return (
        <div className="w-64 h-full">
            <canvas id="fluxChart"></canvas>
        </div>
    );
}

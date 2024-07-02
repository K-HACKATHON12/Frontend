'use client'
import { useEffect, useRef } from 'react';
import { Chart, ChartOptions } from 'chart.js/auto';

export function ApartPriceChart() {
    const chartRef = useRef<Chart | null>(null);

    // 랜덤 아파트 가격 데이터 생성
    const data = Array.from({ length: 20 }, () => Math.floor(Math.random() * 50000));
    const labels = ["2020-1분기", "2020-2분기", "2020-3분기", "2020-4분기", "2021-1분기", "2021-2분기", "2021-3분기", "2021-4분기", "2022-1분기", "2022-2분기", "2022-3분기", "2022-4분기", "2023-1분기", "2023-2분기", "2023-3분기", "2023-4분기", "2024-1분기", "2024-2분기", "2024-3분기", "2024-4분기"];

    useEffect(() => {
        const canvas = document.getElementById('apartPriceChart') as HTMLCanvasElement | null;

        if (canvas) {
            const ctx = canvas.getContext('2d');

            if (ctx) {
                if (chartRef.current) {
                    chartRef.current.destroy();
                }

                const chartData = {
                    labels: labels,
                    datasets: [
                        {
                            data: data,
                            fill: false,
                            borderColor: 'rgba(00, 00, 00, 1)',
                            borderWidth: 3,
                            pointRadius: 0, // 점을 없앰
                            tension: 0.5, // 라운딩을 없앰
                        },
                    ],
                };

                const options: ChartOptions<'line'> = {
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
                                text: '아파트 가격',
                            },
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false, // x축의 눈금 표시 안함
                            },
                        },
                        y: {
                            display: false,
                            grid: {
                                display: false, // y축의 눈금 표시 안함
                            },
                        },
                    },
                };

                chartRef.current = new Chart(ctx, {
                    type: 'line',
                    data: chartData,
                    options: options,
                });
            }
        }
    }, [data]);

    return (
        <div className="w-96 p-4 h-full">
            <canvas id="apartPriceChart"></canvas>
        </div>
    );
}

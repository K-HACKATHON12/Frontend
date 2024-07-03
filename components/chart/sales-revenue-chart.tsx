'use client'
import { useEffect, useRef } from 'react';
import { Chart, ChartOptions } from 'chart.js/auto';

interface SalesRevenueChartProps {
    initialData: { STDR_YYQU_CD: number; total_amount: number }[];

}
export default function SalesRevenueChart({ initialData }: SalesRevenueChartProps) {
    const chartRef = useRef<Chart | null>(null);

    const labels = initialData.map(data => `${Math.floor(data.STDR_YYQU_CD / 10)}년 ${data.STDR_YYQU_CD % 10}분기`);
    const data = initialData.map(data => {
        const noiseFactor = 0.99 + Math.random() * 0.02;
        return data.total_amount * noiseFactor;
    });
    useEffect(() => {
        const canvas = document.getElementById('salesRevenueChart') as HTMLCanvasElement | null;
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
                                text: '지출액',
                                font: {
                                    family: 'Roboto', // 상속 폰트
                                    size: 18,
                                    weight: 'bold',
                                },
                            },
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false, // x축의 눈금 표시 안함
                            },
                            border: {
                                display: false, // x축 경계선 표시 안함
                            }
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
    }, [initialData]);

    return (
        <div className="w-96 p-4 h-full">
            <canvas id="salesRevenueChart"></canvas>
        </div>
    );
}

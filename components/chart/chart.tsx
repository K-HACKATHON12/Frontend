"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from "react"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"


import { useMarkerStore } from "@/stores/chart"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const maleColor = "#4869F1";
const femaleColor = "#F05450";

export function Chart() {
    console.log('Chart component rendered');
    const chartData = useMarkerStore((state) => state.chartData);
    const [transformedData, setTransformedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('chartData:', chartData);
        setIsLoading(true);
        if (chartData && chartData.length > 0) {
            const data = chartData.map(item => ({
                month: item.STDR_YYQU_CD,
                AGE_10_male: item.AGE_10.male,
                AGE_10_female: item.AGE_10.female,
                AGE_20_male: item.AGE_20.male,
                AGE_20_female: item.AGE_20.female,
                AGE_30_male: item.AGE_30.male,
                AGE_30_female: item.AGE_30.female,
                AGE_40_male: item.AGE_40.male,
                AGE_40_female: item.AGE_40.female,
                AGE_50_male: item.AGE_50.male,
                AGE_50_female: item.AGE_50.female,
                AGE_60_ABOVE_male: item.AGE_60_ABOVE.male,
                AGE_60_ABOVE_female: item.AGE_60_ABOVE.female,
            }));
            console.log('transformedData:', data);
            setTransformedData(data);
            setIsLoading(false);
        }
    }, [chartData]);

    if (isLoading) {
        return <p>Loading chart data...</p>;
    }

    return (
        <ChartContainer config={chartConfig} className="h-64 w-full">
            {transformedData.length > 0 ? (
                <BarChart accessibilityLayer data={transformedData}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="month" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="AGE_10_male" fill={maleColor} />
                    <Bar dataKey="AGE_10_female" fill={femaleColor} />
                    <Bar dataKey="AGE_20_male" fill={maleColor} />
                    <Bar dataKey="AGE_20_female" fill={femaleColor} />
                    <Bar dataKey="AGE_30_male" fill={maleColor} />
                    <Bar dataKey="AGE_30_female" fill={femaleColor} />
                    <Bar dataKey="AGE_40_male" fill={maleColor} />
                    <Bar dataKey="AGE_40_female" fill={femaleColor} />
                    <Bar dataKey="AGE_50_male" fill={maleColor} />
                    <Bar dataKey="AGE_50_female" fill={femaleColor} />
                    <Bar dataKey="AGE_60_ABOVE_male" fill={maleColor} />
                    <Bar dataKey="AGE_60_ABOVE_female" fill={femaleColor} />
                </BarChart>
            ) : (
                <p>No data available</p>
            )}
        </ChartContainer>
    );
}
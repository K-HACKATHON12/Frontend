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
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

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

const maleColor = "#87CEFA";
const femaleColor = "#F28B82";

export function Chart() {
    console.log('Chart component rendered');
    const chartData = useMarkerStore((state) => state.chartData);
    const [transformedData, setTransformedData] = useState([]);
    const [bread, setBread] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('chartData:', chartData);
        setIsLoading(true);
        if (chartData && chartData.length > 0) {
            const bread = [chartData[0].TRDAR_SE_CD_NM, chartData[0].TRDAR_CD_NM];
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
            setBread(bread);
            setTransformedData(data);
            setIsLoading(false);
        }
    }, [chartData]);

    if (isLoading) {
        return <p className="h-64 w-full">Loading chart data...</p>;
    }

    return (
        <div className="h-64 w-full pb-10 border-1 border-gray-300 mb-10 mt-2 rounded-xl">
            <Breadcrumbs className="pl-5 pt-2">
                <BreadcrumbItem>{bread[0]}</BreadcrumbItem>
                <BreadcrumbItem>{bread[1]}</BreadcrumbItem>
            </Breadcrumbs>
            <ChartContainer config={chartConfig} className="h-full w-full">
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
                    <p className="h-64 w-full">No data available</p>
                )}
            </ChartContainer>
        </div>
    );
}
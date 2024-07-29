import React from 'react';
import { FluxChart } from './flux-chart';
import { DeJureChart } from './de-jure-chart';
import { WorkChart } from './work-chart';
import { ApartPriceChart } from './apart-price-chart';
import SalesRevenueChart from './sales-revenue-chart';

interface ChartProps {
    expenditureData: { STDR_YYQU_CD: number; total_amount: number }[];
}

export function Chart({ expenditureData }: ChartProps) {
    return (
        <div className="w-full h-64 flex justify-center items-center border-1 border-gray-300 rounded-xl mb-10 mt-2">
            {/* <FluxChart />
            <DeJureChart />
            <WorkChart />
            <ApartPriceChart />
            <SalesRevenueChart initialData={expenditureData} /> */}
        </div>
    );
}

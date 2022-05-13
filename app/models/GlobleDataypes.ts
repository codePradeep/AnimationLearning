export interface GlobleDataTypes {
    country:             string;
    cases:               number;
    todayCases:          number;
    deaths:              number;
    todayDeaths:         number;
    recovered:           number | null;
    active:              number | null;
    critical:            number;
    casesPerOneMillion:  number;
    deathsPerOneMillion: number;
    totalTests:          number;
    testsPerOneMillion:  number;
}


export interface GlobleData {
    cases:     number;
    deaths:    number;
    recovered: number;
}

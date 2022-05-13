export interface CountryDataType {
    confirmed:  Confirmed;
    recovered:  Confirmed;
    deaths:     Confirmed;
    lastUpdate: Date;
}

export interface Confirmed {
    value:  number;
    detail: string;
}

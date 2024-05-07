export interface Plans { 
    id: Number,
    name: string,
    createdAt: string,

    product: string,
    price: number,

    pickingList: boolean, 
    waveSeparation: boolean, 
    separationRoute: boolean, 
    orderConference: boolean, 
    volumeControl: boolean, 
    labelPrinting: boolean, 
    labelReprint: boolean
}

export interface PlansFields {
    name: string,

    price: number,
    product: any,

    pickingList: boolean, 
    waveSeparation: boolean, 
    separationRoute: boolean, 
    orderConference: boolean, 
    volumeControl: boolean, 
    labelPrinting: boolean, 
    labelReprint: boolean
}
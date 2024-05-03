import type { Feature } from '../models/Feature'
export const FeatureService = 
{
    getAllFeaturesData(): Feature[] 
    {
        return [
            {
                id: 1,
                createdAt: new Date('2023-12-20'),
                name: 'Separação',
                product: 'WMS'
            },
            {
                id: 2,
                createdAt: new Date('2024-01-20'),
                name: 'Expedição',
                product: 'WMS'
            },
            { 
                id: 3,
                createdAt: new Date('2024-01-20'),
                name: 'Expedição',
                product: 'CRM'
            }
        ]
    },

    getAllFeatures(): Promise<Feature[]> {
        return Promise.resolve(this.getAllFeaturesData())
    }
}
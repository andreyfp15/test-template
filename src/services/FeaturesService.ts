import type { Feature } from '../models/Feature'
export const FeatureService = 
{
    getAllFeaturesData(): Feature[] 
    {
        return [
            {
                id: 1,
                createdAt: new Date('20-12-2023'),
                name: 'Separação',
                product: 'WMS'
            },
            {
                id: 2,
                createdAt: new Date('20-01-2024'),
                name: 'Expedição',
                product: 'WMS'
            },
            {
                id: 3,
                createdAt: new Date('20-01-2024'),
                name: 'Expedição',
                product: 'CRM'
            }
        ]
    },

    getAllFeatures(): Promise<Feature[]> {
        return Promise.resolve(this.getAllFeaturesData())
    }
}
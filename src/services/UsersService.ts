import type { Users, UsersFields } from '../models/Users'
export const UserService =
{
    getAllUsersData(): Users[] {
        return [
            { id: 1, name: 'Allan Lima', date: '2024-04-24', status: 'Ativo', email: 'allan.santos@smart01.com.br', password: '1', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 2, name: 'Luana Mandzirosche', date: '2024-04-23', status: 'Ativo', email: 'luana@smart01.com.br', password: '12', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 3, name: 'Arthur Brites', date: '2024-04-22', status: 'Inativo', email: 'arthur@smart01.com.br', password: '123', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 4, name: 'Giuliano Costa', date: '2024-04-21', status: 'Inativo', email: 'giuliano@smart01.com.br', password: '1234', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 5, name: 'Andrey', date: '2024-04-20', status: 'Ativo', email: 'Andrey@smart01.com.br', password: '12345', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 6, name: 'Alvanir', date: '2024-04-19', status: 'Ativo', email: 'Alvanir@smart01.com.br', password: '123456', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 7, name: 'Lislaine', date: '2024-04-18', status: 'Inativo', email: 'Lislaine@smart01.com.br', password: '1234567', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 8, name: 'Matheus', date: '2024-04-17', status: 'Inativo', email: 'Matheus@smart01.com.br', password: '12345678', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 9, name: 'Luiz', date: '2024-04-16', status: 'Ativo', email: 'Luiz@smart01.com.br', password: '123456789', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
            { id: 10, name: 'Miguel', date: '2024-04-15', status: 'Ativo', email: 'Miguel@smart01.com.br', password: '10', temporaryPassword: true, includeClients: true, editClients: true, deleteClients: false, includeUsers: true, editUsers: true, deleteUsers: false, includeLicenses: true, editLicenses: true, deleteLicenses: true, includeFunctionalities: true, editFunctionalities: true, deleteFunctionalities: true, includePlans: true, editPlans: true, deletePlans: true, includeLogs: true, editLogs: true, deleteLogs: false, confidentialInformation: true },
        ]
    },

    getAllUsers(): Promise<Users[]> {
        return Promise.resolve(this.getAllUsersData())
    },

    defaultFields(): UsersFields {
        return {
            name: '',
            email: '',
            password: '',

            temporaryPassword: false,

            includeClients: false,
            editClients: false,
            deleteClients: false,

            includeUsers: false,
            editUsers: false,
            deleteUsers: false,

            includeLicenses: false,
            editLicenses: false,
            deleteLicenses: false,

            includeFunctionalities: false,
            editFunctionalities: false,
            deleteFunctionalities: false,

            includePlans: false,
            editPlans: false,
            deletePlans: false,

            includeLogs: false,
            editLogs: false,
            deleteLogs: false,

            confidentialInformation: false,
        }
    }
}
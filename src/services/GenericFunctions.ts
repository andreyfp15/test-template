export const GenericFunctions = {
    validateEmail(email: string): boolean {
        if (email !== null) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        return false;
    },

    formatDate(value: any) {
        return value.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
}
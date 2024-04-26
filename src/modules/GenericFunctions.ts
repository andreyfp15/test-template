export function validateEmail(email: string): boolean {
    if(email !== null){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    return false;
}
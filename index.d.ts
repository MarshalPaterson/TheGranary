export default class TheGranary {
    private static instance;
    private grain;
    private constructor();
    static getInstance(): TheGranary;
    setGranary(name: string, state: any): void;
    getGranary(name: string): any[] | "";
}

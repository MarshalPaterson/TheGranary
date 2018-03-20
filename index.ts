export default class TheGranary {
    private static instance: TheGranary;
    private grain: { [key: string]: any[] } = {};
    private constructor() {
    }
    static getInstance() {
        if (!TheGranary.instance) {
            TheGranary.instance = new TheGranary();
        }
        return TheGranary.instance;
    }
    // Set Granary store
    public setGranary(name:string, state:any):void
    {
        this.grain[name] = state;
    }
    public getGranary(name: string) {
        return this.grain[name] ? this.grain[name] : "";
    } 
}
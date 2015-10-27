export declare function template(template: string)
export declare function tag(tagName: string)

export declare class Riot {
    private static __template: string;
    private static __tag: string;

    protected root: HTMLElement;
    protected parent: Riot;
    protected opts: any;

    public static register();
    public static mount(tagName: string, args: Object);
    public on(eventName: string, cb: Function);
    public update();
}

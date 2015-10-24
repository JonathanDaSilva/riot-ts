export declare function template(template: string)
export declare function tag(tagName: string)

export declare class Riot {
    private static __template: string;
    private static __tag: string;

    protected root: HTMLElement;
    protected opts: any;

    public static register();
    public static mount(tagName: string, args: Object);
    public update();
}

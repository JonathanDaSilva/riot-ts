export function template(template: string)
export function tag(tagName: string)

export interface Riot {
    private static __template: string
    private static __tag: string

    protected root: HTMLElement
    protected opts: any

    public static register()
    public static mount(tagName: string, args: Array<any>)
    public update()
}

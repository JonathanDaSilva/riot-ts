export function template(template) {
    return function(target) {
        target.__template = template
        return target
    }
}

export function tag(tag) {
    return function(target) {
        target.__tag = tag
        return target
    }
}

export class Riot {
    private static __template: string
    private static __tag: string

    protected root: HTMLElement
    protected opts: any

    public static register() {
        var that = this

        riot.tag(this.__tag, this.__template, function(opts){
            var map = Object.keys(that.prototype).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(that.prototype, key)
                return descriptors
            },{})
            Object.defineProperties(this, <PropertyDescriptorMap>map);
            this.opts = opts
            this.on("mount", this.onMount || null);
        })
    }

    public static mount(tag: string, args: Object) {
        riot.mount(tag, args)
    }
}
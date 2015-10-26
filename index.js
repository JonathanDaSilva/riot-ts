function template(template) {
    return function (target) {
        target.__template = template;
        return target;
    };
}
exports.template = template;
function tag(tag) {
    return function (target) {
        target.__tag = tag;
        return target;
    };
}
exports.tag = tag;
var Riot = (function () {
    function Riot() {
    }
    Riot.register = function () {
        var that = this;
        riot.tag(this.__tag, this.__template, function (opts) {
            var map = Object.keys(that.prototype).reduce(function (descriptors, key) {
                descriptors[key] = Object.getOwnPropertyDescriptor(that.prototype, key);
                return descriptors;
            }, {});
            Object.defineProperties(this, map);
            this.opts = opts;
            if (typeof this.init !== 'function') {
                throw new Error("A Riot Component should have a init method");
            }
            this.init.bind(this)();
            if (typeof this.onMount === 'function') {
                this.on("mount", this.onMount.bind(this));
            }
            if (typeof this.onUpdate === 'function') {
                this.on("update", this.onUpdate.bind(this));
            }
            if (typeof this.onUpdated === 'function') {
                this.on("updated", this.onUpdated.bind(this));
            }
            if (typeof this.onUnmount === 'function') {
                this.on("unmount", this.onUnmount.bind(this));
            }
            if (typeof this.onAny === 'function') {
                this.on("mount unmount update", this.onAny.bind(this));
            }
        });
    };
    Riot.mount = function (tag, args) {
        riot.mount(tag, args);
    };
    return Riot;
})();
exports.Riot = Riot;

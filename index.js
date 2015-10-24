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
            this.on("mount", this.onMount || null);
        });
    };
    Riot.mount = function (tag, args) {
        riot.mount(tag, args);
    };
    return Riot;
})();
exports.Riot = Riot;

export function rootRelPath(input) {
    // only root relative path
    if (!/^($|(\/(?![\/])))/.test(String(input))) {
        throw new TypeError(`Invalid URL : "${String(input)}"`);
    }
    const BasePath = (import.meta.env.BASE_URL).replace(/\/$/, '');
    const Path = (function () {
        if (input === '') {
            return '/';
        }
        return String(input);
    })();
    const rootRelPath = BasePath + Path;
    return rootRelPath;
}
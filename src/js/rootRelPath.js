export function rootRelPath(input) {
    if (!/^($|(\/(?![\/])))/.test(String(input))) {
        throw new TypeError('Invalid URL: You can ');
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
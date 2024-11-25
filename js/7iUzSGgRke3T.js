self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/_error": ["static/chunks/pages/_error-0a004b8b8498208d.js"],
        "/lockup": [s, "static/chunks/378-04af35b9cbe2af40.js", "static/chunks/pages/lockup-cfcd83b9644c11e6.js"],
        "/[pathPrefix]/[slug]/[[...route]]": [s],
        sortedPages: ["/_app", "/_error", "/lockup", "/[pathPrefix]/[slug]/[[...route]]"]
    }
}(""), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
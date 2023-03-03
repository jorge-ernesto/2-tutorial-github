/**
* Para levantar el proyecto, en el elemento "base" debe ir:
* En desarrollo con XAMPP: /dist-vuepress/2-tutorial-github/
* En producción con GitHub: /2-tutorial-github/
*/
module.exports = {
    title: "Tutorial GIT / GITHUB",
    description: "Aprende a utilizar GIT / GITHUB",
    base: "/dist-vuepress/2-tutorial-github/",
    locales: {
        "/": {
            lang: "es-ES",
        },
    },
    themeConfig: {
        nav: [
            {
                text: "Guías",
                link: "https://bluuweb.github.io/",
            },
            {
                text: "Youtube",
                link: "https://youtube.com/bluuweb",
            },
            {
                text: "Curso Vue 3",
                link: "http://curso-vue-js-udemy.bluuweb.cl",
            },
            {
                text: "Curso React",
                link: "http://curso-react-js-udemy.bluuweb.cl",
            },
        ],
        sidebar: ["/", "/01-fundamentos/", "/02-github/"],
    },
};

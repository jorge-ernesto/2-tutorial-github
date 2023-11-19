/**
* Para levantar el proyecto, en el elemento "base" debe ir:
* En produccion con el servidor jorgeernestoweb.com: "/2-tutorial-github/" ----> Se debe crear la carpeta "2-tutorial-github" en "www"
* En producción con GitHub                         : "/2-tutorial-github/"
*/
module.exports = {
    title: "Tutorial GIT / GITHUB",
    description: "Aprende a utilizar GIT / GITHUB",
    base: "/2-tutorial-github/",
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

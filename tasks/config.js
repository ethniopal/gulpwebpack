const basePath = './'; //là ou se situe le fichier gulp
const srcDir = 'src';
const distDir = 'www';

const config = {

    name: 'theme2019', //Nom du thème/projet (sans espace ni de caractère accentué)
    proxy: 'http://dev.gulp', //Url local, laisser vide si désire l'utiliser sans sous-domaine ex.: http://dev.test/
    type: '',  //Valeur possible : wp, laravel, html, react
    server: 'wamp', //création automatique des virtuals hosts, selon le proxy et le chemin public, laisser vide si pas sur wamp
    css: {
        src: basePath + srcDir + '/scss',
        dist: basePath + distDir,
    },
    img: {
        src: basePath + srcDir + '/img',
        dist: basePath + distDir + '/img',
        ext: 'png,jpg,jpeg,gif,svg,svgz,webp',
        quality: 60,
    },
    js: {
        src: basePath + srcDir + '/js',
        dist: basePath + distDir + '/js',
        entry:{
            main:['./main.js'],
            // autre:['./main.js'], //Si on veut un autre fichier bundle JS
        },
        filename:'[name].bundle.js',
    },
    theme: {
        src: basePath + srcDir,
        dist: basePath + distDir,
    },

};

const ftp = {
    host: '184.107.112.54',
    user: '',
    pass: '',
    dir: '/public_html'
}

const connDB = {
    db: '',
    host: 'localhost:3309',
    user: '_root',
    pass: '',
}


const themeWP = basePath + distDir + '/wp-content/themes/' + config.name; //à modifier si le chemin wordpress change
const uploadWP = basePath + distDir + '/wp-content/uploads'; //à modifier si le chemin wordpress change

switch (config.type) {
    case 'wp':
        config.css.dist = themeWP;
        config.js.dist = themeWP + '/js';
        config.img.dist = themeWP + '/img';
        config.theme.dist = themeWP;
        break;
    case 'laravel':
        //src
        config.css.src = basePath + 'resources/assets/scss';
        config.js.src = basePath + 'resources/assets/js';
        config.img.src = basePath + 'resources/assets/img';

        //dist
        config.css.dist = basePath + 'public/css';
        config.js.dist = basePath + 'public/js';
        config.img.dist = basePath + 'public/img';
        config.theme.dist = basePath + 'public';
        break;
    case 'react':
        break;
    case 'html':
        break;

    default:
        break;
}

export { basePath, srcDir, distDir, config, themeWP,  uploadWP, ftp, connDB};
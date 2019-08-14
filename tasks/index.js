import {series, parallel, watch} from 'gulp';
import {config as configData, config} from "./config";

import { scripts } from './webpack';
import { server , reload }  from './server';
import { cleanInit, cleanDist, generateSrcDirectory }  from './clean';
import { optimiseImages }  from './images';
import { styles }  from './css';
import { copy }  from './copy';
import { downloadFiles }  from './download';
import { createDB }  from './bd';
import { uploadFTP, backupBD }  from './deploy';


const {css, js, theme, img} = config;

/**
 * Permet d'observer les fichiers
 */
function watchFiles () {
    watch(css.src + '/**/*.scss', styles);
    watch(theme.src + '/**/*').on('change', series(copy, reload));
    watch(img.src + '/**/*').on('change', series(optimiseImages, reload));
    watch(js.src + '/**/*.js').on('change', series(scripts, reload));
}


export const init  = series(cleanInit, cleanDist, generateSrcDirectory, downloadFiles, createDB );
export const dev   = series(parallel(styles, copy, optimiseImages, scripts), parallel(watchFiles, server));
export const build = series( cleanDist, parallel(styles, copy, optimiseImages), scripts, uploadFTP, backupBD );

export default dev;
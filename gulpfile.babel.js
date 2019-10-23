import gulp from 'gulp';
import del from 'del';

const clean = () => del(["build"])

const prepare = gulp.series([clean]);

const assets = gulp.series([]);

export const dev = gulp.series([prepare, assets]);

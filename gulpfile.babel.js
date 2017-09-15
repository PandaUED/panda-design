import gulp from 'gulp';
import runSequence from 'run-sequence'
import del from 'del';
import buildFiles from "./scripts/build";
import buildToc from "./scripts/toc";

gulp.task('del', () => del.sync(["data/**/*"]));

gulp.task('build:files', buildFiles);

gulp.task('build:toc', buildToc);

gulp.task('build', () => {
	return runSequence(
		[
			'del',
			'build:files'
		]
	)
});
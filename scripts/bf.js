require('shelljs/global');
try {
    hexo.on('deployAfter', function() {//当deploy完成后执行备份
        run();
    });
} catch (e) {
    console.log("产生了一个错误，错误详情为：" + e.toString());
}
function run() {
    if (!which('git')) {
        echo('Sorry, this script requires git');
        exit(0);
    } else {
        echo("======================Auto Backup Begin===========================");
        cd('F:\blog');    //此处修改为Hexo根目录路径
        if (exec('git add --all').code !== 0) {
            echo('Error: Git add failed');
            exit(0);
        }
        if (exec('git commit -m "hj update blog').code !== 0) {
            echo('Error: Git commit failed');
            exit(0);
        }
        if (exec('git push github hexo').code !== 0) {
            echo('Error: Git push github failed');
            exit(0);
        }
		if (exec('git push origin hexo').code !== 0) {
            echo('Error: Git push coding failed');
            exit(0);
        }
        echo("==================Auto Backup Complete============================")
    }
}
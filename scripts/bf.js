require('shelljs/global');
try {
    hexo.on('deployAfter', function() {//��deploy��ɺ�ִ�б���
        run();
    });
} catch (e) {
    console.log("������һ�����󣬴�������Ϊ��" + e.toString());
}
function run() {
    if (!which('git')) {
        echo('Sorry, this script requires git');
        exit(0);
    } else {
        echo("======================Auto Backup Begin===========================");
        cd('D:/blog');    //�˴��޸�ΪHexo��Ŀ¼·��
        if (exec('git add --all').code !== 0) {
            echo('Error: Git add failed');
            exit(0);
        }
        if (exec('git commit -m "Form auto backup script\'s commit"').code !== 0) {
            echo('Error: Git commit failed');
            exit(0);
        }
        if (exec('git push origin hexo').code !== 0) {
            echo('Error: Git push github failed');
            exit(0);
        }
		if (exec('git push coding hexo').code !== 0) {
            echo('Error: Git push coding failed');
            exit(0);
        }
        echo("==================Auto Backup Complete============================")
    }
}
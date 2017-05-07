#! /bin/sh

echo "---------------start debug.sh file---------------"
echo "---------------start clean---------------"
hexo clean
echo "---------------start generate---------------"
hexo g
echo "---------------start server---------------"
hexo s
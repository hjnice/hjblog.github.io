#! /bin/sh

echo "---------------start deploy.sh file---------------"
echo "---------------start clean---------------"
hexo clean
echo "---------------start generate---------------"
hexo g
echo "---------------start deploy---------------"
hexo d
echo "---------------end deploy---------------"
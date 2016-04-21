git pull
git add .
git commit -am 'autoCommit'
git push origin master
echo commit success
sleep 1s
./build.sh
echo commit gh-page success
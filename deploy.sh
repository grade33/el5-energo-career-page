set -e

git add .
git commit -m "Deploy $1"
git push origin master
git subtree push --prefix dist origin gh-pages

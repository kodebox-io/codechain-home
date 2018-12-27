#!/bin/sh

DIR=$(dirname "$0")

cd $DIR/..

echo "Deleting old publication"
rm -rf build

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

mkdir build
git worktree prune
rm -rf .git/worktrees/build/

echo "Checking out gh-pages branch into build"
git worktree add -B gh-pages build origin/gh-pages

echo "Removing existing files"
rm -rf build/*

echo "Generating site"
yarn install
yarn run build
if [ $? -eq 0 ]; then
    echo "build success"
else
    echo "build fail"
    exit 1;
fi

echo "codechain.io" >> public/CNAME

echo "Updating gh-pages branch"
cd public && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"

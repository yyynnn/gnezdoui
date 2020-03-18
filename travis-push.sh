#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
  pwd
  echo '☦ Printed working directory'
}

push_to_master() {
  git remote rm origin
  echo '☦ Remote deleted'
  git remote add origin https://yyynnn:${GH_TOKEN}@github.com/yyynnn/gneznoui.git > /dev/null 2>&1
  echo '☦ New remote added'  
  git remote update
  echo '☦ Remote update' 
  git fetch
  echo '☦ Fetch'
  git branch -a
  echo '☦ Print all branches'
  git checkout master
  echo '☦ Master checkout'  
  git pull origin release
  echo '☦ Pulled release to master'
  git add .
  echo '☦ Added'
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
  echo '☦ Commited'
  git push -u origin master
  echo '☦ Pushed to master'
}

setup_git
push_to_master


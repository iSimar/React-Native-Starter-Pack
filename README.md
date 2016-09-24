# React-Native-Starter-Pack
React Native + React-Redux + Native Base + Code Push

1) `npm i -g rninit`

2) `rninit init <new-app-name> --source react-native@0.34`, this is basically "react-native init" but you can specify a version of react-native 

3) `git init`

4) `git add . && git commit -m "first commit"`

5) `git remote add starterpack https://github.com/iSimar/React-Native-Starter-Pack.git`

6) `git pull starterpack`

7) `git merge -s recursive -X theirs starterpack/master`

8) change `new_app_name` in index.ios.js (line 5) and index.android.js (line 5) file to your new app name used in step 2

9) `npm install`

10) `code-push app add <new-app-name>`

11) `react-native link`, put the **production** code-push key from **step 10** when prompted

12) `git add . && git commit -m "first production commit"`

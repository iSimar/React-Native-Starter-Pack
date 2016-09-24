# React-Native-Starter-Pack
React Native + React-Redux + Native Base + Code Push

1) `git clone https://github.com/iSimar/React-Native-Starter-Pack.git`

2) `npm install`

3) `code-push app add <new-app-name>`

4) `git branch -c code-push-staging`

5) `react-native link`, put the staging code-push key from step 3 when prompted

6) `git commit -m "first staging commit"`

7) `git checkout master`

8) `react-native link`, put the production code-push key from step 3 when prompted

9) `git commit -m "first production commit"`

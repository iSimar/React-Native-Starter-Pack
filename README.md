# React-Native-Starter-Pack
React Native + React-Redux + Native Base + Code Push

##Setting Up Project

1) `npm i -g rninit`

2) `rninit init <new-app-name> --source react-native@0.34`, this is basically "react-native init" but you can specify a version of react-native 

3) `git init`

4) `git add . && git commit -m "first commit"`

5) `git remote add starterpack https://github.com/iSimar/React-Native-Starter-Pack.git`

6) `git pull starterpack`

7) `git merge -s recursive -X theirs starterpack/master`

8) Change `new_app_name` in index.ios.js (line 5), index.android.js (line 5) and package.json (line 2) file to `<new-app-name>`

9) `npm install`

10) `code-push app add <new-app-name>`

11) `react-native link`, put the **production** code-push key from **step 10** when prompted

12) `git add . && git commit -m "first production commit"`

##Deploying Changes Through Code Push

1) Make your code changes

3) `code-push release-react <new-app-name> ios --deploymentName Production`, release for ios

4) `code-push release-react <new-app-name> android --deploymentName Production`, release for android

**code-push release-react command options:**
```
code-push release-react <appName> <platform>
[--bundleName <bundleName>]
[--deploymentName <deploymentName>]
[--description <description>]
[--development <development>]
[--disabled <disabled>]
[--entryFile <entryFile>]
[--mandatory]
[--plistFile <plistFile>]
[--plistFilePrefix <plistFilePrefix>]
[--sourcemapOutput <sourcemapOutput>]
[--targetBinaryVersion <targetBinaryVersion>]
[--rollout <rolloutPercentage>]
```

5) You can view your current deployment stats using `code-push deployment ls <new-app-name> -k`


##Store Releases

If you want to release a new update of you app through the store (play store or app store), do the following.

1) Make your code changes.

2) Increment app version number in `ios/code_push_test/Info.plist` (CFBundleShortVersionString & CFBundleVersion) and `android/app/build.gradle` (versionCode && versionName)

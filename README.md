## PS: This was an experimental desktop app released by me before Google-Chat had a desktop application for MacOS. Google already has a desktop app now, so I recommend downloading the official app [from here](https://get.google.com/chat/)!


# Google Hangouts Chat
Unofficial desktop app for Google's new [Hangout Chat App](https://gsuite.google.com/campaigns/index__chateap.html) for people who find native apps more productive.

> MacOS desktop app for [Google's Enterprise Chat App ~ Hangouts Chat](https://chat.google.com) packaged with [Electron Forge](https://electronforge.io/).

![](https://venturebeat.com/wp-content/uploads/2017/03/d-inscreen-02-search@2x.png.png)

## Usage

>[Download the latest release!](https://github.com/siwalikm/Google-Hangouts-Chat/raw/0.2.1/out/make/Hangouts%20Chat-0.2.1.dmg)

## Contribute
Install global dependencies:
```sh
npm install -g electron-forge
```
Node version should be >= 7.2.1 to compile package correctly.

Fork this repository, clone to your local device and install dependencies:

```sh
npm install
electron-forge start
```

Build application
```sh
electron-forge make [path]
# defaults to 'source/out/..' folder
```

## Disclaimer
This desktop client is just a wrapper which starts a chromium instance locally and runs the actual web-app in it. All rights to the [Hangout Chat App](https://gsuite.google.com/campaigns/index__chateap.html) is reserved by Google and this desktop client no way accesses any of your data.


## License
[UNLICENSE](http://unlicense.org)

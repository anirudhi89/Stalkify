
# Stalkify

Do you ever stalk your friends on Spotify? You know, just to see what everyone’s listening to? Come on, we all do it, it's okay. Stalkify is here to help with that!


Stalkify is the first of its kind social network dedicated to seeing what your friends are listening to, in real time. Stalkify allows users to log in using their Spotify account, and they can see what their friends are listening to in a more intuitive format. Currently, Spotify only displays this information on desktop devices. Stalkify lets you view all your friends’ activity, no matter what device you are using.

## Setup:
1. Choose a terminal.

	1. Windows: Powershell, [Git Bash](https://git-scm.com/downloads) or [WSL](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6)

	2. macOS: Terminal or iTerm2

2. Clone the repository.

	```	

	$ gh repo clone anirudhi89/Stalkify

	```
3.  Install  [NodeJS](https://nodejs.org/)  version >= 18.x.
    1.  Windows + Git Bash/PowerShell: Use  [chocolatey](https://community.chocolatey.org/). In an Administrator PowerShell
        
        ```
        $ choco install nodejs --version 18
        
        ```
        
    2.  macOS: Use  [homebrew](https://brew.sh/):
        
        ```
        $ brew install node@18
        
        ```
        
    3.  Ubuntu: Use  [nodesource](https://github.com/nodesource/distributions):
        
        ```
        $ curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - &&\
        $ sudo apt-get install -y nodejs
        ```

## To run

From the root of the repository, run: `npm install` then `npm run dev`. 

This should open up Stalkify in your browser; if not, navigate to [https://localhost:3000](https://localhost:3000/).


## Contribution Guidelines

NOTE: As this is for a class project, at this time, we are not accepting PRs from any others. After May 23, this project will be open to all.

- Checkout the `main`, branch: `git checkout main`
- Checkout the `dev`, branch: `git checkout dev`
- Run `git pull origin main` regularly to update the dev branch
- Confirm they are both up-to-date with the `git status` command.
- Now, reate a branch, from `dev`, titled with the feature name. E.g `ui-enhancement.`
- Make your changes in this branch, with regular commits.
- Once ready, make a PR from the feature branch, to `dev`,. If this is related to an issue on  GitHub Issues, in the PR description, write `fixes #[issuenumber]`. For example, `fixes #34`
- Test your changes on both your feature branch, and on the dev branch.
- Pull Requests from dev to main will be made regularly. This practice is done in an effort to make sure that the main branch is stable at all times.
  
## Configuration

Retrieve your Spotify sp_dc key by:

- Using Google Chrome, navigate to open.spotify.com, and log in
- Press Command + Option + J on Mac, or Control + Shift + J on Windows to open Chrome Developer Tools
- Navigate to the `Application` section at the top.
- Underneath cookies, click on open.spotify.com
- Find `sp_dc` cookie, and copy it's value (not the url-encoded value).
- Close the window without logging out (Otherwise the cookies are made invalid).

## Tech Stack

### Server

The server is written in JavaScript and ExpressJs, an unopinionated framework, using the Node.js runtime.

  

### Client

The client side is written using HTML, CSS, and JavaScript.

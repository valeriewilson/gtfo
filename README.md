# GTFO

Simple [Electron](http://electron.atom.io) application that shows the cheapest flight from SFO to one of 5 locations (Seattle, Chicago, NYC, Maui, and Portland), as well as the weather for that location over the duration of the trip.

![GTFO GIF](http://g.recordit.co/9Hv9oxCs6B.gif)

## Collaborators

- [Github link](https://github.com/salomechamma "Salomê Chamma") - Google Fly API integration
- [Github link](https://github.com/thaoabunga "Thao Le") - Weather Underground API integration
- [Github link](https://github.com/valeriewilson "Valerie Wilson") - base file setup, Google Fly & Weather Underground API integrations
- [Github link](https://github.com/cafrinko "Catherine Karra") - Weather Underground API integrations
- [Github link](https://github.com/catliaw "Cat Liaw") - Google Fly API integration

## Our Gitflow workflow

- master branch: most polished, fully functional copy of project code
- develop branch: branched off of master, merged copy of the code from IC branches when smaller features are completed
- IC branches: branched off of develop, individual contributor feature work and commits to be pushed once completed

### Initial set-up

1. All features should be developed on an IC branch
2. Navigate to the develop branch: `git checkout develop`
3. Create a new IC branch & navigate to it: `git checkout -b "your_name"`

### Committing code

1. On your branch, add and commit your files: `git commit -am "Commit message"`
2. Still on your branch, push your commits to Github: `git push "your_remote" "your_name`
3. Navigate to the develop branch: `git checkout develop`
4. Pull the latest changes from Github: `git pull "your_remote" develop`
5. Merge code from your branch into develop: `git merge "your_name"`
6. On Github, there might be a flash message asking you to do a pull request; do this to officially merge your changes

## Getting started

- Install [Node LTS](https://nodejs.org)
- Clone this repository
- `npm install` to install the application's dependencies
- `npm start` to start the application

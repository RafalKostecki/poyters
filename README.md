# Poyters
Poyters is my own brand single page application. I hand-coded it in the newest Angular version. Provides easy inject presentation data mechanism. Poyters web app provides nice and easy space for custom users where they can find the best of my projects (mainly games). Also business newcomers find here something for them like my Portfolio.

## Set up
To set up a whole project (including API) at first, u need to `git clone` Poyters repository and than go to main dir and run `npm install` command to get all API packages. You have to do the same at /client directory to get Poyters client packages. To run both (API and client) need to run `npm start` command at specific directory - main for API and /client for client side of the project.


## Changelog

### Version 1.3.0 (planned October 2020)
- Create contact form
- Delete /diary page
- Add Project Stella to /home and /portfolio
- Swap Hiper Jumper 2000 by Hiper Jumper 3000
- Redesign and rewrite /home page
- Redesign and rewrite error massages for all forms
- Redesign signup and signin forms
- Sent emailf after registration
- Redesign hosting architecture. Keep all project as subdomains, eg breadhunter4.poyters.pl
- Fix credit footer overflow


### Version 1.2.0 (16 April 2020)
- Redesign and rewrite menu
- Rewrite and redesign /portfolio page
- Rewrite category component
- Redesign login panel


### Version 1.1.0 (1 March 2020)
- If user is logged, he cannot go to /signin or /signup
- User can log in and log out and create Poyters account
- Protect JWT by http-only cookie
- Show message about wrong credentials at sign in
- Redesign page logo
- Create protected base account view
- Update all npm packages
- Redesign and rewrite footer
- Create resume at portfolio page
- Turn off alerts


### Version 1.0.0 (8 January 2020)
- Rewrite Data service
- Close menu after change page (mobile)
- Redesign project architecture
- Remove renome from portfolio
- Fix images overflow
- Optimize web page
- Add images lazy loading
- Change Poyters colors to more bright

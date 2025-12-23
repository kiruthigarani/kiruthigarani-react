# kiruthigarani-react

# parcel
- create a dev build
- create local server
- HMR = Hot Module Replacement -  Parcel provides Hot Module Replacement (HMR) automatically with zero configuration for development, which allows you to update code in the browser without a full page reload. 
- How it Works
When you run Parcel's development server (usually with a command like parcel src/index.html or npm start), it:
Watches files for changes.
Rebuilds only the changed modules.
Communicates the update to the browser via WebSockets.
Replaces the old code with the new code in the running application, preserving the application's state (e.g., form input, scroll position). 
- Parcel use file watching algorithm written in c++
- Parcel use caching so it gives faster development build

- image optimization
- minification
- bundling
- tree shaking - remove unused code
- consistent hashing, browserlist package - read abt it
- code splitting
- differential bundling - support for old browsers
- error handling
- error diagnostic
- will give https

- read more about parcel from official doc
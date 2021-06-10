# June 6, 2021 Meeting (7:00 - 8:00 PM)
Attendance: Hugo, Joshua, Nora, Kevin, Stephen, Jun, Tony, Nathaniel

Agenda:
1. talk over anything that needs to still be done
2. designate video roles

Notes
- deployment looks good!
  - uses heroku, link here: https://journalcse110.herokuapp.com/
    - url can be changed, but costs money (not worth it)
  - will switch to fit the main branch 

Settings
- issue is that settings aren’t actually saving
- potential solution:
  - have new route for settings, create settings schema for every setting set
    - this way, every time that a page is loaded it loads the setting
  - we do form submission, use put request to save settings
    - use fetch from database to load settings
- for changing to some font-families we need to change button layout (sizing)

Testing
- Stephen + Tony testing main
  - don’t modify script-main.js and main.js
- Nathaniel testing middleware
  - if signed in, if not
  - if guest, test whether can load pages
- Joshua testing config
- Michael testing calendar and sign in

Video stuff for monday night
- storyboarding
  - Joshua
  - Jun
  - Nora
  - Kevin
  - Aiden
  - Nathaniel (when done testing middleware)
- editing
- recording
  - stephen and nora > backend and database
  - >frontend
  - Nathaniel > CI/CD
- Repo Finalization
  - Joshua

# May 18, 2021 Meeting (7:00 - 9:30 PM)
Attendance: Nathaniel, Joshua, Nora, Jun, Stephen, Michael, Hugo, Tony, Kevin, Aidan (Everyone :DD)

### Agenda:
### Goal of today is to evaluate our design choices as a team
- subteam discussion, in breakout rooms (~30 minutes, however long needed)
- Team discussion on things needed to be shared with everyone, can discuss about extra cross-team implementations

### Notes:
- We are allowed to only have google login.
- Update from backend
  - Fetch all journals of a user from the database only when the user login. For each page, the frontend sends the journals/pages data to the backend so that backend can filter the data the frontend wants.
  - Frontend not only work on css, but also scripts
- no file index on calendar view
- back button on journal view to go back to calendar view
- “What the hell is our calendar supposed to do??” 
	- Joshua Zhu, 7:51 PM Tuesday 5/18/2021
  - Events vs pages
    - events solely on calendar
    - pages solely on journal view
  - track date, title, and description of events

![Calendar](./images/calendar%20implementation.png)
![Entry Definition](./images/entry%20definition.png)

- idea - have calendar just be boxes of text editors, so user can freely edit whenever; data is saved when the user leaves the site or when they hit a save button
- day view is opened and that is a text editor itself
- pages contain information; special bullets in page will differentiate tasks from notes and events; text following a special bullet will be attributed to an idea
  - event bullet will have that bullet show up on the calendar for that day
- User view default to current day page
- Sanat said MVP should not include custom collections
- File index should hold custom collections, but also allows for date pages to be created
  - should we have a dropdown for collections and have file index only show files under that collection?
  - selecting date on file index:
    - if date has data already: populate text editor with data to edit
    - if date does not have data already: create new page for day; empty text

### File Index
- Calendar
  - January
    - 9/5/21
    - 9/6/21
    - 9/10/21
    - 9/12/21
    - 9/15/21
  - Feb
- CSE 101 Notes
  - X
  - Y
  - Z
- CSE 110 Notes 
  - A
  - B
  - C
- Dinner Plans

- Other custom collection

Add page
Date: XYZ
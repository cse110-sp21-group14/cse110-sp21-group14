# Sprint Review Meeting Notes (5/15)
Attendance: Josh, Nora, Nathaniel, Jun, Kevin, Michael, Aidan, Stephen, Tony

## Planning:
 - using github Projects to manage our tools (built-in kanban-like board)
   - use extensively now, open individual issues for users, and resolve accordingly
## CI/CD:
 - Basic unit tests structure using Jest
   - no tests now; later, will populate as coders/testers creates tests
 - Added ESLint to check code style
 - JSDocs automatically updates to Wiki
   - need wonders to annotate headers/functions
## Frontend:
 - html for adding new page/file (done, css in progress)
 - html for page view (done, css in progress)
 - html for month view (html is in progress, working with backend)
   - working with backend to configure first date, and other dates
 - login screen updated (no more custom login, only Google)
 - Main menu added
   - some css
   - issues: scaling - depending on window size
 - Week view in progress
 - Need journal view page

## Backend:
 - Schemas
   - User 
     - google_id for finding users
     - use user to find journals
   - Journal
     - trim - no space
     - binded with users via google_id
   - Page
     - binded with users via google_id
     - Binded with journal via journalName
 - Testing journal and pages with routes
   - Main page: 
     - backend -  filter specific user’s journals based on google_id
     - frontend - display journals using handlebars, click on journal => show all pages of the journal => click on page => goto page view
     - URL - /main/:journal._id
 - Fetching data from database
 - issue with how to implement the file index and sidebar, as of right now backend is coded to reflect new pages per journal

## Modules

<dl>
<dt><a href="#module_calendar module">calendar module</a></dt>
<dd><p>Middleware to protect users security</p>
</dd>
<dt><a href="#module_passport module">passport module</a></dt>
<dd><p>Passport for Google OAuth2</p>
</dd>
<dt><a href="#module_decrypting module">decrypting module</a></dt>
<dd><p>Decrypted data from MongoDB to original journal(s)/page(s)</p>
</dd>
<dt><a href="#module_calendar module">calendar module</a></dt>
<dd><p>Calendar route</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Calendar">Calendar</a></dt>
<dd></dd>
<dt><a href="#PageSchema">PageSchema</a></dt>
<dd></dd>
<dt><a href="#UserSchema">UserSchema</a></dt>
<dd></dd>
<dt><a href="#JournalSchema">JournalSchema</a></dt>
<dd></dd>
<dt><a href="#DailySchema">DailySchema</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#express">express</a></dt>
<dd><p>express module</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#sum">sum(a, b)</a> ⇒</dt>
<dd></dd>
<dt><a href="#connectDB">connectDB()</a></dt>
<dd><p>Connect to MongoDB database</p>
</dd>
<dt><a href="#/calendar">/calendar(URL, ensureAuth, middleware)</a></dt>
<dd><p>Month view</p>
</dd>
<dt><a href="#/calendar">/calendar(URL, ensureGuest, middleware)</a></dt>
<dd><p>Login page</p>
</dd>
<dt><a href="#/main">/main(URL, ensureAuth, middleware)</a></dt>
<dd><p>Responds with a list of all journals belonging to the user (json)</p>
</dd>
<dt><a href="#/calendar/journals">/calendar/journals(URL, ensureAuth, middleware)</a></dt>
<dd><p>Responds with a list of all journals belonging to the user (json)</p>
</dd>
<dt><a href="#/main/journal/_id">/main/journal/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Get a specific journal from its id</p>
</dd>
<dt><a href="#/main/_id/pages">/main/:id/pages(URL, ensureAuth, middleware)</a></dt>
<dd><p>Gets the pages of a specific journal</p>
</dd>
<dt><a href="#/main/page/_id">/main/page/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Get a specific page from a specific journal</p>
</dd>
<dt><a href="#/main/page/_id/fetch">/main/page/:id/fetch(URL, ensureAuth, middleware)</a></dt>
<dd><p>Get a specific page from a specific journal</p>
</dd>
<dt><a href="#/main/daily/_id">/main/daily/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Get a specific daily from its id</p>
</dd>
<dt><a href="#/main/daily/_month/_date/_year">/main/daily/:month/:date/:year(URL, ensureAuth, middleware)</a></dt>
<dd><p>Get a specific daily by month-date-year</p>
</dd>
<dt><a href="#/main/daily/_month/_year">/main/daily/:month/:year(URL, ensureAuth, middleware)</a></dt>
<dd><p>Gets all dailies based on month and year</p>
</dd>
<dt><a href="#/main/journal">/main/journal(URL, ensureAuth, middleware)</a></dt>
<dd><p>Creates a new journal from a post request</p>
</dd>
<dt><a href="#/main/post/journal/_id">/main/post/journal/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Creates a page in the specified journal from a post request</p>
</dd>
<dt><a href="#/main/daily">/main/daily(URL, ensureAuth, middleware)</a></dt>
<dd><p>Creates a new daily object</p>
</dd>
<dt><a href="#/main/page/_id">/main/page/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Updates a page given its id</p>
</dd>
<dt><a href="#/main/daily/_id">/main/daily/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Updates a daily given its _id</p>
</dd>
<dt><a href="#/main/journal/_id">/main/journal/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Deletes a journal given its _id</p>
</dd>
<dt><a href="#/main/page/_id">/main/page/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Deletes a page given its _id</p>
</dd>
<dt><a href="#/main/daily/_id">/main/daily/:id(URL, ensureAuth, middleware)</a></dt>
<dd><p>Deletes a daily given its _id</p>
</dd>
<dt><a href="#/main/daily/_month/_date/_year">/main/daily/:month/:date/:year(URL, ensureAuth, middleware)</a></dt>
<dd><p>Deletes a daily given the month-date-year</p>
</dd>
<dt><a href="#/main/add/journal">/main/add/journal(URL, ensureAuth, middleware)</a></dt>
<dd><p>Add a new journal</p>
</dd>
<dt><a href="#/main/add/_journalId/page">/main/add/:journalId/page(URL, ensureAuth, middleware)</a></dt>
<dd><p>Add a page to a specific journal</p>
</dd>
<dt><a href="#/auth/google">/auth/google(URL, middleware)</a></dt>
<dd><p>Auth w Google</p>
</dd>
<dt><a href="#/auth/google/callback">/auth/google/callback(URL, middleware)</a></dt>
<dd><p>Callback function after login</p>
</dd>
<dt><a href="#/auth/logout">/auth/logout(URL, middleware)</a></dt>
<dd><p>Logout user</p>
</dd>
<dt><a href="#createCalendar">createCalendar(calendar, element, adjuster)</a></dt>
<dd><p>Creates a calendar</p>
</dd>
<dt><a href="#calendar">calendar(el, data)</a></dt>
<dd><p>Create calendar</p>
</dd>
</dl>

<a name="module_calendar module"></a>

## calendar module
Middleware to protect users security

<a name="module_passport module"></a>

## passport module
Passport for Google OAuth2

<a name="module_decrypting module"></a>

## decrypting module
Decrypted data from MongoDB to original journal(s)/page(s)

<a name="module_calendar module"></a>

## calendar module
Calendar route

<a name="Calendar"></a>

## Calendar
**Kind**: global class  
<a name="new_Calendar_new"></a>

### new Calendar(model, date)

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| date | <code>Date</code> | 

<a name="PageSchema"></a>

## PageSchema
**Kind**: global class  
<a name="UserSchema"></a>

## UserSchema
**Kind**: global class  
<a name="JournalSchema"></a>

## JournalSchema
**Kind**: global class  
<a name="DailySchema"></a>

## DailySchema
**Kind**: global class  
<a name="express"></a>

## express
express module

**Kind**: global constant  
<a name="sum"></a>

## sum(a, b) ⇒
**Kind**: global function  
**Returns**: sum of a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="connectDB"></a>

## connectDB()
Connect to MongoDB database

**Kind**: global function  
<a name="/calendar"></a>

## /calendar(URL, ensureAuth, middleware)
Month view

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/calendar"></a>

## /calendar(URL, ensureGuest, middleware)
Login page

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureGuest | <code>callback</code> | Ensure user not enter the page before login |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main"></a>

## /main(URL, ensureAuth, middleware)
Responds with a list of all journals belonging to the user (json)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/calendar/journals"></a>

## /calendar/journals(URL, ensureAuth, middleware)
Responds with a list of all journals belonging to the user (json)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/journal/_id"></a>

## /main/journal/:id(URL, ensureAuth, middleware)
Get a specific journal from its id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/_id/pages"></a>

## /main/:id/pages(URL, ensureAuth, middleware)
Gets the pages of a specific journal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/page/_id"></a>

## /main/page/:id(URL, ensureAuth, middleware)
Get a specific page from a specific journal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/page/_id/fetch"></a>

## /main/page/:id/fetch(URL, ensureAuth, middleware)
Get a specific page from a specific journal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/daily/_id"></a>

## /main/daily/:id(URL, ensureAuth, middleware)
Get a specific daily from its id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/daily/_month/_date/_year"></a>

## /main/daily/:month/:date/:year(URL, ensureAuth, middleware)
Get a specific daily by month-date-year

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/daily/_month/_year"></a>

## /main/daily/:month/:year(URL, ensureAuth, middleware)
Gets all dailies based on month and year

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/journal"></a>

## /main/journal(URL, ensureAuth, middleware)
Creates a new journal from a post request

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/post/journal/_id"></a>

## /main/post/journal/:id(URL, ensureAuth, middleware)
Creates a page in the specified journal from a post request

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/daily"></a>

## /main/daily(URL, ensureAuth, middleware)
Creates a new daily object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/page/_id"></a>

## /main/page/:id(URL, ensureAuth, middleware)
Updates a page given its id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/daily/_id"></a>

## /main/daily/:id(URL, ensureAuth, middleware)
Updates a daily given its _id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/journal/_id"></a>

## /main/journal/:id(URL, ensureAuth, middleware)
Deletes a journal given its _id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/page/_id"></a>

## /main/page/:id(URL, ensureAuth, middleware)
Deletes a page given its _id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/daily/_id"></a>

## /main/daily/:id(URL, ensureAuth, middleware)
Deletes a daily given its _id

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/daily/_month/_date/_year"></a>

## /main/daily/:month/:date/:year(URL, ensureAuth, middleware)
Deletes a daily given the month-date-year

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/add/journal"></a>

## /main/add/journal(URL, ensureAuth, middleware)
Add a new journal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/main/add/_journalId/page"></a>

## /main/add/:journalId/page(URL, ensureAuth, middleware)
Add a page to a specific journal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| ensureAuth | <code>callback</code> | Ensure user security when refreshing the page |
| middleware | <code>callback</code> | Express middleware. |

<a name="/auth/google"></a>

## /auth/google(URL, middleware)
Auth w Google

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| middleware | <code>callback</code> | Express middleware. |

<a name="/auth/google/callback"></a>

## /auth/google/callback(URL, middleware)
Callback function after login

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| middleware | <code>callback</code> | Express middleware. |

<a name="/auth/logout"></a>

## /auth/logout(URL, middleware)
Logout user

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>string</code> | Express path |
| middleware | <code>callback</code> | Express middleware. |

<a name="createCalendar"></a>

## createCalendar(calendar, element, adjuster)
Creates a calendar

**Kind**: global function  

| Param | Type |
| --- | --- |
| calendar | [<code>Calendar</code>](#Calendar) | 
| element | <code>Element</code> | 
| adjuster | <code>\*</code> | 


* [createCalendar(calendar, element, adjuster)](#createCalendar)
    * [~AddDateTime()](#createCalendar..AddDateTime)
    * [~AddLabels()](#createCalendar..AddLabels)
    * [~AddDays()](#createCalendar..AddDays)
        * [~DayNumber(n)](#createCalendar..AddDays..DayNumber) ⇒ <code>number</code>

<a name="createCalendar..AddDateTime"></a>

### createCalendar~AddDateTime()
Creates today's date, next/prev month button in the HTML

**Kind**: inner method of [<code>createCalendar</code>](#createCalendar)  
<a name="createCalendar..AddLabels"></a>

### createCalendar~AddLabels()
Adds weekday labels to the HTML

**Kind**: inner method of [<code>createCalendar</code>](#createCalendar)  
<a name="createCalendar..AddDays"></a>

### createCalendar~AddDays()
Add days to the HTML

**Kind**: inner method of [<code>createCalendar</code>](#createCalendar)  
<a name="createCalendar..AddDays..DayNumber"></a>

#### AddDays~DayNumber(n) ⇒ <code>number</code>
Create Number Element

**Kind**: inner method of [<code>AddDays</code>](#createCalendar..AddDays)  

| Param | Type |
| --- | --- |
| n | <code>int</code> | 

<a name="calendar"></a>

## calendar(el, data)
Create calendar

**Kind**: global function  

| Param | Type |
| --- | --- |
| el | <code>Element</code> | 
| data | <code>Event</code> | 


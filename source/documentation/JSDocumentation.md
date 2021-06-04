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
<dt><a href="#Events">Events</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#Notes">Notes</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#Tasks">Tasks</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#Ordered">Ordered</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#Events">Events</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#Notes">Notes</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#Tasks">Tasks</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#Ordered">Ordered</a></dt>
<dd><p>NestedList Tool for EditorJS</p>
</dd>
<dt><a href="#PageSchema">PageSchema</a></dt>
<dd></dd>
<dt><a href="#UserSchema">UserSchema</a></dt>
<dd></dd>
<dt><a href="#JournalSchema">JournalSchema</a></dt>
<dd></dd>
<dt><a href="#DailySchema">DailySchema</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#range">range</a> ⇒ <code>Range</code> | <code>null</code></dt>
<dd><p>Returns the first range</p>
</dd>
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
<dt><a href="#save">save()</a> ⇒ <code>void</code></dt>
<dd><p>Saves caret position using hidden <span></p>
</dd>
<dt><a href="#restore">restore()</a> ⇒ <code>void</code></dt>
<dd><p>Restores the caret position saved by the save() method</p>
</dd>
<dt><a href="#extractFragmentFromCaretPositionTillTheEnd">extractFragmentFromCaretPositionTillTheEnd()</a> ⇒ <code>DocumentFragment</code> | <code>void</code></dt>
<dd><p>Extract content fragment from Caret position to the end of contenteditable element</p>
</dd>
<dt><a href="#focus">focus(element, atStart)</a> ⇒ <code>void</code></dt>
<dd><p>Set focus to contenteditable or native input element</p>
</dd>
<dt><a href="#isAtStart">isAtStart()</a> ⇒ <code>void</code></dt>
<dd><p>Check if the caret placed at the start of the contenteditable element</p>
</dd>
<dt><a href="#getHigherLevelSiblings">getHigherLevelSiblings(from, direction)</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Get all first-level (first child of [contenteditabel]) siblings from passed node
Then you can check it for emptiness</p>
</dd>
<dt><a href="#make">make(tagName, classNames, attributes)</a> ⇒ <code>Element</code></dt>
<dd><p>Helper for making Elements with attributes</p>
</dd>
<dt><a href="#fragmentToString">fragmentToString(fragment)</a> ⇒ <code>string</code></dt>
<dd><p>Returns the HTML content of passed Document Fragment</p>
</dd>
<dt><a href="#isEmpty">isEmpty(node)</a> ⇒ <code>boolean</code></dt>
<dd><p>Pushes to stack all DOM leafs and checks for emptiness</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ListData">ListData</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ListItem">ListItem</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ListData">ListData</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ListItem">ListItem</a> : <code>object</code></dt>
<dd></dd>
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

<a name="Events"></a>

## Events
NestedList Tool for EditorJS

**Kind**: global class  

* [Events](#Events)
    * [new Events(params)](#new_Events_new)
    * [new Events(params)](#new_Events_new)
    * _instance_
        * [.nodes](#Events+nodes)
        * [.defaultListStyle](#Events+defaultListStyle)
        * [.caret](#Events+caret)
        * [.listStyle](#Events+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Events+listStyle)
        * [.currentItem](#Events+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Events+nodes)
        * [.defaultListStyle](#Events+defaultListStyle)
        * [.caret](#Events+caret)
        * [.listStyle](#Events+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Events+listStyle)
        * [.currentItem](#Events+currentItem) ⇒ <code>Element</code>
        * [.render()](#Events+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Events+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Events+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Events+createItem) ⇒ <code>Element</code>
        * [.save()](#Events+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Events+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Events+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Events+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Events+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Events+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Events+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Events+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Events+backspace)
        * [.addTab(event)](#Events+addTab)
        * [.shiftTab(event)](#Events+shiftTab) ⇒ <code>void</code>
        * [.render()](#Events+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Events+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Events+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Events+createItem) ⇒ <code>Element</code>
        * [.save()](#Events+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Events+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Events+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Events+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Events+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Events+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Events+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Events+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Events+backspace)
        * [.addTab(event)](#Events+addTab)
        * [.shiftTab(event)](#Events+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Events.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Events.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Events.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Events.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Events.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Events.toolbox) ⇒ <code>Object</code>

<a name="new_Events_new"></a>

### new Events(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Events_new"></a>

### new Events(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Events+nodes"></a>

### events.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+defaultListStyle"></a>

### events.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+caret"></a>

### events.caret
Instantiate caret helper

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle
Set list style

**Kind**: instance property of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Events+currentItem"></a>

### events.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+nodes"></a>

### events.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+defaultListStyle"></a>

### events.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+caret"></a>

### events.caret
Instantiate caret helper

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle
Set list style

**Kind**: instance property of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Events+currentItem"></a>

### events.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+render"></a>

### events.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+renderSettings"></a>

### events.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+appendItems"></a>

### events.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Events+createItem"></a>

### events.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Events+save"></a>

### events.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+addChildrenList"></a>

### events.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Events+makeListWrapper"></a>

### events.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Events+enterPressed"></a>

### events.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+unshiftItem"></a>

### events.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+getItemContent"></a>

### events.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Events+focusItem"></a>

### events.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Events+getOutOfList"></a>

### events.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+backspace"></a>

### events.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+addTab"></a>

### events.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+shiftTab"></a>

### events.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+render"></a>

### events.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+renderSettings"></a>

### events.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+appendItems"></a>

### events.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Events+createItem"></a>

### events.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Events+save"></a>

### events.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+addChildrenList"></a>

### events.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Events+makeListWrapper"></a>

### events.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Events+enterPressed"></a>

### events.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+unshiftItem"></a>

### events.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+getItemContent"></a>

### events.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Events+focusItem"></a>

### events.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Events+getOutOfList"></a>

### events.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+backspace"></a>

### events.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+addTab"></a>

### events.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+shiftTab"></a>

### events.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events.isReadOnlySupported"></a>

### Events.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Events.enableLineBreaks"></a>

### Events.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events.toolbox"></a>

### Events.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Events.isReadOnlySupported"></a>

### Events.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Events.enableLineBreaks"></a>

### Events.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events.toolbox"></a>

### Events.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Notes"></a>

## Notes
NestedList Tool for EditorJS

**Kind**: global class  

* [Notes](#Notes)
    * [new Notes(params)](#new_Notes_new)
    * [new Notes(params)](#new_Notes_new)
    * _instance_
        * [.nodes](#Notes+nodes)
        * [.defaultListStyle](#Notes+defaultListStyle)
        * [.caret](#Notes+caret)
        * [.listStyle](#Notes+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Notes+listStyle)
        * [.currentItem](#Notes+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Notes+nodes)
        * [.defaultListStyle](#Notes+defaultListStyle)
        * [.caret](#Notes+caret)
        * [.listStyle](#Notes+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Notes+listStyle)
        * [.currentItem](#Notes+currentItem) ⇒ <code>Element</code>
        * [.render()](#Notes+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Notes+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Notes+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Notes+createItem) ⇒ <code>Element</code>
        * [.save()](#Notes+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Notes+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Notes+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Notes+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Notes+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Notes+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Notes+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Notes+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Notes+backspace)
        * [.addTab(event)](#Notes+addTab)
        * [.shiftTab(event)](#Notes+shiftTab) ⇒ <code>void</code>
        * [.render()](#Notes+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Notes+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Notes+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Notes+createItem) ⇒ <code>Element</code>
        * [.save()](#Notes+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Notes+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Notes+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Notes+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Notes+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Notes+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Notes+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Notes+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Notes+backspace)
        * [.addTab(event)](#Notes+addTab)
        * [.shiftTab(event)](#Notes+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Notes.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Notes.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Notes.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Notes.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Notes.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Notes.toolbox) ⇒ <code>Object</code>

<a name="new_Notes_new"></a>

### new Notes(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Notes_new"></a>

### new Notes(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Notes+nodes"></a>

### notes.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+defaultListStyle"></a>

### notes.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+caret"></a>

### notes.caret
Instantiate caret helper

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle
Set list style

**Kind**: instance property of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Notes+currentItem"></a>

### notes.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+nodes"></a>

### notes.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+defaultListStyle"></a>

### notes.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+caret"></a>

### notes.caret
Instantiate caret helper

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle
Set list style

**Kind**: instance property of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Notes+currentItem"></a>

### notes.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+render"></a>

### notes.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+renderSettings"></a>

### notes.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+appendItems"></a>

### notes.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Notes+createItem"></a>

### notes.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Notes+save"></a>

### notes.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+addChildrenList"></a>

### notes.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Notes+makeListWrapper"></a>

### notes.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Notes+enterPressed"></a>

### notes.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+unshiftItem"></a>

### notes.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+getItemContent"></a>

### notes.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Notes+focusItem"></a>

### notes.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Notes+getOutOfList"></a>

### notes.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+backspace"></a>

### notes.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+addTab"></a>

### notes.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+shiftTab"></a>

### notes.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+render"></a>

### notes.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+renderSettings"></a>

### notes.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+appendItems"></a>

### notes.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Notes+createItem"></a>

### notes.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Notes+save"></a>

### notes.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+addChildrenList"></a>

### notes.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Notes+makeListWrapper"></a>

### notes.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Notes+enterPressed"></a>

### notes.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+unshiftItem"></a>

### notes.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+getItemContent"></a>

### notes.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Notes+focusItem"></a>

### notes.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Notes+getOutOfList"></a>

### notes.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+backspace"></a>

### notes.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+addTab"></a>

### notes.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+shiftTab"></a>

### notes.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes.isReadOnlySupported"></a>

### Notes.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Notes.enableLineBreaks"></a>

### Notes.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes.toolbox"></a>

### Notes.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Notes.isReadOnlySupported"></a>

### Notes.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Notes.enableLineBreaks"></a>

### Notes.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes.toolbox"></a>

### Notes.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Tasks"></a>

## Tasks
NestedList Tool for EditorJS

**Kind**: global class  

* [Tasks](#Tasks)
    * [new Tasks(params)](#new_Tasks_new)
    * [new Tasks(params)](#new_Tasks_new)
    * _instance_
        * [.nodes](#Tasks+nodes)
        * [.defaultListStyle](#Tasks+defaultListStyle)
        * [.caret](#Tasks+caret)
        * [.listStyle](#Tasks+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Tasks+listStyle)
        * [.currentItem](#Tasks+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Tasks+nodes)
        * [.defaultListStyle](#Tasks+defaultListStyle)
        * [.caret](#Tasks+caret)
        * [.listStyle](#Tasks+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Tasks+listStyle)
        * [.currentItem](#Tasks+currentItem) ⇒ <code>Element</code>
        * [.render()](#Tasks+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Tasks+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Tasks+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Tasks+createItem) ⇒ <code>Element</code>
        * [.save()](#Tasks+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Tasks+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Tasks+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Tasks+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Tasks+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Tasks+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Tasks+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Tasks+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Tasks+backspace)
        * [.addTab(event)](#Tasks+addTab)
        * [.shiftTab(event)](#Tasks+shiftTab) ⇒ <code>void</code>
        * [.render()](#Tasks+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Tasks+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Tasks+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Tasks+createItem) ⇒ <code>Element</code>
        * [.save()](#Tasks+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Tasks+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Tasks+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Tasks+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Tasks+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Tasks+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Tasks+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Tasks+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Tasks+backspace)
        * [.addTab(event)](#Tasks+addTab)
        * [.shiftTab(event)](#Tasks+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Tasks.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Tasks.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Tasks.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Tasks.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Tasks.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Tasks.toolbox) ⇒ <code>Object</code>

<a name="new_Tasks_new"></a>

### new Tasks(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Tasks_new"></a>

### new Tasks(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Tasks+nodes"></a>

### tasks.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+defaultListStyle"></a>

### tasks.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+caret"></a>

### tasks.caret
Instantiate caret helper

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle
Set list style

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Tasks+currentItem"></a>

### tasks.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+nodes"></a>

### tasks.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+defaultListStyle"></a>

### tasks.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+caret"></a>

### tasks.caret
Instantiate caret helper

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle
Set list style

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Tasks+currentItem"></a>

### tasks.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+render"></a>

### tasks.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+renderSettings"></a>

### tasks.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+appendItems"></a>

### tasks.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Tasks+createItem"></a>

### tasks.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Tasks+save"></a>

### tasks.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+addChildrenList"></a>

### tasks.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Tasks+makeListWrapper"></a>

### tasks.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Tasks+enterPressed"></a>

### tasks.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+unshiftItem"></a>

### tasks.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+getItemContent"></a>

### tasks.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Tasks+focusItem"></a>

### tasks.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Tasks+getOutOfList"></a>

### tasks.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+backspace"></a>

### tasks.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+addTab"></a>

### tasks.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+shiftTab"></a>

### tasks.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+render"></a>

### tasks.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+renderSettings"></a>

### tasks.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+appendItems"></a>

### tasks.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Tasks+createItem"></a>

### tasks.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Tasks+save"></a>

### tasks.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+addChildrenList"></a>

### tasks.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Tasks+makeListWrapper"></a>

### tasks.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Tasks+enterPressed"></a>

### tasks.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+unshiftItem"></a>

### tasks.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+getItemContent"></a>

### tasks.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Tasks+focusItem"></a>

### tasks.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Tasks+getOutOfList"></a>

### tasks.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+backspace"></a>

### tasks.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+addTab"></a>

### tasks.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+shiftTab"></a>

### tasks.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks.isReadOnlySupported"></a>

### Tasks.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks.enableLineBreaks"></a>

### Tasks.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks.toolbox"></a>

### Tasks.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks.isReadOnlySupported"></a>

### Tasks.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks.enableLineBreaks"></a>

### Tasks.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks.toolbox"></a>

### Tasks.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Ordered"></a>

## Ordered
NestedList Tool for EditorJS

**Kind**: global class  

* [Ordered](#Ordered)
    * [new Ordered(params)](#new_Ordered_new)
    * [new Ordered(params)](#new_Ordered_new)
    * _instance_
        * [.nodes](#Ordered+nodes)
        * [.defaultListStyle](#Ordered+defaultListStyle)
        * [.caret](#Ordered+caret)
        * [.listStyle](#Ordered+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Ordered+listStyle)
        * [.currentItem](#Ordered+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Ordered+nodes)
        * [.defaultListStyle](#Ordered+defaultListStyle)
        * [.caret](#Ordered+caret)
        * [.listStyle](#Ordered+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Ordered+listStyle)
        * [.currentItem](#Ordered+currentItem) ⇒ <code>Element</code>
        * [.render()](#Ordered+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Ordered+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Ordered+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Ordered+createItem) ⇒ <code>Element</code>
        * [.save()](#Ordered+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Ordered+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Ordered+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Ordered+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Ordered+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Ordered+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Ordered+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Ordered+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Ordered+backspace)
        * [.addTab(event)](#Ordered+addTab)
        * [.shiftTab(event)](#Ordered+shiftTab) ⇒ <code>void</code>
        * [.render()](#Ordered+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Ordered+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Ordered+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Ordered+createItem) ⇒ <code>Element</code>
        * [.save()](#Ordered+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Ordered+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Ordered+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Ordered+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Ordered+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Ordered+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Ordered+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Ordered+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Ordered+backspace)
        * [.addTab(event)](#Ordered+addTab)
        * [.shiftTab(event)](#Ordered+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Ordered.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Ordered.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Ordered.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Ordered.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Ordered.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Ordered.toolbox) ⇒ <code>Object</code>

<a name="new_Ordered_new"></a>

### new Ordered(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Ordered_new"></a>

### new Ordered(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Ordered+nodes"></a>

### ordered.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+defaultListStyle"></a>

### ordered.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+caret"></a>

### ordered.caret
Instantiate caret helper

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle
Set list style

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Ordered+currentItem"></a>

### ordered.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+nodes"></a>

### ordered.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+defaultListStyle"></a>

### ordered.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+caret"></a>

### ordered.caret
Instantiate caret helper

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle
Set list style

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Ordered+currentItem"></a>

### ordered.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+render"></a>

### ordered.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+renderSettings"></a>

### ordered.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+appendItems"></a>

### ordered.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Ordered+createItem"></a>

### ordered.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Ordered+save"></a>

### ordered.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+addChildrenList"></a>

### ordered.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Ordered+makeListWrapper"></a>

### ordered.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Ordered+enterPressed"></a>

### ordered.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+unshiftItem"></a>

### ordered.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+getItemContent"></a>

### ordered.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Ordered+focusItem"></a>

### ordered.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Ordered+getOutOfList"></a>

### ordered.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+backspace"></a>

### ordered.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+addTab"></a>

### ordered.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+shiftTab"></a>

### ordered.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+render"></a>

### ordered.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+renderSettings"></a>

### ordered.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+appendItems"></a>

### ordered.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Ordered+createItem"></a>

### ordered.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Ordered+save"></a>

### ordered.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+addChildrenList"></a>

### ordered.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Ordered+makeListWrapper"></a>

### ordered.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Ordered+enterPressed"></a>

### ordered.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+unshiftItem"></a>

### ordered.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+getItemContent"></a>

### ordered.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Ordered+focusItem"></a>

### ordered.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Ordered+getOutOfList"></a>

### ordered.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+backspace"></a>

### ordered.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+addTab"></a>

### ordered.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+shiftTab"></a>

### ordered.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered.isReadOnlySupported"></a>

### Ordered.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered.enableLineBreaks"></a>

### Ordered.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered.toolbox"></a>

### Ordered.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered.isReadOnlySupported"></a>

### Ordered.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered.enableLineBreaks"></a>

### Ordered.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered.toolbox"></a>

### Ordered.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
<a name="Events"></a>

## Events
NestedList Tool for EditorJS

**Kind**: global class  

* [Events](#Events)
    * [new Events(params)](#new_Events_new)
    * [new Events(params)](#new_Events_new)
    * _instance_
        * [.nodes](#Events+nodes)
        * [.defaultListStyle](#Events+defaultListStyle)
        * [.caret](#Events+caret)
        * [.listStyle](#Events+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Events+listStyle)
        * [.currentItem](#Events+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Events+nodes)
        * [.defaultListStyle](#Events+defaultListStyle)
        * [.caret](#Events+caret)
        * [.listStyle](#Events+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Events+listStyle)
        * [.currentItem](#Events+currentItem) ⇒ <code>Element</code>
        * [.render()](#Events+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Events+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Events+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Events+createItem) ⇒ <code>Element</code>
        * [.save()](#Events+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Events+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Events+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Events+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Events+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Events+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Events+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Events+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Events+backspace)
        * [.addTab(event)](#Events+addTab)
        * [.shiftTab(event)](#Events+shiftTab) ⇒ <code>void</code>
        * [.render()](#Events+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Events+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Events+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Events+createItem) ⇒ <code>Element</code>
        * [.save()](#Events+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Events+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Events+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Events+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Events+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Events+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Events+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Events+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Events+backspace)
        * [.addTab(event)](#Events+addTab)
        * [.shiftTab(event)](#Events+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Events.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Events.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Events.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Events.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Events.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Events.toolbox) ⇒ <code>Object</code>

<a name="new_Events_new"></a>

### new Events(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Events_new"></a>

### new Events(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Events+nodes"></a>

### events.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+defaultListStyle"></a>

### events.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+caret"></a>

### events.caret
Instantiate caret helper

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle
Set list style

**Kind**: instance property of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Events+currentItem"></a>

### events.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+nodes"></a>

### events.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+defaultListStyle"></a>

### events.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+caret"></a>

### events.caret
Instantiate caret helper

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+listStyle"></a>

### events.listStyle
Set list style

**Kind**: instance property of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Events+currentItem"></a>

### events.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Events</code>](#Events)  
<a name="Events+render"></a>

### events.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+renderSettings"></a>

### events.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+appendItems"></a>

### events.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Events+createItem"></a>

### events.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Events+save"></a>

### events.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+addChildrenList"></a>

### events.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Events+makeListWrapper"></a>

### events.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Events+enterPressed"></a>

### events.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+unshiftItem"></a>

### events.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+getItemContent"></a>

### events.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Events+focusItem"></a>

### events.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Events+getOutOfList"></a>

### events.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+backspace"></a>

### events.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+addTab"></a>

### events.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+shiftTab"></a>

### events.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+render"></a>

### events.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+renderSettings"></a>

### events.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events+appendItems"></a>

### events.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Events+createItem"></a>

### events.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Events+save"></a>

### events.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+addChildrenList"></a>

### events.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Events+makeListWrapper"></a>

### events.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Events+enterPressed"></a>

### events.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+unshiftItem"></a>

### events.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+getItemContent"></a>

### events.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Events+focusItem"></a>

### events.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Events+getOutOfList"></a>

### events.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Events</code>](#Events)  
<a name="Events+backspace"></a>

### events.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+addTab"></a>

### events.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events+shiftTab"></a>

### events.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Events</code>](#Events)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Events.isReadOnlySupported"></a>

### Events.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Events.enableLineBreaks"></a>

### Events.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events.toolbox"></a>

### Events.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Events.isReadOnlySupported"></a>

### Events.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Events.enableLineBreaks"></a>

### Events.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Events</code>](#Events)  
**Access**: public  
<a name="Events.toolbox"></a>

### Events.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Events</code>](#Events)  
<a name="Notes"></a>

## Notes
NestedList Tool for EditorJS

**Kind**: global class  

* [Notes](#Notes)
    * [new Notes(params)](#new_Notes_new)
    * [new Notes(params)](#new_Notes_new)
    * _instance_
        * [.nodes](#Notes+nodes)
        * [.defaultListStyle](#Notes+defaultListStyle)
        * [.caret](#Notes+caret)
        * [.listStyle](#Notes+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Notes+listStyle)
        * [.currentItem](#Notes+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Notes+nodes)
        * [.defaultListStyle](#Notes+defaultListStyle)
        * [.caret](#Notes+caret)
        * [.listStyle](#Notes+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Notes+listStyle)
        * [.currentItem](#Notes+currentItem) ⇒ <code>Element</code>
        * [.render()](#Notes+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Notes+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Notes+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Notes+createItem) ⇒ <code>Element</code>
        * [.save()](#Notes+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Notes+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Notes+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Notes+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Notes+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Notes+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Notes+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Notes+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Notes+backspace)
        * [.addTab(event)](#Notes+addTab)
        * [.shiftTab(event)](#Notes+shiftTab) ⇒ <code>void</code>
        * [.render()](#Notes+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Notes+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Notes+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Notes+createItem) ⇒ <code>Element</code>
        * [.save()](#Notes+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Notes+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Notes+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Notes+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Notes+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Notes+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Notes+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Notes+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Notes+backspace)
        * [.addTab(event)](#Notes+addTab)
        * [.shiftTab(event)](#Notes+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Notes.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Notes.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Notes.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Notes.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Notes.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Notes.toolbox) ⇒ <code>Object</code>

<a name="new_Notes_new"></a>

### new Notes(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Notes_new"></a>

### new Notes(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Notes+nodes"></a>

### notes.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+defaultListStyle"></a>

### notes.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+caret"></a>

### notes.caret
Instantiate caret helper

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle
Set list style

**Kind**: instance property of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Notes+currentItem"></a>

### notes.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+nodes"></a>

### notes.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+defaultListStyle"></a>

### notes.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+caret"></a>

### notes.caret
Instantiate caret helper

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+listStyle"></a>

### notes.listStyle
Set list style

**Kind**: instance property of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Notes+currentItem"></a>

### notes.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Notes</code>](#Notes)  
<a name="Notes+render"></a>

### notes.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+renderSettings"></a>

### notes.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+appendItems"></a>

### notes.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Notes+createItem"></a>

### notes.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Notes+save"></a>

### notes.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+addChildrenList"></a>

### notes.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Notes+makeListWrapper"></a>

### notes.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Notes+enterPressed"></a>

### notes.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+unshiftItem"></a>

### notes.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+getItemContent"></a>

### notes.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Notes+focusItem"></a>

### notes.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Notes+getOutOfList"></a>

### notes.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+backspace"></a>

### notes.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+addTab"></a>

### notes.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+shiftTab"></a>

### notes.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+render"></a>

### notes.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+renderSettings"></a>

### notes.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes+appendItems"></a>

### notes.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Notes+createItem"></a>

### notes.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Notes+save"></a>

### notes.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+addChildrenList"></a>

### notes.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Notes+makeListWrapper"></a>

### notes.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Notes+enterPressed"></a>

### notes.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+unshiftItem"></a>

### notes.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+getItemContent"></a>

### notes.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Notes+focusItem"></a>

### notes.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Notes+getOutOfList"></a>

### notes.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Notes</code>](#Notes)  
<a name="Notes+backspace"></a>

### notes.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+addTab"></a>

### notes.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes+shiftTab"></a>

### notes.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Notes</code>](#Notes)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Notes.isReadOnlySupported"></a>

### Notes.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Notes.enableLineBreaks"></a>

### Notes.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes.toolbox"></a>

### Notes.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Notes.isReadOnlySupported"></a>

### Notes.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Notes.enableLineBreaks"></a>

### Notes.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Notes</code>](#Notes)  
**Access**: public  
<a name="Notes.toolbox"></a>

### Notes.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Notes</code>](#Notes)  
<a name="Tasks"></a>

## Tasks
NestedList Tool for EditorJS

**Kind**: global class  

* [Tasks](#Tasks)
    * [new Tasks(params)](#new_Tasks_new)
    * [new Tasks(params)](#new_Tasks_new)
    * _instance_
        * [.nodes](#Tasks+nodes)
        * [.defaultListStyle](#Tasks+defaultListStyle)
        * [.caret](#Tasks+caret)
        * [.listStyle](#Tasks+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Tasks+listStyle)
        * [.currentItem](#Tasks+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Tasks+nodes)
        * [.defaultListStyle](#Tasks+defaultListStyle)
        * [.caret](#Tasks+caret)
        * [.listStyle](#Tasks+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Tasks+listStyle)
        * [.currentItem](#Tasks+currentItem) ⇒ <code>Element</code>
        * [.render()](#Tasks+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Tasks+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Tasks+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Tasks+createItem) ⇒ <code>Element</code>
        * [.save()](#Tasks+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Tasks+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Tasks+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Tasks+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Tasks+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Tasks+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Tasks+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Tasks+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Tasks+backspace)
        * [.addTab(event)](#Tasks+addTab)
        * [.shiftTab(event)](#Tasks+shiftTab) ⇒ <code>void</code>
        * [.render()](#Tasks+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Tasks+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Tasks+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Tasks+createItem) ⇒ <code>Element</code>
        * [.save()](#Tasks+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Tasks+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Tasks+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Tasks+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Tasks+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Tasks+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Tasks+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Tasks+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Tasks+backspace)
        * [.addTab(event)](#Tasks+addTab)
        * [.shiftTab(event)](#Tasks+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Tasks.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Tasks.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Tasks.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Tasks.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Tasks.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Tasks.toolbox) ⇒ <code>Object</code>

<a name="new_Tasks_new"></a>

### new Tasks(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Tasks_new"></a>

### new Tasks(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Tasks+nodes"></a>

### tasks.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+defaultListStyle"></a>

### tasks.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+caret"></a>

### tasks.caret
Instantiate caret helper

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle
Set list style

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Tasks+currentItem"></a>

### tasks.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+nodes"></a>

### tasks.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+defaultListStyle"></a>

### tasks.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+caret"></a>

### tasks.caret
Instantiate caret helper

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+listStyle"></a>

### tasks.listStyle
Set list style

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Tasks+currentItem"></a>

### tasks.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+render"></a>

### tasks.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+renderSettings"></a>

### tasks.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+appendItems"></a>

### tasks.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Tasks+createItem"></a>

### tasks.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Tasks+save"></a>

### tasks.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+addChildrenList"></a>

### tasks.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Tasks+makeListWrapper"></a>

### tasks.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Tasks+enterPressed"></a>

### tasks.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+unshiftItem"></a>

### tasks.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+getItemContent"></a>

### tasks.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Tasks+focusItem"></a>

### tasks.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Tasks+getOutOfList"></a>

### tasks.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+backspace"></a>

### tasks.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+addTab"></a>

### tasks.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+shiftTab"></a>

### tasks.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+render"></a>

### tasks.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+renderSettings"></a>

### tasks.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks+appendItems"></a>

### tasks.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Tasks+createItem"></a>

### tasks.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Tasks+save"></a>

### tasks.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+addChildrenList"></a>

### tasks.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Tasks+makeListWrapper"></a>

### tasks.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Tasks+enterPressed"></a>

### tasks.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+unshiftItem"></a>

### tasks.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+getItemContent"></a>

### tasks.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Tasks+focusItem"></a>

### tasks.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Tasks+getOutOfList"></a>

### tasks.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  
<a name="Tasks+backspace"></a>

### tasks.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+addTab"></a>

### tasks.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks+shiftTab"></a>

### tasks.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Tasks</code>](#Tasks)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Tasks.isReadOnlySupported"></a>

### Tasks.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks.enableLineBreaks"></a>

### Tasks.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks.toolbox"></a>

### Tasks.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks.isReadOnlySupported"></a>

### Tasks.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Tasks.enableLineBreaks"></a>

### Tasks.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
**Access**: public  
<a name="Tasks.toolbox"></a>

### Tasks.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Tasks</code>](#Tasks)  
<a name="Ordered"></a>

## Ordered
NestedList Tool for EditorJS

**Kind**: global class  

* [Ordered](#Ordered)
    * [new Ordered(params)](#new_Ordered_new)
    * [new Ordered(params)](#new_Ordered_new)
    * _instance_
        * [.nodes](#Ordered+nodes)
        * [.defaultListStyle](#Ordered+defaultListStyle)
        * [.caret](#Ordered+caret)
        * [.listStyle](#Ordered+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Ordered+listStyle)
        * [.currentItem](#Ordered+currentItem) ⇒ <code>Element</code>
        * [.nodes](#Ordered+nodes)
        * [.defaultListStyle](#Ordered+defaultListStyle)
        * [.caret](#Ordered+caret)
        * [.listStyle](#Ordered+listStyle) ⇒ <code>string</code>
        * [.listStyle](#Ordered+listStyle)
        * [.currentItem](#Ordered+currentItem) ⇒ <code>Element</code>
        * [.render()](#Ordered+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Ordered+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Ordered+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Ordered+createItem) ⇒ <code>Element</code>
        * [.save()](#Ordered+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Ordered+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Ordered+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Ordered+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Ordered+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Ordered+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Ordered+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Ordered+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Ordered+backspace)
        * [.addTab(event)](#Ordered+addTab)
        * [.shiftTab(event)](#Ordered+shiftTab) ⇒ <code>void</code>
        * [.render()](#Ordered+render) ⇒ <code>Element</code>
        * [.renderSettings()](#Ordered+renderSettings) ⇒ <code>Element</code>
        * [.appendItems(items, parentItem)](#Ordered+appendItems) ⇒ <code>void</code>
        * [.createItem(content, [items])](#Ordered+createItem) ⇒ <code>Element</code>
        * [.save()](#Ordered+save) ⇒ [<code>ListData</code>](#ListData)
        * [.addChildrenList(parentItem, items)](#Ordered+addChildrenList)
        * [.makeListWrapper([style], [classes])](#Ordered+makeListWrapper) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
        * [.enterPressed(event)](#Ordered+enterPressed) ⇒ <code>void</code>
        * [.unshiftItem()](#Ordered+unshiftItem) ⇒ <code>void</code>
        * [.getItemContent(item)](#Ordered+getItemContent) ⇒ <code>string</code>
        * [.focusItem(item, atStart)](#Ordered+focusItem) ⇒ <code>void</code>
        * [.getOutOfList()](#Ordered+getOutOfList) ⇒ <code>void</code>
        * [.backspace(event)](#Ordered+backspace)
        * [.addTab(event)](#Ordered+addTab)
        * [.shiftTab(event)](#Ordered+shiftTab) ⇒ <code>void</code>
    * _static_
        * [.isReadOnlySupported](#Ordered.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Ordered.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Ordered.toolbox) ⇒ <code>Object</code>
        * [.isReadOnlySupported](#Ordered.isReadOnlySupported) ⇒ <code>boolean</code>
        * [.enableLineBreaks](#Ordered.enableLineBreaks) ⇒ <code>boolean</code>
        * [.toolbox](#Ordered.toolbox) ⇒ <code>Object</code>

<a name="new_Ordered_new"></a>

### new Ordered(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="new_Ordered_new"></a>

### new Ordered(params)
Render plugin`s main Element and fill it with saved data


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | tool constructor options |
| params.data | [<code>ListData</code>](#ListData) | previously saved data |
| params.config | <code>object</code> | user config for Tool |
| params.api | <code>object</code> | Editor.js API |
| params.readOnly | <code>boolean</code> | read-only mode flag |

<a name="Ordered+nodes"></a>

### ordered.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+defaultListStyle"></a>

### ordered.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+caret"></a>

### ordered.caret
Instantiate caret helper

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle
Set list style

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Ordered+currentItem"></a>

### ordered.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+nodes"></a>

### ordered.nodes
HTML nodes used in tool

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+defaultListStyle"></a>

### ordered.defaultListStyle
This list-style will be used by default

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+caret"></a>

### ordered.caret
Instantiate caret helper

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle ⇒ <code>string</code>
Get list style name

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+listStyle"></a>

### ordered.listStyle
Set list style

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | new style to set |

<a name="Ordered+currentItem"></a>

### ordered.currentItem ⇒ <code>Element</code>
Returns current List item by the caret position

**Kind**: instance property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+render"></a>

### ordered.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+renderSettings"></a>

### ordered.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+appendItems"></a>

### ordered.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Ordered+createItem"></a>

### ordered.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Ordered+save"></a>

### ordered.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+addChildrenList"></a>

### ordered.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Ordered+makeListWrapper"></a>

### ordered.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Ordered+enterPressed"></a>

### ordered.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+unshiftItem"></a>

### ordered.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+getItemContent"></a>

### ordered.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Ordered+focusItem"></a>

### ordered.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Ordered+getOutOfList"></a>

### ordered.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+backspace"></a>

### ordered.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+addTab"></a>

### ordered.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+shiftTab"></a>

### ordered.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+render"></a>

### ordered.render() ⇒ <code>Element</code>
Returns list tag with items

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+renderSettings"></a>

### ordered.renderSettings() ⇒ <code>Element</code>
Creates Block Tune allowing to change the list style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered+appendItems"></a>

### ordered.appendItems(items, parentItem) ⇒ <code>void</code>
Renders children list

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | items data to append |
| parentItem | <code>Element</code> | where to append |

<a name="Ordered+createItem"></a>

### ordered.createItem(content, [items]) ⇒ <code>Element</code>
Renders the single item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | item content to render |
| [items] | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | children |

<a name="Ordered+save"></a>

### ordered.save() ⇒ [<code>ListData</code>](#ListData)
Extracts tool's data from the DOM

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+addChildrenList"></a>

### ordered.addChildrenList(parentItem, items)
Append children list to passed item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| parentItem | <code>Element</code> | item that should contain passed sub-items |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sub items to append |

<a name="Ordered+makeListWrapper"></a>

### ordered.makeListWrapper([style], [classes]) ⇒ <code>HTMLOListElement</code> \| <code>HTMLUListElement</code>
Creates main <ul> or <ol> tag depended on style

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> | 'ordered' or 'unordered' |
| [classes] | <code>Array.&lt;string&gt;</code> | additional classes to append |

<a name="Ordered+enterPressed"></a>

### ordered.enterPressed(event) ⇒ <code>void</code>
Handles Enter keypress

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+unshiftItem"></a>

### ordered.unshiftItem() ⇒ <code>void</code>
Decrease indentation of the current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+getItemContent"></a>

### ordered.getItemContent(item) ⇒ <code>string</code>
Return the item content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Element</code> | item wrapper (<li>) |

<a name="Ordered+focusItem"></a>

### ordered.focusItem(item, atStart) ⇒ <code>void</code>
Sets focus to the item's content

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>Element</code> |  | item (<li>) to select |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="Ordered+getOutOfList"></a>

### ordered.getOutOfList() ⇒ <code>void</code>
Get out from List Tool by Enter on the empty last item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  
<a name="Ordered+backspace"></a>

### ordered.backspace(event)
Handle backspace

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+addTab"></a>

### ordered.addTab(event)
Add indentation to current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered+shiftTab"></a>

### ordered.shiftTab(event) ⇒ <code>void</code>
Reduce indentation for current item

**Kind**: instance method of [<code>Ordered</code>](#Ordered)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>KeyboardEvent</code> | keydown |

<a name="Ordered.isReadOnlySupported"></a>

### Ordered.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered.enableLineBreaks"></a>

### Ordered.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered.toolbox"></a>

### Ordered.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered.isReadOnlySupported"></a>

### Ordered.isReadOnlySupported ⇒ <code>boolean</code>
Notify core that read-only mode is supported

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
<a name="Ordered.enableLineBreaks"></a>

### Ordered.enableLineBreaks ⇒ <code>boolean</code>
Allow to use native Enter behaviour

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
**Access**: public  
<a name="Ordered.toolbox"></a>

### Ordered.toolbox ⇒ <code>Object</code>
Get Tool toolbox settings
icon - Tool icon's SVG
title - title to show in toolbox

**Kind**: static property of [<code>Ordered</code>](#Ordered)  
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
<a name="range"></a>

## range ⇒ <code>Range</code> \| <code>null</code>
Returns the first range

**Kind**: global variable  
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

<a name="save"></a>

## save() ⇒ <code>void</code>
Saves caret position using hidden <span>

**Kind**: global function  
<a name="restore"></a>

## restore() ⇒ <code>void</code>
Restores the caret position saved by the save() method

**Kind**: global function  
<a name="extractFragmentFromCaretPositionTillTheEnd"></a>

## extractFragmentFromCaretPositionTillTheEnd() ⇒ <code>DocumentFragment</code> \| <code>void</code>
Extract content fragment from Caret position to the end of contenteditable element

**Kind**: global function  
<a name="focus"></a>

## focus(element, atStart) ⇒ <code>void</code>
Set focus to contenteditable or native input element

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| element | <code>HTMLElement</code> |  | element where to set focus |
| atStart | <code>boolean</code> | <code>true</code> | where to set focus: at the start or at the end |

<a name="isAtStart"></a>

## isAtStart() ⇒ <code>void</code>
Check if the caret placed at the start of the contenteditable element

**Kind**: global function  
<a name="getHigherLevelSiblings"></a>

## getHigherLevelSiblings(from, direction) ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Get all first-level (first child of [contenteditabel]) siblings from passed node
Then you can check it for emptiness

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| from | <code>HTMLElement</code> |  | element from which siblings should be searched |
| direction | <code>&#x27;left&#x27;</code> \| <code>&#x27;right&#x27;</code> | <code>left</code> | direction of search |

**Example**  
```js
<div contenteditable>
<p></p>                            |
<p></p>                            | left first-level siblings
<p></p>                            |
<blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
<p></p>                            |
<p></p>                            | right first-level siblings
<p></p>                            |
</div>
```
<a name="make"></a>

## make(tagName, classNames, attributes) ⇒ <code>Element</code>
Helper for making Elements with attributes

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | new Element tag name |
| classNames | <code>Array</code> \| <code>string</code> | list or name of CSS classname(s) |
| attributes | <code>object</code> | any attributes |

<a name="fragmentToString"></a>

## fragmentToString(fragment) ⇒ <code>string</code>
Returns the HTML content of passed Document Fragment

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fragment | <code>DocumentFragment</code> | document fragment to process |

<a name="isEmpty"></a>

## isEmpty(node) ⇒ <code>boolean</code>
Pushes to stack all DOM leafs and checks for emptiness

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Node</code> | node to check |

<a name="isEmpty..content"></a>

### isEmpty~content
Don't count <br>s as content

**Kind**: inner property of [<code>isEmpty</code>](#isEmpty)  
<a name="ListData"></a>

## ListData : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | list type 'ordered' or 'unordered' |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | list of first-level elements |

<a name="ListItem"></a>

## ListItem : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | list item text content |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sublist items |

<a name="ListData"></a>

## ListData : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | list type 'ordered' or 'unordered' |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | list of first-level elements |

<a name="ListItem"></a>

## ListItem : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | list item text content |
| items | [<code>Array.&lt;ListItem&gt;</code>](#ListItem) | sublist items |


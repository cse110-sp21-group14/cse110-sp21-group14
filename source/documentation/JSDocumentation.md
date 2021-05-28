## Classes

<dl>
<dt><a href="#Calendar">Calendar</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#secret">secret</a></dt>
<dd><p>Filename: decrypt.js
Author: Stephen (backend)
Date: May 17th
Purpose: Decrypt journals from database</p>
</dd>
<dt><a href="#express">express</a></dt>
<dd><p>Filename: auth.js
Author: Group 14 (Back End)
Purpose: Google OAuth and callback for login</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#sum">sum(a, b)</a> ⇒</dt>
<dd></dd>
<dt><a href="#createCalendar">createCalendar(calendar, element, adjuster)</a></dt>
<dd><p>Creates a calendar</p>
</dd>
<dt><a href="#calendar">calendar(el, data)</a></dt>
<dd><p>Create calendar</p>
</dd>
</dl>

<a name="Calendar"></a>

## Calendar
**Kind**: global class  
<a name="new_Calendar_new"></a>

### new Calendar(model, date)

| Param | Type |
| --- | --- |
| model | <code>Model</code> | 
| date | <code>Date</code> | 

<a name="secret"></a>

## secret
Filename: decrypt.js
Author: Stephen (backend)
Date: May 17th
Purpose: Decrypt journals from database

**Kind**: global constant  
<a name="express"></a>

## express
Filename: auth.js
Author: Group 14 (Back End)
Purpose: Google OAuth and callback for login

**Kind**: global constant  
<a name="sum"></a>

## sum(a, b) ⇒
**Kind**: global function  
**Returns**: sum of a and b  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

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


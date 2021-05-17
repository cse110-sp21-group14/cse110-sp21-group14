<!-----
Author: Michael Mao
Created On: 5/11/2021
Last Modified: 5/11/2021


Conversion notes:

* Docs to Markdown version 1.0β29
* Tue May 11 2021 18:08:22 GMT-0700 (PDT)
* Source doc: CSE 110 Style Guide
----->  

### Team 14 General Style Guide

*   Code is not an acceptable form of documentation, use comments to explain logic and be clear and concise.
*   Variable names, function names, class names, file names, etc. should be descriptive.
*   File names must all be lowercase alphanumeric except for underscores. That means no special characters or spaces.
*   Avoid mixing HTML, CSS, and Javascript.
*   Use double quotes as default, as opposed to single quotes.
*   Keep lines of code less than 80 characters wide, break lines after an operator or comma
*   Use file header comments at the beginning of each file to summarize its contents
*   Mark TODO, bugged, or broken code with documentation comments
*   Document your name, date of work, and changes in the file header.  

<br/>
<br/>

***

<br/>

### **Javascript** Style Guide

Taken/modified from Google Javascript Style Conventions as well as  
w3schools.com/js/js_conventions.asp

*   General rules for Javascript:
    *   Use camelCase for identifier names (variables and functions)
    *   Put spaces around operators ( = + - * / ), and after commas
    *   End simple statements with a semicolon
    *   Use var, const, and let correctly. Var is function scoped, const and let are block scoped.
    *   Name global constants and magic numbers in all uppercase
    *   Use top/file-level comments, class comments, enum and typedef comments, method and function comments, and property comments unless the description is trivial and discernable from the name/code
*   General rules for complex (compound) statements:
    *   Put the opening bracket at the end of the first line.
    *   Use one space before the opening bracket.
    *   Put the closing bracket on a new line, without leading spaces.
    *   Do not end a complex statement with a semicolon.
    *   ``` 
        function toCelsius(fahrenheit) {
            return (5 / 9) * (fahrenheit - 32);
        }
        ```
        
*   General rules for object definitions:
    *   Place the opening bracket on the same line as the object name.
    *   Use colon plus one space between each property and its value.
    *   Use quotes around string values, not around numeric values.
    *   Do not add a comma after the last property-value pair.
    *   Place the closing bracket on a new line, without leading spaces.
    *   Always end an object definition with a semicolon.
    *   ```
        var person = {
          firstName: "John",
          lastName: "Doe",
          age: 50,
          eyeColor: "blue"
        };
        ```

*   General rules for route functions:
    *   Comments at the top of each routing method.
        *   Put the full name of destination path after “@desc” (In the example below, even though the URL path is ‘/’, we should write its full name ‘/login’;
        *   Put the typical route function type after “@route”.
        *   Make a summary of the purpose and capabilities of this function.
    *   For callback function in routing (the second parameter below), always have the format (req, res) => {}
    *   Add comments “View: (location in repo)” if we render the handlebars view page.

        ```
        /*
        @desc     /login
        @route    GET
        Display the login page.
        */
        router.get('/', (req, res) => {
           res.render('login');  // View: views/index.hbs
        });
        ```  

<br/>
<br/>

***

<br/>

### **HTML** Style Guide

Taken/modified from w3schools.com/html/html5_syntax.asp

*   General rules for HTML
    *   Always Declare Document Type
    *   Use Lowercase Element Names
    *   Close All HTML Elements
    *   Use Lowercase Attribute Names
    *   Always Quote Attribute Values
    *   Always Specify alt, width, and height for Images
    *   Don’t put spaces around equal signs
    *   All whitespace should have a purpose. Add blank lines to separate large or logical code blocks.
    *   Use the following tags: title, html, body, head
    *   Include the following: &lt;html lang="en-us">, &lt;meta charset="UTF-8">, and &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">.
    *   Use comments (&lt;!-- comment which can span multiple lines -->)
*   General rules for handlebars (*.hbs files under view folder)
    *   Headers:
        *   The first line should always be a reference to the external CSS file
        *   If we use external JS files, the following line(s) should be reference(s) to those scripts.
    *   Mapping to CSS:
        *   Each handlebar file only maps to one unique CSS stylesheet.
        *   For handlebar file (“**.hbs” ) under /views, name the corresponding CSS file as “style-**.css” and save it under /css. (ex. /css/style-login.css  ~ /views/login.hbs)
        *   For handlebar file (“**.hbs” ) under /views/layouts, name the corresponding CSS file as “style-**.css” and save it under /css. (ex. /css/layouts/style-index.css  ~ /views/layouts/index.hbs)

            ```
            <link rel="stylesheet" href="css/style-login.css">
            <script src="scripts/script-login.js" type="module"></script>
            ```  

<br/>
<br/>

***

<br/>

### **CSS** Style Guide

Taken/modified from developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/CSS

*   Use expanded syntax, i.e. each declaration goes on a separate line
*   Include a space between the selector and the opening curly brace
*   Put a semicolon after every declaration
*   Put the closing curly brace on a new line
*   Use longhand properties rather than shorthand
*   Put spaces after punctuation (commas, colons, etc)
*   Use CSS-style comments /* like this */
*   When turning off a property, use “0” instead of nothing
*   Use “mobile first” media queries, i.e. smallest to largest
*   Don’t use ID selectors unless necessary, use classes instead
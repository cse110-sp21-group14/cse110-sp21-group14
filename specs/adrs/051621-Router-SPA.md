# Single Page Application vs. Routes for different pages

* Status: accepted <!-- optional -->
* Deciders: majority vote: 7 for SPA vs 0 for different page routes <!-- optional -->
* Date: 2021-05-16 <!-- optional --> <!-- optional -->

## Context and Problem Statement

After our Sprint Review Meeting we realized that our wireframe was abiguous on whether each functionality was to stay on a single page or if we were going to route to different pages

## Decision Drivers <!-- optional -->

* Can not push to main if our layout for the main page was not the same
* Resolves confusion among front end and back end teams

## Considered Options

* Keep all the journal editing functionalities on one page
* Have a website that manages each functionality with different page routes

## Decision Outcome

Chosen option: "Single Page Application", because it is what everyone prefered.

### Positive Consequences <!-- optional -->

* We are able to move forward confidently as confusion between backend and front end has been resolved

### Negative Consequences <!-- optional -->

* Will need to refactor backend to support new design

## Pros and Cons of the Options <!-- optional -->

### Single Page Application <!-- optional -->

* Good, as a SPA format matches our original design
* Good, as users have everything organized into a single page thus actions feel more instantaneous
* Good, could make good use of custom HTML elements
* Good, potential to implement service workers in our application
* Bad, as front end will have more work to do

### Different Page Routes for Each Functionality

* Good, as most of the front end can be automated with express handlebars
* Good, as it is easier to implement most CRUD operations
* Bad, as the front end was not familiar with the current frameworks

<!-- markdownlint-disable-file MD013 -->

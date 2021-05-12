# Data Storage and MongoDB

* Status: accepted <!-- optional -->
* Date: 2021-05-09  <!-- optional -->


## Context and Problem Statement

We needed to find a way to store all the information and content of the bullet journal.
How should we store data?

## Decision Drivers <!-- optional -->

* Don't want to clutter local storages
* Data should be loaded in a reasonable time
* If storing online, need to consider privacy concerns as well

## Considered Options

* Local storage
* Cloud storage


## Decision Outcome

Chosen option: "Cloud: MongoDB Atlas (encrypted)", because 
* convenient, able to be accessed from more than one device
* doesn't eat away at local storage, some users may not have that space
* bridging front end with backend is easy thanks to mongoDB

### Local Storage

* Good, because don't need to worry about privacy/info leaks
* Bad, because space concerns
<!-- numbers of pros and cons can vary -->

### Cloud Storage

* Good, because space! Lots of space.
* Good, because can load data from anywhere as long as know where to retrieve from
* Bad, because privacy concerns.
 <!-- numbers of pros and cons can vary -->



<!-- markdownlint-disable-file MD013 -->
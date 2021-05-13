# Rapid Logging Implementation for Bullet Journal Using Figma

* Status: accepted <!-- optional -->
* Date: 2021-05-10  <!-- optional -->


## Context and Problem Statement

We should keep the wireframe as clean as possible to users. It would be nice  
if users can view/create tasks or go to specific dates with single clicks. But how  
can we achieve this?

## Considered Options

* user goes into `my journal`, and creating a file such that the contents will be shown from the `daily/weekly/month` view
  
  Issue: this approach requires multiple clicks to achieve, 
* allow users to simply click on the date and let them add important tasks
  
  Issue: these entries were not even journal entries, and would not show up when they went into the actual journal. 


## Decision Outcome

Chosen option: By clicking on “my journal”, this will show all the journal entries that the user has made so far.
               The user can also click on a specific date, which will create an entry in journal.
* each entry will have a `important` flag, which will determine whether to show it on the `daily/weekly/view`
* add a `add entry` button from the front page. It allows the user to create any type of entry (Also can pick date, file name, etc).

### Further Decisions to be make
* Add ability to not only create entries, but also navigate to them from the “add entry” button”
* Certain entries may not have any dates attached to them such as notes. How do we deal with this? 
* How do we prevent users from creating the same entry?

<!-- markdownlint-disable-file MD013 -->
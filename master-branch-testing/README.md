# Testing the relationship between master and (other) branches on the local machine, and on GH.

##What
Testing whether it is possible to:
- Push from the local machine's master branch, to a new branch on GH.

##Why?
Because it's easy to make the mistake of adding and committing changes made on a local machine, to the master branch, just because you forget to checkout to a new branch before doing those things. Making a new branch from that point onwards would mean that those adds and commits would be transferred to the new branch created, and that everything can be pushed from there, but this is to test whether doing a push from master, to a new branch directly, is feasible. Just for curiosity's sake. 

##Conclusion
Thought it was feasible, but got an error message on the command line, notifying me that the push was unsuccessful. The branch specified in the command <git push origin newbranchname> could not be identified (...because it had not been made yet, and also because there was no link between this newbranchname branch, and the local machine master)

The same problem seems to occur, when pushing from a branch on the local machine, to a branch in GH, named differently from the branch in the local machine. Thought that having the same name for the branches on the local and GH was just for convention, but I guess it's just the done thing, and doesn't work otherwise because it's confusing for the computer...?

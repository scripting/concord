# Concord

Concord is a JavaScript outliner written by Kyle Shank in 2013, maintained by Dave Winer since, GPL-licensed.  

The user interface is keystroke and mouse-compatible with the Living Videotext outliners, ThinkTank, Ready and MORE, and the outliner built into UserLand Frontier and Radio UserLand. 

There's a new release in February 2020, the first since 2013. 

Concord is the core component of <a href="http://littleoutliner.com/">Little Outliner</a> and numerous other of Dave's projects. 

Concord's native file format is <a href="http://dev.opml.org/">OPML</a>.

### What's new?

You can see the work notes <a href="https://github.com/scripting/concord/blob/master/worknotes.md">here</a>. 

I've been adding features carefully and slowly over the years. The best way to see them is to review the history in GitHub. 

The biggest change is that Concord is now managed using the same code editing and deploying tools I use for all my other <a href="https://github.com/scripting?tab=repositories">projects</a>, so it will be easier to publicly release new versions. 

### Concord is an outliner

<a href="http://outlinerhowto.opml.org/">An outliner</a> is a text editor that organizes information in a hierarchy, allowing users to control the level of detail and to reorganize according to structure. Your notes can have full detail, yet be organized so a casual reader can get a quick overview. Outlining is a great way for teams to organize work. 

### Written in JavaScript

It's a jQuery plug-in that implements a full-featured outliner that you can drop into other applications with a minimum of work. 

### GPL-licensed

<a href="https://github.com/scripting/concord">Concord</a> is licensed under the GPL because outliners are an incredibly useful way to edit structured information. We want Concord to be able to fill every conceivable need for outlining technology. 

Ideas include file systems, mailboxes, chatrooms, databases, documents, presentations, product plans, code, libraries, laws, systems of laws, contracts, rules, guidelines, principles, docs, manifestos, journals, blogs, etc. 

Here's an important 11-minute <a href="http://scripting.com/2013/09/17/importantPodcastAboutConcordGpl">podcast</a> about Concord and the GPL.  

### Example 0: The bare minimum

This <a href="https://github.com/scripting/concord/blob/master/example0/index.html">example</a> has the bare minimum to add an outliner to an existing app.

This saves developers the trouble of having to factor it out of Example 1, below.

You can try it out <a href="http://scripting.com/code/concord/repo/example0/">here</a>. 

### Example 1: Hello Outliner

This <a href="https://github.com/scripting/concord/tree/master/example1/index.html">example</a> is a functional outliner, with most of the capabilities of the Little Outliner app and the same basic approach. You edit a single outline, saved in local storage, so it's there when you come back to it, but only on that machine.

It has a simple menubar, with menus containing Outliner commands, links to OPML documents you can view and edit, and links to docs.

You can try it out <a href="http://scripting.com/code/concord/repo/example1/">here</a>.

### Example 2: Small Picture Reader

We've released the <a href="https://github.com/scripting/concord/blob/master/example2/index.html">source</a> for <a href="http://docs.fargo.io/fargo/reader">Small Picture Reader</a> under the GPL as part of the Concord release.

This app provides a way to read any OPML file even if you aren't using an outliner.

There's a command in Little Outliner that creates a link between the document you're editing and a reader version.

If you want to run the app, <a href="http://scripting.com/code/concord/repo/example2/">click here</a>.

### The previous version

Here's a <a href="http://scripting.com/2020/02/13/concord-master.zip">snapshot</a> of this repo before integrating the new stuff. 

Here's the <a href="https://github.com/scripting/concord/blob/master/archive/readme2013.md">previous readme</a>. 

### Support

If you have a question, comment, or bug to report, please post an <a href="https://github.com/scripting/concord/issues">issue</a> here. 

I do not take pull requests, it's best to describe the problem or feature you want to add, as an issue, and let's talk about the best way to do it. Writing the code is never the biggest part of a change or addition. 


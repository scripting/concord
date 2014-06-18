### Outliners everywhere!

I've long felt that every operating system and web browser should have a great outliner baked-in.  

If you were going to try to do that today, you'd release it under the GPL written in JavaScript. 

That's exactly what Concord is. 

<i><a href="http://scripting.com/2013/09/16/concordOurGplOutliner">Dave Winer</a>, 9/16/13.</i>



### Concord is an outliner

<a href="http://docs.fargo.io/outlinerHowto">An outliner</a> is a text editor that organizes information in a hierarchy, allowing users to control the level of detail and to reorganize according to structure. Your notes can have full detail, yet be organized so a casual reader can get a quick overview. Outlining is a great way for teams to organize work. 



### Written in JavaScript

It's a jQuery plug-in that implements a full-featured outliner that you can drop into other applications with a minimum of work. 



### It's the core of Fargo

<a href="http://fargo.io/">Fargo</a> is our browser-based outliner that hooks into Dropbox.  

Concord is the outlining engine in Fargo.



### GPL-licensed

<a href="https://github.com/scripting/concord">Concord</a> is licensed under the GPL because outliners are an incredibly useful way to edit structured information. We want Concord to be able to fill every conceivable need for outlining technology. 

Ideas include file systems, mailboxes, chatrooms, databases, documents, presentations, product plans, code, libraries, laws, systems of laws, contracts, rules, guidelines, principles, docs, manifestos, journals, blogs, etc. 

Here's an important 11-minute <a href="http://scripting.com/2013/09/17/importantPodcastAboutConcordGpl">podcast</a> about Concord and the GPL.  



### Example 0: The bare minimum

This <a href="https://github.com/scripting/concord/blob/master/example0/index.html">example</a> has the bare minimum to add an outliner to an existing app.

This saves developers the trouble of having to factor it out of Example 1, below.

You can try it out <a href="http://static.smallpicture.com/concord/example0/index.html">here</a>. 



### Example 1: Hello Outliner

This <a href="https://github.com/scripting/concord/tree/master/example1/index.html">example</a> is a functional outliner, with most of the capabilities of the Little Outliner app and the same basic approach. You edit a single outline, saved in local storage, so it's there when you come back to it, but only on that machine.

It has a simple menubar, with menus containing Outliner commands, links to OPML documents you can view and edit, and links to docs.

You can try it out <a href="http://static.smallpicture.com/concord/example1/index.html">here</a>.



### Example 2: Small Picture Reader

We've released the <a href="https://github.com/scripting/concord/blob/master/example2/index.html">source</a> for <a href="http://docs.fargo.io/fargo/reader">Small Picture Reader</a> under the GPL as part of the Concord release.

This app provides a way to read any OPML file even if you aren't using an outliner.

There's a command in Fargo that creates a link between the document you're editing and a reader version.

If you want to run the app, <a href="http://static.smallpicture.com/concord/example2/index.html">click here</a>.



### Inaugural blog post

<a href="http://scripting.com/2013/09/16/concordOurGplOutliner">Here's the post</a> I ran on Scripting News when Concord was publicly announced. It includes a link to a podcast.



### Worknotes

I keep a log of work I do on Concord, in an <a href="https://raw.github.com/scripting/concord/master/opml/worknotes.opml">outline</a> of course. 

There's a <a href="https://github.com/scripting/concord/blob/master/worknotes.md">markdown rendering</a> of the worknotes file. 



### Community

We have a <a href="https://groups.google.com/forum/?fromgroups#!forum/smallpicture-concord">Google Group mail list</a> for technical support.




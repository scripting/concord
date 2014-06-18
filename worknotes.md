### 6/18/14 by DW -- v0.40

Started a version number for the whole Concord release, so we have an easy way to refer to the whole package. This is version 0.40. The next version will be 0.41. We'll increment by hudredths until it feels like a 1.0 then we'll start from there. 

Rebuilt the examples using relative URLs for includes, rather than the "raw" github ones.

Now the examples run directly from the folder you download, and incorporate any mods you may make.



### 2/22/14 by DW

v2.49 -- xmlToOutline takes a new optional param, flSetFocus. Defaults true. If false, we don't set the focus in the outline. This is useful when using the outliner to display text in a web page. If the outline is two screens down, you don't want the page to scroll down to it on reload. 

Thanks to <a href="http://k4shif.blogspot.com/">Kashif Khan</a> for finding this fix. ;-)



### 9/20/13 by DW

Example1 -- Hello Outliner

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change the initial value of renderMode from false to true.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Added a separator before Concord Docs in the Source menu.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Changed version number to 0.52.



Markdown renderer

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As part of the build process for turning my OPML files into flat files for the GitHub repo, I have a script that does a simple rendering of an outline in Markdown. Previously it only understood one level hierarchies, but I was already using more levels without realizing the text was not showing up. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So I updated the renderer to handle multiple levels. It's a little tricky to get Markdown do indentation, but I ended up using with with &amp;nbsp; characters, which works since you can include HTML in Markdown. :-)





### 9/19/13 by DW

Added worknotes section to readme.md.

Rendering worknotes as <a href="https://github.com/scripting/concord/blob/master/worknotes.md">worknotes.md</a> at the top level of the repo.



### 9/18/13 by DW

Created the worknotes outline (this file). 

Added a bunch of utility routines to concordUtils.js. 

Example 2, the Reader app is working. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It works with any OPML file.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Handles includes. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anything Concord can display it can display, because it builds on Concord. ;-)



Added a call to console.log in opKeystrokeCallback in example1. 

Fixed opExpandCallback in Example 1, expanding <i>include</i> nodes was broken.

Added commands in Hello Outliner/Source menu to open the Worknotes outline and the source for Example 2.




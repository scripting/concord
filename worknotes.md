* 2/15/20; 11:22:30 AM by DW
   * <a href="http://scripting.com/2020/02/15.html#a161619">Released</a> version 3.0.3. Lots of cleanup work remains, for sure. ;-)
* 2/13/20; 11:49:36 AM by DW
   * Saved a <a href="https://s3.amazonaws.com/scripting.com/2020/02/13/concord-master.zip">snapshot</a> of the Concord repository before I made any changes. 
* 2/12/20; 11:53:59 AM by DW
   * Merged concordkeyboard.js with concord.js. New routine ConcordUtil.getKeystroke. One less file to deal with. Wasn't present in the 2013 version of Concord. No need to introduce it. 
* 1/31/20; 3:02:56 PM by DW
   * v3.0.2. Converted to the newest release of Font-Awesome for hard-coded icons, and icons for outline types. 
* 1/29/20; 5:03:41 PM by DW
   * v3.0.1. Implemented cmd-backspace and cmd-return. Handles HTML text.
      * Here's the <a href="http://scripting.com/2020/01/29.html#a182110">writeup</a> on Scripting. 
* 1/25/20; 2:21:11 PM by DW
   * New version number sequence -- v3.0.0.
      * From here on out our changes will be registered in the GitHub project.
      * Code is managed in nodeEditor along with all my other JavaScript code.
      * Concord enters the modern age. Looking forward to working here. 
   * Let's just take the code we're using in both LO2 and EO and bring it into nodeEditor. 
      * We won't know what all the changes are from whatever versions we had here, but we can move forward.
         * nodeEditorSuite.utilities.researchConcordVersions
* 1/24/20; 4:00:15 PM by DW
   * Need to get the version of concord under control, so I can edit it as I would any other piece of code. 
   * There's a project already in nodeEditor, with a note at the top saying it's only for reading. 
   * The question is this -- what are the differences between this and the version of Concord that we're using in LO2 and EO.
   * Here's the plan
      * Create a private project on GitHub.
      * Upload the version of Concord that's under nodeEditor management.
         * I'm moving it under the LO2 menu, so it's part of this project.
      * Overlay that with the code we're using in LO2.
      * See the differences. Where we go from there depends on how big the diffs are. 
   * Okay that didn't accomplish anything
      * GitHub said the whole file was a change. 
      * This is weird because just eyeballing it, you can see that they're almost identical files.
         * https://github.com/scripting/concord2/commit/1b3b93523053445faf83d272eebe62f3f25e349f#diff-9d22eb2e0ebaa6cc17d83bbb672f3b08
   * Starting a new session, see above.
* 7/22/18 by DW
   * this code is here just for reference. i am not using it in my outliners. 
* 2/22/14 by DW
   * v2.49 -- xmlToOutline takes a new optional param, flSetFocus. Defaults true. If false, we don't set the focus in the outline. This is useful when using the outliner to display text in a web page. If the outline is two screens down, you don't want the page to scroll down to it on reload. 
   * Thanks to <a href="http://k4shif.blogspot.com/">Kashif Khan</a> for finding this fix. ;-)
* 9/20/13 by DW
   * Example1 -- Hello Outliner
      * Change the initial value of renderMode from false to true.
      * Added a separator before Concord Docs in the Source menu.
      * Changed version number to 0.52.
   * Markdown renderer
      * As part of the build process for turning my OPML files into flat files for the GitHub repo, I have a script that does a simple rendering of an outline in Markdown. Previously it only understood one level hierarchies, but I was already using more levels without realizing the text was not showing up. 
      * So I updated the renderer to handle multiple levels. It's a little tricky to get Markdown do indentation, but I ended up using with with &amp;nbsp; characters, which works since you can include HTML in Markdown. :-)
* 9/19/13 by DW
   * Added worknotes section to readme.md.
   * Rendering worknotes as <a href="https://github.com/scripting/concord/blob/master/worknotes.md">worknotes.md</a> at the top level of the repo.
* 9/18/13 by DW
   * Created the worknotes outline (this file). 
   * Added a bunch of utility routines to concordUtils.js. 
   * Example 2, the Reader app is working. 
      * It works with any OPML file.
      * Handles includes. 
      * Anything Concord can display it can display, because it builds on Concord. ;-)
   * Added a call to console.log in opKeystrokeCallback in example1. 
   * Fixed opExpandCallback in Example 1, expanding <i>include</i> nodes was broken.
   * Added commands in Hello Outliner/Source menu to open the Worknotes outline and the source for Example 2.

// Copyright 2013-2014, Small Picture, Inc.
var appTypeIcons = {
	"blogpost": "file-text-alt",
	"code": "laptop",
	"html": "file-text-alt",
	"include": "share-alt", //5/19/13 by DW
	"index": "file-text-alt",
	"link": "bookmark-empty",
	"outline": "file-text-alt",
	"photo": "camera",
	"presentation": "file-text-alt",
	"redirect": "refresh",
	"river": "file-text-alt",
	"rss": "rss",
	"tabs": "file-text-alt",
	"thread": "comments",
	"thumblist": "th",
	"profile": "user", //5/14/13 by DW
	"calendar": "calendar", //6/3/13 by DW
	"markdown": "file-text-alt", //6/3/13 by DW
	"tweet": "twitter", //6/10/13 by DW
	"metaWeblogPost": "file-text-alt"
	}
var initialOpmltext = 
	"<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?><opml version=\"2.0\"><head><title>Untitled</title></head><body><outline text=\"\"/></body></opml>";
var defaultUtilsOutliner = "#outliner"; 
//op glue routines
	function opUndo () {
		return ($(defaultUtilsOutliner).concord ().op.undo ())
		}
	function opCut () {
		return ($(defaultUtilsOutliner).concord ().op.cut ())
		}
	function opCopy () {
		return ($(defaultUtilsOutliner).concord ().op.copy ())
		}
	function opPaste () {
		return ($(defaultUtilsOutliner).concord ().op.paste ())
		}
	function opReorg (dir, count) {
		return ($(defaultUtilsOutliner).concord().op.reorg (dir, count));
		}
	function opSetFont (font, fontsize, lineheight) {
		$(defaultUtilsOutliner).concord().prefs({"outlineFont": font, "outlineFontSize": fontsize, "outlineLineHeight": lineheight});
		}
	function opPromote () {
		$(defaultUtilsOutliner).concord().op.promote();
		}
	function opDemote () {
		$(defaultUtilsOutliner).concord().op.demote();
		}
	function opBold () {
		return ($(defaultUtilsOutliner).concord().op.bold ());
		}
	function opItalic () {
		return ($(defaultUtilsOutliner).concord().op.italic ());
		}
	function opLink (url) {
		return ($(defaultUtilsOutliner).concord().op.link (url));
		}
	function opSetTextMode (fltextmode) {
		$(defaultUtilsOutliner).concord ().op.setTextMode (fltextmode);
		}
	function opInTextMode () {
		return ($(defaultUtilsOutliner).concord ().op.inTextMode ());
		}
	function opGetAtts () {
		return $(defaultUtilsOutliner).concord().op.attributes.getAll();
		}
	function opGetOneAtt (name) {
		return $(defaultUtilsOutliner).concord().op.attributes.getOne (name);
		}
	function opHasAtt (name) {
		return (opGetOneAtt (name) != undefined);
		}
	function opSetOneAtt (name, value) {
		return $(defaultUtilsOutliner).concord().op.attributes.setOne (name, value);
		}
	function opSetAtts (atts) {
		return $(defaultUtilsOutliner).concord().op.attributes.setGroup(atts);
		}
	function opAddAtts (atts) {
		return $(defaultUtilsOutliner).concord().op.attributes.addGroup(atts);
		}
	function opSetStyle (css) {
		return $(defaultUtilsOutliner).concord ().op.setStyle (css);
		}
	function opGetLineText () {
		return ($(defaultUtilsOutliner).concord().op.getLineText());
		}
	function opExpand () {
		return ($(defaultUtilsOutliner).concord().op.expand());
		}
	function opExpandAllLevels () {
		return ($(defaultUtilsOutliner).concord().op.expandAllLevels());
		}
	function opExpandEverything () {
		return ($(defaultUtilsOutliner).concord().op.fullExpand());
		}
	function opCollapse () {
		return ($(defaultUtilsOutliner).concord().op.collapse());
		}
	function opIsComment () {
		return ($(defaultUtilsOutliner).concord ().script.isComment ());
		}
	function opMakeComment () {
		return ($(defaultUtilsOutliner).concord ().script.makeComment ());
		}
	function opUnComment () {
		return ($(defaultUtilsOutliner).concord ().script.unComment ());
		}
	function opToggleComment () {
		if (opIsComment ()) {
			opUnComment ();
			}
		else {
			opMakeComment ();
			}
		}
	function opCollapseEverything () {
		return ($(defaultUtilsOutliner).concord().op.fullCollapse());
		}
	function opInsert (s, dir) {
		return ($(defaultUtilsOutliner).concord().op.insert(s, dir));
		}
	function opInsertImage (url) {
		return ($(defaultUtilsOutliner).concord ().op.insertImage (url));
		}
	function opSetLineText (s) {
		return ($(defaultUtilsOutliner).concord().op.setLineText(s));
		}
	function opDeleteSubs () {
		return ($(defaultUtilsOutliner).concord().op.deleteSubs());
		}
	function opCountSubs () {
		return ($(defaultUtilsOutliner).concord().op.countSubs());
		}
	function opHasSubs () { 
		return (opCountSubs () > 0);
		}
	function opSubsExpanded () {
		return ($(defaultUtilsOutliner).concord().op.subsExpanded());
		}
	function opGo (dir, ct) {
		return ($(defaultUtilsOutliner).concord().op.go(dir, ct));
		}
	function opFirstSummit () {
		opGo (left, 32767);
		opGo (up, 32767);
		}
	function opXmlToOutline (xmltext) {
		return ($(defaultUtilsOutliner).concord ().op.xmlToOutline (xmltext));
		}
	function opInsertXml (xmltext, dir) { 
		return ($(defaultUtilsOutliner).concord ().op.insertXml (xmltext, dir));
		}
	function opOutlineToXml (ownerName, ownerEmail, ownerId) {
		return ($(defaultUtilsOutliner).concord ().op.outlineToXml (ownerName, ownerEmail, ownerId));
		}
	function opCursorToXml () {
		return ($(defaultUtilsOutliner).concord ().op.cursorToXml ());
		}
	function opSetTitle (title) {
		return ($(defaultUtilsOutliner).concord ().op.setTitle (title));
		}
	function opGetTitle () {
		return ($(defaultUtilsOutliner).concord ().op.getTitle ());
		}
	function opHasChanged () {
		return ($(defaultUtilsOutliner).concord ().op.changed ());
		}
	function opClearChanged () {
		return ($(defaultUtilsOutliner).concord ().op.clearChanged ());
		}
	function opMarkChanged () { 
		return ($(defaultUtilsOutliner).concord ().op.markChanged ());
		}
	function opRedraw () {
		return ($(defaultUtilsOutliner).concord ().op.redraw ());
		}
	function opVisitAll (callback) { //9/13/13 by DW
		return ($(defaultUtilsOutliner).concord ().op.visitAll (callback));
		}
	function opWipe () { //9/14/13 by DW
		return ($(defaultUtilsOutliner).concord ().op.wipe ());
		}
//readText
	var readHttpUrl = "http://trex.smallpicture.com/ajax/httpReadUrl";
	
	function readText (url, callback, op, flAcceptOpml) {
		var headerval = {};
		if ((flAcceptOpml != undefined) && flAcceptOpml) { //5/14/13 by DW
			headerval = {"Accept": "text/x-opml"};
			}
		var jxhr = $.ajax ({ 
			url: readHttpUrl + "?url=" + encodeURIComponent (url) + "&type=" + encodeURIComponent ("text/plain"),
			dataType: "text", 
			headers: headerval,
			timeout: 30000 
			}) 
		.success (function (data, status) { 
			callback (data, op);
			}) 
		.error (function (status) { 
			httpReadStatus = status;
			});
		}
//string routines
	function filledString (s, ct) {
		var theString = "";
		for (var i = 0; i < ct; i++) {
			theString += s;
			}
		return (theString);
		}
	function multipleReplaceAll  (s, adrTable, flCaseSensitive, startCharacters, endCharacters) {
		if(flCaseSensitive===undefined){
			flCaseSensitive = false;
			}
		if(startCharacters===undefined){
			startCharacters="";
			}
		if(endCharacters===undefined){
			endCharacters="";
			}
		for( var item in adrTable){
			var replacementValue = adrTable[item];
			var regularExpressionModifier = "g";
			if(!flCaseSensitive){
				regularExpressionModifier = "gi";
				}
			var regularExpressionString = (startCharacters+item+endCharacters).replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); 
			var regularExpression = new RegExp(regularExpressionString, regularExpressionModifier);
			s = s.replace(regularExpression, replacementValue);
			}
		return s;
		};
//misc
	function secondsSince (when) {
		var now = new Date ();
		return ((now - when) / 1000);
		}

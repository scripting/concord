// Copyright 2013, Small Picture, Inc.
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
//string and date utility routines
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
	function stringKBytes (num) {
		return (Math.round (num / 1024) + "K");
		}
	function sameDay (d1, d2) {
		d1 = new Date (d1);
		d2 = new Date (d2);
		return ((d1.getFullYear () == d2.getFullYear ()) && (d1.getMonth () == d2.getMonth ()) && (d1.getDate () == d2.getDate ()));
		}
	function dayOfWeekToString (theDay) {
		var weekday=new Array (7);
		weekday[0]="Sunday";
		weekday[1]="Monday";
		weekday[2]="Tuesday";
		weekday[3]="Wednesday";
		weekday[4]="Thursday";
		weekday[5]="Friday";
		weekday[6]="Saturday";
		return (weekday [theDay])
		}
	function monthToString (theMonthNum) { //3/8/13 by DW
		var names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		if (theMonthNum == undefined) {
			var now = new Date ();
			theMonthNum = now.getMonth ();
			}
		return (names [theMonthNum]);
		}
	function timeString (when, flIncludeSeconds) {
		var hour = when.getHours (), minutes = when.getMinutes (), ampm = "AM", s
		if (hour >= 12) {
			ampm = "PM";
			}
		if (hour > 12) {
			hour -= 12;
			}
		if (hour == 0) {
			hour = 12;
			}
		if (minutes < 10) {
			minutes = "0" + minutes;
			}
		if (flIncludeSeconds) {
			var seconds = when.getSeconds ();
			if (seconds < 10) {
				seconds = "0" + seconds;
				}
			s = hour + ":" + minutes + ":" + seconds + ampm;
			} 
		else {
			s = hour + ":" + minutes + ampm;
			}
		return (s);
		}
	function viewDate (when, flShortDayOfWeek) {
		var now = new Date ();
		when = new Date (when);
		if (sameDay (when, now)) {
			return (timeString (when, false)); 
			}
		else { 
			var oneweek = 1000 * 60 * 60 * 24 * 7;
			var cutoff = now - oneweek;
			if (when > cutoff) { //within the last week
				var s = dayOfWeekToString (when.getDay ());
				if (flShortDayOfWeek) {
					s = s.substring (0, 2);
					}
				return (s);
				}
			else {
				return (when.toLocaleDateString ());
				}
	function isAlpha (ch) { 
		return (((ch >= 'a') && (ch <= 'z')) || ((ch >= 'A') && (ch <= 'Z')));
		}
	function isNumeric (ch) {
		return ((ch >= '0') && (ch <= '9'));
		}
	function random (lower, upper) {
		var range = upper - lower + 1;
		return (Math.floor ((Math.random () * range) + lower));
		}
	function getRandomPassword (ctchars) { 
		var s= "", ch;
		while (s.length < ctchars) {
			ch = String.fromCharCode (random (33, 122));
			if (isAlpha (ch) || isNumeric (ch)) {
				s += ch;
				}
		return (s.toLowerCase ());
		}
	function getCanonicalName (text) {
		var s = "", ch, flNextUpper = false;
		text = stripMarkup (text); //6/30/13 by DW
		for (var i = 0; i < text.length; i++) {
			ch = text [i];
			if (isAlpha (ch) || isNumeric (ch)) {
				if (flNextUpper) {
					ch = ch.toUpperCase ();
					flNextUpper = false;
					}
				else {
					ch = ch.toLowerCase ();
					}
				s += ch;
				}
			else { 
				if (ch == ' ') {
					flNextUpper = true;
					}
				}
			}
		return (s);
		}
	function secondsSince (when) { //2/1/13 by DW
		var now = new Date ();
		return ((now - when) / 1000);
		}
	function yesterday (when)  { //3/1/13 by DW
		if (when == undefined) {
			when = new Date ();
			}
		return (when - (24 * 60 * 60 * 1000));
		}
	function getURLParameter (name) {
		return (decodeURI ((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]));
		}
	function trimLeading (s, ch) { //3/10/13 by DW
		while (s.charAt (0) === ch) { 
			s = s.substr (1);
			}
		return (s);
		}
	function trimTrailing (s, ch) { //3/10/13 by DW
		while (s.charAt (s.length - 1) === ch) {
			s = s.substr (0, s.length - 1);
			}
		return (s);
		}
	function trimWhitespace (s)  { //3/10/13 by DW
		return (trimLeading (trimTrailing (s, " "), " "));
		}
	function urlDecode (s) { //3/26/13 by DW
		return (decodeURIComponent((s+'').replace(/\+/g, '%20')));
		}
	function padWithZeros (num, ctplaces) { //6/13/13 by DW
		var s = num.toString ();
		while (s.length < ctplaces) {
			s = "0" + s;
			}
		return (s);
		}
	function stripMarkup (s) { //6/30/13 by DW
		return (s.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>?/gi, ''));
		}
//misc
	function deleteObject (id) {
		var x = document.getElementById (id);
		x.parentNode.removeChild (x);
		}

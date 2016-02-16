webpackJsonp([2,10],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(1);

	appendTyper();

	$(document).foundation();

	function appendTyper() {

	    var $filter = $('.im-feeling-filter.ribbon');
	    var $anchor = $('.simple.menu > li > a', $filter);
	    var $span = $('<span />');
	    var $list = $('li .menu li', $filter);
	    var index = Math.floor(Math.random() * $list.length);
	    var label = $list.eq(index).text();
	    var split = label.split('');
	    var count = split.length;
	        split = split.map(function(letter) { return '<i>' + letter + '</i>'; }).join('');

	    $anchor.find(' > span').remove();
	    $anchor.append($span.addClass('count-'+count).html(split));

	    window.setTimeout(function() {
	        appendTyper();
	    }, 10000);

	}



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	
	    console.log('topbar default');

	    /*
	     * This is the homepage top-bar logic
	     * basic interactivity and event handling
	     */



/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ }
]);
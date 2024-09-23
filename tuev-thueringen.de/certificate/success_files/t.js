function et_escape(param)
{
	return encodeURIComponent(param);
}

function et_unescape(param)
{
	return decodeURIComponent(param);
}
        var arrOfLinksToPrepare = [{"name":"Twitter","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*twitter\\.com"},{"name":"Xing","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*xing\\.com"},{"name":"LinkedIn","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*linkedin\\.com"},{"name":"YouTube","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*youtube\\.com"},{"name":"Facebook","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*facebook\\.com"},{"name":"Instagram","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*instagram\\.com"},{"name":"Pinterest","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*pinterest\\.com"},{"name":"Tumblr","type":"socialMediaLink","pattern":"^(https?:)?(\/\/)?[^\/]*tumblr\\.com"},{"name":"External Link","type":"externalLink","pattern":"(?!mailto:)(?!tel:)(?!javascript:)(?!^(https?:\\\/\\\/)?(.*\\.)?(tuev-thueringen\\.de|twitter\\.com|xing\\.com|linkedin\\.com|youtube\\.com|facebook\\.com|instagram\\.com|pinterest\\.com|tumblr\\.com))(^.*$)"},{"name":"Mailto Link","type":"mailToLink","pattern":"^mailto:.*"},{"name":"Phone","type":"telLink","pattern":"^tel:.*"},{"name":"document","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.doc$|\\.docx$|\\.docm$|\\.dotm$|\\.dotx$|\\.dot$|\\.odt$|\\.pages$"},{"name":"excel","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.xls$|\\.xlsx$|\\.xlsm$|\\.xltm$|\\.xltx$|\\.xml$|\\.xlsb$|\\.ods$|\\.numbers$"},{"name":"powerpoint","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.ppt$|\\.pptx$|\\.pptm$|\\.pot$|\\.potx$|\\.potm$|\\.odp$|\\.key$"},{"name":"pdf","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.pdf$|\\.pdfx$"},{"name":"image","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.gif$|\\.jpg$|\\.jpeg$|\\.jpe$|\\.png$|\\.svg$|\\.tif$|\\.tiff$"},{"name":"mp3","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.mp3$"},{"name":"mp4","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.mp4$"},{"name":"csv","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.csv$"},{"name":"zip","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.zip$"},{"name":"stp","type":"download","pattern":"^(https?:\\\/\\\/)?(www\\.)?(.*\\.)?(tuev-thueringen\\.de).+\\.stp$"}];
        var preparePlayableMedia = true;
        var getParamsWhitelist = [];
            if (et_config.doNotUseSessionStorage !== true && typeof(sessionStorage) !== 'undefined')
            {
                sessionStorage.setItem('et_cssSelectors', JSON.stringify([]));
            }
            else
            {
                window.et_cssSelectors = [];
            }
var et_protocol = window._etracker.getConfigValue('protocol') || '//';

if(typeof(et_proxy_redirect) == 'undefined' || typeof(et_proxy_redirect) == 'unknown' || et_proxy_redirect == '')
{
	var et_server = et_protocol + 'www.etracker.de';
	var et_code_server = et_protocol + 'code.etracker.com';
}
else
{
	var et_server = et_proxy_redirect;
	var et_code_server = et_proxy_redirect;
}

var et_ver = '5.0';
var et_panelLink = et_server + '/app?et=';
var et_secureId = 'yj9Tys';

var et_maxUrlLength = (function () {
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	return isIE ? 2000 : 8190;
})();

var et_deliveryHash = "Z150nEfY7658Tg5R+V5yskMN2H+9x36Z";

var cc_autoPageNameRegistration = 'title';
var cc_getParamsWhiteList = [];

var et_initCoidTransfer = function() {
    var links = [];
    if(links.length > 0) {
        var anchors = document.getElementsByTagName('a');
        var coid = et_getCookieValue('et_allow_cookies', true) === '1' ? _etracker.getCoid() : '';
        et_prepareAnchorsForCoidTransfer(anchors, links, coid);
    }
};
et_initCoidTransfer();ET_Event = new etEvent("yj9Tys", et_server);
var cc_cntScript    = 'cntcc';
var cc_genericEventPath = '/api/v6/tracking/webEvents';
var cc_optInPath 	= '/api/v6/tracking/optIn';
var cc_cntCookie    = '/cntcookie.php';
var cc_deltaTime 	= 17270673502789-(new Date().getTime()*10);
var cc_codecVersion	= 1;
var cc_apiVersion	= '1.1.2';
var cc_articleDivider = '|';
var cc_itemDivider	= ';';

var et_autoSiteSearchActive = true;
var et_autoSiteSearchParameters = 'q,s,search,query,term,keyword'.split(',');
        (function(){
            window.et_tagManagerEntries = [];
            window.et_tagManagerData = {};
            window.et_tagManagerVars = {};

            var nextDataId = 0;

            // do not remove, this is still used in some existing tags
            window.et_tagManagerGetObjectText = function(object, element) {
                return object;
            };

            window.et_tagManagerCreateEvent = function(triggerType, eventObject, type, action, category) {
                switch(triggerType) {
                    case 'EVENT_TYPE_VIEW':
                        return new et_CssSelectorViewEvent(eventObject, type, action, category);
                    case 'EVENT_TYPE_CLICK':
                    case 'EVENT_TYPE_PAGE_VIEW':
                    default:
                        return new et_CssSelectorClickEvent(eventObject, type, action, category);
                }
            };

            window.et_tagManagerGetData = function(id) {
                var res = window.et_tagManagerData[id];
                delete window.et_tagManagerData[id];
                return res;
            };

            window.et_tagManagerInsertEntry = function(entry, element, trigger)
            {
                // store data in global array to be used in isolated tags later on
                window.et_tagManagerData[++nextDataId] = {element: element, trigger: trigger};

                var target = entry.target == "head" ? document.head : document.body;

                if(et_config.debug) {
                    console.log('%c Tag-Manager inject:', 'font-size: 16px; color: #000; background: #FFF;', entry, nextDataId);
                }

                var code = entry.content;
                code = code.replace(new RegExp("_DATA_ID_", "g"), nextDataId);

                _etracker.addOnDOMContentLoaded(function() {
                    var regexVar = /{{[^{}]+}}/g; // match everything except '{' & '}' inside brackets
                    code = code.replace(regexVar, function (match, capture) {
                        var idOrName = match.substring(2, match.length - 2);
                        var tagVar = window.et_tagManagerVars[idOrName];
                        if(tagVar)return window.et_resolveTagVar(tagVar, element, trigger);
                        return "";
                    });

                    if (element) {
                        code = code.replace(/::[A-Z_]+::/g, function (match, capture) {
                            switch(match) {
                                case '::CLICK_ID::':     return element.id || "";
                                case '::CLICK_CLASS::':  return element.className || "";
                                case '::CLICK_TARGET::': return element.href || "";
                                case '::CLICK_TEXT::':   return (element.innerText || "").trim();
                                default: return match;
                            }
                        });
                    }

                    if(typeof window.et_tagManagerInsertEntryHook === 'function') {
                        if(!window.et_tagManagerInsertEntryHook(code, entry, element, trigger)) {
                            return;
                        }
                    }
                    target.appendChild(document.createRange().createContextualFragment(code));
                });
            };

            window.et_tagManagerRunEntry = function(trigger_id, element, trigger)
            {
                var allowedCategories = (et_getCookieValue('et_oi_categories') || "") + ",no_consent,required";

                for(var i=0; i<window.et_tagManagerEntries.length; ++i) {
                    var entry = window.et_tagManagerEntries[i];
                    if(!entry.is_draft && entry.trigger_id == trigger_id && allowedCategories.indexOf(entry.category) >= 0) {
                        window.et_tagManagerInsertEntry(entry, element, trigger);
                    }
                }
            };

            window.et_tagManagerCheckAll = function() {
                var allowedCategories = (et_getCookieValue('et_oi_categories') || "") + ",no_consent,required";

                window.et_log("Tag-Manager check all tags, categories: " + allowedCategories);
                for(var i=0; i<window.et_tagManagerEntries.length; ++i) {
                    var entry = window.et_tagManagerEntries[i];
                    if(!entry.is_draft && !entry.executed && !entry.trigger_id && allowedCategories.indexOf(entry.category) >= 0) {
                        entry.executed = true;
                        window.et_tagManagerInsertEntry(entry);
                    }
                }
            };

            window.et_tagManagerCheckAll();
        })();
function _etc_start()
{

	_etracker.setFirstPixelSent();
	_etracker.doWrapperCalls();

	var et_isSubscriber = (
		'Notification' in window &&
		typeof(window.Notification) == "function" &&
		window.Notification.permission == "granted"
	);

	var extra = {
		et_sbscr: et_isSubscriber ? '1' : '0'
	};

	if(et_config.blockPageview !== true) {
		et_cc('yj9Tys', extra);
	}

	etCommerce.etCommerceLoad('yj9Tys');
    _etracker.initEvents();
    et_setupPageExitBeacon('yj9Tys');
    var prepareAnchors = arrOfLinksToPrepare.length ? new et_prepareAnchorsForEvents(arrOfLinksToPrepare, getParamsWhitelist) : null;
    var prepareMedia = preparePlayableMedia ? new et_prepareMediaForEvents() : null;
window.et_tagManagerCheckAll();	}

	var et_OptIn = 0;
	var et_CookieOptIn = 0;
	var et_ActionButton = 0;

    var _etc = function() {
		var ejs_key = et_config.secureCode;
		var tjs_key = typeof(et_secureId) !== 'undefined' ? et_secureId : '';
		if(ejs_key && tjs_key && ejs_key !== tjs_key) {
			return;
		}

		et_checkShowActionButton();
		et_checkShowOptIn();
		if(et_checkTrackingStart()) {
			_etc_start();
		}
	};
_etracker.setReady();
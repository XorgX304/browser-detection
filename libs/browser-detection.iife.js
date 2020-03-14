var BrowserDetection=function(){"use strict";var o={getFeature:function(e){return o.getProperty(o.windowObject,e)},hasFeature:function(e){return void 0!==o.getFeature(e)},hasStyle:function(e){return void 0!==o.windowObject.document.documentElement.style[e]},getProperty:function(e,t){var r;for(t=t.split(".");r=t.shift();){if(!(r in e))return;e=e[r]}return e},isMobile:function(){return o.hasFeature("orientation")},hasPlugin:function(e){var t=o.getFeature("navigator.plugins");if(void 0!==t[e])return!0;for(var r in t)if(t[r].name===e)return!0;return!1},windowObject:window},s="Mac OS",i="iOS",n="Windows",u="Android",l="Linux",p="OpenBSD",f="Unix",h="Solaris",c={5.1:"XP",5.2:"Server 2003","6.0":"Vista",6.1:7,6.2:8,"10.0":10};function F(){return function(){var e,t,r,a=o.getFeature("navigator.appVersion");if(r=a.match(/Windows NT (\d+)\.(\d+)/))e=n,t=c[r[1]+"."+r[2]];else if(r=a.match(/Mac OS X ((\d+)(_(\d+))?)/))e=s,t=parseFloat(r[1].replace(/_/g,"."));else if(/Linux/.test(a))e=l;else if(/OpenBSD/.test(a))e=p;else if(/HP-UX/.test(a))e=f;else if(/SunOS/.test(a))e=h;else if(r=a.match(/OS ((\d+)(_(\d+))?)/))e=i,t=parseFloat(r[1].replace(/_/g,"."));else if(r=a.match(/iPhone OS ((\d+)(_(\d+))?)/))e=i,t=parseFloat(r[1].replace(/_/g,"."));else{if(!(r=a.match(/Android ((\d+)(\.(\d+))?)/)))return;e=u,t=parseFloat(r[1])}return{os:e,osVersion:t}}()||function(){var e=o.getFeature("navigator.oscpu");if(e){var t,r,a;if(a=e.match(/Windows NT (\d+)\.(\d+)/))t=n,r=c[a[1]+"."+a[2]];else if(a=e.match(/Mac OS X ((\d+)(\.(\d+))?)/))t=s,r=parseFloat(a[1].replace(/_/g,"."));else if(/Linux/.test(e))t=l;else if(/OpenBSD/.test(e))t=p;else if(/HP-UX/.test(e))t=f;else{if(!/SunOS/.test(e))return;t=h}return{os:t,osVersion:r}}}()||(t=o.getFeature("navigator.platform"),/Macintosh|MacIntel|MacPPC|Mac68K/.test(t)?e=s:/iPhone|iPad|iPod/.test(t)?e=i:/Win32|Win64|Windows|WinCE/.test(t)?e=n:/Linux/.test(t)?e=l:/OpenBSD/.test(t)?e=p:/HP-UX/.test(t)?e=f:/SunOS/.test(t)&&(e=h),{os:e,osVersion:void 0});var e,t}var a="Trident",d="EdgeHTML",y="Gecko",m="WebKit",g="Blink",e="KHTML",t="Presto";function S(){return o.hasStyle("msScrollLimit")||o.hasStyle("behavior")?o.hasFeature("CSS")?d:a:o.hasStyle("MozAppearance")?y:o.hasStyle("OLink")?t:o.hasStyle("KhtmlUserInput")?e:o.hasStyle("webkitAppearance")?o.hasFeature("Intl.v8BreakIterator")&&o.hasFeature("CSS.supports")?g:m:void 0}function v(){var e,t=S(),r=F();if(-1!==[g].indexOf(t)&&o.hasFeature("chrome")){if(o.hasFeature("CompressionStream"))e=80;else if(o.hasFeature("GeolocationCoordinates"))e=79;else if(o.hasFeature("ReadableStreamDefaultReader"))e=78;else if(o.hasFeature("FormDataEvent"))e=77;else if(o.hasFeature("Blob.prototype.arrayBuffer"))e=76;else if(o.hasFeature("RTCRtpReceiver.prototype.rtcpTransport"))e=75;else if(o.hasFeature("TextEncoder.prototype.encodeInto"))e=74;else if(o.hasFeature("MediaSession"))e=73;else if(o.hasFeature("Intl.ListFormat"))e=72;else if(o.hasFeature("ShadowRoot.prototype.fullscreenElement"))e=71;else if(o.hasFeature("MediaStreamTrack.prototype.contentHint"))e=70;else if(o.hasFeature("webkitRTCPeerConnection.prototype.getTransceivers"))e=69;else if(o.hasFeature("CustomElementRegistry.prototype.upgrade"))e=68;else if(o.hasFeature("DataView.prototype.setBigUint64"))e=67;else if(o.hasFeature("AbortController"))e=66;else if(o.hasFeature("PerformanceObserver.prototype.takeRecords"))e=65;else if(o.hasFeature("Document.prototype.alinkColor"))e=64;else if(o.hasFeature("HTMLFrameSetElement.prototype.onbeforeprint"))e=63;else if(o.hasFeature("HTMLDataElement"))e=62;else if(o.hasFeature("SVGAnimationElement.prototype.getAttributeNames"))e=61;else if(o.hasFeature("BroadcastChannel.prototype.onmessageerror"))e=60;else if(o.hasFeature("ImageCapture.prototype.getPhotoCapabilities"))e=59;else if(o.hasFeature("AudioContext.prototype.baseLatency"))e=58;else if(o.hasFeature("AudioContext.prototype.getOutputTimestamp"))e=57;else if(o.hasFeature("BaseAudioContext.prototype.createConstantSource"))e=56;else if(o.hasFeature("document.body.onauxclick"))e=55;else if(o.hasFeature("Attr.prototype.getRootNode"))e=54;else if(o.hasFeature("Element.prototype.attachShadow"))e=53;else if(o.hasFeature("AudioListener.prototype.forwardX"))e=52;else if(o.hasFeature("CanvasCaptureMediaStreamTrack"))e=51;else if(o.hasFeature("DOMTokenList.prototype.value"))e=50;else if(o.hasFeature("URLSearchParams.prototype.toString"))e=49;else if(o.hasFeature("webkitIDBIndex.prototype.getAll"))e=48;else if(o.hasFeature("CSSNamespaceRule"))e=47;else if(o.hasFeature("Performance.prototype.onresourcetimingbufferfull"))e=46;else if(o.hasFeature("ServiceWorkerContainer.prototype.getRegistrations"))e=45;else if(o.hasFeature("URIError.stackTraceLimit"))e=44;else if(o.hasFeature("AnimationEvent"))e=43;else if(o.hasFeature("AudioContext.prototype.close"))e=42;else if(o.hasFeature("AudioContext.prototype.resume"))e=41;else{if(!o.hasFeature("HTMLButtonElement.prototype.reportValidity"))return;e=40}return Object.assign(r,{browser:"Chromium",browserVersion:e,layout:t,layoutVersion:void 0})}}var b={72:.6,73:.61,74:.63,75:.65,76:.67,77:.69,78:1,79:1.1,80:1.3};function r(){return function(){if(o.getFeature("navigator.appVersion").match(/Opera|OPR\//)){var e=v();if(e){var t=e.browserVersion;return Object.assign(e,{browser:"Opera",browserVersion:t-13})}}}()||function(){var e,t=o.getFeature("navigator.plugins"),r=v();if(r){var a=o.hasPlugin("Chrome PDF Plugin")&&o.hasPlugin("Chrome PDF Viewer");if(0===t.length||2===t.length&&a)return.67===(e=b[r.browserVersion])&&2===t.length&&(e=.68),Object.assign(r,{browser:"Brave",browserVersion:e})}}()||function(){o.getFeature("navigator.plugins");var e,t=S(),r=F(),a=v();return a&&o.hasPlugin("Microsoft Edge PDF Plugin")?Object.assign(a,{browser:"Edge"}):(t===d&&(o.hasFeature("AuthenticatorAssertionResponse")?e=44:o.hasFeature("PaymentRequestUpdateEvent.prototype.bubbles")?e=42:o.hasFeature("AbortController")?e=41:o.hasFeature("CanvasRenderingContext2D.prototype.imageSmoothingEnabled")?e=40:o.hasFeature("AudioContext.prototype.close")?e=38:o.hasFeature("AudioBuffer.prototype.copyFromChannel")?e=25:o.hasFeature("ANGLE_instanced_arrays.drawArraysInstancedANGLE")&&(e=20)),e?Object.assign(r,{browser:"Edge",browserVersion:e,layout:t,layoutVersion:void 0}):void 0)}()||function(){var e,t=S(),r=F();if(-1!==[a].indexOf(t)){if(o.hasFeature("ANGLE_instanced_arrays"))e=11;else if(o.hasFeature("AnimationEvent"))e=10;else if(o.hasFeature("CSSRule"))e=9;else if(o.hasFeature("console"))e=8;else if(o.hasFeature("HTMLElement.prototype.tabIndex"))e=7;else if(o.hasFeature("CharacterData"))e=6;else if(o.hasFeature("document.getElementById"))e=5.5;else if(o.hasFeature("document.documentElement"))e=5;else if(o.hasFeature("document.queryCommandEnabled"))e=4;else if(o.hasFeature("HTMLMarqueeElement"))e=2;else{if(!o.hasFeature("HTMLSelectElement"))return;e=1}return Object.assign(r,{browser:"IE",browserVersion:e,layout:t,layoutVersion:void 0})}}()||function(){var e,t=S(),r=F();if(-1!==[y].indexOf(t)&&(o.hasFeature("InstallTrigger")||o.hasFeature("Error.prototype.toSource"))){if(o.hasFeature("ServiceWorkerRegistration.prototype.active"))e=74;else if(o.hasStyle("overscroll-behavior-block"))e=73;else if(o.hasFeature("FormDataEvent"))e=72;else if(o.hasFeature("MathMLElement"))e=71;else if(o.hasFeature("AudioContext.prototype.baseLatency"))e=70;else if(o.hasFeature("Blob.prototype.arrayBuffer"))e=69;else if(o.hasFeature("AudioContext.prototype.createMediaStreamTrackSource"))e=68;else if(o.hasFeature("InputEvent.prototype.data"))e=67;else if(o.hasFeature("HTMLSlotElement.prototype.assignedElements"))e=66;else if(o.hasFeature("HTMLMarqueeElement"))e=65;else if(o.hasFeature("Document.prototype.exitFullscreen"))e=64;else if(o.hasFeature("Animation.prototype.effect"))e=63;else if(o.hasFeature("DOMPointReadOnly.prototype.toJSON"))e=62;else if(o.hasFeature("String.prototype.trimStart"))e=61;else if(o.hasFeature("Animation.prototype.updatePlaybackRate"))e=60;else if(o.hasFeature("Animation.prototype.pending"))e=59;else if(o.hasFeature("FontFace.prototype.display"))e=58;else if(o.hasFeature("AbortController"))e=57;else if(o.hasFeature("Document.prototype.onvisibilitychange"))e=56;else if(o.hasFeature("RTCRtpSender.prototype.getStats"))e=55;else if(o.hasFeature("URL.prototype.toJSON"))e=54;else if(o.hasFeature("BaseAudioContext.prototype.state"))e=53;else if(o.hasFeature("ConstantSourceNode"))e=52;else if(o.hasFeature("CanvasRenderingContext2D.prototype.imageSmoothingEnabled"))e=51;else if(o.hasFeature("Object.getOwnPropertyDescriptors"))e=50;else if(o.hasFeature("CanvasRenderingContext2D.prototype.filter"))e=49;else if(o.hasFeature("Animation"))e=48;else if(o.hasFeature("IDBKeyRange.prototype.includes"))e=47;else if(o.hasFeature("History.prototype.scrollRestoration"))e=46;else if(o.hasFeature("Element.prototype.getAttributeNames"))e=45;else if(o.hasFeature("URLSearchParams.prototype.entries"))e=44;else if(o.hasFeature("HTMLCanvasElement.prototype.captureStream"))e=43;else{if(!o.hasFeature("Reflect"))return;e=42}return Object.assign(r,{browser:"Firefox",browserVersion:e,layout:t,layoutVersion:void 0})}}()||function(){var e,t=S(),r=F();if(-1!==[m].indexOf(t)){if(o.hasFeature("Document.prototype.onpointerenter"))e=13;else if(o.hasFeature("DOMRectList"))e=12;else if(o.hasFeature("HTMLSlotElement.prototype.onrejectionhandled"))e=11;else if(o.hasFeature("XMLHttpRequest.prototype.onreadystatechange"))e=10;else if(o.hasFeature("AnimationEvent"))e=9;else{if(!o.hasFeature("Blob"))return;e=8}return Object.assign(r,{browser:"Safari",browserVersion:e,layout:t,layoutVersion:void 0})}}()||function(){var e=v();if(e)return o.hasPlugin("Chrome PDF Viewer")&&!o.hasPlugin("Chromoting Viewer")?Object.assign(e,{browser:"Chrome"}):void 0}()||v()}return r.helpers=o,r}();
var searchData=
[
  ['r_1657',['r',['../rangetouch_8js.html#ad6ed3998db5d3752930802ce2c9ddef7',1,'r(t):&#160;rangetouch.js'],['../plyr_8js.html#a509251fcb5ec3a9f1ed6156e5ea2d6d2',1,'r(e, t):&#160;plyr.js']]],
  ['rangetouch_2ejs_1658',['rangetouch.js',['../rangetouch_8js.html',1,'']]],
  ['read_5frecursive_1659',['read_recursive',['../classYAWK_1_1sys.html#a4f0d116c504d42c5e539d5f6a77c83d1',1,'YAWK::sys']]],
  ['readcontent_1660',['readContent',['../classYAWK_1_1page.html#a3e502c75f0443db6a6e1c7c43a6b4e57',1,'YAWK::page']]],
  ['readme_1661',['README',['../md__var_www_htdocs_yawk_io_README.html',1,'']]],
  ['readme_2emd_1662',['README.md',['../README_8md.html',1,'']]],
  ['readupdatefilebasefromserver_1663',['readUpdateFilebaseFromServer',['../classYAWK_1_1update.html#ab97b21f02ad7f097392edd762bf9a0ce',1,'YAWK::update']]],
  ['readupdateinifromserver_1664',['readUpdateIniFromServer',['../classYAWK_1_1update.html#aecd589d2997239070fdb1232b7845227',1,'YAWK::update']]],
  ['ready_1665',['ready',['../custom_8js.html#a7d02ef9e7bf15996f90569c99df88fdc',1,'ready(function() { $(&apos;#navbar&apos;).addClass(&apos;animated fadeIn slow&apos;);function setSticky(domElement, stickTo, offset) { if(domElement) { console.log(&apos;domElement:&apos;+domElement);} else { console.error(&apos;Unable to setSticky - domElement is null or undefined:&apos;+domElement);alert(&apos;Unable to setSticky - domElement is null or undefined:&apos;+domElement);} if(!stickTo) { console.error(&apos;Unable to setSticky - stickTo is null or undefined:&apos;+stickTo);alert(&apos;Unable to setSticky - stickTo is null or undefined:&apos;+stickTo);} if(!offset) offset=0;$(window).scroll(function() { if($(window).scrollTop() &gt; $(stickTo).outerHeight()) { $(&apos;#&apos;+domElement).addClass(&apos;fixed-top shadow&apos;);var navbar_height=$(&apos;.&apos;+domElement).outerHeight();$(&apos;body&apos;).css(&apos;padding-top&apos;, navbar_height+ &apos;px&apos;);} else { $(&apos;#&apos;+domElement).removeClass(&apos;fixed-top&apos;);$(&apos;body&apos;).css(&apos;padding-top&apos;, 0);} });} setSticky(&apos;navbar&apos;, &apos;#intro&apos;, 0);setSticky(&apos;subMenu&apos;, &apos;#intro&apos;, 100);$(&apos;#subMenu li&apos;).click(function(e) { e.preventDefault();var linkObject=$(this).find(&apos;a&apos;);var href=linkObject.attr(&apos;href&apos;);var target=linkObject.attr(&apos;target&apos;);if(href.charAt(0)===&apos;#&apos;) { try { $(&apos;html, body&apos;).velocity(&apos;scroll&apos;, { offset:$(href).offset().top - 250, duration:2400, easing:&apos;easeOutQuart&apos; });} catch(error) { console.log(&apos;Info:Velocity.js is not loaded. Please consider loading velocity.js within the template assets if you want the smoothest scroll experience. Error message:&apos;, error.message);$(&apos;html, body&apos;).animate({ scrollTop:$(href).offset().top - 250 }, 2400);} } else { if(target) { window.open(href, target);} else { window.open(href, &apos;_self&apos;);} } });$(&apos;.scrollup&apos;).click(function() { try{ $(&quot;html, body&quot;).velocity(&quot;scroll&quot;, { duration:2400, easing:&quot;easeOutExpo&quot; });} catch { console.log(&apos;Error:Velocity.js is not loaded. Please consider loading velocity.js within the assets if you want the smoothest scroll experience. Error message:&apos;, error.message);$(&quot;html, body&quot;).animate({scrollTop:0}, 1200);} });$(&apos;#darkMode&apos;).click(function() { var id=$(&apos;#darkMode&apos;).data(&apos;id&apos;);document.cookie=&apos;frontendSwitchID=&apos;+id;});$(&apos;#lightMode&apos;).click(function() { var id=$(&apos;#lightMode&apos;).data(&apos;id&apos;);document.cookie=&apos;frontendSwitchID=&apos;+id;});$(window).scroll(function() { var screenWidth=$(window).width();var scrollTop=$(window).scrollTop();var fadeOutValue=1 -(scrollTop/(screenWidth/3));$(&quot;.scrollDownFadeOut&quot;).css(&quot;opacity&quot;, fadeOutValue);});var $scrollingDiv=$(&quot;#scrollingDiv&quot;);$(window).scroll(function() { $scrollingDiv.stop().animate({&quot;marginTop&quot;:($(window).scrollTop())}, 0);});$(&quot;.sliding-link&quot;).click(function(e) { e.preventDefault();var aid=$(this).attr(&quot;href&quot;);$(&apos;html, body&apos;).animate({scrollTop:$(aid).offset().top - 150}, &apos;slow&apos;);window.location.hash=aid;});$(function() { $(&apos;[data-toggle=&quot;tooltip&quot;]&apos;).tooltip();});const options={ controlColor:&quot;#FFFFFF&quot;, controlShadow:true, addCircle:true, addCircleBlur:true, showLabels:true, labelOptions:{ before:&apos;Before&apos;, after:&apos;After&apos;, onHover:true }, smoothing:true, smoothingAmount:80, hoverStart:true, verticalMode:false, startingPoint:50, fluidMode:false };$(&apos;.image-compare&apos;).each(function() { let view=new ImageCompare(this, options).mount();});}):&#160;custom.js'],['../comments_8js.html#abe915daf783245829ee36ef79ce6ef45',1,'ready(function(){ $(&quot;#comments&quot;).collapse(&apos;show&apos;);$(&apos;#submit_post&apos;).click(function(){ var name=$(&apos;#name&apos;).val();var email=$(&apos;#email&apos;).val();var comment=$(&apos;#comment&apos;).val();var blogid=$(&apos;#blogid&apos;).val();var itemid=$(&apos;#itemid&apos;).val();var uid=$(&apos;#uid&apos;).val();var gid=$(&apos;#gid&apos;).val();if(!comment.trim()) { alert(&apos;Please enter comment&apos;);return false;} $.ajax({ url:&apos;system/plugins/blog/js/add-comment.php&apos;, type:&apos;post&apos;, data:&apos;name=&apos;+name+&apos;&amp;email=&apos;+email+&apos;&amp;comment=&apos;+comment+&apos;&amp;blogid=&apos;+blogid+&apos;&amp;itemid=&apos;+itemid+&apos;&amp;uid=&apos;+uid+&apos;&amp;gid=&apos;+gid, success:function(data){ if(! data){ alert(&apos;Something went wrong!&apos;);return false;} $(data).hide().prependTo($(&quot;#comment_thread&quot;)).fadeIn(820);$(&apos;#name&apos;).val(&apos;&apos;);$(&apos;#email&apos;).val(&apos;&apos;);$(&apos;#comment&apos;).val(&apos;&apos;);$(&apos;#comments_btn&apos;).val(&apos;&apos;);}, error:function() { alert(&apos;there was an error!&apos;);} });});}):&#160;comments.js'],['../yawk-backend_8js.html#a5850d7cd564e8d560324f9a0800b1887',1,'ready(function() { $(&apos;a[data-confirm]&apos;).click(function(ev) { modal=&apos;#dataConfirmModal&apos;;var href=$(this).attr(&apos;href&apos;);var title=$(this).attr(&apos;title&apos;);var icon=$(this).attr(&apos;data-icon&apos;);if(!icon) { icon=&apos;fa fa-trash-o&apos;;} if(!$(modal).length) { $(&apos;body&apos;).append(&apos;&lt; div id=&quot;dataConfirmModal&quot; class=&quot;modal fade&quot; role=&quot;dialog&quot; aria-labelledby=&quot;dataConfirmLabel&quot; aria-hidden=&quot;true&quot;&gt;&lt; div class=&quot;modal-dialog&quot;&gt;&lt; div class=&quot;modal-content&quot;&gt;&lt; div class=&quot;modal-header&quot;&gt;&lt; button type=&quot;button&quot; class=&quot;close&quot; data-dismiss=&quot;modal&quot; aria-hidden=&quot;true&quot;&gt;&lt; i class=&quot;fa fa-times&quot;&gt;&lt;/i &gt;&lt;/button &gt;&lt; br &gt;&lt; div class=&quot;col-md-1&quot;&gt;&lt; h3 class=&quot;modal-title&quot;&gt;&lt; i class=&quot;&apos;+icon+&apos;&quot;&gt;&lt;/i &gt;&lt;/h3 &gt;&lt;/div &gt;&lt; div class=&quot;col-md-11&quot;&gt;&lt; h3 class=&quot;modal-title&quot; id=&quot;dataConfirmLabel&quot;&gt;&apos;+title+&apos;&lt;/h3 &gt;&lt;/div &gt;&lt;/h3 &gt;&lt;/div &gt;&lt; div class=&quot;modal-body&quot;&gt;&lt;/div &gt;&lt; div class=&quot;modal-footer&quot;&gt;&lt; button type=&quot;button&quot; class=&quot;btn btn-default&quot; data-dismiss=&quot;modal&quot; aria-hidden=&quot;true&quot;&gt;Abbrechen&lt;/button &gt;&lt; a type=&quot;button&quot; class=&quot;btn btn-danger&quot; id=&quot;dataConfirmOK&quot;&gt;&lt; i class=&quot;&apos;+icon+&apos;&quot;&gt;&lt;/i &gt; L &amp;ouml;schen&lt;/a &gt;&lt;/div &gt;&lt;/div &gt;&lt;/div &gt;&lt;/div &gt;&apos;);} $(modal).find(&apos;.modal-body&apos;).text($(this).attr(&apos;data-confirm&apos;));$(&apos;#dataConfirmOK&apos;).attr(&apos;href&apos;, href);$(modal).modal({show:true});return false;});$(&apos;#terminateUser&apos;).click(function() { var terminate=window.confirm(&quot;ACHTUNG!\nDas wird Deinen Account permanent deaktivieren.\n&quot;+&quot;Bist Du Dir sicher, dass Du das tun willst?&quot;);if(terminate===true) { var terminateUser=window.confirm(&quot;Bist Du Dir wirklich ganz sicher?\n&quot;+&quot;Diese Aktion kann nicht rueckgaengig gemacht werden.&quot;);if(terminateUser===true) { $.get(&apos;system/templates/YaWK-bootstrap3/js/terminate-user.php&apos;, function(data) { if(data===&quot;true&quot;) { setTimeout(&quot;window.location=&apos;logout.html&apos;&quot;, 0);} else { alert(&quot;Fehler: &quot;+data);} });} } });function dismissNotifications() { $.ajax({ url:&apos;js/dismiss-notifications.php&apos;, type:&apos;POST&apos;, success:function(data) { if(!data) { alert(&apos;Something went wrong!&apos;);return false;} } });$(&quot;#bell-label&quot;).fadeOut();$(&apos;#notification-header&apos;).html(&apos;You have 0 notifications&apos;);$(&apos;#notification-menu&apos;).fadeOut();} $(&quot;#dismiss&quot;).click(function() { dismissNotifications();});$(&quot;#blockedBtn&quot;).hover(function() { $(&quot;#blockedBtn&quot;).hide();$(&quot;#askBtn&quot;).fadeIn(820);});}):&#160;yawk-backend.js'],['../voting_8js.html#a707707aebdc3bff02e7ee826664d3eba',1,'ready(function(){ var votingAmount=1;var itemid=$(&apos;#itemid&apos;).val();var totalVotesText=$(&apos;#totalVotesText&apos;);var voteUpText=$(&apos;#voteUpText&apos;);var voteDownText=$(&apos;#voteDownText&apos;);var voteUpIcon=$(&apos;#voteUpIcon&apos;);var voteDownIcon=$(&apos;#voteDownIcon&apos;);var totalVotes=$(totalVotesText).text();var voteUp=$(voteUpText).text();var voteDown=$(voteDownText).text();$(&apos;#voteUp&apos;).click(function(){ $.ajax({ url:&apos;system/plugins/blog/js/vote-up.php&apos;, type:&apos;post&apos;, data:&apos;voteUp=&apos;+votingAmount+&apos;&amp;itemid=&apos;+itemid, success:function(data){ if(! data){ alert(&apos;Something went wrong!&apos;);return false;} else { $(voteUpIcon).addClass(&apos;fa fa-thumbs-up&apos;);$(voteUpIcon).addClass(&apos;animated bounceIn&apos;);totalVotes++;voteUp++;voteUpText.html(voteUp);totalVotesText.html(totalVotes);} } });});$(&apos;#voteDown&apos;).click(function(){ $.ajax({ url:&apos;system/plugins/blog/js/vote-down.php&apos;, type:&apos;post&apos;, data:&apos;voteDown=&apos;+votingAmount+&apos;&amp;itemid=&apos;+itemid, success:function(data){ if(! data){ alert(&apos;Something went wrong!&apos;);return false;} else { $(voteDownIcon).addClass(&apos;fa fa-thumbs-down&apos;);$(voteDownIcon).addClass(&apos;animated bounceIn&apos;);totalVotes++;voteDown++;voteDownText.html(voteDown);totalVotesText.html(totalVotes);localStorage.setItem(&apos;voted&apos;, &apos;1&apos;);} } });});}):&#160;voting.js'],['../plugins_2booking_2js_2booking_8js.html#acf40fde5019001950117a550607a64be',1,'ready(function() { $(&apos;#form&apos;).validate({ rules:{ name:{ required:true, minlength:3 }, message:{ required:true }, email:{ required:true, email:true, maxlength:128 }, phone:{ required:true } }, messages:{ name:{ required:&quot;Please enter your name (or pseudonym). &amp;nbsp;&quot; }, email:{ required:&quot;Please enter a valid email address. &amp;nbsp;&quot; }, phone:{ required:&quot;Please enter your phone number. &amp;nbsp;&quot; }, message:{ required:&quot;Please enter your message. &amp;nbsp;&quot; } } });}):&#160;booking.js'],['../message-send_8js.html#aeb18d3b2599526dcc0ecdd41b0595cb6',1,'ready(function(){ $(&apos;#submit_post&apos;).click(function(){ var msg_to=$(&apos;#msg_to&apos;).val();var msg_body=$(&apos;#msg_body&apos;).val();var fromUID=$(&apos;#fromUID&apos;).val();var token=$(&apos;#token&apos;).val();msg_body=encodeURIComponent(msg_body);if(!msg_body.trim()) { alert(&apos;Die Nachricht ist leer. Bitte Text eingeben!&apos;);return false;} $.ajax({ url:&apos;../system/plugins/messages/js/message-new.php&apos;, type:&apos;post&apos;, data:&apos;msg_to=&apos;+msg_to+&apos;&amp;msg_body=&apos;+msg_body+&apos;&amp;fromUID=&apos;+fromUID+&apos;&amp;token=&apos;+token, success:function(data){ if(! data){ alert(&apos;Something went wrong!&apos;);return false;} else { $(data).hide().prependTo(&quot;#comment_thread&quot;).fadeIn(820).delay(2600).fadeOut(420);$(&apos;#msg_to&apos;).val(&apos;&apos;);$(&apos;#msg_body&apos;).val(&apos;&apos;);} } });});}):&#160;message-send.js'],['../admin_8js.html#a5aba3871743bcbcfce7128ddd2bdac32',1,'ready(function() { $(&apos;#1_hidden&apos;).hide();$(&apos;#2_hidden&apos;).hide();$(&apos;#3_hidden&apos;).hide();$(&apos;#4_hidden&apos;).hide();$(&apos;#5_hidden&apos;).hide();$(&apos;#gid-legend&apos;).change(function(){ if($(&apos;#gid-legend&apos;).val()==&apos;0&apos;) { $(&apos;#0_hidden&apos;).fadeIn();$(&apos;#1_hidden&apos;).hide();$(&apos;#2_hidden&apos;).hide();$(&apos;#3_hidden&apos;).hide();$(&apos;#4_hidden&apos;).hide();$(&apos;#5_hidden&apos;).hide();} else { $(&apos;#0_hidden&apos;).hide();$(&apos;#1_hidden&apos;).hide();$(&apos;#2_hidden&apos;).hide();$(&apos;#3_hidden&apos;).hide();$(&apos;#4_hidden&apos;).hide();$(&apos;#5_hidden&apos;).hide();} if($(&apos;#gid-legend&apos;).val()==&apos;5&apos;) { $(&apos;#5_hidden&apos;).fadeIn();} if($(&apos;#gid-legend&apos;).val()==&apos;4&apos;) { $(&apos;#4_hidden&apos;).fadeIn();} if($(&apos;#gid-legend&apos;).val()==&apos;3&apos;) { $(&apos;#3_hidden&apos;).fadeIn();} if($(&apos;#gid-legend&apos;).val()==&apos;2&apos;) { $(&apos;#2_hidden&apos;).fadeIn();} if($(&apos;#gid-legend&apos;).val()==&apos;1&apos;) { $(&apos;#1_hidden&apos;).fadeIn();} });}):&#160;admin.js'],['../adultCheck_8js.html#a683674ebc7c0d87b913a03e84895c92f',1,'ready(function() { $(&quot;#form&quot;).hide();$(&quot;#alt&quot;).hide();$(&quot;#yes&quot;).css(&apos;cursor&apos;, &apos;pointer&apos;).click(function() { $(&quot;#adultCheck&quot;).fadeOut(420);$(&quot;#form&quot;).delay(420).fadeIn(1240);});$(&quot;#no&quot;).css(&apos;cursor&apos;, &apos;pointer&apos;).click(function() { $(&quot;#adultCheck&quot;).fadeOut(420);$(&quot;#form&quot;).fadeOut(420);$(&quot;#alt&quot;).delay(420).fadeIn(1240);});$(&quot;#contact&quot;).css(&apos;cursor&apos;, &apos;pointer&apos;).click(function() { window.location.replace(&quot;index.html&quot;);});$(&quot;#home&quot;).css(&apos;cursor&apos;, &apos;pointer&apos;).click(function() { window.location.replace(&quot;index.html&quot;);});}):&#160;adultCheck.js'],['../signup_8js.html#ad2d8249c8ff218ae2569bb3b20460da8',1,'ready(function() { initTimer();function initTimer(){ var myTimer=0;$(&quot;#form&quot;).on(&apos;keydown&apos;, function() { if(myTimer) { clearTimeout(myTimer);} myTimer=setTimeout(function() { checkForm();}, 200);});} function checkForm(){ $(&apos;#form&apos;).validate({ errorPlacement:function(error, element) { error.insertBefore(element);}, rules:{ gid:{ required:true }, username:{ required:true, minlength:4, maxlength:48, remote:{ url:&quot;system/plugins/signup/js/check-username.php&quot;, type:&quot;post&quot; } }, email:{ required:true, email:true, maxlength:128, remote:{ url:&quot;system/plugins/signup/js/check-emailBooking.php&quot;, type:&quot;post&quot; } }, password1:{ required:true, minlength:4, maxlength:48 }, password2:{ required:true, minlength:4, maxlength:48, equalTo:&quot;#password1&quot; }, checkTerms:{ required:true }, firstname:{ required:true }, lastname:{ required:true, minlength:2 }, street:{ required:true }, zipcode:{ required:true, number:true, minlength:2, maxlength:10 }, city:{ required:true, minlength:2 }, country:{ required:true, minlength:2 }, newUsername:{ minlength:4, maxlength:48, remote:{ url:&quot;system/plugins/signup/js/check-username.php&quot;, type:&quot;post&quot; } }, newEmail:{ email:true, maxlength:128, remote:{ url:&quot;system/plugins/signup/js/check-emailChange.php&quot;, type:&quot;post&quot; } }, newPassword1:{ minlength:4, maxlength:48 }, newPassword2:{ minlength:4, maxlength:48, equalTo:&quot;#newPassword1&quot; }, newFirstname:{ minlength:2 }, newLastname:{ minlength:2 }, newStreet:{ minlength:2 }, newZipcode:{ minlength:2, maxlength:10 }, newCity:{ minlength:2 }, newCountry:{ minlength:2 }, newUrl:{ minlength:5 }, newTwitter:{ url:true, minlength:2 }, newFacebook:{ url:true, minlength:2 } }, messages:{ username:{ remote:&quot;Please select another username. &amp;nbsp;&quot; }, email:{ remote:&quot;Have you received an invitation? If not, you are not allowed to signup / login here. &amp;nbsp;&quot; }, firstname:{ remote:&quot;Please enter your name. &amp;nbsp;&quot; }, zipcode:{ number:&quot;Please enter a valid zip code. &amp;nbsp;&quot; }, password2:{ equalTo:&quot;Passwords do not match. &amp;nbsp;&quot; }, newEmail:{ remote:&quot;Please use another email address. &amp;nbsp;&quot; }, newPassword2:{ equalTo:&quot;Passwords do not match. &amp;nbsp;&quot; }, newUsername:{ equalTo:&quot;Please select another username &amp;nbsp;&quot; } } });} $(&apos;#1_hidden&apos;).hide();$(&apos;#2_hidden&apos;).hide();$(&apos;#3_hidden&apos;).hide();$(&apos;#4_hidden&apos;).hide();$(&apos;#5_hidden&apos;).hide();$(&apos;#gid&apos;).change(function(){ if($(&apos;#gid&apos;).val()==&apos;0&apos;) { $(&apos;#0_hidden&apos;).fadeIn();} else { $(&apos;#0_hidden&apos;).hide();$(&apos;#1_hidden&apos;).hide();$(&apos;#2_hidden&apos;).hide();$(&apos;#3_hidden&apos;).hide();$(&apos;#4_hidden&apos;).hide();$(&apos;#5_hidden&apos;).hide();} if($(&apos;#gid&apos;).val()==&apos;5&apos;) { $(&apos;#5_hidden&apos;).fadeIn();} if($(&apos;#gid&apos;).val()==&apos;4&apos;) { $(&apos;#4_hidden&apos;).fadeIn();} if($(&apos;#gid&apos;).val()==&apos;3&apos;) { $(&apos;#3_hidden&apos;).fadeIn();} if($(&apos;#gid&apos;).val()==&apos;2&apos;) { $(&apos;#2_hidden&apos;).fadeIn();} if($(&apos;#gid&apos;).val()==&apos;1&apos;) { $(&apos;#1_hidden&apos;).fadeIn();} });}):&#160;signup.js'],['../validationHelper_8js.html#ae26fcd6b1925163f6cfabdb5784a8937',1,'ready(function() { $(function() { $(&apos;[data-toggle=&quot;tooltip&quot;]&apos;).tooltip();});initTimer();function initTimer(){ var myTimer=0;$(&quot;#installerForm&quot;).on(&apos;keydown&apos;, function() { if(myTimer) { clearTimeout(myTimer);} myTimer=setTimeout(function() { checkForm();}, 200);});} function checkForm(){ $(&apos;#installerForm&apos;).validate({ errorPlacement:function(error, element) { error.insertBefore(element);}, rules:{ USERNAME:{ minlength:4, maxlength:48, remote:{ url:&quot;system/plugins/signup/js/check-username.php&quot;, type:&quot;post&quot; } }, EMAIL:{ email:true, maxlength:128 }, PASSWORD:{ minlength:4, maxlength:48 }, PASSWORD2:{ minlength:4, maxlength:48, equalTo:&quot;#PASSWORD&quot; } }, messages:{ USERNAME:{ remote:&quot;Please select another username. &amp;nbsp;&quot; }, PASSWORD2:{ equalTo:&quot;Passwords do not match. &amp;nbsp;&quot; } } });} }):&#160;validationHelper.js'],['../custom_8min_8js.html#a16822abee89d8b225a78c4b45eba685c',1,'ready(function(){function o(o, t, e){o?console.log(&quot;domElement: &quot;+o):(console.error(&quot;Unable to setSticky - domElement is null or undefined: &quot;+o), alert(&quot;Unable to setSticky - domElement is null or undefined: &quot;+o)), t||(console.error(&quot;Unable to setSticky - stickTo is null or undefined: &quot;+t), alert(&quot;Unable to setSticky - stickTo is null or undefined: &quot;+t)), e||(e=0),$(window).scroll(function(){if($(window).scrollTop()&gt;$(t).outerHeight()){$(&quot;#&quot;+o).addClass(&quot;fixed-top shadow&quot;);var e=$(&quot;.&quot;+o).outerHeight();$(&quot;body&quot;).css(&quot;padding-top&quot;, e+&quot;px&quot;)}else $(&quot;#&quot;+o).removeClass(&quot;fixed-top&quot;),$(&quot;body&quot;).css(&quot;padding-top&quot;, 0)})}$(&quot;#navbar&quot;).addClass(&quot;animated fadeIn slow&quot;), o(&quot;navbar&quot;,&quot;#intro&quot;, 0), o(&quot;subMenu&quot;,&quot;#intro&quot;, 100),$(&quot;#subMenu li&quot;).click(function(o){o.preventDefault();var t=$(this).find(&quot;a&quot;), e=t.attr(&quot;href&quot;), i=t.attr(&quot;target&quot;);if(&quot;#&quot;===e.charAt(0)) try{$(&quot;html, body&quot;).velocity(&quot;scroll&quot;,{offset:$(e).offset().top-250, duration:2400, easing:&quot;easeOutQuart&quot;})}catch(l){console.log(&quot;Info: Velocity.js is not loaded. Please consider loading velocity.js within the template assets if you want the smoothest scroll experience. Error message: &quot;, l.message),$(&quot;html, body&quot;).animate({scrollTop:$(e).offset().top-250}, 2400)}else i?window.open(e, i):window.open(e,&quot;_self&quot;)}),$(&quot;.scrollup&quot;).click(function(){try{$(&quot;html, body&quot;).velocity(&quot;scroll&quot;,{duration:2400, easing:&quot;easeOutExpo&quot;})}catch{console.log(&quot;Error: Velocity.js is not loaded. Please consider loading velocity.js within the assets if you want the smoothest scroll experience. Error message: &quot;, error.message),$(&quot;html, body&quot;).animate({scrollTop:0}, 1200)}}),$(&quot;#darkMode&quot;).click(function(){var o=$(&quot;#darkMode&quot;).data(&quot;id&quot;);document.cookie=&quot;frontendSwitchID=&quot;+o}),$(&quot;#lightMode&quot;).click(function(){var o=$(&quot;#lightMode&quot;).data(&quot;id&quot;);document.cookie=&quot;frontendSwitchID=&quot;+o}),$(window).scroll(function(){var o=$(window).width(), t=$(window).scrollTop();$(&quot;.scrollDownFadeOut&quot;).css(&quot;opacity&quot;, 1-t/(o/3))});var t=$(&quot;#scrollingDiv&quot;);$(window).scroll(function(){t.stop().animate({marginTop:$(window).scrollTop()}, 0)}),$(&quot;.sliding-link&quot;).click(function(o){o.preventDefault();var t=$(this).attr(&quot;href&quot;);$(&quot;html,body&quot;).animate({scrollTop:$(t).offset().top-150},&quot;slow&quot;), window.location.hash=t}),$(function(){$(&apos;[data-toggle=&quot;tooltip&quot;]&apos;).tooltip()});let e={controlColor:&quot;#FFFFFF&quot;, controlShadow:!0, addCircle:!0, addCircleBlur:!0, showLabels:!0, labelOptions:{before:&quot;Before&quot;, after:&quot;After&quot;, onHover:!0}, smoothing:!0, smoothingAmount:80, hoverStart:!0, verticalMode:!1, startingPoint:50, fluidMode:!1};$(&quot;.image-compare&quot;).each(function(){new ImageCompare(this, e).mount()})}):&#160;custom.min.js'],['../loginbox_8ajax_8js.html#a894d0f78e212db10692588e05938b423',1,'ready(function(){ initTimer();function initTimer(){ var myTimer=0;$(&quot;#loginForm&quot;).on(&apos;keydown&apos;, function() { if(myTimer) { clearTimeout(myTimer);} myTimer=setTimeout(function() { checkForm();}, 300);});} function checkForm(){ $(&apos;#loginForm&apos;).validate({ errorPlacement:function(error, element) { error.insertBefore(element);}, rules:{ user:{ required:true, minlength:4, maxlength:48 }, password:{ required:true, minlength:4, maxlength:48 } } });} var loginForm=$(&quot;#loginForm&quot;);$(loginForm).keypress(function(event){ var keycode=(event.keyCode ? event.keyCode :event.which);if(keycode===&apos;13&apos;){ $(&apos;#submit&apos;).click();} });$(loginForm).submit(function(e) { e.preventDefault();var user=$(&apos;#user&apos;).val();var password=$(&apos;#password&apos;).val();var loginboxGreeting=$(&apos;#loginboxGreeting&apos;).val();var loginboxGreetingText=$(&apos;#loginboxGreetingText&apos;).val();var loginboxGreetingTextType=$(&apos;#loginboxGreetingTextType&apos;).val();var loginboxGreetingTextClass=$(&apos;#loginboxGreetingTextClass&apos;).val();var loginboxGreetingSubtext=$(&apos;#loginboxGreetingSubtext&apos;).val();var loginboxGreetingShowName=$(&apos;#loginboxGreetingShowName&apos;).val();var loginboxLogoutBtnText=$(&apos;#loginboxLogoutBtnText&apos;).val();var loginboxLogoutBtnClass=$(&apos;#loginboxLogoutBtnClass&apos;).val();var loginboxRedirect=$(&apos;#loginboxRedirect&apos;).val();var loginboxRedirectTime=$(&apos;#loginboxRedirectTime&apos;).val();var logoutBtn=&apos;&lt; a href=&quot;logout&quot; id=&quot;logoutBtn&quot; class=&quot;&apos;+loginboxLogoutBtnClass+&apos;&quot; target=&quot;_self&quot;&gt;&apos;+loginboxLogoutBtnText+&apos;&lt;/a &gt;&apos;;function shakeForm() { $(loginForm).effect(&quot;shake&quot;, {times:3}, 820);} if(!password.trim()||(!user.trim())) { shakeForm();return false;} $.ajax({ url:&apos;system/widgets/loginbox/js/loginbox.ajax.php&apos;, type:&apos;POST&apos;, crossOrigin:true, async:true, data:{user:user, password:password}, success:function(data){ if(!data){ console.log(&apos;ajax error during login:no data was sent&apos;);alert(&apos;ERROR:ajax processing failed:no data was sent&apos;);return false;} else { if(data.status===true) { $(&quot;#heading&quot;).hide();$(&quot;#loginForm&quot;).hide();if(loginboxRedirect) { if(loginboxRedirectTime) { setTimeout(function() { window.location.href=&quot;&quot;+loginboxRedirect+&quot;&quot;;}, loginboxRedirectTime);} else { window.location.replace(&quot;&quot;+loginboxRedirect+&quot;&quot;);} } if(loginboxGreetingTextType===&quot;GLOBALTEXT&quot;) { loginboxGreetingTextType=&apos;p&apos;;} if(loginboxGreetingTextClass) { var loginboxGreetingTextClassMarkup=&apos; class=&quot;&apos;+loginboxGreetingTextClass+&apos;&quot;&apos;;} else { loginboxGreetingTextClassMarkup=&apos;&apos;;} if(loginboxGreeting===&quot;greeting-max&quot;) { $(&quot;#thankYouMessage&quot;).append(&apos;&lt;&apos;+loginboxGreetingTextType+&apos;&apos;+loginboxGreetingTextClassMarkup+&apos;&gt;&apos;+loginboxGreetingText+&apos; &apos;+user+&apos;&lt; small &gt;&apos;+loginboxGreetingSubtext+&apos;&lt;/small &gt;&lt;/&apos;+loginboxGreetingTextType+&apos;&gt;&apos;+logoutBtn+&apos;&apos;);} if(loginboxGreeting===&quot;greeting-min&quot;) { $(&quot;#thankYouMessage&quot;).append(&apos;&lt;&apos;+loginboxGreetingTextType+&apos;&apos;+loginboxGreetingTextClassMarkup+&apos;&gt;&apos;+loginboxGreetingText+&apos;&lt; small &gt;&apos;+loginboxGreetingSubtext+&apos;&lt;/small &gt;&lt;/&apos;+loginboxGreetingTextType+&apos;&gt;&apos;+logoutBtn+&apos;&apos;);} if(loginboxGreeting===&quot;greeting-button&quot;) { $(&quot;#thankYouMessage&quot;).append(&apos;&apos;+logoutBtn+&apos;&apos;);} if(loginboxGreeting===&quot;greeting-none&quot;) { $(&quot;#thankYouMessage&quot;).hide();} } else { shakeForm();} } }, error:function(data){ shakeForm();console.log(&apos;Login failed/username or pwd wrong&apos;);} });});}):&#160;loginbox.ajax.js'],['../loginbox_8ajax_8min_8js.html#a7789f15af384643b8dedf25e62ed3570',1,'ready(function(){var e;e=0,$(&quot;#loginForm&quot;).on(&quot;keydown&quot;, function(){e &amp;&amp;clearTimeout(e), e=setTimeout(function(){$(&quot;#loginForm&quot;).validate({errorPlacement:function(e, n){e.insertBefore(n)}, rules:{user:{required:!0, minlength:4, maxlength:48}, password:{required:!0, minlength:4, maxlength:48}}})}, 300)});var n=$(&quot;#loginForm&quot;);$(n).keypress(function(e){&quot;13&quot;===(e.keyCode?e.keyCode:e.which)&amp;&amp;$(&quot;#submit&quot;).click()}),$(n).submit(function(e){e.preventDefault();var o=$(&quot;#user&quot;).val(), t=$(&quot;#password&quot;).val(), a=$(&quot;#loginboxGreeting&quot;).val(), i=$(&quot;#loginboxGreetingText&quot;).val(), l=$(&quot;#loginboxGreetingTextType&quot;).val(), r=$(&quot;#loginboxGreetingTextClass&quot;).val(), s=$(&quot;#loginboxGreetingSubtext&quot;).val(), g=($(&quot;#loginboxGreetingShowName&quot;).val(),$(&quot;#loginboxLogoutBtnText&quot;).val()), u=$(&quot;#loginboxLogoutBtnClass&quot;).val(), c=$(&quot;#loginboxRedirect&quot;).val(), d=$(&quot;#loginboxRedirectTime&quot;).val(), m=&apos;&lt; a href=&quot;logout&quot; id=&quot;logoutBtn&quot; class=&quot;&apos;+u+&apos;&quot; target=&quot;_self&quot;&gt;&apos;+g+&quot;&lt;/a&gt;&quot;;function x(){$(n).effect(&quot;shake&quot;,{times:3}, 820)}if(!t.trim()||!o.trim()) return x(),!1;$.ajax({url:&quot;system/widgets/loginbox/js/loginbox.ajax.php&quot;, type:&quot;POST&quot;, crossOrigin:!0, async:!0, data:{user:o, password:t}, success:function(e){if(!e) return console.log(&quot;ajax error during login: no data was sent&quot;), alert(&quot;ERROR: ajax processing failed: no data was sent&quot;),!1;if(!0===e.status){if($(&quot;#heading&quot;).hide(),$(&quot;#loginForm&quot;).hide(), c &amp;&amp;(d?setTimeout(function(){window.location.href=&quot;&quot;+c}, d):window.location.replace(&quot;&quot;+c)),&quot;GLOBALTEXT&quot;===l &amp;&amp;(l=&quot;p&quot;), r) var n=&apos; class=&quot;&apos;+r+&apos;&quot;&apos;;else n=&quot;&quot;;&quot;greeting-max&quot;===a &amp;&amp;$(&quot;#thankYouMessage&quot;).append(&quot;&lt;&quot;+l+n+&quot;&gt;&quot;+i+&quot; &quot;+o+&quot; &lt;small&gt;&quot;+s+&quot;&lt;/small&gt;&lt;/&quot;+l+&quot;&gt;&quot;+m),&quot;greeting-min&quot;===a &amp;&amp;$(&quot;#thankYouMessage&quot;).append(&quot;&lt;&quot;+l+n+&quot;&gt;&quot;+i+&quot; &lt;small&gt;&quot;+s+&quot;&lt;/small&gt;&lt;/&quot;+l+&quot;&gt;&quot;+m),&quot;greeting-button&quot;===a &amp;&amp;$(&quot;#thankYouMessage&quot;).append(&quot;&quot;+m),&quot;greeting-none&quot;===a &amp;&amp;$(&quot;#thankYouMessage&quot;).hide()}else x()}, error:function(e){x(), console.log(&quot;Login failed / username or pwd wrong&quot;)}})})}):&#160;loginbox.ajax.min.js'],['../nl_8js.html#a7bb951d8100c4628d9ff3ea917cd0639',1,'ready(function(){ initTimer();function initTimer(){ var myTimer=0;$(&quot;#form&quot;).on(&apos;keydown&apos;, function() { if(myTimer) { clearTimeout(myTimer);} myTimer=setTimeout(function() { checkForm();}, 300);});} function checkForm(){ $(&apos;#form&apos;).validate({ errorPlacement:function(error, element) { error.insertBefore(element);}, rules:{ name:{ required:true, minlength:4, maxlength:48 }, email:{ required:true, email:true, maxlength:128 } } });} $(&apos;#submit&apos;).click(function(){ var email=$(&apos;#email&apos;).val();var name=$(&apos;#name&apos;).val();if(!email.trim()) { $(&quot;#form&quot;).effect(&quot;shake&quot;, {times:3}, 820);return false;} else { checkForm();} $.ajax({ url:&apos;system/widgets/newsletter/js/nl.php&apos;, type:&apos;post&apos;, crossOrigin:true, data:&apos;name=&apos;+name+&apos;&amp;email=&apos;+email, success:function(data){ if(! data){ alert(&apos;Something went wrong!&apos;);return false;} else { $(&quot;#formWrapper&quot;).hide();if(name) { user=name;} else { user=email;} $(&quot;#thankYouMessage&quot;).append(&apos;&lt; h2 &gt;Thank you &apos;+user+&apos;&lt; small &gt;for subscribing to the newsletter!&lt;/small &gt;&lt;/h2 &gt;&apos;);$(data).hide().prependTo(&quot;#thankYouMessage&quot;).fadeIn(820);} } });});}):&#160;nl.js']]],
  ['recursermdir_1666',['recurseRmdir',['../classYAWK_1_1sys.html#a3ab33a21c1dacb5a0002f793c00eaa28',1,'YAWK::sys']]],
  ['recursiveremovedirectory_1667',['recursiveRemoveDirectory',['../classYAWK_1_1filemanager.html#a5c5f23a26ebc7395a2a8a5161a8b18a6',1,'YAWK::filemanager']]],
  ['removeflags_1668',['removeFlags',['../classYAWK_1_1webmail.html#a9eb3745c422e74a4305560cdfd80d946',1,'YAWK::webmail']]],
  ['removespecialchars_1669',['removeSpecialChars',['../classYAWK_1_1filemanager.html#a9dd16cc437692fa264727fcc19012f3f',1,'YAWK::filemanager']]],
  ['reopen_2dsinglenotification_2ephp_1670',['reopen-singleNotification.php',['../reopen-singleNotification_8php.html',1,'']]],
  ['replacecarriagereturns_1671',['replaceCarriageReturns',['../classYAWK_1_1sys.html#ad96e7f020efdeb4f155c0c8ba1a2fc8f',1,'YAWK::sys']]],
  ['replacepretags_1672',['replacePreTags',['../classYAWK_1_1sys.html#a2280ebc06f22fadbbe55feb45648b112',1,'YAWK::sys']]],
  ['resetinstallation_1673',['resetInstallation',['../classYAWK_1_1installer.html#a6cf4181ffdf14b608a5f56af2c98845d',1,'YAWK::installer']]],
  ['resize_1674',['resize',['../classYAWK_1_1SimpleImage.html#a47458a719c9c8116fb8995aeb60656a8',1,'YAWK::SimpleImage']]],
  ['responsivevoicejs_2ephp_1675',['responsiveVoiceJS.php',['../responsiveVoiceJS_8php.html',1,'']]],
  ['restore_1676',['restore',['../classYAWK_1_1BACKUP_1_1backup.html#af9cfd78567ba5140a2d7127c56aab246',1,'YAWK::BACKUP::backup']]],
  ['return_1677',['return',['../plyr_8js.html#a9717e7bbecb906637e86cef6da3d83c2',1,'return():&#160;plyr.js'],['../rangetouch_8js.html#a13815c5e603c74c1174e5d4677ba6631',1,'return():&#160;rangetouch.js']]],
  ['returncurrentbootstrapversion_1678',['returnCurrentBootstrapVersion',['../classYAWK_1_1template.html#a9c195b1750ed0c2503005951a0dea80d',1,'YAWK::template']]],
  ['ritit_1679',['ritit',['../classYAWK_1_1filemanager.html#a4970028e98432db10d0f3b4d83de0f62',1,'YAWK::filemanager']]],
  ['rotate_1680',['rotate',['../classYAWK_1_1SimpleImage.html#a2fd9498396a1051cf2468b0591520abb',1,'YAWK::SimpleImage']]],
  ['run_1681',['run',['../classYAWK_1_1BACKUP_1_1backup.html#a0acb1c255e696eb96b9ba923d081697f',1,'YAWK::BACKUP::backup']]],
  ['rundatabasebackup_1682',['runDatabaseBackup',['../classYAWK_1_1BACKUP_1_1backup.html#ab5e07faf47af05f7da80d5e536f37362',1,'YAWK::BACKUP::backup']]],
  ['runfilebackup_1683',['runFileBackup',['../classYAWK_1_1BACKUP_1_1backup.html#a9db18a61b36dcfa48d55adbe563d3457',1,'YAWK::BACKUP::backup']]],
  ['runmigration_1684',['runMigration',['../classYAWK_1_1update.html#ae7ced3b2e716f0b428a98ef1bb1cda55',1,'YAWK::update']]]
];
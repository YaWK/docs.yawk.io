var searchData=
[
  ['a_4346',['A',['../plyr_8js.html#ac791c44248cdf1f8230d14ef32817c5c',1,'A(e, n):&#160;plyr.js'],['../moment_8min_8js.html#a4984806cf94342430faa56ae40de012d',1,'A(e, t):&#160;moment.min.js'],['../codemirror-compressed_8js.html#a83cadfda8bbd6496cb36e75e508e9ada',1,'A(a, b, c, d):&#160;codemirror-compressed.js']]],
  ['a_4347',['a',['../rangetouch_8js.html#a63b3149b1106f127e24d6e3310efdd10',1,'a(t):&#160;rangetouch.js'],['../plyr_8js.html#a87d0b3ee5ce4f71ef9b9792777925f40',1,'a(e):&#160;plyr.js'],['../moment_8min_8js.html#a2b5babb7e085c86f2080bafc312225d1',1,'a(e, t, n):&#160;moment.min.js'],['../bootstrap3_2dist_2js_2bootstrap_8min_8js.html#a9252b696bd8018d152e6640fcbe6e3b8',1,'a(c.target).is(&apos;input[type:&#160;bootstrap.min.js'],['../bootstrap3_2dist_2js_2bootstrap_8min_8js.html#aa40d46545e7534c1454ab41aa8ccf9a2',1,'a(function(){a.support.transition=b(), a.support.transition &amp;&amp;(a.event.special.bsTransitionEnd={bindType:a.support.transition.end, delegateType:a.support.transition.end, handle:function(b){if(a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)}})})}(jQuery):&#160;bootstrap.min.js'],['../bootstrap2-toggle_8min_8js.html#a4ef2eead5f2ac152abde05dc31f92d25',1,'a(function(){a(&quot;input[type=checkbox][data-toggle^=toggle]&quot;).bootstrapToggle()}):&#160;bootstrap2-toggle.min.js'],['../bootstrap-toggle_8min_8js.html#a4ef2eead5f2ac152abde05dc31f92d25',1,'a(function(){a(&quot;input[type=checkbox][data-toggle^=toggle]&quot;).bootstrapToggle()}):&#160;bootstrap-toggle.min.js'],['../Chart_8min_8js.html#aa0d629538bfde28033f10c9110862740',1,'a(e.Element.prototype,{initialize:function(){}, restore:function(t){return t?n(t, function(t){this[t]=this._saved[t]}, this):a(this, this._saved), this}, save:function(){return this._saved=o(this), delete this._saved._saved, this}, update:function(t){return n(t, function(t, i){this._saved[i]=this[i], this[i]=t}, this), this}, transition:function(t, i){return n(t, function(t, e){this[e]=(t-this._saved[e]) *i+this._saved[e]}, this), this}, tooltipPosition:function(){return{x:this.x, y:this.y}}, hasValue:function(){return f(this.value)}}):&#160;Chart.min.js'],['../Chart_8min_8js.html#a2305a6a5db93038df7580e7a30db010f',1,'a(e.Type.prototype,{initialize:function(){return this}, clear:function(){return M(this.chart), this}, stop:function(){return e.animationService.cancelAnimation(this), this}, resize:function(t){this.stop();var i=this.chart.canvas, e=F(this.chart.canvas), s=this.options.maintainAspectRatio?e/this.chart.aspectRatio:A(this.chart.canvas);return i.width=this.chart.width=e, i.height=this.chart.height=s, T(this.chart),&quot;function&quot;==typeof t &amp;&amp;t.apply(this, Array.prototype.slice.call(arguments, 1)), this}, reflow:c, render:function(t){if(t &amp;&amp;this.reflow(), this.options.animation &amp;&amp;!t){var i=new e.Animation;i.numSteps=this.options.animationSteps, i.easing=this.options.animationEasing, i.render=function(t, i){var e=s.easingEffects[i.easing], n=i.currentStep/i.numSteps, o=e(n);t.draw(o, n, i.currentStep)}, i.onAnimationProgress=this.options.onAnimationProgress, i.onAnimationComplete=this.options.onAnimationComplete, e.animationService.addAnimation(this, i)}else this.draw(), this.options.onAnimationComplete.call(this);return this}, generateLegend:function(){return s.template(this.options.legendTemplate, this)}, destroy:function(){this.stop(), this.clear(), k(this, this.events);var t=this.chart.canvas;t.width=this.chart.width, t.height=this.chart.height, t.style.removeProperty?(t.style.removeProperty(&quot;width&quot;), t.style.removeProperty(&quot;height&quot;)):(t.style.removeAttribute(&quot;width&quot;), t.style.removeAttribute(&quot;height&quot;)), delete e.instances[this.id]}, showTooltip:function(t, i){&quot;undefined&quot;==typeof this.activeElements &amp;&amp;(this.activeElements=[]);var o=function(t){var i=!1;return t.length!==this.activeElements.length?i=!0:(n(t, function(t, e){t!==this.activeElements[e]&amp;&amp;(i=!0)}, this), i)}.call(this, t);if(o||i){if(this.activeElements=t, this.draw(), this.options.customTooltips &amp;&amp;this.options.customTooltips(!1), t.length &gt;0) if(this.datasets &amp;&amp;this.datasets.length &gt;1){for(var a, h, r=this.datasets.length-1;r &gt;=0 &amp;&amp;(a=this.datasets[r].points||this.datasets[r].bars||this.datasets[r].segments, h=l(a, t[0]),-1===h);r--);var c=[], u=[], d=function(t){var i, e, n, o, a, l=[], r=[], d=[];return s.each(this.datasets, function(t){i=t.points||t.bars||t.segments, i[h]&amp;&amp;i[h].hasValue()&amp;&amp;l.push(i[h])}), s.each(l, function(t){r.push(t.x), d.push(t.y), c.push(s.template(this.options.multiTooltipTemplate, t)), u.push({fill:t._saved.fillColor||t.fillColor, stroke:t._saved.strokeColor||t.strokeColor})}, this), a=m(d), n=g(d), o=m(r), e=g(r),{x:o &gt;this.chart.width/2?o:e, y:(a+n)/2}}.call(this, h);new e.MultiTooltip({x:d.x, y:d.y, xPadding:this.options.tooltipXPadding, yPadding:this.options.tooltipYPadding, xOffset:this.options.tooltipXOffset, fillColor:this.options.tooltipFillColor, textColor:this.options.tooltipFontColor, fontFamily:this.options.tooltipFontFamily, fontStyle:this.options.tooltipFontStyle, fontSize:this.options.tooltipFontSize, titleTextColor:this.options.tooltipTitleFontColor, titleFontFamily:this.options.tooltipTitleFontFamily, titleFontStyle:this.options.tooltipTitleFontStyle, titleFontSize:this.options.tooltipTitleFontSize, cornerRadius:this.options.tooltipCornerRadius, labels:c, legendColors:u, legendColorBackground:this.options.multiTooltipKeyBackground, title:y(this.options.tooltipTitleTemplate, t[0]), chart:this.chart, ctx:this.chart.ctx, custom:this.options.customTooltips}).draw()}else n(t, function(t){var i=t.tooltipPosition();new e.Tooltip({x:Math.round(i.x), y:Math.round(i.y), xPadding:this.options.tooltipXPadding, yPadding:this.options.tooltipYPadding, fillColor:this.options.tooltipFillColor, textColor:this.options.tooltipFontColor, fontFamily:this.options.tooltipFontFamily, fontStyle:this.options.tooltipFontStyle, fontSize:this.options.tooltipFontSize, caretHeight:this.options.tooltipCaretSize, cornerRadius:this.options.tooltipCornerRadius, text:y(this.options.tooltipTemplate, t), chart:this.chart, custom:this.options.customTooltips}).draw()}, this);return this}}, toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)}}):&#160;Chart.min.js']]],
  ['activate_4348',['activate',['../app_8js.html#a5f224261f19b21e34ee21842d1aa7cfe',1,'activate():&#160;app.js'],['../app_8min_8js.html#a15e3e94fccdb80f8c946cb8da91dba04',1,'activate(a.sidebarToggleSelector):&#160;app.min.js'],['../app_8min_8js.html#ad7d3c25f637e2f881ee0137fa01b578d',1,'activate():&#160;app.min.js']]],
  ['adaptive_5fresize_4349',['adaptive_resize',['../classYAWK_1_1SimpleImage.html#ad488fa2692a5354c248164c214c7f7e4',1,'YAWK::SimpleImage']]],
  ['add_5fdrop_5fdatabase_4350',['add_drop_database',['../classIfsnop_1_1Mysqldump_1_1TypeAdapterFactory.html#aaecb9da8663fc2dda79a1b97dd8f6ff6',1,'Ifsnop\Mysqldump\TypeAdapterFactory\add_drop_database()'],['../classIfsnop_1_1Mysqldump_1_1TypeAdapterMysql.html#a48c6b9c36dd78524c016a9639f213e55',1,'Ifsnop\Mysqldump\TypeAdapterMysql\add_drop_database()']]],
  ['add_5fdrop_5ftrigger_4351',['add_drop_trigger',['../classIfsnop_1_1Mysqldump_1_1TypeAdapterFactory.html#a8b3ab433bf67f2b698f0607468c5822f',1,'Ifsnop\Mysqldump\TypeAdapterFactory\add_drop_trigger()'],['../classIfsnop_1_1Mysqldump_1_1TypeAdapterMysql.html#a085f5344a5b4b6011e6947593fbddf58',1,'Ifsnop\Mysqldump\TypeAdapterMysql\add_drop_trigger()']]],
  ['addaddress_4352',['addAddress',['../classPHPMailer.html#a710206c4b4c43b43f352fb8e139cd0da',1,'PHPMailer']]],
  ['addanaddress_4353',['addAnAddress',['../classPHPMailer.html#aaebdddb92a154b184d4e96fac9eced7b',1,'PHPMailer']]],
  ['addattachment_4354',['addAttachment',['../classPHPMailer.html#a62bfbe0f5f678aa826c9e15cb2adcfa2',1,'PHPMailer']]],
  ['addbcc_4355',['addBCC',['../classPHPMailer.html#af89ff133bac97eeed5c17bb8018e89db',1,'PHPMailer']]],
  ['addcc_4356',['addCC',['../classPHPMailer.html#a46b29687c4f82d20e947f94b908116e2',1,'PHPMailer']]],
  ['addcustomheader_4357',['addCustomHeader',['../classPHPMailer.html#a12be8fba58266eb85f2dbac5faba442d',1,'PHPMailer']]],
  ['addembeddedimage_4358',['addEmbeddedImage',['../classPHPMailer.html#a96495b70b7777ca87fb441458307bb47',1,'PHPMailer']]],
  ['addentry_4359',['addEntry',['../classYAWK_1_1menu.html#aa61e9cca17aab6a61ccd90dd17115078',1,'YAWK::menu']]],
  ['addevent_4360',['addEvent',['../Chart_8js.html#a6ceadb32dca77f8f3f91a158cd2e43e2',1,'addEvent(window, &quot;resize&quot;,(function(){ var timeout;return function(){ clearTimeout(timeout);timeout=setTimeout(function(){ each(Chart.instances, function(instance){ if(instance.options.responsive){ instance.resize(instance.render, true);} });}, 50);};})()):&#160;Chart.js'],['../Chart_8min_8js.html#af2d8ca8765fffa006324799ca2ec2456',1,'addEvent(window,&quot;resize&quot;, function(){var t;return function(){clearTimeout(t), t=setTimeout(function(){n(e.instances, function(t){t.options.responsive &amp;&amp;t.resize(t.render,!0)})}, 50)}}()):&#160;Chart.min.js']]],
  ['addeventlistener_4361',['addEventListener',['../fastclick_8min_8js.html#a288d62b71c7bec1d52a6323af077b2cb',1,'fastclick.min.js']]],
  ['addfolder_4362',['addFolder',['../classSSilence_1_1ImapClient_1_1ImapClient.html#a101dfba77279dc49b4897a295bc10e16',1,'SSilence::ImapClient::ImapClient']]],
  ['addpretags_4363',['addPreTags',['../classYAWK_1_1sys.html#aa85be21bb1e08a9c3a6f30f32ef9bd59',1,'YAWK::sys']]],
  ['addrappend_4364',['addrAppend',['../classPHPMailer.html#a72d47213e885d38421847c0028b6b7de',1,'PHPMailer']]],
  ['addreplyto_4365',['addReplyTo',['../classPHPMailer.html#a2cd3a4cf1456a55d8cd181e3605a6785',1,'PHPMailer']]],
  ['addrformat_4366',['addrFormat',['../classPHPMailer.html#ae6314aa12918fb6d71579d59550a2c2d',1,'PHPMailer']]],
  ['addstringattachment_4367',['addStringAttachment',['../classPHPMailer.html#a0edd7bb6bf61a7774ccb9390beaed059',1,'PHPMailer']]],
  ['addstringembeddedimage_4368',['addStringEmbeddedImage',['../classPHPMailer.html#a749f8bcce46fac00436124f7bdbd4c92',1,'PHPMailer']]],
  ['addtrailingslash_4369',['addTrailingSlash',['../classYAWK_1_1sys.html#aad77738469af0a5f8908a2af66751552',1,'YAWK::sys']]],
  ['ae_4370',['Ae',['../moment_8min_8js.html#a352b6830192b3494109bf63788d8ee1f',1,'moment.min.js']]],
  ['ajaxlogin_4371',['ajaxLogin',['../classYAWK_1_1user.html#ad58815de49927f3bcb46ee458c1b60ca',1,'YAWK::user']]],
  ['alternativeexists_4372',['alternativeExists',['../classPHPMailer.html#a1ba0cacb520c9783a37d21d4a5d306db',1,'PHPMailer']]],
  ['an_4373',['an',['../moment_8min_8js.html#a647445aa81c5b58e4327e582adabde6d',1,'moment.min.js']]],
  ['animate_4374',['animate',['../jquery_8textillate_8js.html#a336b74672f30ede1065d0a1648c2f7c3',1,'jquery.textillate.js']]],
  ['animatetokens_4375',['animateTokens',['../jquery_8textillate_8js.html#a29e04e9ade17357f95e959762a5b6240',1,'jquery.textillate.js']]],
  ['append_4376',['append',['../demo_8js.html#aab1d41841b1d2bd35867faef50ca11ea',1,'demo.js']]],
  ['array2lines_4377',['array2lines',['../classYAWK_1_1sys.html#a9b352c9dcea9c4a13bf855c8bb14f2ab',1,'YAWK::sys']]],
  ['array_5freplace_5frecursive_4378',['array_replace_recursive',['../classIfsnop_1_1Mysqldump_1_1Mysqldump.html#a848686ea47932a7c31121279e87cff0f',1,'Ifsnop::Mysqldump::Mysqldump']]],
  ['arraytoaddress_4379',['arrayToAddress',['../classSSilence_1_1ImapClient_1_1ImapClient.html#a60ae2f5889429915fd96819615a03bea',1,'SSilence::ImapClient::ImapClient']]],
  ['at_4380',['at',['../moment_8min_8js.html#ac9c00332647dfd849cebb98716e0573d',1,'moment.min.js']]],
  ['attachall_4381',['attachAll',['../classPHPMailer.html#a71ae1da3986acda925198fed1d9bbb36',1,'PHPMailer']]],
  ['attachmentexists_4382',['attachmentExists',['../classPHPMailer.html#a31d3dabce21fc9fc73884a8d0a5dda18',1,'PHPMailer']]],
  ['authenticate_4383',['authenticate',['../classSMTP.html#ad9e13db8ca2a75afc0fa0f4a3924808d',1,'SMTP']]],
  ['auto_5forient_4384',['auto_orient',['../classYAWK_1_1SimpleImage.html#aa3b2e155b841b04698dbf22aeae639d4',1,'YAWK::SimpleImage']]]
];

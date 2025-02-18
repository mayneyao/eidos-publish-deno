import{at as re,au as ae,av as ce,aw as oe,ax as Me,ay as Dt,az as Ae,aA as zt,a as Ot,aB as q,V as rt,O as Le,Q as Ie,am as Ye,an as Fe,U as We,S as Ve,ao as ze,a6 as Oe,a1 as xt,a0 as yt,aC as Pe,aD as Ne,aE as Re,a2 as Be,aF as He,aG as jt,aH as Qt,aI as Kt,aJ as Jt,aK as $t,aL as te,aM as ee,a4 as Ge,ak as Xe,aN as qe,aO as Ue,aP as Ze,aQ as je,aR as Qe,aS as Ke,aT as Je}from"./index-CHFZAUhc.js";function $e(t){return t}var pt=1,Ct=2,Lt=3,gt=4,ne=1e-6;function tn(t){return"translate("+t+",0)"}function en(t){return"translate(0,"+t+")"}function nn(t){return e=>+t(e)}function sn(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function rn(){return!this.__axis}function le(t,e){var n=[],i=null,a=null,f=6,d=6,p=3,M=typeof window<"u"&&window.devicePixelRatio>1?0:.5,g=t===pt||t===gt?-1:1,D=t===gt||t===Ct?"x":"y",S=t===pt||t===Lt?tn:en;function _(x){var H=i??(e.ticks?e.ticks.apply(e,n):e.domain()),m=a??(e.tickFormat?e.tickFormat.apply(e,n):$e),C=Math.max(f,0)+p,I=e.range(),L=+I[0]+M,O=+I[I.length-1]+M,P=(e.bandwidth?sn:nn)(e.copy(),M),G=x.selection?x.selection():x,N=G.selectAll(".domain").data([null]),z=G.selectAll(".tick").data(H,e).order(),k=z.exit(),w=z.enter().append("g").attr("class","tick"),b=z.select("line"),y=z.select("text");N=N.merge(N.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),z=z.merge(w),b=b.merge(w.append("line").attr("stroke","currentColor").attr(D+"2",g*f)),y=y.merge(w.append("text").attr("fill","currentColor").attr(D,g*C).attr("dy",t===pt?"0em":t===Lt?"0.71em":"0.32em")),x!==G&&(N=N.transition(x),z=z.transition(x),b=b.transition(x),y=y.transition(x),k=k.transition(x).attr("opacity",ne).attr("transform",function(s){return isFinite(s=P(s))?S(s+M):this.getAttribute("transform")}),w.attr("opacity",ne).attr("transform",function(s){var u=this.parentNode.__axis;return S((u&&isFinite(u=u(s))?u:P(s))+M)})),k.remove(),N.attr("d",t===gt||t===Ct?d?"M"+g*d+","+L+"H"+M+"V"+O+"H"+g*d:"M"+M+","+L+"V"+O:d?"M"+L+","+g*d+"V"+M+"H"+O+"V"+g*d:"M"+L+","+M+"H"+O),z.attr("opacity",1).attr("transform",function(s){return S(P(s)+M)}),b.attr(D+"2",g*f),y.attr(D,g*C).text(m),G.filter(rn).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Ct?"start":t===gt?"end":"middle"),G.each(function(){this.__axis=P})}return _.scale=function(x){return arguments.length?(e=x,_):e},_.ticks=function(){return n=Array.from(arguments),_},_.tickArguments=function(x){return arguments.length?(n=x==null?[]:Array.from(x),_):n.slice()},_.tickValues=function(x){return arguments.length?(i=x==null?null:Array.from(x),_):i&&i.slice()},_.tickFormat=function(x){return arguments.length?(a=x,_):a},_.tickSize=function(x){return arguments.length?(f=d=+x,_):f},_.tickSizeInner=function(x){return arguments.length?(f=+x,_):f},_.tickSizeOuter=function(x){return arguments.length?(d=+x,_):d},_.tickPadding=function(x){return arguments.length?(p=+x,_):p},_.offset=function(x){return arguments.length?(M=+x,_):M},_}function an(t){return le(pt,t)}function cn(t){return le(Lt,t)}const on=Math.PI/180,ln=180/Math.PI,Tt=18,ue=.96422,de=1,fe=.82521,he=4/29,at=6/29,me=3*at*at,un=at*at*at;function ke(t){if(t instanceof Q)return new Q(t.l,t.a,t.b,t.opacity);if(t instanceof et)return ye(t);t instanceof ce||(t=Me(t));var e=At(t.r),n=At(t.g),i=At(t.b),a=St((.2225045*e+.7168786*n+.0606169*i)/de),f,d;return e===n&&n===i?f=d=a:(f=St((.4360747*e+.3850649*n+.1430804*i)/ue),d=St((.0139322*e+.0971045*n+.7141733*i)/fe)),new Q(116*a-16,500*(f-a),200*(a-d),t.opacity)}function dn(t,e,n,i){return arguments.length===1?ke(t):new Q(t,e,n,i??1)}function Q(t,e,n,i){this.l=+t,this.a=+e,this.b=+n,this.opacity=+i}re(Q,dn,ae(oe,{brighter(t){return new Q(this.l+Tt*(t??1),this.a,this.b,this.opacity)},darker(t){return new Q(this.l-Tt*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return e=ue*Et(e),t=de*Et(t),n=fe*Et(n),new ce(Mt(3.1338561*e-1.6168667*t-.4906146*n),Mt(-.9787684*e+1.9161415*t+.033454*n),Mt(.0719453*e-.2289914*t+1.4052427*n),this.opacity)}}));function St(t){return t>un?Math.pow(t,1/3):t/me+he}function Et(t){return t>at?t*t*t:me*(t-he)}function Mt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function At(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function fn(t){if(t instanceof et)return new et(t.h,t.c,t.l,t.opacity);if(t instanceof Q||(t=ke(t)),t.a===0&&t.b===0)return new et(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*ln;return new et(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function It(t,e,n,i){return arguments.length===1?fn(t):new et(t,e,n,i??1)}function et(t,e,n,i){this.h=+t,this.c=+e,this.l=+n,this.opacity=+i}function ye(t){if(isNaN(t.h))return new Q(t.l,0,0,t.opacity);var e=t.h*on;return new Q(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}re(et,It,ae(oe,{brighter(t){return new et(this.h,this.c,this.l+Tt*(t??1),this.opacity)},darker(t){return new et(this.h,this.c,this.l-Tt*(t??1),this.opacity)},rgb(){return ye(this).rgb()}}));function hn(t){return function(e,n){var i=t((e=It(e)).h,(n=It(n)).h),a=Dt(e.c,n.c),f=Dt(e.l,n.l),d=Dt(e.opacity,n.opacity);return function(p){return e.h=i(p),e.c=a(p),e.l=f(p),e.opacity=d(p),e+""}}}const mn=hn(Ae);var ge={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(zt,function(){var n="day";return function(i,a,f){var d=function(g){return g.add(4-g.isoWeekday(),n)},p=a.prototype;p.isoWeekYear=function(){return d(this).year()},p.isoWeek=function(g){if(!this.$utils().u(g))return this.add(7*(g-this.isoWeek()),n);var D,S,_,x,H=d(this),m=(D=this.isoWeekYear(),S=this.$u,_=(S?f.utc:f)().year(D).startOf("year"),x=4-_.isoWeekday(),_.isoWeekday()>4&&(x+=7),_.add(x,n));return H.diff(m,"week")+1},p.isoWeekday=function(g){return this.$utils().u(g)?this.day()||7:this.day(this.day()%7?g:g-7)};var M=p.startOf;p.startOf=function(g,D){var S=this.$utils(),_=!!S.u(D)||D;return S.p(g)==="isoweek"?_?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):M.bind(this)(g,D)}}})})(ge);var kn=ge.exports;const yn=Ot(kn);var pe={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(zt,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,f=/\d\d?/,d=/\d*[^-_:/,()\s\d]+/,p={},M=function(m){return(m=+m)+(m>68?1900:2e3)},g=function(m){return function(C){this[m]=+C}},D=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=function(C){if(!C||C==="Z")return 0;var I=C.match(/([+-]|\d\d)/g),L=60*I[1]+(+I[2]||0);return L===0?0:I[0]==="+"?-L:L}(m)}],S=function(m){var C=p[m];return C&&(C.indexOf?C:C.s.concat(C.f))},_=function(m,C){var I,L=p.meridiem;if(L){for(var O=1;O<=24;O+=1)if(m.indexOf(L(O,0,C))>-1){I=O>12;break}}else I=m===(C?"pm":"PM");return I},x={A:[d,function(m){this.afternoon=_(m,!1)}],a:[d,function(m){this.afternoon=_(m,!0)}],S:[/\d/,function(m){this.milliseconds=100*+m}],SS:[a,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[f,g("seconds")],ss:[f,g("seconds")],m:[f,g("minutes")],mm:[f,g("minutes")],H:[f,g("hours")],h:[f,g("hours")],HH:[f,g("hours")],hh:[f,g("hours")],D:[f,g("day")],DD:[a,g("day")],Do:[d,function(m){var C=p.ordinal,I=m.match(/\d+/);if(this.day=I[0],C)for(var L=1;L<=31;L+=1)C(L).replace(/\[|\]/g,"")===m&&(this.day=L)}],M:[f,g("month")],MM:[a,g("month")],MMM:[d,function(m){var C=S("months"),I=(S("monthsShort")||C.map(function(L){return L.slice(0,3)})).indexOf(m)+1;if(I<1)throw new Error;this.month=I%12||I}],MMMM:[d,function(m){var C=S("months").indexOf(m)+1;if(C<1)throw new Error;this.month=C%12||C}],Y:[/[+-]?\d+/,g("year")],YY:[a,function(m){this.year=M(m)}],YYYY:[/\d{4}/,g("year")],Z:D,ZZ:D};function H(m){var C,I;C=m,I=p&&p.formats;for(var L=(m=C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(w,b,y){var s=y&&y.toUpperCase();return b||I[y]||n[y]||I[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(u,h,c){return h||c.slice(1)})})).match(i),O=L.length,P=0;P<O;P+=1){var G=L[P],N=x[G],z=N&&N[0],k=N&&N[1];L[P]=k?{regex:z,parser:k}:G.replace(/^\[|\]$/g,"")}return function(w){for(var b={},y=0,s=0;y<O;y+=1){var u=L[y];if(typeof u=="string")s+=u.length;else{var h=u.regex,c=u.parser,v=w.slice(s),r=h.exec(v)[0];c.call(b,r),w=w.replace(r,"")}}return function(W){var o=W.afternoon;if(o!==void 0){var l=W.hours;o?l<12&&(W.hours+=12):l===12&&(W.hours=0),delete W.afternoon}}(b),b}}return function(m,C,I){I.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(M=m.parseTwoDigitYear);var L=C.prototype,O=L.parse;L.parse=function(P){var G=P.date,N=P.utc,z=P.args;this.$u=N;var k=z[1];if(typeof k=="string"){var w=z[2]===!0,b=z[3]===!0,y=w||b,s=z[2];b&&(s=z[2]),p=this.$locale(),!w&&s&&(p=I.Ls[s]),this.$d=function(v,r,W){try{if(["x","X"].indexOf(r)>-1)return new Date((r==="X"?1e3:1)*v);var o=H(r)(v),l=o.year,T=o.month,V=o.day,A=o.hours,Y=o.minutes,E=o.seconds,F=o.milliseconds,nt=o.zone,K=new Date,lt=V||(l||T?1:K.getDate()),ut=l||K.getFullYear(),R=0;l&&!T||(R=T>0?T-1:K.getMonth());var U=A||0,X=Y||0,it=E||0,Z=F||0;return nt?new Date(Date.UTC(ut,R,lt,U,X,it,Z+60*nt.offset*1e3)):W?new Date(Date.UTC(ut,R,lt,U,X,it,Z)):new Date(ut,R,lt,U,X,it,Z)}catch{return new Date("")}}(G,k,N),this.init(),s&&s!==!0&&(this.$L=this.locale(s).$L),y&&G!=this.format(k)&&(this.$d=new Date("")),p={}}else if(k instanceof Array)for(var u=k.length,h=1;h<=u;h+=1){z[1]=k[h-1];var c=I.apply(this,z);if(c.isValid()){this.$d=c.$d,this.$L=c.$L,this.init();break}h===u&&(this.$d=new Date(""))}else O.call(this,P)}}})})(pe);var gn=pe.exports;const pn=Ot(gn);var be={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(zt,function(){return function(n,i){var a=i.prototype,f=a.format;a.format=function(d){var p=this,M=this.$locale();if(!this.isValid())return f.bind(this)(d);var g=this.$utils(),D=(d||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(S){switch(S){case"Q":return Math.ceil((p.$M+1)/3);case"Do":return M.ordinal(p.$D);case"gggg":return p.weekYear();case"GGGG":return p.isoWeekYear();case"wo":return M.ordinal(p.week(),"W");case"w":case"ww":return g.s(p.week(),S==="w"?1:2,"0");case"W":case"WW":return g.s(p.isoWeek(),S==="W"?1:2,"0");case"k":case"kk":return g.s(String(p.$H===0?24:p.$H),S==="k"?1:2,"0");case"X":return Math.floor(p.$d.getTime()/1e3);case"x":return p.$d.getTime();case"z":return"["+p.offsetName()+"]";case"zzz":return"["+p.offsetName("long")+"]";default:return S}});return f.bind(this)(D)}}})})(be);var bn=be.exports;const vn=Ot(bn);var Yt=function(){var t=function(y,s,u,h){for(u=u||{},h=y.length;h--;u[y[h]]=s);return u},e=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],n=[1,25],i=[1,26],a=[1,27],f=[1,28],d=[1,29],p=[1,30],M=[1,31],g=[1,9],D=[1,10],S=[1,11],_=[1,12],x=[1,13],H=[1,14],m=[1,15],C=[1,16],I=[1,18],L=[1,19],O=[1,20],P=[1,21],G=[1,22],N=[1,24],z=[1,32],k={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(s,u,h,c,v,r,W){var o=r.length-1;switch(v){case 1:return r[o-1];case 2:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 6:case 7:this.$=[];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setDateFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 16:c.enableInclusiveEndDates(),this.$=r[o].substr(18);break;case 17:c.TopAxis(),this.$=r[o].substr(8);break;case 18:c.setAxisFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 19:c.setTickInterval(r[o].substr(13)),this.$=r[o].substr(13);break;case 20:c.setExcludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 21:c.setIncludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 22:c.setTodayMarker(r[o].substr(12)),this.$=r[o].substr(12);break;case 24:c.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 25:this.$=r[o].trim(),c.setAccTitle(this.$);break;case 26:case 27:this.$=r[o].trim(),c.setAccDescription(this.$);break;case 28:c.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 30:c.addTask(r[o-1],r[o]),this.$="task";break;case 31:this.$=r[o-1],c.setClickEvent(r[o-1],r[o],null);break;case 32:this.$=r[o-2],c.setClickEvent(r[o-2],r[o-1],r[o]);break;case 33:this.$=r[o-2],c.setClickEvent(r[o-2],r[o-1],null),c.setLink(r[o-2],r[o]);break;case 34:this.$=r[o-3],c.setClickEvent(r[o-3],r[o-2],r[o-1]),c.setLink(r[o-3],r[o]);break;case 35:this.$=r[o-2],c.setClickEvent(r[o-2],r[o],null),c.setLink(r[o-2],r[o-1]);break;case 36:this.$=r[o-3],c.setClickEvent(r[o-3],r[o-1],r[o]),c.setLink(r[o-3],r[o-2]);break;case 37:this.$=r[o-1],c.setLink(r[o-1],r[o]);break;case 38:case 44:this.$=r[o-1]+" "+r[o];break;case 39:case 40:case 42:this.$=r[o-2]+" "+r[o-1]+" "+r[o];break;case 41:case 43:this.$=r[o-3]+" "+r[o-2]+" "+r[o-1]+" "+r[o];break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:i,14:a,15:f,16:d,17:p,18:M,19:g,20:D,21:S,22:_,23:x,24:H,25:m,26:C,27:I,28:L,30:O,32:P,33:G,34:23,35:N,37:z},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:33,11:17,12:n,13:i,14:a,15:f,16:d,17:p,18:M,19:g,20:D,21:S,22:_,23:x,24:H,25:m,26:C,27:I,28:L,30:O,32:P,33:G,34:23,35:N,37:z},t(e,[2,5]),t(e,[2,6]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),{29:[1,34]},{31:[1,35]},t(e,[2,27]),t(e,[2,28]),t(e,[2,29]),{36:[1,36]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),{38:[1,37],40:[1,38]},t(e,[2,4]),t(e,[2,25]),t(e,[2,26]),t(e,[2,30]),t(e,[2,31],{39:[1,39],40:[1,40]}),t(e,[2,37],{38:[1,41]}),t(e,[2,32],{40:[1,42]}),t(e,[2,33]),t(e,[2,35],{39:[1,43]}),t(e,[2,34]),t(e,[2,36])],defaultActions:{},parseError:function(s,u){if(u.recoverable)this.trace(s);else{var h=new Error(s);throw h.hash=u,h}},parse:function(s){var u=this,h=[0],c=[],v=[null],r=[],W=this.table,o="",l=0,T=0,V=2,A=1,Y=r.slice.call(arguments,1),E=Object.create(this.lexer),F={yy:{}};for(var nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,nt)&&(F.yy[nt]=this.yy[nt]);E.setInput(s,F.yy),F.yy.lexer=E,F.yy.parser=this,typeof E.yylloc>"u"&&(E.yylloc={});var K=E.yylloc;r.push(K);var lt=E.options&&E.options.ranges;typeof F.yy.parseError=="function"?this.parseError=F.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ut(){var $;return $=c.pop()||E.lex()||A,typeof $!="number"&&($ instanceof Array&&(c=$,$=c.pop()),$=u.symbols_[$]||$),$}for(var R,U,X,it,Z={},dt,J,Zt,kt;;){if(U=h[h.length-1],this.defaultActions[U]?X=this.defaultActions[U]:((R===null||typeof R>"u")&&(R=ut()),X=W[U]&&W[U][R]),typeof X>"u"||!X.length||!X[0]){var _t="";kt=[];for(dt in W[U])this.terminals_[dt]&&dt>V&&kt.push("'"+this.terminals_[dt]+"'");E.showPosition?_t="Parse error on line "+(l+1)+`:
`+E.showPosition()+`
Expecting `+kt.join(", ")+", got '"+(this.terminals_[R]||R)+"'":_t="Parse error on line "+(l+1)+": Unexpected "+(R==A?"end of input":"'"+(this.terminals_[R]||R)+"'"),this.parseError(_t,{text:E.match,token:this.terminals_[R]||R,line:E.yylineno,loc:K,expected:kt})}if(X[0]instanceof Array&&X.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+R);switch(X[0]){case 1:h.push(R),v.push(E.yytext),r.push(E.yylloc),h.push(X[1]),R=null,T=E.yyleng,o=E.yytext,l=E.yylineno,K=E.yylloc;break;case 2:if(J=this.productions_[X[1]][1],Z.$=v[v.length-J],Z._$={first_line:r[r.length-(J||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(J||1)].first_column,last_column:r[r.length-1].last_column},lt&&(Z._$.range=[r[r.length-(J||1)].range[0],r[r.length-1].range[1]]),it=this.performAction.apply(Z,[o,T,l,F.yy,X[1],v,r].concat(Y)),typeof it<"u")return it;J&&(h=h.slice(0,-1*J*2),v=v.slice(0,-1*J),r=r.slice(0,-1*J)),h.push(this.productions_[X[1]][0]),v.push(Z.$),r.push(Z._$),Zt=W[h[h.length-2]][h[h.length-1]],h.push(Zt);break;case 3:return!0}}return!0}},w=function(){var y={EOF:1,parseError:function(u,h){if(this.yy.parser)this.yy.parser.parseError(u,h);else throw new Error(u)},setInput:function(s,u){return this.yy=u||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var u=s.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var u=s.length,h=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var v=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===c.length?this.yylloc.first_column:0)+c[c.length-h.length].length-h[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[v[0],v[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),u=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+u+"^"},test_match:function(s,u){var h,c,v;if(this.options.backtrack_lexer&&(v={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(v.yylloc.range=this.yylloc.range.slice(0))),c=s[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],h=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var r in v)this[r]=v[r];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,u,h,c;this._more||(this.yytext="",this.match="");for(var v=this._currentRules(),r=0;r<v.length;r++)if(h=this._input.match(this.rules[v[r]]),h&&(!u||h[0].length>u[0].length)){if(u=h,c=r,this.options.backtrack_lexer){if(s=this.test_match(h,v[r]),s!==!1)return s;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(s=this.test_match(u,v[c]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var u=this.next();return u||this.lex()},begin:function(u){this.conditionStack.push(u)},popState:function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},pushState:function(u){this.begin(u)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(u,h,c,v){switch(c){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 40;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};return y}();k.lexer=w;function b(){this.yy={}}return b.prototype=k,k.Parser=b,new b}();Yt.parser=Yt;const xn=Yt;q.extend(yn);q.extend(pn);q.extend(vn);let j="",Pt="",Nt,Rt="",ft=[],ht=[],Bt={},Ht=[],wt=[],ot="",Gt="";const ve=["active","done","crit","milestone"];let Xt=[],mt=!1,qt=!1,Ut="sunday",Ft=0;const Tn=function(){Ht=[],wt=[],ot="",Xt=[],bt=0,Vt=void 0,vt=void 0,B=[],j="",Pt="",Gt="",Nt=void 0,Rt="",ft=[],ht=[],mt=!1,qt=!1,Ft=0,Bt={},ze(),Ut="sunday"},wn=function(t){Pt=t},_n=function(){return Pt},Dn=function(t){Nt=t},Cn=function(){return Nt},Sn=function(t){Rt=t},En=function(){return Rt},Mn=function(t){j=t},An=function(){mt=!0},Ln=function(){return mt},In=function(){qt=!0},Yn=function(){return qt},Fn=function(t){Gt=t},Wn=function(){return Gt},Vn=function(){return j},zn=function(t){ft=t.toLowerCase().split(/[\s,]+/)},On=function(){return ft},Pn=function(t){ht=t.toLowerCase().split(/[\s,]+/)},Nn=function(){return ht},Rn=function(){return Bt},Bn=function(t){ot=t,Ht.push(t)},Hn=function(){return Ht},Gn=function(){let t=ie();const e=10;let n=0;for(;!t&&n<e;)t=ie(),n++;return wt=B,wt},xe=function(t,e,n,i){return i.includes(t.format(e.trim()))?!1:t.isoWeekday()>=6&&n.includes("weekends")||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(t.format(e.trim()))},Xn=function(t){Ut=t},qn=function(){return Ut},Te=function(t,e,n,i){if(!n.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=q(t.startTime):a=q(t.startTime,e,!0),a=a.add(1,"d");let f;t.endTime instanceof Date?f=q(t.endTime):f=q(t.endTime,e,!0);const[d,p]=Un(a,f,e,n,i);t.endTime=d.toDate(),t.renderEndTime=p},Un=function(t,e,n,i,a){let f=!1,d=null;for(;t<=e;)f||(d=e.toDate()),f=xe(t,n,i,a),f&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,d]},Wt=function(t,e,n){n=n.trim();const a=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(a!==null){let d=null;for(const M of a.groups.ids.split(" ")){let g=st(M);g!==void 0&&(!d||g.endTime>d.endTime)&&(d=g)}if(d)return d.endTime;const p=new Date;return p.setHours(0,0,0,0),p}let f=q(n,e.trim(),!0);if(f.isValid())return f.toDate();{xt.debug("Invalid date:"+n),xt.debug("With date format:"+e.trim());const d=new Date(n);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+n);return d}},we=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},_e=function(t,e,n,i=!1){n=n.trim();const f=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(f!==null){let D=null;for(const _ of f.groups.ids.split(" ")){let x=st(_);x!==void 0&&(!D||x.startTime<D.startTime)&&(D=x)}if(D)return D.startTime;const S=new Date;return S.setHours(0,0,0,0),S}let d=q(n,e.trim(),!0);if(d.isValid())return i&&(d=d.add(1,"d")),d.toDate();let p=q(t);const[M,g]=we(n);if(!Number.isNaN(M)){const D=p.add(M,g);D.isValid()&&(p=D)}return p.toDate()};let bt=0;const ct=function(t){return t===void 0?(bt=bt+1,"task"+bt):t},Zn=function(t,e){let n;e.substr(0,1)===":"?n=e.substr(1,e.length):n=e;const i=n.split(","),a={};Ee(i,a,ve);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let f="";switch(i.length){case 1:a.id=ct(),a.startTime=t.endTime,f=i[0];break;case 2:a.id=ct(),a.startTime=Wt(void 0,j,i[0]),f=i[1];break;case 3:a.id=ct(i[0]),a.startTime=Wt(void 0,j,i[1]),f=i[2];break}return f&&(a.endTime=_e(a.startTime,j,f,mt),a.manualEndTime=q(f,"YYYY-MM-DD",!0).isValid(),Te(a,j,ht,ft)),a},jn=function(t,e){let n;e.substr(0,1)===":"?n=e.substr(1,e.length):n=e;const i=n.split(","),a={};Ee(i,a,ve);for(let f=0;f<i.length;f++)i[f]=i[f].trim();switch(i.length){case 1:a.id=ct(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:i[0]};break;case 2:a.id=ct(),a.startTime={type:"getStartDate",startData:i[0]},a.endTime={data:i[1]};break;case 3:a.id=ct(i[0]),a.startTime={type:"getStartDate",startData:i[1]},a.endTime={data:i[2]};break}return a};let Vt,vt,B=[];const De={},Qn=function(t,e){const n={section:ot,type:ot,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=jn(vt,e);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=vt,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=Ft,Ft++;const a=B.push(n);vt=n.id,De[n.id]=a-1},st=function(t){const e=De[t];return B[e]},Kn=function(t,e){const n={section:ot,type:ot,description:t,task:t,classes:[]},i=Zn(Vt,e);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,Vt=n,wt.push(n)},ie=function(){const t=function(n){const i=B[n];let a="";switch(B[n].raw.startTime.type){case"prevTaskEnd":{const f=st(i.prevTaskId);i.startTime=f.endTime;break}case"getStartDate":a=Wt(void 0,j,B[n].raw.startTime.startData),a&&(B[n].startTime=a);break}return B[n].startTime&&(B[n].endTime=_e(B[n].startTime,j,B[n].raw.endTime.data,mt),B[n].endTime&&(B[n].processed=!0,B[n].manualEndTime=q(B[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Te(B[n],j,ht,ft))),B[n].processed};let e=!0;for(const[n,i]of B.entries())t(n),e=e&&i.processed;return e},Jn=function(t,e){let n=e;rt().securityLevel!=="loose"&&(n=Oe.sanitizeUrl(e)),t.split(",").forEach(function(i){st(i)!==void 0&&(Se(i,()=>{window.open(n,"_self")}),Bt[i]=n)}),Ce(t,"clickable")},Ce=function(t,e){t.split(",").forEach(function(n){let i=st(n);i!==void 0&&i.classes.push(e)})},$n=function(t,e,n){if(rt().securityLevel!=="loose"||e===void 0)return;let i=[];if(typeof n=="string"){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<i.length;f++){let d=i[f].trim();d.charAt(0)==='"'&&d.charAt(d.length-1)==='"'&&(d=d.substr(1,d.length-2)),i[f]=d}}i.length===0&&i.push(t),st(t)!==void 0&&Se(t,()=>{Xe.runFunc(e,...i)})},Se=function(t,e){Xt.push(function(){const n=document.querySelector(`[id="${t}"]`);n!==null&&n.addEventListener("click",function(){e()})},function(){const n=document.querySelector(`[id="${t}-text"]`);n!==null&&n.addEventListener("click",function(){e()})})},ti=function(t,e,n){t.split(",").forEach(function(i){$n(i,e,n)}),Ce(t,"clickable")},ei=function(t){Xt.forEach(function(e){e(t)})},ni={getConfig:()=>rt().gantt,clear:Tn,setDateFormat:Mn,getDateFormat:Vn,enableInclusiveEndDates:An,endDatesAreInclusive:Ln,enableTopAxis:In,topAxisEnabled:Yn,setAxisFormat:wn,getAxisFormat:_n,setTickInterval:Dn,getTickInterval:Cn,setTodayMarker:Sn,getTodayMarker:En,setAccTitle:Le,getAccTitle:Ie,setDiagramTitle:Ye,getDiagramTitle:Fe,setDisplayMode:Fn,getDisplayMode:Wn,setAccDescription:We,getAccDescription:Ve,addSection:Bn,getSections:Hn,getTasks:Gn,addTask:Qn,findTaskById:st,addTaskOrg:Kn,setIncludes:zn,getIncludes:On,setExcludes:Pn,getExcludes:Nn,setClickEvent:ti,setLink:Jn,getLinks:Rn,bindFunctions:ei,parseDuration:we,isInvalidDate:xe,setWeekday:Xn,getWeekday:qn};function Ee(t,e,n){let i=!0;for(;i;)i=!1,n.forEach(function(a){const f="^\\s*"+a+"\\s*$",d=new RegExp(f);t[0].match(d)&&(e[a]=!0,t.shift(1),i=!0)})}const ii=function(){xt.debug("Something is calling, setConf, remove the call")},se={monday:qe,tuesday:Ue,wednesday:Ze,thursday:je,friday:Qe,saturday:Ke,sunday:Je},si=(t,e)=>{let n=[...t].map(()=>-1/0),i=[...t].sort((f,d)=>f.startTime-d.startTime||f.order-d.order),a=0;for(const f of i)for(let d=0;d<n.length;d++)if(f.startTime>=n[d]){n[d]=f.endTime,f.order=d+e,d>a&&(a=d);break}return a};let tt;const ri=function(t,e,n,i){const a=rt().gantt,f=rt().securityLevel;let d;f==="sandbox"&&(d=yt("#i"+e));const p=f==="sandbox"?yt(d.nodes()[0].contentDocument.body):yt("body"),M=f==="sandbox"?d.nodes()[0].contentDocument:document,g=M.getElementById(e);tt=g.parentElement.offsetWidth,tt===void 0&&(tt=1200),a.useWidth!==void 0&&(tt=a.useWidth);const D=i.db.getTasks();let S=[];for(const k of D)S.push(k.type);S=z(S);const _={};let x=2*a.topPadding;if(i.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const k={};for(const b of D)k[b.section]===void 0?k[b.section]=[b]:k[b.section].push(b);let w=0;for(const b of Object.keys(k)){const y=si(k[b],w)+1;w+=y,x+=y*(a.barHeight+a.barGap),_[b]=y}}else{x+=D.length*(a.barHeight+a.barGap);for(const k of S)_[k]=D.filter(w=>w.type===k).length}g.setAttribute("viewBox","0 0 "+tt+" "+x);const H=p.select(`[id="${e}"]`),m=Pe().domain([Ne(D,function(k){return k.startTime}),Re(D,function(k){return k.endTime})]).rangeRound([0,tt-a.leftPadding-a.rightPadding]);function C(k,w){const b=k.startTime,y=w.startTime;let s=0;return b>y?s=1:b<y&&(s=-1),s}D.sort(C),I(D,tt,x),Be(H,x,tt,a.useMaxWidth),H.append("text").text(i.db.getDiagramTitle()).attr("x",tt/2).attr("y",a.titleTopMargin).attr("class","titleText");function I(k,w,b){const y=a.barHeight,s=y+a.barGap,u=a.topPadding,h=a.leftPadding,c=He().domain([0,S.length]).range(["#00B9FA","#F95002"]).interpolate(mn);O(s,u,h,w,b,k,i.db.getExcludes(),i.db.getIncludes()),P(h,u,w,b),L(k,s,u,h,y,c,w),G(s,u),N(h,u,w,b)}function L(k,w,b,y,s,u,h){const v=[...new Set(k.map(l=>l.order))].map(l=>k.find(T=>T.order===l));H.append("g").selectAll("rect").data(v).enter().append("rect").attr("x",0).attr("y",function(l,T){return T=l.order,T*w+b-2}).attr("width",function(){return h-a.rightPadding/2}).attr("height",w).attr("class",function(l){for(const[T,V]of S.entries())if(l.type===V)return"section section"+T%a.numberSectionStyles;return"section section0"});const r=H.append("g").selectAll("rect").data(k).enter(),W=i.db.getLinks();if(r.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?m(l.startTime)+y+.5*(m(l.endTime)-m(l.startTime))-.5*s:m(l.startTime)+y}).attr("y",function(l,T){return T=l.order,T*w+b}).attr("width",function(l){return l.milestone?s:m(l.renderEndTime||l.endTime)-m(l.startTime)}).attr("height",s).attr("transform-origin",function(l,T){return T=l.order,(m(l.startTime)+y+.5*(m(l.endTime)-m(l.startTime))).toString()+"px "+(T*w+b+.5*s).toString()+"px"}).attr("class",function(l){const T="task";let V="";l.classes.length>0&&(V=l.classes.join(" "));let A=0;for(const[E,F]of S.entries())l.type===F&&(A=E%a.numberSectionStyles);let Y="";return l.active?l.crit?Y+=" activeCrit":Y=" active":l.done?l.crit?Y=" doneCrit":Y=" done":l.crit&&(Y+=" crit"),Y.length===0&&(Y=" task"),l.milestone&&(Y=" milestone "+Y),Y+=A,Y+=" "+V,T+Y}),r.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",a.fontSize).attr("x",function(l){let T=m(l.startTime),V=m(l.renderEndTime||l.endTime);l.milestone&&(T+=.5*(m(l.endTime)-m(l.startTime))-.5*s),l.milestone&&(V=T+s);const A=this.getBBox().width;return A>V-T?V+A+1.5*a.leftPadding>h?T+y-5:V+y+5:(V-T)/2+T+y}).attr("y",function(l,T){return T=l.order,T*w+a.barHeight/2+(a.fontSize/2-2)+b}).attr("text-height",s).attr("class",function(l){const T=m(l.startTime);let V=m(l.endTime);l.milestone&&(V=T+s);const A=this.getBBox().width;let Y="";l.classes.length>0&&(Y=l.classes.join(" "));let E=0;for(const[nt,K]of S.entries())l.type===K&&(E=nt%a.numberSectionStyles);let F="";return l.active&&(l.crit?F="activeCritText"+E:F="activeText"+E),l.done?l.crit?F=F+" doneCritText"+E:F=F+" doneText"+E:l.crit&&(F=F+" critText"+E),l.milestone&&(F+=" milestoneText"),A>V-T?V+A+1.5*a.leftPadding>h?Y+" taskTextOutsideLeft taskTextOutside"+E+" "+F:Y+" taskTextOutsideRight taskTextOutside"+E+" "+F+" width-"+A:Y+" taskText taskText"+E+" "+F+" width-"+A}),rt().securityLevel==="sandbox"){let l;l=yt("#i"+e);const T=l.nodes()[0].contentDocument;r.filter(function(V){return W[V.id]!==void 0}).each(function(V){var A=T.querySelector("#"+V.id),Y=T.querySelector("#"+V.id+"-text");const E=A.parentNode;var F=T.createElement("a");F.setAttribute("xlink:href",W[V.id]),F.setAttribute("target","_top"),E.appendChild(F),F.appendChild(A),F.appendChild(Y)})}}function O(k,w,b,y,s,u,h,c){if(h.length===0&&c.length===0)return;let v,r;for(const{startTime:A,endTime:Y}of u)(v===void 0||A<v)&&(v=A),(r===void 0||Y>r)&&(r=Y);if(!v||!r)return;if(q(r).diff(q(v),"year")>5){xt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const W=i.db.getDateFormat(),o=[];let l=null,T=q(v);for(;T.valueOf()<=r;)i.db.isInvalidDate(T,W,h,c)?l?l.end=T:l={start:T,end:T}:l&&(o.push(l),l=null),T=T.add(1,"d");H.append("g").selectAll("rect").data(o).enter().append("rect").attr("id",function(A){return"exclude-"+A.start.format("YYYY-MM-DD")}).attr("x",function(A){return m(A.start)+b}).attr("y",a.gridLineStartPadding).attr("width",function(A){const Y=A.end.add(1,"day");return m(Y)-m(A.start)}).attr("height",s-w-a.gridLineStartPadding).attr("transform-origin",function(A,Y){return(m(A.start)+b+.5*(m(A.end)-m(A.start))).toString()+"px "+(Y*k+.5*s).toString()+"px"}).attr("class","exclude-range")}function P(k,w,b,y){let s=cn(m).tickSize(-y+w+a.gridLineStartPadding).tickFormat(jt(i.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));const h=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||a.tickInterval);if(h!==null){const c=h[1],v=h[2],r=i.db.getWeekday()||a.weekday;switch(v){case"millisecond":s.ticks(ee.every(c));break;case"second":s.ticks(te.every(c));break;case"minute":s.ticks($t.every(c));break;case"hour":s.ticks(Jt.every(c));break;case"day":s.ticks(Kt.every(c));break;case"week":s.ticks(se[r].every(c));break;case"month":s.ticks(Qt.every(c));break}}if(H.append("g").attr("class","grid").attr("transform","translate("+k+", "+(y-50)+")").call(s).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||a.topAxis){let c=an(m).tickSize(-y+w+a.gridLineStartPadding).tickFormat(jt(i.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(h!==null){const v=h[1],r=h[2],W=i.db.getWeekday()||a.weekday;switch(r){case"millisecond":c.ticks(ee.every(v));break;case"second":c.ticks(te.every(v));break;case"minute":c.ticks($t.every(v));break;case"hour":c.ticks(Jt.every(v));break;case"day":c.ticks(Kt.every(v));break;case"week":c.ticks(se[W].every(v));break;case"month":c.ticks(Qt.every(v));break}}H.append("g").attr("class","grid").attr("transform","translate("+k+", "+w+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function G(k,w){let b=0;const y=Object.keys(_).map(s=>[s,_[s]]);H.append("g").selectAll("text").data(y).enter().append(function(s){const u=s[0].split(Ge.lineBreakRegex),h=-(u.length-1)/2,c=M.createElementNS("http://www.w3.org/2000/svg","text");c.setAttribute("dy",h+"em");for(const[v,r]of u.entries()){const W=M.createElementNS("http://www.w3.org/2000/svg","tspan");W.setAttribute("alignment-baseline","central"),W.setAttribute("x","10"),v>0&&W.setAttribute("dy","1em"),W.textContent=r,c.appendChild(W)}return c}).attr("x",10).attr("y",function(s,u){if(u>0)for(let h=0;h<u;h++)return b+=y[u-1][1],s[1]*k/2+b*k+w;else return s[1]*k/2+w}).attr("font-size",a.sectionFontSize).attr("class",function(s){for(const[u,h]of S.entries())if(s[0]===h)return"sectionTitle sectionTitle"+u%a.numberSectionStyles;return"sectionTitle"})}function N(k,w,b,y){const s=i.db.getTodayMarker();if(s==="off")return;const u=H.append("g").attr("class","today"),h=new Date,c=u.append("line");c.attr("x1",m(h)+k).attr("x2",m(h)+k).attr("y1",a.titleTopMargin).attr("y2",y-a.titleTopMargin).attr("class","today"),s!==""&&c.attr("style",s.replace(/,/g,";"))}function z(k){const w={},b=[];for(let y=0,s=k.length;y<s;++y)Object.prototype.hasOwnProperty.call(w,k[y])||(w[k[y]]=!0,b.push(k[y]));return b}},ai={setConf:ii,draw:ri},ci=t=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,oi=ci,ui={parser:xn,db:ni,renderer:ai,styles:oi};export{ui as diagram};

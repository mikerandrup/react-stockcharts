webpackJsonp([0],[function(e,a,r){"use strict";{var t=r(1);r(2)}r(21),r(19);var n=r(14),s=r(15),l=r(16),c=r(17),i=r(18),o=t.createClass({displayName:"ExamplesPage",render:function(){return t.createElement("body",null,t.createElement(n,null),t.createElement(l,null,t.createElement(s,null,t.createElement(c,null,t.createElement(i,{label:"Overview",active:!0}),t.createElement(i,{label:"Overview"}),t.createElement(i,{label:"Overview"}),t.createElement(i,{label:"Overview"})))))}});e.exports=o},,,,,,,,,,,,,,function(e,a,r){"use strict";var t=r(1),n=t.createClass({displayName:"Nav",render:function(){return t.createElement("nav",{className:"navbar navbar-fixed-top"},t.createElement("div",{className:"container-fluid"},t.createElement("div",{className:"navbar-header"},t.createElement("a",{className:"navbar-brand",href:"index.html"},"React Stockcharts"))))}});e.exports=n},function(e,a,r){"use strict";var t=r(1),n=t.createClass({displayName:"SideBar",render:function(){return t.createElement("div",{className:"col-sm-3 col-md-2 sidebar"},this.props.children)}});e.exports=n},function(e,a,r){"use strict";var t=r(1),n=t.createClass({displayName:"MainContainer",render:function(){return t.createElement("div",{className:"container-fluid"},t.createElement("div",{className:"row"},this.props.children))}});e.exports=n},function(e,a,r){"use strict";var t=r(1),n=t.createClass({displayName:"MenuGroup",render:function(){return t.createElement("ul",{className:"nav nav-sidebar"},this.props.children)}});e.exports=n},function(e,a,r){"use strict";var t=r(1),n=t.createClass({displayName:"MenuItem",propTypes:{active:t.PropTypes.bool,anchor:t.PropTypes.string,label:t.PropTypes.string.isRequired},getDefaultProps:function(){return{active:!1}},render:function(){var e=this.props.active?"active":"",a=this.props.anchor||this.props.label;return t.createElement("li",{className:e},t.createElement("a",{href:"#"+a},this.props.label,this.props.active?t.createElement("span",{className:"sr-only"},"(current)"):""))}});e.exports=n}]);
//# sourceMappingURL=react-stockcharts-dashboard.js.map
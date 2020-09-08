!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=React},function(e,t){e.exports=Core},function(e,t){e.exports=PropTypes},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(9),a=(o=r)&&o.__esModule?o:{default:o};t.default=(0,a.default)({SECTION_TITLE_REND:null,FORM_DESC_REND:null,CONFIRM_TEXT_REND:null,CONFIRM_DESC_REND:null,SUBSCRIBE_LABEL_REND:null,PLACEHOLDER_TEXT_REND:null,VERIFICATION_TEXT_REND:null,SUBSCRIBE_INNER_FORM_REND:null,SUBSCRIBE_EMAIL_ERR_REND:null,SUBSCRIBE_SUBMIT_BUTTON_REND:null,SECTION_BACKGROUND:null,COUPON_DESC_REND:null,COUPON_CODE_REND:null,COUPON_CODE_FETCHING:null}),e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=s(n(2)),i=s(n(0)),u=n(1),l=s(n(11));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onSubmit=n.onSubmit.bind(n),n._fields={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"validateForm",value:function(){var e=this;return Object.keys(this._fields).map(function(t){return e._fields[t]}).every(function(e){return e.validate()})}},{key:"buildRequestBody",value:function(){var e=this,t=this.props,n=t.accountId,o=t.locale,r=[];return Object.keys(this._fields).forEach(function(t){var n=e._fields[t].getDataForSubmission();n&&r.push(n)}),{accountId:n,locale:o,formData:r}}},{key:"sendForm",value:function(e){var t=this.props.formSubmitHost;if(!t)return!1;var n=new XMLHttpRequest;return n.open("POST",t+"/v1/subscriber"),n.setRequestHeader("Content-Type","application/json; charset=UTF-8"),n.onreadystatechange=this.handleSubmitResponse,n.send(JSON.stringify(e)),!0}},{key:"validateAndSend",value:function(){if(this.validateForm()){var e=this.buildRequestBody();this.sendForm(e),this.props.onSubmit()}}},{key:"onSubmit",value:function(e){e.preventDefault(),this.validateAndSend()}},{key:"renderFormField",value:function(e,t){var n=this,r=this.props.formFields[e],a={};return this.props.formFieldVariationOptions&&this.props.formFieldVariationOptions[r.type]&&(a=this.props.formFieldVariationOptions[r.type]),i.default.createElement(l.default,o({ref:function(e){return n._fields[r.fieldId]=e},key:e},r,{label:t},a))}},{key:"render",value:function(){var e=u.UX2.Element.Block,t=u.UX2.Group.Form,n=this.props,o=n.inputPlaceholder,r=n.subscribeButtonLabel,a=n.staticContent.defaultButtonLabel,l=r||a,s=o,f=this.renderFormField(0,s),c=this.renderFormField(1,l),d={form:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center","@md":{flexDirection:"row"}},input:{marginBottom:"medium",width:"100%","@md":{flexGrow:"1",width:"auto",marginRight:"medium",marginBottom:"0"}},button:{width:"100%","@md":{width:"auto"}}};return i.default.createElement(t,{tag:"form",onSubmit:this.onSubmit,style:d.form},i.default.createElement(e,{"data-route":"inputPlaceholder",style:d.input},f),i.default.createElement(e,{"data-route":"subscribeButtonLabel",style:d.button},c))}}]),t}();f.defaultProps={staticContent:{}},f.propTypes={accountId:a.default.string,formSubmitHost:a.default.string,category:a.default.string,formSuccessMessage:a.default.string,formFields:a.default.array,formFieldVariationOptions:a.default.object,onSubmit:a.default.func,subscribeButtonLabel:a.default.string,inputPlaceholder:a.default.string,staticContent:a.default.object,locale:a.default.string.isRequired},t.default=f,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{type:"EMAIL",fieldId:"d7s9fy9s-18hf-sdfh-9f94-d1ns893k83d3",label:"Email Address",validation:"email"},{type:"SUBMIT",label:"Sign Up",fieldId:"sd9s93d9-fm07-3611-958f-ns85ri04wo23"}],e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VerificationText=t.SuccessMessage=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),a=f(r),i=f(n(2)),u=f(n(3)),l=n(1),s=f(n(17));function f(e){return e&&e.__esModule?e:{default:e}}var c={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",marginHorizontal:"auto",maxWidth:"90%","@md":{maxWidth:"80%"}},verification:{wordWrap:"break-word",marginBottom:"medium"},success:{wordWrap:"break-word",marginBottom:"medium"},couponContainer:{justifyContent:"center",display:"flex"},coupon:{wordWrap:"break-word",marginBottom:"medium",padding:"xxsmall",border:"dashed 2px"}},d=t.SuccessMessage=function(e){var t=e.enable,n=e.message;if(!t)return null;var o={style:c.success,tag:"p","data-aid":u.default.CONFIRM_TEXT_REND,"data-route":"confirmationMessage"};return a.default.createElement(l.UX2.Element.Text.Major,o,n)};d.propTypes={enable:i.default.bool,message:i.default.string};var p=t.VerificationText=function(e){var t=e.enable,n=e.text;return t?a.default.createElement(l.UX2.Element.Text,{style:c.verification,"data-aid":u.default.CONFIRM_DESC_REND},n):null};p.propTypes={enable:i.default.bool,text:i.default.string};var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),o(t,[{key:"render",value:function(){var e=this.props,t=e.formSuccessMessage,n=e.verificationText,o=e.showCoupon,r=e.olsConfigHost;return a.default.createElement(l.UX2.Group.Group,{style:c.container},a.default.createElement(d,{enable:!!t,message:t}),a.default.createElement(p,{enable:!o,text:n}),o?a.default.createElement(s.default,{olsConfigHost:r}):null)}}]),t}();t.default=b,b.propTypes={formSuccessMessage:i.default.string,category:i.default.string,verificationText:i.default.string,showCoupon:i.default.bool,olsConfigHost:i.default.string},b.defaultProps={formSuccessMessage:"",category:"",verificationText:"",showCoupon:!1,olsConfigHost:""}},function(e,t,n){"use strict";window.wsb=window.wsb||{},window.wsb.SubscribeForm3=n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=d(n(0)),i=n(1),u=d(n(3)),l=d(n(10)),s=d(n(6)),f=d(n(5)),c=d(n(4));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default),r(t,[{key:"render",value:function(){var e=this.props,t=e.confirmationMessage,n=e.staticContent,r=e.category,l=e.section,d=e.background,p=e.couponConfirmationMessage,b=n.emailErrorMessage,m=n.verificationText,y=d&&d.image?"accent":r,h=d&&d.image?"overlay":l;if(this.state.formSubmitted)return a.default.createElement(i.UX2.Base,{category:y,section:h},a.default.createElement(s.default,{formSuccessMessage:this.shouldShowCoupon()?p:t,verificationText:m,olsConfigHost:this.getOlsConfigHost(),showCoupon:this.shouldShowCoupon()}));var g={SUBMIT:{display:"block",paddingVertical:"small"},EMAIL:{errorMessage:b}},v=i.UX2.Component.Grid;return a.default.createElement(i.UX2.Base,{category:y,section:h},a.default.createElement(v,{bottom:!1,inset:!0,"data-aid":u.default.SUBSCRIBE_INNER_FORM_REND},a.default.createElement(v.Cell,null,this.renderDescriptionSection(),a.default.createElement(c.default,o({formFieldVariationOptions:g,formSubmitHost:this.getFormSubmitHost(),onSubmit:this.onSubmit,formFields:f.default,paddingHorizontal:"xsmall"},this.props)))))}}]),t}();t.default=p,e.exports=t.default},function(e,t){e.exports=keyMirror},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=b(a),u=b(n(2)),l=b(n(4)),s=b(n(3)),f=n(1),c=b(n(5)),d=b(n(6)),p=b(n(18));function b(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={formSubmitted:!1},n.onSubmit=n.onSubmit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"onSubmit",value:function(){this.setState({formSubmitted:!0})}},{key:"renderDescriptionSection",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).forceCouponDescription,t=void 0!==e&&e,n=this.props,o=n.description,r=n.couponDescription,a=t||this.shouldShowCoupon(),u=a?r:o;return u?i.default.createElement(f.UX2.Element.Text,{style:{wordWrap:"break-word",textAlign:"center",marginBottom:"small"},"data-aid":s.default.FORM_DESC_REND,"data-route":a?"couponDescription":"description"},u):null}},{key:"renderSectionTitle",value:function(e,t,n){return e?i.default.createElement(f.UX2.Element.Heading.Middle,{"data-aid":s.default.SECTION_TITLE_REND,"data-route":"sectionTitle",isInternalPage:t,order:n,style:{wordWrap:"break-word",textAlign:"center"}},e):null}},{key:"getFormSubmitHost",value:function(){var e=this.props.env;return(p.default&&p.default[e]||{}).formSubmitHost}},{key:"getOlsConfigHost",value:function(){var e=this.props,t=e.env,n=e.renderMode,o=e.websiteId,r=p.default&&p.default[t]||{};return(("PUBLISH"===n?r.olsPublishedSiteHost:r.olsHost)||"").replace("{websiteId}",o)}},{key:"shouldShowCoupon",value:function(){var e=this.props,t=e.hasNonCommercePlan,n=e.couponToggleHidden,o=e.couponToggle;return Boolean(!t&&!n&&o)}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.section,r=e.confirmationMessage,a=e.staticContent,u=e.couponConfirmationMessage,p=a.verificationText,b=a.emailErrorMessage;if(this.state.formSubmitted)return i.default.createElement(f.UX2.Base,{category:t,section:n},i.default.createElement(d.default,{formSuccessMessage:this.shouldShowCoupon()?u:r,verificationText:p,olsConfigHost:this.getOlsConfigHost(),showCoupon:this.shouldShowCoupon()}));var m={SUBMIT:{display:"block",paddingVertical:"small"},EMAIL:{errorMessage:b}},y=f.UX2.Component.Grid;return i.default.createElement(f.UX2.Base,{category:t,section:n},i.default.createElement(y,{bottom:!1,"data-aid":s.default.SUBSCRIBE_INNER_FORM_REND,inset:!0},i.default.createElement(y.Cell,null,this.renderDescriptionSection(),i.default.createElement(l.default,o({formFieldVariationOptions:m,formSubmitHost:this.getFormSubmitHost(),onSubmit:this.onSubmit,formFields:c.default},this.props)))))}}]),t}();t.default=m,m.propTypes={category:u.default.string,formTitle:u.default.string,section:u.default.string,confirmationMessage:u.default.string,description:u.default.string,env:u.default.string,renderMode:u.default.string.isRequired,websiteId:u.default.string.isRequired,staticContent:u.default.object,locale:u.default.string,hasNonCommercePlan:u.default.boolean,couponToggleHidden:u.default.boolean,couponToggle:u.default.boolean,couponDescription:u.default.string,couponConfirmationMessage:u.default.string},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=c(n(2)),i=c(n(0)),u=n(1),l=c(n(3)),s=c(n(12)),f=c(n(13));function c(e){return e&&e.__esModule?e:{default:e}}var d={position:"static","@md":{position:"absolute"}},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="FieldWithValidation",n.state={isValid:!0},n.validate=n.validate.bind(n),n.getDataForSubmission=n.getDataForSubmission.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"validate",value:function(){var e=!0,t=this.props.validation;return t&&(e=s.default[t].regex.test(this._field.state.value),this.setState({isValid:e})),e}},{key:"getDataForSubmission",value:function(){var e=this.props,t=e.fieldId,n=e.label;return"SUBMIT"===e.type?null:{fieldId:t,label:n,value:this._field.state.value}}},{key:"render",value:function(){var e=this,t=this.state.isValid;return i.default.createElement(u.UX2.Element.Block,{style:{position:"relative"}},i.default.createElement(f.default,o({ref:function(t){return e._field=t}},this.props,{placeholder:this.props.label+(this.props.required?"*":"")})),!t&&i.default.createElement(u.UX2.Element.Error,{style:d,"data-aid":l.default.SUBSCRIBE_EMAIL_ERR_REND,alert:!0},this.props.errorMessage))}}]),t}();p.propTypes={fieldId:a.default.string,label:a.default.string.isRequired,required:a.default.bool,validation:a.default.string,type:a.default.string,errorMessage:a.default.string},t.default=p,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={email:{regex:/^([a-zA-Z0-9_\-.+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=l(n(2)),i=l(n(0)),u=l(n(14));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n.state={value:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.state.value,t=u.default[this.props.type];return i.default.createElement(t,o({handleChange:this.handleChange,value:e},this.props))}}]),t}();s.propTypes={fieldId:a.default.string.isRequired,type:a.default.string.isRequired},t.default=s,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(15)),r=a(n(16));function a(e){return e&&e.__esModule?e:{default:e}}t.default={SINGLE_LINE:o.default,EMAIL:o.default,SUBMIT:r.default},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n(2)),a=u(n(0)),i=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.name,o=e.placeholder,r=e.fieldId,u=e.value;return a.default.createElement(i.UX2.Element.Input.FloatLabel,{onChange:t,name:n,placeholder:o,"data-aid":r,value:u})}}]),t}();l.propTypes={handleChange:r.default.func.isRequired,name:r.default.string,placeholder:r.default.string,fieldId:r.default.string,value:r.default.string},t.default=l,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(2)),a=l(n(0)),i=l(n(3)),u=n(1);function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"render",value:function(){var e=this.props.label,t=(0,u.UX2.utils.TCCLUtils.getTCCLString)({eid:"ux2.gem-subscribe.submit_form.click",type:"click"});return a.default.createElement(u.UX2.Element.Button,{tag:"button",type:"submit","data-tccl":t,"data-aid":i.default.SUBSCRIBE_SUBMIT_BUTTON_REND},e)}}]),t}();s.propTypes={label:r.default.string.isRequired,renderMode:r.default.string,width:r.default.string,display:r.default.string,paddingVertical:r.default.string,paddingHorizontal:r.default.string},t.default=s,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(0)),a=l(n(2)),i=n(1),u=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var s=i.UX2.Element,f=s.Block,c=s.Text,d=s.Loader,p={verification:{wordWrap:"break-word",marginBottom:"medium"},couponContainer:{justifyContent:"center",display:"flex"},coupon:{wordWrap:"break-word",marginBottom:"medium",padding:"xxsmall",border:"dashed 2px"}},b=function(){return r.default.createElement(d,{"data-aid":u.default.COUPON_CODE_FETCHING,size:"medium",style:{marginTop:"xlarge",opacity:"0.5"}})},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={code:null,description:null,loaded:!1},n.loadCouponData=n.loadCouponData.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadCouponData()}},{key:"loadCouponData",value:function(){var e=this,t=this.props.olsConfigHost;if(t){var n=new XMLHttpRequest,o=new Date;n.open("GET",t+"/api/v3/config?ts="+ +o,!0),n.withCredentials=!0,n.setRequestHeader("Accept","*/*"),n.onload=function(){var t={},o=null,r=null;try{t=n.response?JSON.parse(n.response):{}}catch(e){t={}}t.subscribe_coupon&&(o=t.subscribe_coupon.code,r=t.subscribe_coupon.description),e.setState({code:o,description:r,loaded:!0})},n.onerror=function(){e.setState({loaded:!0})},n.send()}}},{key:"render",value:function(){var e=this.state,t=e.description,n=e.code;return e.loaded?t&&n?r.default.createElement(f,null,r.default.createElement(c,{style:p.verification,"data-aid":u.default.COUPON_DESC_REND},t),r.default.createElement(f,{style:p.couponContainer},r.default.createElement(c,{style:p.coupon,"data-aid":u.default.COUPON_CODE_REND},n))):null:r.default.createElement(b,null)}}]),t}();m.propTypes={olsConfigHost:a.default.string.isRequired},t.default=m,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n(19)),r=u(n(20)),a=u(n(21)),i=u(n(22));function u(e){return e&&e.__esModule?e:{default:e}}t.default={local:o.default,development:r.default,test:a.default,production:i.default},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={olsHost:"https://{websiteId}.onlinestore.dev-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.onlinestore.dev-godaddy.com",formSubmitHost:"https://gem.apps.dev-godaddy.com"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={olsHost:"https://{websiteId}.onlinestore.dev-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.onlinestore.dev-godaddy.com",formSubmitHost:"https://gem.apps.dev-godaddy.com"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={olsHost:"https://{websiteId}.onlinestore.test-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.mysimplestore.test-godaddy.com",formSubmitHost:"https://gem.apps.test-godaddy.com"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={olsHost:"https://{websiteId}.onlinestore.godaddy.com",olsPublishedSiteHost:"https://{websiteId}.mysimplestore.com",formSubmitHost:"https://gem.apps.godaddy.com"},e.exports=t.default}]);
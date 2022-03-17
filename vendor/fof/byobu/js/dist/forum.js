(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e),t.d(e,{discussions:()=>re,modals:()=>se});const o=flarum.core.compat["forum/app"];var n=t.n(o);function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}const i=flarum.core.compat["forum/components/EventPost"];var a=t.n(i),c=function(t){function e(){return t.apply(this,arguments)||this}r(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e)};var o=e.prototype;return o.icon=function(){return n().forum.attribute("byobu.icon-postAction")},o.descriptionKey=function(){return"fof-byobu.forum.post.recipients_modified.made_public"},e}(a()),u=function(t){function e(){return t.apply(this,arguments)||this}r(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e)};var o=e.prototype;return o.icon=function(){return n().forum.attribute("byobu.icon-postAction")},o.descriptionKey=function(){return"fof-byobu.forum.post.recipients_modified.removed_self"},e}(a());function p(t,e){if(null==t)return{};var o,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(s[o]=t[o]);return s}const l=flarum.core.compat["common/models/User"];var f=t.n(l);const d=flarum.core.compat["common/utils/classList"];var h=t.n(d);const b=flarum.core.compat["common/helpers/username"];var v=t.n(b);const y=flarum.core.compat["common/models/Group"];var g=t.n(y);const _=flarum.core.compat["common/components/LinkButton"];var P=t.n(_);const R=flarum.core.compat["common/Component"];var w=["recipient","link"],D=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.view=function(t){var e,o=this.attrs,s=o.recipient,r=o.link,i=p(o,w);if(i.style=i.style||{},i.className=h()("RecipientLabel",null==i?void 0:i.className),r&&s instanceof f()&&(i.href=n().route.user(s)),s instanceof f()){var a,c;e=v()(s),i.href||s.id()===(null==n()||null==(a=n().session)||null==(c=a.user)?void 0:c.id())||(i.href=n().route.user(s))}else{if(s instanceof g())return m("span",{class:i.className},s.namePlural());i.className+=" none",e=n().translator.trans("core.lib.username.deleted_text")}return m(P(),i,e)},e}(t.n(R)()),k=["link","className"];function N(t,e){void 0===e&&(e={});var o=e,n=o.link,s=o.className,r=p(o,k);return r.className=h()("RecipientsLabel",s),m("span",r,null==t?void 0:t.map((function(t,e){var o=t instanceof f()?"u":"g";return m(D,{key:o+"-"+e,recipient:t,link:n})})),!t&&m(D,null))}var x=function(t){function e(){return t.apply(this,arguments)||this}r(e,t),e.initAttrs=function(e){function o(t,e,o){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return n().store.getById(o,t)}))}t.initAttrs.call(this,e);var s=e.post.content();if(s.new||2!=s.length){var r=o(s.new.users,s.old.users,"users"),i=o(s.old.users,s.new.users,"users"),a=o(s.new.groups,s.old.groups,"groups"),c=o(s.old.groups,s.new.groups,"groups");e.added=r.concat(a),e.removed=i.concat(c)}else{var u=e.post.content()[0],p=e.post.content()[1];e.added=o(p,u,"users"),e.removed=o(u,p,"users")}};var o=e.prototype;return o.icon=function(){return n().forum.attribute("byobu.icon-postAction")},o.descriptionKey=function(){var t="fof-byobu.forum.post.recipients_modified.";return this.attrs.added.length?this.attrs.removed.length?t+"added_and_removed":t+"added":t+"removed"},o.descriptionData=function(){var t={};return this.attrs.added.length&&(t.added=N(this.attrs.added,{link:!0})),this.attrs.removed.length&&(t.removed=N(this.attrs.removed,{link:!0})),t},e}(a());const U=flarum.core.compat["common/extend"],S=flarum.core.compat["forum/components/SettingsPage"];var A=t.n(S);const C=flarum.core.compat["common/components/Switch"];var I=t.n(C);const M=flarum.core.compat["common/Model"];var G=t.n(M);const L=flarum.core.compat["common/components/Badge"];var B=t.n(L);const j=flarum.core.compat["common/models/Discussion"];var O=t.n(j);const T=flarum.core.compat["common/components/Button"];var E=t.n(T);const q=flarum.core.compat["forum/components/DiscussionListItem"];var V=t.n(q);const K=flarum.core.compat["forum/components/DiscussionHero"];var F=t.n(K);const W=flarum.core.compat["forum/states/DiscussionListState"];var z=t.n(W);const H=flarum.core.compat["forum/utils/DiscussionControls"];var J=t.n(H);const Q=flarum.core.compat["common/utils/ItemList"];var X=t.n(Q);const Y=flarum.core.compat["common/components/Modal"];var Z=t.n(Y);const tt=flarum.core.compat["forum/components/DiscussionPage"];var et=t.n(tt);const ot=flarum.core.compat["common/utils/Stream"];var nt=t.n(ot);const st=flarum.core.compat["forum/states/SearchState"];var rt=t.n(st);const it=flarum.core.compat["forum/components/Search"];var at=t.n(it);function ct(){return ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},ct.apply(this,arguments)}const ut=flarum.core.compat["common/helpers/highlight"];var pt=t.n(ut);const lt=flarum.core.compat["common/helpers/avatar"];var ft=t.n(lt),mt=function(){function t(){}var e=t.prototype;return e.view=function(t){var e=this;if(!(t.length<3||this.loading)){if(n().cache.byobuResults||(n().cache.byobuResults=[]),this.query=t,n().cache.byobuResults[this.query])return[m("li",{className:"Dropdown-header"},n().translator.trans("core.forum.search.users_heading")),n().cache.byobuResults[this.query].map((function(t){var o=v()(t),n=[pt()(o.text,e.query)];return m("li",{className:"SearchResult","data-index":"users:"+t.id()},m("a",{"data-index":"users:"+t.id()},ft()(t),ct({},o,{text:void 0,children:n})))}))];this.loading=!0,n().cache.byobuResults[this.query]=[],n().store.find("users",{filter:{q:this.query+" allows-pd"},page:{limit:5}}).then(this.pushResults.bind(this))}},e.pushResults=function(t){var e=this;t.payload.data.map((function(t){var o=n().store.getById("users",t.id);n().cache.byobuResults[e.query].push(o)})),this.loading=!1,m.redraw()},t}(),dt=function(){function t(){}var e=t.prototype;return e.search=function(t){return n().store.find("groups",{filter:{q:t},page:{limit:5}})},e.view=function(t){t=t.toLowerCase();var e=n().store.all("groups").filter((function(e){return e.namePlural().toLowerCase().substr(0,t.length)===t}));return e.length?[m("li",{className:"Dropdown-header"},n().translator.trans("fof-byobu.forum.search.headings.groups")),e.map((function(e){var o=e.namePlural(),n=pt()(o,t);return m("li",{className:"SearchResult","data-index":"groups:"+e.id()},m("a",{"data-index":"groups:"+e.id()},m("span",{class:"groupName"},n)))}))]:""},t}();const ht=flarum.core.compat["common/utils/extractText"];var bt=t.n(ht);const vt=flarum.core.compat["common/components/LoadingIndicator"];var yt=t.n(vt);const gt=flarum.core.compat["common/components/Tooltip"];var _t=t.n(gt),Pt=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).inputUuid=void 0,e}r(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.inputUuid=Math.random().toString(36).substring(2)},o.oncreate=function(e){var o=this;t.prototype.oncreate.call(this,e);var n=this;this.$(".Search-results").on("click",(function(t){var e=o.$(".SearchResult.active");n.addRecipient(e.data("index")),n.$(".RecipientsInput").focus()})),this.$(".Search-results").on("touchstart",(function(t){var e=o.$(t.target.parentNode);n.addRecipient(e.data("index")),n.$(".RecipientsInput").focus()})),$(".RecipientsInput").on("input",(function(){clearTimeout(o.typingTimer),o.doSearch=!1,o.typingTimer=setTimeout((function(){o.doSearch=!0,m.redraw()}),900)})).on("keydown",(function(){clearTimeout(o.typingTimer)})),t.prototype.oncreate.call(this,e)},o.view=function(){var t=this;void 0===this.state.getValue()&&this.state.setValue("");var e=this.state.getValue()&&this.state.getValue().length>=3;return this.sources||(this.sources=this.sourceItems().toArray()),m("div",{role:"search",className:"Search"},m("div",{className:"RecipientsInput-selected RecipientsLabel","aria-live":"polite"},m("h4",null,n().translator.trans("fof-byobu.forum.modal.labels.selected_users")),m("p",null,n().translator.trans("fof-byobu.forum.modal.help.selected_users")),this.attrs.selected().toArray().map((function(e){return m(_t(),{text:n().translator.trans("fof-byobu.forum.modal.help.click_user_to_remove_tooltip")},m(D,{"data-container":"body",recipient:e,onclick:function(o){return t.removeRecipient(e,o)}}))}))),m("div",{className:"Form-group"},m("label",{for:"byobu-addrecipient-search-input-"+this.inputUuid},n().translator.trans("fof-byobu.forum.modal.labels.search_field")),m("div",{className:"AddRecipientModal-form-input Search-input"},m("input",{id:"byobu-addrecipient-search-input-"+this.inputUuid,className:h()("RecipientsInput","FormControl",{open:!!this.state.getValue(),focused:!!this.state.getValue(),active:!!this.state.getValue(),loading:!!this.loadingSources}),oncreate:function(t){return t.dom.focus()},type:"search",placeholder:bt()(n().translator.trans("fof-byobu.forum.input.search_recipients")),value:this.state.getValue(),oninput:function(e){return t.state.setValue(e.target.value)},onfocus:function(){return t.hasFocus=!0},onblur:function(){return t.hasFocus=!1}}),m("ul",{className:h()("Dropdown-menu","Search-results","fade",{in:!!e})},this.doSearch?this.sources.map((function(e){return e.view(t.state.getValue())})):yt().component({size:"tiny",className:"Button Button--icon Button--link"})))))},o.sourceItems=function(){var t=new(X());return(!this.attrs.discussion&&n().forum.attribute("canStartPrivateDiscussionWithUsers")||this.attrs.discussion&&this.attrs.discussion.canEditUserRecipients())&&t.add("users",new mt),(!this.attrs.discussion&&n().forum.attribute("canStartPrivateDiscussionWithGroups")||this.attrs.discussion&&this.attrs.discussion.canEditGroupRecipients())&&t.add("groups",new dt),t},o.addRecipient=function(t){var e=t.split(":"),o=e[0],n=e[1],s=this.findRecipient(o,n);this.attrs.selected().add(t,s),this.state.clear()},o.removeRecipient=function(t,e){var o;e.preventDefault(),t instanceof f()&&(o="users"),t instanceof g()&&(o="groups"),this.attrs.selected().remove(o+":"+t.id())},o.findRecipient=function(t,e){return n().store.getById(t,e)},e}(at()),Rt=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.selected=nt()(new(X())),this.attrs.discussion?this.assignInitialRecipients(this.attrs.discussion):this.attrs.selectedRecipients&&this.attrs.selectedRecipients.toArray().length>0?this.selected().merge(this.attrs.selectedRecipients):this.selected().add("users:"+n().session.user.id(),n().session.user),this.recipientSearch=new(rt())},o.isDismissible=function(){return!1},o.assignInitialRecipients=function(t){var e=this;t.recipientUsers().map((function(t){e.selected().add("users:"+t.id(),t)})),t.recipientGroups().map((function(t){e.selected().add("groups:"+t.id(),t)}))},o.className=function(){return"AddRecipientModal"},o.title=function(){return this.attrs.discussion?n().translator.trans("fof-byobu.forum.modal.titles.update_recipients",{title:m("em",null,this.attrs.discussion.title())}):n().translator.trans("fof-byobu.forum.modal.titles.add_recipients")},o.helpText=function(){return this.attrs.discussion?n().translator.trans("fof-byobu.forum.modal.help.update_recipients"):n().translator.trans("fof-byobu.forum.modal.help.add_recipients")},o.content=function(){return[m("div",{className:"Modal-body"},m("div",{class:"AddRecipientModal-help"},this.helpText()),m("div",{className:"AddRecipientModal-form"},Pt.component({state:this.recipientSearch,selected:this.selected,discussion:this.attrs.discussion}),m("div",{className:"AddRecipientModal-form-submit App-primaryControl"},E().component({type:"submit",className:"Button Button--primary",icon:"fas fa-check"},n().translator.trans("fof-byobu.forum.buttons.submit")),E().component({onclick:this.hide.bind(this),className:"Button Button--cancel"},n().translator.trans("fof-byobu.forum.buttons.cancel")))))]},o.select=function(t){(t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index))&&this.selected().length&&this.$("form").submit()},o.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,o=this.selected(),s=[],r=[];o.toArray().forEach((function(t){t instanceof f()&&r.push(t),t instanceof g()&&s.push(t)})),e&&e.save({relationships:{recipientUsers:r,recipientGroups:s}}).then((function(){n().current instanceof et()&&n().current.stream.update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(o),n().modal.close(),this.attrs.discussion||n().composer.show(),t.redraw=!1},e}(Z());const wt=flarum.core.compat["tags/components/TagDiscussionModal"];var Dt=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype.onsubmit=function(t){t.preventDefault();var e=this.selected;this.attrs.resolve&&this.attrs.resolve(e),this.hide()},e}(t.n(wt)());Dt.isDismissible=!1;const kt=flarum.core.compat["components/DiscussionPage"];var Nt=t.n(kt);var xt=function(t,e,o){var n=[];t.recipientUsers().length&&(n=n.concat(t.recipientUsers())),t.recipientGroups().length&&(n=n.concat(t.recipientGroups())),n&&n.length&&(o?e.add("recipients",N(n),10):e.add("recipients",N(n,{link:!0}),4))};const Ut=flarum.core.compat["forum/utils/UserControls"];var St=t.n(Ut);const At=flarum.core.compat["forum/components/DiscussionComposer"];var Ct=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this)._isByobuComposer=!0,e}r(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.titlePlaceholder=n().translator.trans("fof-byobu.forum.composer_private_discussion.title_placeholder"),e.submitLabel=n().translator.trans("fof-byobu.forum.composer_private_discussion.submit_button")};var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.composer.fields.recipients=this.attrs.recipients||new(X()),this.composer.fields.recipientUsers=this.attrs.recipientUsers||[],this.composer.fields.recipientGroups=this.attrs.recipientGroups||[];var o=m.route.param("username");void 0!==o&&this.addDefaultRecipients(o)},o.data=function(){var e=t.prototype.data.call(this),o=[],n=[];return void 0!==this.composer.fields.recipients&&this.composer.fields.recipients.toArray().forEach((function(t){t instanceof f()&&o.push(t),t instanceof g()&&n.push(t)})),e.relationships=e.relationships||{},o.length&&(e.relationships.recipientUsers=o),n.length&&(e.relationships.recipientGroups=n),delete e.relationships.tags,e},o.chooseRecipients=function(){var t=this;n().modal.show(Rt,{selectedRecipients:this.composer.fields.recipients,onsubmit:function(e){t.composer.fields.recipients=e,t.$(".RecipientsInput").focus()}})},o.headerItems=function(){var e=t.prototype.headerItems.call(this);if(e.remove("tags"),n().session.user&&n().forum.attribute("canStartPrivateDiscussion")){var o=this.composer.fields.recipients.toArray();e.add("recipients",m("a",{className:"PrivateDiscussionComposer-changeRecipients",onclick:this.chooseRecipients.bind(this)},o.length?function(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="RecipientLabel "+(e.className||"");var o=n().translator.trans("fof-byobu.forum.labels.recipients",{count:t});return m("span",e,m("span",{className:"RecipientLabel-text"},o))}(o.length):m("span",{className:"RecipientLabel none"},n().translator.trans("fof-byobu.forum.buttons.add_recipients"))),5)}return e},o.addDefaultRecipients=function(t){var e=n().store.getBy("users","username",t);this.composer.fields.recipients.add("users:"+n().session.user.id(),n().session.user),e.id()!==n().session.user.id()&&this.composer.fields.recipients.add("users:"+e.id(),e)},o.onsubmit=function(){if(this.loading=!0,this.composer.fields.recipients.toArray().length<2)this.chooseRecipients(),this.loading=!1;else{var t=this.data();n().store.createRecord("discussions").save(t).then((function(t){n().cache.discussionList&&n().cache.discussionList.refresh(),m.route.set(n().route.discussion(t)),n().composer.hide()}),this.loaded.bind(this))}},e}(t.n(At)());const It=flarum.core.compat["forum/components/UserPage"];var Mt=t.n(It);const Gt=flarum.core.compat["forum/components/IndexPage"];var Lt=t.n(Gt),Bt=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(z());const jt=flarum.core.compat["common/components/Dropdown"];var Ot=t.n(jt);const Tt=flarum.core.compat["common/helpers/listItems"];var Et=t.n(Tt);const qt=flarum.core.compat["forum/components/DiscussionList"];var Vt=function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(t.n(qt)());function $t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const Kt=flarum.core.compat["forum/components/LogInModal"];var Ft=t.n(Kt),Wt=function(){function t(t){this.recipient=t}var e,o,s=t.prototype;return s.action=function(t){var e=this;return t.preventDefault(),new Promise((function(t,o){if(n().session.user){var s=new(X());return s.add("users:"+n().session.user.id(),n().session.user),e.recipient&&n().session.user.id()!==e.recipient.id()&&s.add("users:"+e.recipient.id(),e.recipient),n().composer.load(Ct,{user:n().session.user,recipients:s,recipientUsers:s}),n().composer.show(),t()}return n().modal.show(Ft()),o()}))},s.component=function(){return E().component({icon:"fas fa-pen",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl fof-byobu_primaryControl",onclick:this.action.bind(this),disabled:!this.canStartDiscussion},n().translator.trans(this.canStartDiscussion?"fof-byobu.forum.nav.start_button":"core.forum.index.cannot_start_discussion_button"))},e=t,(o=[{key:"canStartDiscussion",get:function(){return n().session.user&&n().forum.attribute("canStartPrivateDiscussion")}}])&&$t(e.prototype,o),t}(),zt=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.changeSort("latest")},o.show=function(e){this.list=new Bt({q:"byobu:"+e.slug()+" is:private",sort:this.sort}),this.list.refresh(),t.prototype.show.call(this,e)},o.handleChangeSort=function(t,e){e.preventDefault(),this.changeSort(t)},o.changeSort=function(t){this.sort=t,this.loadUser(m.route.param("username"))},o.content=function(){return m("div",{className:"DiscussionsUserPage"},m("div",{className:"DiscussionsUserPage-toolbar"},m("ul",{className:"DiscussionsUserPage-toolbar-action"},Et()(this.actionItems().toArray())),m("ul",{className:"DiscussionsUserPage-toolbar-view"},Et()(this.viewItems().toArray()))),m(Vt,{state:this.list}))},o.actionItems=function(){var t=new Wt(this.user),e=new(X());return n().session.user&&n().forum.attribute("canStartPrivateDiscussion")&&e.add("start_private",t.component()),e},o.viewItems=function(){var t=this,e=new(X()),o=this.list.sortMap(),s={};for(var r in o)s[r]=n().translator.trans("core.forum.index_sort."+r+"_button");return e.add("sort",Ot().component({buttonClassName:"Button",label:s[this.sort]||Object.keys(o).map((function(t){return s[t]}))[0]},Object.keys(s).map((function(e){var n=s[e],r=(t.sort||Object.keys(o)[0])===e;return E().component({icon:!r||"fas fa-check",onclick:t.handleChangeSort.bind(t,e),active:r},n)})))),e},e}(Mt());const Ht=flarum.core.compat["forum/components/NotificationGrid"];var Jt=t.n(Ht);const Qt=flarum.core.compat["forum/components/Notification"];var Xt=t.n(Qt),Yt=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.icon=function(){return n().forum.attribute("byobu.icon-badge")},o.href=function(){var t=this.attrs.notification.subject();return n().route.discussion(t)},o.content=function(){var t=this.attrs.notification.fromUser();return n().translator.trans("fof-byobu.forum.notifications.pd_text",{user:t})},e}(Xt()),Zt=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.icon=function(){return"fas fa-reply"},o.href=function(){var t=this.attrs.notification,e=t.subject(),o=t.content()||{};return n().route.discussion(e,o.postNumber)},o.content=function(){var t=this.attrs.notification.fromUser();return n().translator.trans("fof-byobu.forum.notifications.pd_reply_text",{user:t})},e}(Xt()),te=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.icon=function(){return n().forum.attribute("byobu.icon-badge")},o.href=function(){var t=this.attrs.notification.subject();return n().route.discussion(t)},o.content=function(){var t=this.attrs.notification.fromUser();return n().translator.trans("fof-byobu.forum.notifications.pd_user_left_text",{user:t})},e}(Xt()),ee=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.icon=function(){return n().forum.attribute("byobu.icon-badge")},o.href=function(){var t=this.attrs.notification.subject();return n().route.discussion(t)},o.content=function(){var t=this.attrs.notification.fromUser();return n().translator.trans("fof-byobu.forum.notifications.pd_added_text",{user:t})},e}(Xt());const oe=flarum.core.compat["components/Notification"];var ne=function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.icon=function(){return n().forum.attribute("byobu.icon-badge")},o.href=function(){var t=this.props.notification.subject();return n().route.discussion(t)},o.content=function(){var t=this.props.notification.fromUser();return n().translator.trans("fof-byobu.forum.notifications.pd_made_public_text",{user:t})},e}(t.n(oe)());var se={AddRecipientModal:Rt},re={PrivateDiscussionComposer:Ct,PrivateDiscussionList:Vt};n().initializers.add("fof-byobu",(function(){n().postComponents.recipientsModified=x,n().postComponents.recipientLeft=u,n().postComponents.madePublic=c,O().prototype.recipientUsers=G().hasMany("recipientUsers"),O().prototype.oldRecipientUsers=G().hasMany("oldRecipientUsers"),O().prototype.recipientGroups=G().hasMany("recipientGroups"),O().prototype.oldRecipientGroups=G().hasMany("oldRecipientGroups"),O().prototype.canEditRecipients=G().attribute("canEditRecipients"),O().prototype.canEditUserRecipients=G().attribute("canEditUserRecipients"),O().prototype.canEditGroupRecipients=G().attribute("canEditGroupRecipients"),O().prototype.canEditGroupRecipients=G().attribute("canEditGroupRecipients"),O().prototype.canMakePublic=G().attribute("canMakePublic"),O().prototype.isPrivateDiscussion=G().attribute("isPrivateDiscussion"),(0,U.extend)(O().prototype,"badges",(function(t){(this.recipientUsers().length||this.recipientGroups().length)&&t.add("private",B().component({type:"private",label:n().translator.trans("fof-byobu.forum.badges.is_private.tooltip"),icon:n().forum.data.attributes["byobu.icon-badge"]}),10)})),(0,U.extend)(V().prototype,"infoItems",(function(t){var e=this.attrs.discussion;xt(e,t,!0)})),(0,U.extend)(F().prototype,"items",(function(t){var e=this.attrs.discussion;xt(e,t,!1)})),(0,U.extend)(z().prototype,"requestParams",(function(t){t.include.push("recipientUsers"),t.include.push("recipientGroups")})),(0,U.extend)(J(),"moderationControls",(function(t,e){e.canEditRecipients()&&t.add("recipients",E().component({icon:n().forum.data.attributes["byobu.icon-badge"],onclick:function(){return n().modal.show(Rt,{discussion:e})}},n().translator.trans("fof-byobu.forum.buttons.edit_recipients"))),e&&e.recipientUsers().find((function(t){return t.id()===n().session.user.id()}))&&(t.add("remove",E().component({icon:"fas fa-user-slash",onclick:function(){if(e){var t=new(X());e.recipientUsers().map((function(e){n().session.user.id()!==e.id()&&t.add("users:"+e.id(),e)}));var o=[],s=[];t.toArray().forEach((function(t){t instanceof f()&&s.push(t),t instanceof g()&&o.push(t)})),e.save({relationships:{recipientUsers:s,recipientGroups:o}}).then((function(){return n().history.back()}))}}},n().translator.trans("fof-byobu.forum.buttons.remove_from_discussion"))),null!=e&&null!=e.isPrivateDiscussion&&e.isPrivateDiscussion()&&null!=e&&null!=e.canMakePublic&&e.canMakePublic()&&t.add("transform-public",m(E(),{icon:"far fa-eye",onclick:function(){if(e&&confirm(n().translator.trans("fof-byobu.forum.confirm.make_public"))){var t=[],o=[];flarum.extensions["flarum-tags"]?new Promise((function(t,o){n().modal.show(Dt,{discussion:e,resolve:t,reject:o})})).then((function(s){e.save({relationships:{recipientUsers:o,recipientGroups:t},public:e.id()}).then((function(){e.save({relationships:{tags:s}}).then((function(){n().current.matches(Nt())&&n().current.get("stream").update(),m.redraw()}))}))})):e.save({relationships:{recipientUsers:o,recipientGroups:t},public:e.id()}).then((function(){return m.redraw()}))}}},n().translator.trans("fof-byobu.forum.buttons.make_public"))))})),(0,U.extend)(A().prototype,"privacyItems",(function(t){var e=this;t.add("byobu-block-dm",I().component({state:this.user.blocksPd(),onchange:function(t){e.blocksPdLoading=!0,e.user.save({blocksPd:t}).then((function(){e.blocksPdLoading=!1,m.redraw()}))},loading:this.blocksPdLoading},n().translator.trans("fof-byobu.forum.user.settings.block_pd")))})),f().prototype.blocksPd=G().attribute("blocksPd"),f().prototype.cannotBeDirectMessaged=G().attribute("cannotBeDirectMessaged"),f().prototype.unreadPrivateMessagesCount=G().attribute("unreadPrivateMessagesCount"),(0,U.extend)(St(),"userControls",(function(t,e){return n().session.user&&n().session.user.id()!==e.id()&&n().forum.attribute("canStartPrivateDiscussion")&&(!1===e.blocksPd()||n().forum.attribute("canStartPrivateDiscussionWithBlockers")&&e.cannotBeDirectMessaged())&&t.add("private-discussion",E().component({icon:n().forum.attribute("byobu.icon-badge"),onclick:function(t){return t.preventDefault(),new Promise((function(t){var o=new(X());return o.add("users:"+n().session.user.id(),n().session.user),o.add("users:"+e.id(),e),Ct.prototype.recipients=o,n().composer.load(Ct,{user:n().session.user,recipients:o,recipientUsers:o,titlePlaceholder:n().translator.trans("fof-byobu.forum.composer_private_discussion.title_placeholder"),submitLabel:n().translator.trans("fof-byobu.forum.composer_private_discussion.submit_button")}),n().composer.show(),t(n().composer)}))}},n().translator.trans("fof-byobu.forum.buttons.send_pd",{username:e.username()}))),t})),(0,U.extend)(Mt().prototype,"navItems",(function(t){var e=n().route("byobuUserPrivate",{username:this.user.slug()});(n().session.user||m.route.get()===e)&&n().session.user!==this.user&&t.add("byobu",P().component({href:e,icon:n().forum.attribute("byobu.icon-badge")},n().translator.trans("fof-byobu.forum.user.byobu_link")),85)})),n().routes.byobuUserPrivate={path:"/u/:username/private",component:zt},n().routes.byobuPrivate={path:"/private",component:Lt()},(0,U.extend)(Lt().prototype,"navItems",(function(t){n().session.user&&t.add("privateDiscussions",P().component({icon:n().forum.data.attributes["byobu.icon-badge"],href:n().route("byobuPrivate")},n().translator.trans("fof-byobu.forum.nav.nav_item")),75)})),(0,U.extend)(Lt().prototype,"setTitle",(function(){"byobuPrivate"===n().current.get("routeName")&&n().setTitle(n().translator.trans("fof-byobu.forum.user.dropdown_label"))})),(0,U.extend)(z().prototype,"requestParams",(function(t){"byobuPrivate"===n().current.get("routeName")&&(t.filter.q=(t.filter.q||"")+" is:private",t.include.push("recipientUsers"),t.include.push("recipientGroups"))})),(0,U.extend)(Lt().prototype,"sidebarItems",(function(t){if("byobuPrivate"===n().current.get("routeName")){var e=new Wt;t.replace("newDiscussion",e.component())}})),n().notificationComponents.byobuPrivateDiscussionCreated=Yt,n().notificationComponents.byobuPrivateDiscussionReplied=Zt,n().notificationComponents.byobuRecipientRemoved=te,n().notificationComponents.byobuPrivateDiscussionAdded=ee,n().notificationComponents.byobuPrivateDiscussionMadePubic=ne,(0,U.extend)(Jt().prototype,"notificationTypes",(function(t){t.add("byobuPrivateDiscussionCreated",{name:"byobuPrivateDiscussionCreated",icon:n().forum.data.attributes["byobu.icon-badge"],label:n().translator.trans("fof-byobu.forum.notifications.pd_label")}),t.add("byobuPrivateDiscussionReplied",{name:"byobuPrivateDiscussionReplied",icon:n().forum.data.attributes["byobu.icon-badge"],label:n().translator.trans("fof-byobu.forum.notifications.pd_reply_label")}),t.add("byobuPrivateDiscussionAdded",{name:"byobuPrivateDiscussionAdded",icon:n().forum.data.attributes["byobu.icon-badge"],label:n().translator.trans("fof-byobu.forum.notifications.pd_added_label")}),t.add("byobuRecipientRemoved",{name:"byobuRecipientRemoved",icon:n().forum.data.attributes["byobu.icon-badge"],label:n().translator.trans("fof-byobu.forum.notifications.pd_user_left_label")})}))}))})(),module.exports=e})();
//# sourceMappingURL=forum.js.map
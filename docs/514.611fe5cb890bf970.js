"use strict";(self.webpackChunkavindi_app=self.webpackChunkavindi_app||[]).push([[514],{5514:(T,c,r)=>{r.r(c),r.d(c,{AdminModule:()=>g});var d=r(6019),t=r(3556);let u=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tontinard-detail"]],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"tontinard-detail works!"),t.qZA())},styles:[""]}),n})();var i=r(9594);const l=function(){return{exact:!0}};let p=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],decls:13,vars:2,consts:[[1,"row"],[1,"col-2"],[1,"nav","flex-column"],["role","button","routerLink","./","routerLinkActive","active",1,"nav-link","active",3,"routerLinkActiveOptions"],["routerLink","./tontinards","routerLinkActive","active",1,"nav-link"],["routerLink","./statistic","routerLinkActive","active",1,"nav-link"],[1,"col-auto"]],template:function(e,a){1&e&&(t.TgZ(0,"section"),t.TgZ(1,"div"),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"nav",2),t.TgZ(5,"a",3),t._uU(6,"Dashboard"),t.qZA(),t.TgZ(7,"a",4),t._uU(8,"Manage Tontinards"),t.qZA(),t.TgZ(9,"a",5),t._uU(10,"View Stat"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",6),t._UZ(12,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.Q6J("routerLinkActiveOptions",t.DdM(1,l)))},directives:[i.yS,i.Od,i.lC],styles:[""]}),n})(),m=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-manage-tontinards"]],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"manage-tontinards works!"),t.qZA())},styles:[""]}),n})(),v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-dashboard"]],decls:2,vars:0,template:function(e,a){1&e&&(t.TgZ(0,"p"),t._uU(1,"admin-dashboard works!"),t.qZA())},styles:[""]}),n})();var A=r(6619);let s=(()=>{class n{constructor(e,a){this.authService=e,this.router=a}canActivateChild(e,a){return this.canActivate(e,a)}canActivate(e,a){return console.log("AuthGuard#canActivate called"),this.checkLogin(a.url)}checkLogin(e){return!!this.authService.isLoggedIn||(this.authService.redirectUrl=e,this.router.parseUrl("/login"))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(A.e),t.LFG(i.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const h=[{path:"",component:p,canActivate:[s],children:[{path:"",canActivateChild:[s],children:[{path:"tontinards",component:m},{path:"tontinards/:id",component:u},{path:"",component:v}]}]}];let g=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.ez,i.Bz.forChild(h)]]}),n})()}}]);
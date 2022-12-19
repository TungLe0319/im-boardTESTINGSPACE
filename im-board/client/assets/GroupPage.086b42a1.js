import{Z as R,$ as x,m as n,a0 as W,_ as k,a1 as H,e as F,y as p,P as d,a2 as B,o as r,c as i,a as e,j as I,t as g,F as $,k as C,v as L,w as A,n as U,r as G,p as O,d as j,a3 as X,a4 as S,q as T,b as w,a5 as Z,C as V,x as z,U as K,V as Q,a6 as ee,X as te,a7 as oe,a8 as P,f as ae,a9 as se,aa as re,z as ne}from"./index.d2b3e62e.js";import{G as ie}from"./GroupGamesCard.094b08fc.js";class ce{constructor(t){this.accountId=t.accountId,this.id=t.id,this.groupId=t.groupId,this.profile=new R(t.profile),this.isOnline=t.isOnline||!1}}class de{async addGroupMember(t){const o=await x.post("/api/groupmembers",{groupId:t});n.groupMembers=[new ce(o.data),...n.groupMembers]}async leaveGroup(t,o){n.groupMembers.find(h=>h.accountId==n.account.id)?await x.delete(`api/groupmembers/${t}`,o):(await x.delete(`api/groupmembers/${t}`),n.groupMembers=n.groupMembers.filter(h=>h.id!==t)),W.push({name:"Account"})}}const E=new de;const ue={props:{group:{type:H,required:!0}},setup(a){return{editable:F({}),groupMember:p(()=>n.groupMembers),alreadyAMember:p(()=>n.groupMembers.find(o=>o.accountId==n.account.id)),groupOwner:p(()=>a.group.creatorId==n.account.id),memberId:p(()=>n.groupMembers.find(o=>o.accountId==n.account.id)),async removeGroup(){try{if(this.groupOwner||d.toast("Forbidden: Not Your Group","warning","top-end",1e3),a.group.groupMemberIds>1&&d.toast("Group has members, leave group instead.","warning","top-end",1e3),!await d.confirm())return;await B.removeGroup(a.group.id),d.success("Group Removed")}catch(o){d.error(o,"[removeGroupMember]")}},async addGroupMember(){try{a.group.creatorId==n.account.id?d.error("Already made this group and are already part of it"):(await E.addGroupMember(a.group.id),d.success(`You Joined ${a.group.name} !`))}catch(o){d.error(o,"[addMemberToGroup]")}},async leaveGroup(){try{if(a.group.creatorId==n.account.id&&!await d.confirm("Are you sure you want to leave? You'll have to choose a new group owner...")||!await d.confirm("Are you sure you want to leave?"))return;await E.leaveGroup(this.memberId.id),d.success(`Left ${a.group.name}`)}catch(o){d.error(o,"[leaveGroup]")}},async editGroup(){}}}},N=a=>(O("data-v-3c4acde1"),a=a(),j(),a),le={class:"d-flex"},me=N(()=>e("button",{class:"btn text-light hover rounded-circle",type:"button","data-bs-toggle":"collapse","data-bs-target":"#groupButtons","aria-expanded":"false","aria-controls":"collapseWidthExample"},[e("i",{class:"mdi mdi-dots-horizontal fs-1 text-white hover rounded-5 dropdownbtn"})],-1)),pe={class:"collapse",id:"groupButtons"},_e={class:"logicButtons d-flex"},he={key:0},ge=N(()=>e("button",{class:"btn btn-warning button-51 py-1 px-2 m-2","data-bs-toggle":"modal","data-bs-target":"#inviteMemberForm"}," Invite Member ",-1)),be=[ge],ve=N(()=>e("button",{class:"btn button-51 py-1 px-2 m-2","data-bs-toggle":"modal","data-bs-target":"#gameNightForm"}," Create Gamenight ",-1)),ye={key:1},fe={key:3},Ge={key:5},we={class:"row justify-content-center mb-3"},xe={class:"col-md-6 text-center bannerBg my-2 rounded text-light elevation-3"},Ie={class:"name"},$e={class:"mb-3"},Ce=N(()=>e("span",null,[e("div",{class:"text-shadow fs-4"},"Members")],-1)),ke={class:"d-flex justify-content-center align-items-center bg-c1 p-2 rounded-5 mb-2 groupMemberBar flex-wrap"},Me=["src","alt","title"],Be={key:0,class:"rounded-circle onlineThing bg-success position-absolute end-50 glow2"};function Se(a,t,o,s,h,b){var c,y;const m=G("router-link");return r(),i("div",{class:"col-md-11 rounded banner elevation-3",style:U({backgroundImage:`url(${(c=o.group)==null?void 0:c.coverImg})`})},[e("div",le,[me,e("div",pe,[e("div",_e,[s.groupOwner?(r(),i("div",he,be)):I("",!0),ve,s.groupOwner?(r(),i("div",ye,[e("button",{onClick:t[0]||(t[0]=u=>s.editGroup()),class:"btn btn-warning button-51 py-1 px-2 m-2","data-bs-toggle":"modal","data-bs-target":"#editForm"}," Edit group ")])):I("",!0),s.alreadyAMember?(r(),i("div",fe,[e("button",{onClick:t[2]||(t[2]=u=>s.leaveGroup()),class:"btn button-51 py-1 px-2 m-2"}," Leave Group ")])):(r(),i("button",{key:2,onClick:t[1]||(t[1]=u=>s.addGroupMember()),class:"btn button-50 py-1 px-2 m-2"}," Join Group ")),s.groupOwner?(r(),i("button",{key:4,onClick:t[3]||(t[3]=u=>s.removeGroup()),class:"btn btn-danger button-51 py-1 px-2 m-2"}," Delete Group ")):(r(),i("div",Ge))])])]),e("div",we,[e("div",xe,[e("span",Ie,g((y=o.group)==null?void 0:y.name),1),e("div",$e,[Ce,e("div",ke,[(r(!0),i($,null,C(s.groupMember,u=>(r(),L(m,{to:{name:"Profile",params:{id:u==null?void 0:u.accountId}},key:u==null?void 0:u.id},{default:A(()=>{var f,_,v;return[e("img",{src:(f=u.profile)==null?void 0:f.picture,alt:(_=u.profile)==null?void 0:_.name,title:(v=u.profile)==null?void 0:v.name,height:"45",width:"45",class:"rounded-circle box-shadow m-1 profile-img position-relative"},null,8,Me),u.profile.isOnline?(r(),i("span",Be)):I("",!0)]}),_:2},1032,["to"]))),128))])])])])],4)}const Ne=k(ue,[["render",Se],["__scopeId","data-v-3c4acde1"]]);const Ae={props:{gamenight:{type:X,required:!0}},setup(a){const t=["url(https://images.unsplash.com/photo-1500995617113-cf789362a3e1)","url(https://images.unsplash.com/photo-1611891487122-207579d67d98)","url(https://images.unsplash.com/photo-1547638375-ebf04735d792)","url(https://images.unsplash.com/photo-1606503153255-59d8b8b82176)","url(https://images.unsplash.com/photo-1561079028-f20597c34f21)","url(https://images.unsplash.com/photo-1606559497615-e4787c3c75a1)","url(https://images.unsplash.com/photo-1563811771046-ba984ff30900)"];return{gameNightCreator:p(()=>a.gamenight.creatorId==n.account.id),groupOwner:p(()=>a.gamenight.groupCreator==n.account.id),attending:p(()=>a.gamenight.groupMemberIds.find(o=>o.id==n.account.id)),memberGoing:p(()=>{seeTheSame(groupMembers,a.gamenight.groupMemberIds),seeTheSame(a.gamenight.groupMemberIds,groupMembers)}),getRandomBg(){return t[Math.floor(t.length*Math.random())]},seeTheSame(o,s){return o.filter(h=>s.some(b=>h.id===b.id))},async removeGameNight(){try{if(!await d.confirm("Cancel this gamenight??"))return;await S.removeGameNight(a.gamenight.id)}catch(o){T.error("[]",o),d.error(o)}},async addGameNight(){try{await S.addGameNight(a.gamenight.id)}catch(o){d.error(o)}},async attendGamenight(o){try{await S.attendGamenight(o)}catch(s){T.error(s),d.error(s.message)}}}}},M=a=>(O("data-v-e15890de"),a=a(),j(),a),Le={class:"row justify-content-center"},Oe={class:"col-7 col-md-8 rounded bg-c4 m-2 upcomingGameNight"},je={class:"d-flex justify-content-center mt-2 text-center"},Te=M(()=>e("h2",null,"Upcoming Gamenight",-1)),Pe={class:"d-flex justify-content-center mb-2"},Ee=V(" I'm Attending "),De=M(()=>e("i",{class:"bi bi-person-plus-fill"},null,-1)),Re=[Ee,De],Fe=V(" Unattend "),Ue=M(()=>e("i",{class:"bi bi-person-dash-fill"},null,-1)),Ve=[Fe,Ue],ze={class:"justify-content-center d-flex"},qe={class:"mx-4"},Ye={class:"col-5 col-md-6 p-0 ps-md-3"},Je={class:"card m-2 noborder"},We=M(()=>e("div",{class:"bg-c4 text-center rounded-top"},[e("h5",{class:"mt-1"},"Attending:")],-1)),He={key:0,class:"p-2 bg-c2 text-center rounded-bottom"},Xe=["src","alt","title"],Ze={class:"col-5 col-md-6 p-0 pe-md-3"},Ke={class:"card m-2 noborder elevation-4"},Qe=M(()=>e("div",{class:"bg-c4 text-center p-1 rounded-top"},[e("h5",{class:"mt-1"},"Playing:")],-1)),et={class:"bg-c2 p-2 rounded-bottom"},tt={class:"d-flex justify-content-center"},ot={class:"col-md- bg-c2 rounded-1 fs-5 text-center px-3 py-1 my-1"},at={class:"namefont"};function st(a,t,o,s,h,b){var c,y,u,f,_;const m=G("router-link");return r(),i("div",{class:"GameNightCard card my-2 elevation-3 position-relative",style:U({backgroundImage:s.getRandomBg()})},[e("div",Le,[e("div",Oe,[e("div",je,[Te,s.gameNightCreator||s.groupOwner?(r(),i("i",{key:0,title:"Remove Game Night",class:"mdi mdi-close text-danger fs-4 selectable position-absolute rounded x",onClick:t[0]||(t[0]=v=>s.removeGameNight())})):I("",!0)]),e("div",Pe,[s.attending?(r(),i("button",{key:1,class:"btn button-51 animate__animated animate__fadeIn",onClick:t[2]||(t[2]=v=>{var l;return s.attendGamenight((l=o.gamenight)==null?void 0:l.id)})},Ve)):(r(),i("button",{key:0,class:"btn button-51 animate__animated animate__fadeIn",onClick:t[1]||(t[1]=v=>{var l;return s.attendGamenight((l=o.gamenight)==null?void 0:l.id)})},Re))]),e("div",ze,[e("span",null,[e("p",null,g(new Date((c=o.gamenight)==null?void 0:c.startDate).toLocaleDateString("en-us",{month:"short",day:"2-digit",year:"numeric"})),1)]),e("span",qe,[e("p",null,g(new Date((y=o.gamenight)==null?void 0:y.startDate).toLocaleTimeString("en-us",{hour:"2-digit",minute:"2-digit"})),1)]),e("span",null,[e("p",null,"At: "+g((u=o.gamenight)==null?void 0:u.location),1)])])]),e("div",Ye,[e("div",Je,[We,(f=o.gamenight)!=null&&f.groupMemberIds?(r(),i("div",He,[w(Z,{name:"custom-classes",enterActiveClass:"animate__zoomIn animate__animated",leaveActiveClass:"animate__zoomOut animate__animated"},{default:A(()=>{var v;return[(r(!0),i($,null,C((v=o.gamenight)==null?void 0:v.groupMemberIds,l=>(r(),L(m,{to:{name:"Profile",params:{id:l==null?void 0:l.id}},key:l.id},{default:A(()=>[e("img",{src:l==null?void 0:l.picture,alt:l==null?void 0:l.name,title:l==null?void 0:l.name,height:"45",width:"45",class:"rounded-circle box-shadow m-1 profile-img"},null,8,Xe)]),_:2},1032,["to"]))),128))]}),_:1})])):I("",!0)])]),e("div",Ze,[e("div",Ke,[Qe,e("div",et,[e("div",tt,[e("div",ot,[e("b",at,g((_=o.gamenight)==null?void 0:_.game),1)])])])])])])],4)}const rt=k(Ae,[["render",st],["__scopeId","data-v-e15890de"]]);class q{constructor(t){this.id=t.id,this.groupId=t.groupId,this.creatorId=t.creatorId,this.body=t.body,this.creator=new R(t.creator),this.createdExactTime=t.createdAt,this.createdAt=new Date(t.createdAt).toLocaleDateString("en-Us",{month:"short",day:"2-digit",hour:"numeric",minute:"numeric"})}}class nt{async getGroupChatsByGroupId(t){const o=await x.get(`api/groupchats/${t}`);n.groupChats=o.data.map(s=>new q(s))}async addGroupChat(t){await x.post("api/groupchats/",t)}}const Y=new nt,it={setup(){let a=F({});const t=z();return{editable:a,async handleSubmit(){try{if(!n.account.id)return K.loginWithPopup();const o=t.params.id;a.value.groupId=o,await Y.addGroupChat(a.value),a.value={}}catch(o){d.error(o,"handleChatSubmit")}}}}},ct={class:"bg-dark rounded ms-2"},dt=e("div",{class:"row"},[e("div",{class:"d-flex justify-content-between"},[e("div",{class:"p-2 mt-2 ms-1"},"Add post. . ."),e("button",{class:"btn bg-c6 mx-2 my-2 rounded-pill",type:"submit","aria-label":"Submit Post",title:"Submit"}," Post ")])],-1),ut={class:"text-start d-flex justify-content-center"},lt={class:""},mt={class:"form-group text-center m-1"},pt=e("div",null,null,-1);function _t(a,t,o,s,h,b){return r(),i("div",ct,[e("form",{onSubmit:t[1]||(t[1]=te((...m)=>s.handleSubmit&&s.handleSubmit(...m),["prevent"]))},[dt,e("div",ut,[e("div",lt,[e("div",mt,[Q(e("textarea",{class:"p-2 rounded w-100",rows:"2","onUpdate:modelValue":t[0]||(t[0]=m=>s.editable.body=m),cols:"150",placeholder:"",required:"",name:"postcontent"},null,512),[[ee,s.editable.body]])])]),pt])],32)])}const ht=k(it,[["render",_t]]);const gt={props:{chat:{type:q,required:!0}},setup(a){return{account:p(()=>n.account)}}},bt={class:"chatContainer container animate__animated animate__fadeIn"},vt={class:"row"},yt={class:"col-12"},ft={key:0,class:"d-flex gap-1 justify-content-end pt-2 pb-2"},Gt={class:"mt-2 time"},wt={class:""},xt={key:1,class:"d-flex gap-1 justify-content-start animate__animated animate__fadeInLeft"},It={class:"bg-c4 rounded p-2 my-2 max-width"},$t=["src","alt","title"],Ct={class:""},kt={class:"mt-3 time"};function Mt(a,t,o,s,h,b){var m,c;return r(),i("div",bt,[e("div",vt,[e("div",yt,[((m=o.chat)==null?void 0:m.creatorId)==((c=s.account)==null?void 0:c.id)?(r(),i("div",ft,[e("span",Gt,g(o.chat.createdAt),1),e("div",{class:oe(["bg-c2 rounded-3 p-2 max-width",s.account?"bg-c1 ":"bg-success"])},[e("span",wt,g(o.chat.body),1)],2)])):(r(),i("div",xt,[e("div",It,[e("img",{src:o.chat.creator.picture,alt:o.chat.creator.name,title:o.chat.creator.name,class:"rounded-circle me-2 profilePic",height:"20",width:"20"},null,8,$t),e("span",Ct,g(o.chat.body),1)]),e("span",kt,g(o.chat.createdAt),1)]))])])])}const Bt=k(gt,[["render",Mt],["__scopeId","data-v-17e6fe8c"]]);class D{static EnterGroup(t){P.emit("ENTER_GROUP",t)}static LeaveGroup(t){P.emit("LEAVE_GROUP",t)}}const St={setup(){const a=z();async function t(){try{await B.getGroupById(a.params.id)}catch(c){d.error(c,"[getGroupById]")}}async function o(){try{await B.getGroupMembers(a.params.id)}catch(c){d.error(c,"[getGroupMemberByGroupId]")}}async function s(){try{await ne.getListsByGroupId(a.params.id)}catch(c){d.error(c,"[getListsByGroupId]")}}async function h(){try{await Y.getGroupChatsByGroupId(a.params.id)}catch(c){d.error(c,"[getListsByGroupId]")}}async function b(){try{await S.getGroupGameNights(a.params.id)}catch(c){d.error(c,"[groupGameNights]")}}function m(){let c=document.getElementById("chatbox");if(!c)return setTimeout(m,500);c.scrollTop=9999}return ae(()=>{t(),o(),s(),h(),b(),m(),D.EnterGroup(a.params.id)}),se(()=>{D.LeaveGroup(a.params.id)}),{chats:p(()=>n.groupChats),group:p(()=>n.activeGroup),lists:p(()=>n.groupFilteredLists),account:p(()=>n.account),gamenights:p(()=>n.groupGameNights.reverse()),groupOwner:p(()=>n.activeGroup.creatorId==n.account.id),async createGroup(){try{await B.createGroup()}catch(c){d.error(c,"[createGroup]")}}}},components:{GroupBanner:Ne,GameNightCard:rt,GroupChatInput:ht,GroupGamesCard:ie,Chat:Bt,GameNightForm:re}},J=a=>(O("data-v-f9b2c4ae"),a=a(),j(),a),Nt={key:0,class:"animate__animated animate__fadeOut"},At={key:1,class:"group-page animate__animated animate__fadeInRight container-fluid"},Lt={class:"row justify-content-center mb-4 mt-2"},Ot={class:"row justify-content-center"},jt={class:"col-md-3 bg-dark rounded mt-2"},Tt=J(()=>e("div",{class:"bg-c6 rounded px-2 py-2 my-2 text-center mx-5"},[e("h4",null,"Group Chat")],-1)),Pt={class:"overflow-auto groupchatbox bg-dark lighten-10 rounded",id:"chatbox"},Et={class:"col-md-5 overflow-auto gamecardbox mx-5"},Dt={class:"px-1"},Rt={class:"col-md-3 overflow-auto gamecardbox bg-dark pt-2 mt-2 rounded"},Ft=J(()=>e("div",{class:"bg-c1 rounded text-center pt-2 pb-1 mx-5"},[e("h4",null,"Group Games")],-1)),Ut={class:"mt-2"},Vt={class:"row flex-wrap"};function zt(a,t,o,s,h,b){const m=G("GroupBanner"),c=G("Chat"),y=G("GroupChatInput"),u=G("GameNightCard"),f=G("GroupGamesCard");return s.group?(r(),i("div",At,[e("div",Lt,[w(m,{class:"mt-2 rounded",group:s.group},null,8,["group"])]),e("div",Ot,[e("div",jt,[Tt,e("div",Pt,[(r(!0),i($,null,C(s.chats,_=>(r(),i("div",{class:"col-md-12",key:_.id},[w(c,{chat:_},null,8,["chat"])]))),128))]),w(y)]),e("div",Et,[e("div",Dt,[(r(!0),i($,null,C(s.gamenights,_=>(r(),L(u,{gamenight:_},null,8,["gamenight"]))),256))])]),e("div",Rt,[Ft,e("div",Ut,[e("div",Vt,[(r(!0),i($,null,C(s.lists,_=>(r(),i("div",{key:_.id,class:"mt-4 col-12"},[w(f,{boardGameList:_},null,8,["boardGameList"])]))),128))])])])])])):(r(),i("div",Nt," loading.... "))}const Jt=k(St,[["render",zt],["__scopeId","data-v-f9b2c4ae"]]);export{Jt as default};

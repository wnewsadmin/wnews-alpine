import{u as m}from"./asyncData.CwJK26eF.js";import{M as c,I as p,d as i,a9 as l,r as u,N as e,l as d}from"./entry.Z1Bl7BfW.js";import f from"./Ellipsis.Dycqi0qo.js";import y from"./ComponentPlaygroundData.C10qK1JO.js";import"./TabsHeader.Byp5oDDJ.js";import"./ComponentPlaygroundProps.B1XrE2dz.js";import"./ProseH4.CgBGbvBH.js";import"./ProseCodeInline.DNHud99a.js";import"./Badge.C_kl7IB-.js";import"./MDCSlot.BnhBXy0B.js";import"./slot.C2sTp5rG.js";import"./ProseP.DpA-hxn4.js";import"./index.Be7uSgYb.js";import"./ComponentPlaygroundSlots.vue.Bimei92d.js";import"./ComponentPlaygroundTokens.vue.CwDiOevb.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(h,[["__scopeId","data-v-f32a5a03"]]);export{V as default};

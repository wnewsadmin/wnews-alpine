import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.BGmQSwlO.js";import{u as d}from"./asyncData.C6F24lum.js";import f from"./Ellipsis.BhrgLDJO.js";import y from"./ComponentPlaygroundData.Cy2qRnrw.js";import"./TabsHeader.CSZRAvZr.js";import"./ComponentPlaygroundProps.DS-jdBiF.js";import"./ProseH4.BQDFrMfO.js";import"./ProseCodeInline.CEVqQjeW.js";import"./Badge.t_zLyr30.js";import"./MDCSlot.CGdoEpPn.js";import"./slot._wvBeGki.js";import"./ProseP.CpCLAlWP.js";import"./index.Brg0L7lB.js";import"./ComponentPlaygroundSlots.vue.CYPGQ7sW.js";import"./ComponentPlaygroundTokens.vue.JinOFXu3.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-f32a5a03"]]);export{V as default};

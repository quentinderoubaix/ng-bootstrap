var c=":";var s=class{visitText(t,i){return t.value}visitContainer(t,i){return`[${t.children.map(e=>e.visit(this)).join(", ")}]`}visitIcu(t,i){let e=Object.keys(t.cases).map(o=>`${o} {${t.cases[o].visit(this)}}`);return`{${t.expression}, ${t.type}, ${e.join(", ")}}`}visitTagPlaceholder(t,i){return t.isVoid?`<ph tag name="${t.startName}"/>`:`<ph tag name="${t.startName}">${t.children.map(e=>e.visit(this)).join(", ")}</ph name="${t.closeName}">`}visitPlaceholder(t,i){return t.value?`<ph name="${t.name}">${t.value}</ph>`:`<ph name="${t.name}"/>`}visitIcuPlaceholder(t,i){return`<ph icu name="${t.name}">${t.value.visit(this)}</ph>`}visitBlockPlaceholder(t,i){return`<ph block name="${t.startName}">${t.children.map(e=>e.visit(this)).join(", ")}</ph name="${t.closeName}">`}},d=new s;var a;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(a||(a={}));function u(n,t){for(let i=1,e=1;i<n.length;i++,e++)if(t[e]==="\\")e++;else if(n[i]===c)return i;throw new Error(`Unterminated $localize metadata block in "${t}".`)}var r=function(n,...t){if(r.translate){let e=r.translate(n,t);n=e[0],t=e[1]}let i=l(n[0],n.raw[0]);for(let e=1;e<n.length;e++)i+=t[e-1]+l(n[e],n.raw[e]);return i},f=":";function l(n,t){return t.charAt(0)===f?n.substring(u(n,t)+1):n}globalThis.$localize=r;
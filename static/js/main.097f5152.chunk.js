(this["webpackJsonpog-sinnoh-dex"]=this["webpackJsonpog-sinnoh-dex"]||[]).push([[0],{37:function(t,e,s){},56:function(t,e,s){},60:function(t,e,s){},67:function(t,e,s){},68:function(t,e,s){},69:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a),c=s(31),o=s.n(c),i=(s(37),s(10)),r=s(11),p=s(13),l=s(12),h=s(14),b=s(3),j=s(16),d=s.n(j),u=s(18),k=(s(56),s(1)),m=function(t){return Object(k.jsxs)(u.a,{className:"Pokemon",children:[Object(k.jsx)(u.a.Image,{src:t.sprite,alt:"sprite",onClick:t.clicked}),Object(k.jsx)(u.a.Caption,{children:Object(k.jsx)("h3",{className:"text-center",children:t.name[0].toUpperCase()+t.name.substr(1)})})]})},x=(s(60),function(t){Object(p.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={sinnohPokemon:[]},t}return Object(r.a)(s,[{key:"componentDidMount",value:function(){for(var t=this,e=[],s=[],a=387;a<=493;a++)s.push(d.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")).then((function(t){e.push(t.data)})).catch((function(t){return console.log(t)})));Promise.all(s).then((function(){t.setState({sinnohPokemon:e})}))}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"AllPokemon",children:[Object(k.jsx)("h1",{children:"Sinnoh Pokedex"}),Object(k.jsx)("div",{children:this.state.sinnohPokemon.map((function(t){return Object(k.jsx)(h.b,{to:{pathname:t.name,stats:t.stats,types:t.types,id:t.id},children:Object(k.jsx)(m,{name:t.name,sprite:t.sprites.front_default,types:t.types})},t.id)}))})]})}}]),s}(a.Component)),O=s(17),f=(s(67),["/wormadam-plant","/giratina-altered","/shaymin-land"]),g=function(t){Object(p.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={pokemonImg:null,pokemonFlavorText:null,stats:[],types:[],id:null,error:!1},t}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;if(this.props.location.id)d.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(this.props.location.id,"/")).then((function(e){t.setState({pokemonImg:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(t.props.location.id,".png"),pokemonFlavorText:388===t.props.location.id||479===t.props.location.id?e.data.flavor_text_entries[5].flavor_text:e.data.flavor_text_entries[2].flavor_text})})).catch((function(e){t.setState({error:!0})}));else{Promise.all([d.a.get("https://pokeapi.co/api/v2/pokemon".concat(t.props.location.pathname)),d.a.get(f.includes(t.props.location.pathname)?"https://pokeapi.co/api/v2/pokemon-species".concat(t.props.location.pathname.split("-")[0],"/"):"https://pokeapi.co/api/v2/pokemon-species".concat(t.props.location.pathname))]).then((function(e){t.setState({id:e[0].data.id,stats:e[0].data.stats,types:e[0].data.types,pokemonImg:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(e[0].data.id,".png"),pokemonFlavorText:388===e[0].data.id||479===e[0].data.id?e[1].data.flavor_text_entries[5].flavor_text:e[1].data.flavor_text_entries[2].flavor_text})})).catch((function(e){t.setState({error:!0})}))}}},{key:"render",value:function(){if(this.state.error)return Object(k.jsx)(b.a,{to:"/"});var t={width:"160px",height:"80px",lineHeight:"80px",background:"#a84909",borderRadius:"50%"},e=null;return this.state.id&&this.state.stats&&this.state.types?e=Object(k.jsxs)(n.a.Fragment,{children:[Object(k.jsx)("h1",{children:this.props.location.pathname.substring(1)[0].toUpperCase()+this.props.location.pathname.substring(1).substring(1)}),Object(k.jsx)("img",{src:this.state.pokemonImg,alt:"pokemonImg"}),Object(k.jsx)("ul",{children:this.state.types.map((function(e){var s=null;switch(e.type.name){case"grass":s="#78C850";break;case"water":s="#6890F0";break;case"fire":s="#F08030";break;case"electric":s="#F8D030";break;case"flying":s="#A890F0";break;case"poison":s="#A040A0";break;case"ground":s="#E0C068";break;case"rock":s="#B8A038";break;case"bug":s="#A8B820";break;case"ghost":s="#705898";break;case"psychic":s="#F85888";break;case"ice":s="#98D8D8";break;case"dragon":s="#7038F8";break;case"dark":s="#705848";break;case"fairy":s="#EE99AC";break;case"fighting":s="#C03028";break;case"steel":s="#B8B8D0";break;default:s="#A8A878"}return Object(k.jsx)("li",{style:Object(O.a)(Object(O.a)({},t),{},{background:s}),children:e.type.name},e)}))}),Object(k.jsx)("p",{children:this.state.pokemonFlavorText}),Object(k.jsx)("h3",{children:"Stats"}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"HP: "}),this.state.stats[0].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Attack: "}),this.state.stats[1].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Defense: "}),this.state.stats[2].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Sp. Atk: "}),this.state.stats[3].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Sp. Def: "}),this.state.stats[4].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Speed: "}),this.state.stats[5].base_stat]})]}):this.props.location.id&&this.props.location.types&&this.props.location.stats&&(e=Object(k.jsxs)(n.a.Fragment,{children:[Object(k.jsx)("p",{children:this.props.id}),Object(k.jsx)("h1",{children:this.props.location.pathname.substring(1)[0].toUpperCase()+this.props.location.pathname.substring(1).substring(1)}),Object(k.jsx)("img",{src:this.state.pokemonImg,alt:"pokemonImg"}),Object(k.jsx)("ul",{children:this.props.location.types.map((function(e){var s=null;switch(e.type.name){case"grass":s="#78C850";break;case"water":s="#6890F0";break;case"fire":s="#F08030";break;case"electric":s="#F8D030";break;case"flying":s="#A890F0";break;case"poison":s="#A040A0";break;case"ground":s="#E0C068";break;case"rock":s="#B8A038";break;case"bug":s="#A8B820";break;case"ghost":s="#705898";break;case"psychic":s="#F85888";break;case"ice":s="#98D8D8";break;case"dragon":s="#7038F8";break;case"dark":s="#705848";break;case"fairy":s="#EE99AC";break;case"fighting":s="#C03028";break;case"steel":s="#B8B8D0";break;default:s="#A8A878"}return Object(k.jsx)("li",{style:Object(O.a)(Object(O.a)({},t),{},{background:s}),children:e.type.name},e)}))}),Object(k.jsx)("p",{children:this.state.pokemonFlavorText}),Object(k.jsx)("h3",{children:"Stats"}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"HP: "}),this.props.location.stats[0].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Attack: "}),this.props.location.stats[1].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Defense: "}),this.props.location.stats[2].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Sp. Atk: "}),this.props.location.stats[3].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Sp. Def: "}),this.props.location.stats[4].base_stat]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{style:{fontWeight:"bold"},children:"Speed: "}),this.props.location.stats[5].base_stat]})]})),Object(k.jsx)("div",{className:"PokedexEntry",children:e})}}]),s}(a.Component),y=s.p+"static/media/pokeball.14f577ae.png",v=(s(68),function(t){Object(p.a)(s,t);var e=Object(l.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"Pokedex",children:[Object(k.jsx)("header",{children:Object(k.jsx)(h.b,{to:"/",children:Object(k.jsx)("img",{src:y,alt:"pokeball",width:"50",height:"50"})})}),Object(k.jsxs)(b.d,{children:[Object(k.jsx)(b.b,{path:"/",exact:!0,component:x}),Object(k.jsx)(b.b,{path:"/:pokemon",component:g})]})]})}}]),s}(a.Component)),_=function(t){Object(p.a)(s,t);var e=Object(l.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(k.jsx)(h.a,{basename:"/pokedex",children:Object(k.jsx)(v,{})})}}]),s}(a.Component),A=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;s(t),a(t),n(t),c(t),o(t)}))};o.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(_,{})}),document.getElementById("root")),A()}},[[69,1,2]]]);
//# sourceMappingURL=main.097f5152.chunk.js.map
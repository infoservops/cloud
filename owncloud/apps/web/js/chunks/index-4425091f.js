define(["exports","./vendor-62f8e512"],(function(t,s){"use strict";class c{topics;constructor(){this.topics=new Map}subscribe(t,c){const i={token:s.v4(),callback:c},e=[i,...this.topics.get(t)||[]];return this.topics.set(t,e),i.token}publish(t,s){(this.topics.get(t)||[]).forEach((t=>t.callback(s)))}unsubscribe(t,s){this.topics.has(t)&&this.topics.set(t,this.topics.get(t).filter((t=>t.token!==s)))}}const i=new c;t.EventBus=c,t.bus=i}));

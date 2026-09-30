import {authStore} from '../stores/auth';
const base=import.meta.env.PUBLIC_API_URL??'http://localhost:3000';
export async function api<T>(path:string,init:RequestInit={}):Promise<T>{const t=authStore.get();const r=await fetch(base+path,{...init,headers:{'Content-Type':'application/json',...(t?{Authorization:`Bearer ${t}`}:{})}});const b=await r.json();if(r.status===401){authStore.clear();if(typeof window!=='undefined')window.location.href='/login';}if(!r.ok)throw new Error(b.error??'Error de API');return b;}
export const auth={login:(body:any)=>api<{token:string}>('/auth/login',{method:'POST',body:JSON.stringify(body)}),logout:()=>api('/auth/logout',{method:'POST'})};
export const animals={list:(q:any={})=>api<any[]>('/animals?'+new URLSearchParams(Object.fromEntries(Object.entries(q).filter(([,v])=>v)))),create:(x:any)=>api('/animals',{method:'POST',body:JSON.stringify(x)}),update:(id:number,x:any)=>api(`/animals/${id}`,{method:'PUT',body:JSON.stringify(x)})};



export const authApi = auth;
export const animalApi = animals;

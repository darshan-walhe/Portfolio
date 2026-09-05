import{j as e,F as ge}from"./vendor-icons-DxrxNb7R.js";import{r as u,R as jr}from"./vendor-react-h-VQqIco.js";import{c as o,p as M,l as qe}from"./vendor-styled-B7-NiZQN.js";import{g as _e}from"./Admintheme-DZS5IzV4.js";import{g as Xe,a as Ke,b as Ze,c as Qe,d as er,e as rr,f as yr,u as vr,h as wr,i as kr,r as tr,j as he,k as $r,l as Cr,m as Sr,n as zr,o as Mr,p as Ir,q as Dr,s as Br,t as Pr,v as Lr,w as Er,x as Nr,y as fe,z as Fr,A as or,B as Rr,C as Ar,D as Tr,E as Ur,F as Jr,G as Yr}from"./index-D2cGzoK2.js";const nr=M`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,Wr=M`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;M`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;M`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;o.div`
  animation: ${nr} 0.4s ease both;
`;const K=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,E=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({gap:r})=>r||"20px"};
`,P=o.div`
  background: #0a1525;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: ${({pad:r})=>r||"22px"};
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(0,212,255,0.03) 0%, transparent 60%);
    pointer-events: none;
  }
`,ne=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,L=o.h2`
  font-size: ${({sm:r})=>r?"0.85rem":"1rem"};
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: -0.01em;

  &::before {
    content: '';
    width: 3px;
    height: ${({sm:r})=>r?"12px":"16px"};
    border-radius: 2px;
    background: linear-gradient(180deg, #00d4ff, #8b5cf6);
    display: block;
    flex-shrink: 0;
  }
`,Z=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,k=o.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,$=o.label`
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(0,212,255,0.8);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
`,ue=o.span`
  font-size: 0.72rem;
  color: rgba(255,255,255,0.28);
  font-family: 'JetBrains Mono', monospace;
`,S=o.input`
  padding: 10px 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  color: white;
  font-size: 0.88rem;
  transition: all 0.2s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-color: rgba(0,212,255,0.5);
    background: rgba(0,212,255,0.05);
    box-shadow: 0 0 0 3px rgba(0,212,255,0.08);
  }

  &::placeholder { color: rgba(255,255,255,0.2); }

  &[type="color"] {
    height: 40px;
    padding: 4px 8px;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::file-selector-button {
    margin-right: 12px;
    padding: 5px 12px;
    background: rgba(0,212,255,0.15);
    border: 1px solid rgba(0,212,255,0.3);
    border-radius: 5px;
    color: #00d4ff;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.2s;
    &:hover { background: rgba(0,212,255,0.25); }
  }
`,je=o.textarea`
  padding: 10px 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  color: white;
  font-size: 0.88rem;
  font-family: inherit;
  resize: vertical;
  min-height: ${({minH:r})=>r||"100px"};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: rgba(0,212,255,0.5);
    background: rgba(0,212,255,0.05);
    box-shadow: 0 0 0 3px rgba(0,212,255,0.08);
  }

  &::placeholder { color: rgba(255,255,255,0.2); }
`,I=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: ${({sm:r})=>r?"7px 14px":"11px 20px"};
  border-radius: 8px;
  font-size: ${({sm:r})=>r?"0.75rem":"0.88rem"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  border: none;
  letter-spacing: 0.01em;

  /* variants */
  ${({variant:r})=>r==="primary"&&`
    background: linear-gradient(135deg, #00d4ff, #8b5cf6);
    color: white;
    &:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,212,255,0.25); }
    &:active { transform: translateY(0); }
  `}
  ${({variant:r})=>r==="ghost"&&`
    background: transparent;
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.6);
    &:hover { border-color: rgba(0,212,255,0.4); color: #00d4ff; background: rgba(0,212,255,0.06); }
  `}
  ${({variant:r})=>r==="danger"&&`
    background: rgba(244,63,94,0.1);
    border: 1px solid rgba(244,63,94,0.25);
    color: #f43f5e;
    &:hover { background: rgba(244,63,94,0.2); border-color: rgba(244,63,94,0.5); }
  `}
  ${({variant:r})=>r==="success"&&`
    background: rgba(16,217,168,0.1);
    border: 1px solid rgba(16,217,168,0.25);
    color: #10d9a8;
    &:hover { background: rgba(16,217,168,0.2); }
  `}
  ${({variant:r})=>r==="cyan-outline"&&`
    background: transparent;
    border: 1px solid rgba(0,212,255,0.35);
    color: #00d4ff;
    &:hover { background: rgba(0,212,255,0.1); border-color: rgba(0,212,255,0.6); }
  `}

  &:disabled { opacity: 0.45; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
`,Q=o.div`
  display: flex;
  gap: 10px;
  ${({stretch:r})=>r&&"button, a { flex: 1; }"}
`,ye=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 14px;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0,212,255,0.05);
    border-color: rgba(0,212,255,0.2);
  }

  ${({selected:r})=>r&&`
    background: rgba(0,212,255,0.08);
    border-color: rgba(0,212,255,0.35);
  `}
`,ve=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 580px;
  overflow-y: auto;
  padding-right: 4px;
`,G=o.div`
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.03) 25%,
    rgba(255,255,255,0.07) 50%,
    rgba(255,255,255,0.03) 75%
  );
  background-size: 600px 100%;
  animation: ${Wr} 1.5s infinite;
  height: ${({h:r})=>r||"12px"};
  width: ${({w:r})=>r||"100%"};
  flex-shrink: 0;
`,X=o.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 9px;
  border-radius: 20px;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  font-family: 'JetBrains Mono', monospace;

  ${({color:r})=>{const i={cyan:"background: rgba(0,212,255,0.12); color: #00d4ff; border: 1px solid rgba(0,212,255,0.25);",violet:"background: rgba(139,92,246,0.12); color: #8b5cf6; border: 1px solid rgba(139,92,246,0.25);",green:"background: rgba(16,217,168,0.12); color: #10d9a8; border: 1px solid rgba(16,217,168,0.25);",amber:"background: rgba(245,158,11,0.12); color: #f59e0b; border: 1px solid rgba(245,158,11,0.25);",red:"background: rgba(244,63,94,0.12); color: #f43f5e; border: 1px solid rgba(244,63,94,0.25);",gray:"background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.4); border: 1px solid rgba(255,255,255,0.1);"};return i[r]||i.gray}}
`;o.div`
  height: 1px;
  background: rgba(255,255,255,0.05);
  margin: ${({my:r})=>r?`${r}px 0`:"0"};
`;const Y=o.div`
  text-align: center;
  padding: 48px 20px;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.2);
  font-family: 'JetBrains Mono', monospace;
`,ar=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`,ir=o.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.68rem;
  background: rgba(0,212,255,0.08);
  color: rgba(0,212,255,0.7);
  border: 1px solid rgba(0,212,255,0.15);
  font-family: 'JetBrains Mono', monospace;
`,we=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(16,217,168,0.1);
  border: 1px solid rgba(16,217,168,0.25);
  border-radius: 8px;
  color: #10d9a8;
  font-size: 0.85rem;
  margin-bottom: 16px;
  animation: ${nr} 0.3s ease;
`,Gr=o.div`
  width: 100%;
  height: ${({h:r})=>r||"200px"};
  border-radius: 10px;
  background: rgba(255,255,255,0.03);
  border: 1px dashed rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Or=qe`${_e}`,Vr="https://portfolio-ogjb.vercel.app",sr=M`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,Hr=M`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,lr=M`from { width: 0; }`,qr=M`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
`,_r=M`
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
`,Xr=M`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`,Kr=o.div`display: flex; flex-direction: column; gap: 22px;`,Zr=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  @media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px)  { grid-template-columns: 1fr; }
`,Qr=o.div`
  padding: 20px; background: #0a1525;
  border: 1px solid rgba(255,255,255,0.06); border-radius: 14px;
  position: relative; overflow: hidden; cursor: default;
  animation: ${sr} 0.5s ease ${({$d:r})=>r} both;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
  &:hover { transform: translateY(-3px); border-color: ${({$a:r})=>r}33; box-shadow: 0 16px 40px ${({$a:r})=>r}10; }
  &::before {
    content: ''; position: absolute; top: -24px; right: -24px;
    width: 90px; height: 90px; border-radius: 50%;
    background: ${({$a:r})=>r}; opacity: 0.07; filter: blur(28px); transition: opacity 0.25s;
  }
  &:hover::before { opacity: 0.14; }
  &::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    height: 2px; width: 0; background: ${({$a:r})=>r}; transition: width 0.4s ease;
  }
  &:hover::after { width: 100%; }
`,et=o.div`display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;`,rt=o.div`
  width: 38px; height: 38px; border-radius: 10px; background: ${({$bg:r})=>r};
  display: flex; align-items: center; justify-content: center; font-size: 1rem;
  border: 1px solid ${({$border:r})=>r};
`,le=o.div`
  font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; font-weight: 600;
  padding: 3px 8px; border-radius: 20px; background: ${({$c:r})=>r}14;
  color: ${({$c:r})=>r}; border: 1px solid ${({$c:r})=>r}25; letter-spacing: 0.05em;
`,tt=o.div`
  font-size: 2.6rem; font-weight: 800; color: white; line-height: 1.1; letter-spacing: -0.02em;
  animation: ${Hr} 0.5s ease ${({$d:r})=>r} both;
`,ot=o.div`
  font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 500;
  color: rgba(255,255,255,0.28); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 3px;
`,nt=o.div`
  margin-top: 14px; height: 3px; border-radius: 2px; background: rgba(255,255,255,0.04); overflow: hidden;
  div { height: 100%; border-radius: 2px; width: ${({$pct:r})=>r}%; background: ${({$c:r})=>r}; animation: ${lr} 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s both; }
`,at=o.div`
  display: grid; grid-template-columns: 1fr 300px; gap: 14px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`,O=o.div`
  background: #0a1525; border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px; padding: 20px;
  animation: ${sr} 0.5s ease ${({$d:r})=>r||"0.15s"} both;
`,ee=o.div`display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;`,V=o.h3`
  font-size: 0.85rem; font-weight: 700; color: white;
  display: flex; align-items: center; gap: 8px;
  &::before { content: ''; width: 3px; height: 13px; border-radius: 2px; background: linear-gradient(180deg, #00d4ff, #8b5cf6); display: block; flex-shrink: 0; }
`,it=o.div`display: flex; gap: 4px;`,st=o.button`
  font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 600; letter-spacing: 0.08em;
  padding: 3px 9px; border-radius: 20px;
  border: 1px solid ${({$a:r})=>r?"rgba(0,212,255,0.45)":"rgba(255,255,255,0.07)"};
  background: ${({$a:r})=>r?"rgba(0,212,255,0.1)":"transparent"};
  color: ${({$a:r})=>r?"#00d4ff":"rgba(255,255,255,0.25)"};
  cursor: pointer; transition: all 0.18s;
  &:hover { border-color: rgba(0,212,255,0.3); color: rgba(0,212,255,0.7); }
`,lt=o.div`position: relative; height: 130px; display: flex; flex-direction: column;`,ct=o.svg`width: 100%; flex: 1; overflow: visible;`,dt=o.div`display: flex; justify-content: space-between; margin-top: 5px;`,pt=o.span`font-family: 'JetBrains Mono', monospace; font-size: 0.54rem; color: rgba(255,255,255,0.18); flex: 1; text-align: center;`,xt=o.div`display: flex; gap: 16px; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.04);`,ze=o.div`display: flex; align-items: center; gap: 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; color: rgba(255,255,255,0.35);`,Me=o.div`width: 8px; height: 3px; border-radius: 2px; background: ${({$c:r})=>r};`,gt=o.div`display: flex; gap: 20px; margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.04);`,ht=o.div`display: flex; flex-direction: column; gap: 2px;`,ft=o.span`font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; color: rgba(255,255,255,0.2); letter-spacing: 0.1em; text-transform: uppercase;`,ut=o.span`font-size: 1.1rem; font-weight: 800; color: ${({$c:r})=>r||"white"};`,mt=o.div`position: relative; width: 140px; height: 140px; margin: 10px auto 18px;`,bt=o.div`position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;`,jt=o.div`font-size: 1.8rem; font-weight: 800; color: white; line-height: 1;`,yt=o.div`font-family: 'JetBrains Mono', monospace; font-size: 0.55rem; color: rgba(255,255,255,0.22); letter-spacing: 0.12em; margin-top: 2px;`,vt=o.div`display: flex; flex-direction: column; gap: 8px;`,wt=o.div`display: flex; align-items: center; justify-content: space-between;`,kt=o.div`display: flex; align-items: center; gap: 7px;`,$t=o.div`width: 7px; height: 7px; border-radius: 50%; background: ${({$c:r})=>r};`,Ct=o.span`font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.38);`,St=o.span`font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; font-weight: 700; color: ${({$c:r})=>r};`,zt=o.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,Mt=o.div`display: flex; flex-direction: column; gap: 10px; margin-top: 4px;`,It=o.div`display: flex; flex-direction: column; gap: 4px;`,Dt=o.div`display: flex; justify-content: space-between; align-items: center;`,Bt=o.span`font-family: 'JetBrains Mono', monospace; font-size: 0.66rem; color: rgba(255,255,255,0.5); letter-spacing: 0.06em; text-transform: capitalize;`,Pt=o.span`font-family: 'JetBrains Mono', monospace; font-size: 0.66rem; font-weight: 700; color: ${({$c:r})=>r};`,Lt=o.div`height: 5px; background: rgba(255,255,255,0.04); border-radius: 3px; overflow: hidden;`,Et=o.div`
  height: 100%; width: ${({$pct:r})=>r}%; background: ${({$c:r})=>r};
  border-radius: 3px; animation: ${lr} 1s ease 0.3s both;
`,Nt=o.div`display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 4px;`,H=o.div`
  padding: 14px; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05); border-radius: 10px;
  display: flex; flex-direction: column; gap: 4px;
  border-left: 3px solid ${({$c:r})=>r};
`,q=o.div`font-size: 1.5rem; font-weight: 800; color: white; line-height: 1; letter-spacing: -0.02em;`,_=o.div`font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; color: rgba(255,255,255,0.25); letter-spacing: 0.1em; text-transform: uppercase;`,Ie=o.div`font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; font-weight: 600; color: ${({$up:r})=>r?"#10d9a8":"#f472b6"}; margin-top: 1px;`,Ft=o.div`display: grid; gap: 14px;`,Rt=o.div`display: flex; flex-direction: column; gap: 2px; max-height: 280px; overflow-y: auto;`,At=o.div`
  display: flex; align-items: flex-start; gap: 10px; padding: 9px 10px; border-radius: 8px;
  transition: background 0.18s; animation: ${_r} 0.35s ease ${({$d:r})=>r} both;
  &:hover { background: rgba(0,212,255,0.04); }
`,Tt=o.div`
  width: 30px; height: 30px; border-radius: 8px; background: ${({$bg:r})=>r};
  display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; color: white; flex-shrink: 0;
`,Ut=o.div`flex: 1; min-width: 0;`,Jt=o.div`font-size: 0.78rem; font-weight: 700; color: white; display: flex; align-items: center; gap: 5px;`,Yt=o.div`width: 5px; height: 5px; border-radius: 50%; background: #00d4ff; animation: ${qr} 2s ease-in-out infinite;`,Wt=o.div`font-family: 'JetBrains Mono', monospace; font-size: 0.64rem; color: rgba(255,255,255,0.28); margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`,Gt=o.div`font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; color: rgba(255,255,255,0.15); margin-top: 1px;`,ce=o.div`text-align: center; padding: 32px 16px; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: rgba(255,255,255,0.15);`,de=o.div`display: flex; align-items: center; justify-content: center; padding: 28px;`,pe=o.div`width: 18px; height: 18px; border: 2px solid rgba(0,212,255,0.15); border-top-color: #00d4ff; border-radius: 50%; animation: ${Xr} 0.8s linear infinite;`,W=r=>r?r?.toDate?r.toDate().getTime():typeof r=="object"&&r.seconds?r.seconds*1e3:r instanceof Date?r.getTime():typeof r=="number"?r>1e10?r:r*1e3:typeof r=="string"&&new Date(r).getTime()||0:0,Ot=r=>{const i=Date.now()-W(r),f=Math.floor(i/6e4);if(f<1)return"just now";if(f<60)return`${f}m ago`;const l=Math.floor(f/60);return l<24?`${l}h ago`:`${Math.floor(l/24)}d ago`},De=["linear-gradient(135deg,#00d4ff,#8b5cf6)","linear-gradient(135deg,#f472b6,#8b5cf6)","linear-gradient(135deg,#10d9a8,#00d4ff)","linear-gradient(135deg,#f59e0b,#f97316)","linear-gradient(135deg,#a78bfa,#f472b6)"],Vt=({segs:r,size:i=140,stroke:f=22})=>{const l=(i-f)/2,y=2*Math.PI*l;let n=0;return e.jsxs("svg",{width:i,height:i,style:{transform:"rotate(-90deg)"},children:[e.jsx("circle",{cx:i/2,cy:i/2,r:l,fill:"none",stroke:"rgba(255,255,255,0.04)",strokeWidth:f}),r.map((h,m)=>{const v=h.pct/100*y,g=e.jsx("circle",{cx:i/2,cy:i/2,r:l,fill:"none",stroke:h.color,strokeWidth:f,strokeDasharray:`${v} ${y-v}`,strokeDashoffset:-n},m);return n+=v,g})]})},me=(r,i,f)=>{if(!r||r.length<2)return"";const l=Math.max(...r,1),y=i/(r.length-1);return r.map((n,h)=>`${h===0?"M":"L"} ${(h*y).toFixed(1)} ${(f-n/l*(f-6)).toFixed(1)}`).join(" ")},Be=(r,i,f)=>!r||r.length<2?"":`${me(r,i,f)} L ${i} ${f} L 0 ${f} Z`,Ht=async()=>{const r=localStorage.getItem("adminToken"),i=r?{Authorization:`Bearer ${r}`}:{},f=await fetch(`${Vr}/api/admin/analytics`,{headers:i});if(!f.ok){const l=f.status;let y="Failed to fetch analytics";try{y=(await f.json()).error||y}catch{}throw console.error(`Analytics API [${l}]:`,y),new Error(y)}return f.json()},qt=(r,i)=>{const f=Date.now(),l=i*864e5,y=f-l,n=(r||[]).filter(s=>W(s.timestamp)>=y),h={};for(let s=i-1;s>=0;s--){const C=new Date(f-s*864e5),D=`${C.getMonth()+1}/${C.getDate()}`;h[D]={visits:0,interactions:0}}n.forEach(s=>{const C=new Date(W(s.timestamp)),D=`${C.getMonth()+1}/${C.getDate()}`;h[D]&&(s.type==="visit"?h[D].visits++:s.type==="interaction"&&h[D].interactions++)});const m=Object.keys(h),v=m.map(s=>h[s].visits),g=m.map(s=>h[s].interactions),j={};n.filter(s=>s.type==="interaction"&&s.section).forEach(s=>{j[s.section]=(j[s.section]||0)+1});const c=n.filter(s=>s.type==="visit").length,b=n.filter(s=>s.type==="interaction").length,t=(r||[]).filter(s=>{const C=W(s.timestamp);return C>=y-l&&C<y}),p=t.filter(s=>s.type==="visit").length,a=t.filter(s=>s.type==="interaction").length;return{labels:m,visits:v,interact:g,sections:j,totalVisits:c,totalInteract:b,trendV:p?Math.round((c-p)/p*100):null,trendI:a?Math.round((b-a)/a*100):null}},_t={home:"#00d4ff",about:"#8b5cf6",projects:"#f472b6",skills:"#10d9a8",experience:"#f59e0b",contact:"#a78bfa","contact-form":"#ff6b6b"},Pe=r=>_t[r]||"#00d4ff",Xt=[{key:"projects",label:"Projects",icon:"◇",accent:"#00d4ff",bg:"rgba(0,212,255,0.1)",border:"rgba(0,212,255,0.18)",delta:"portfolio",pct:72},{key:"skills",label:"Skills",icon:"◉",accent:"#8b5cf6",bg:"rgba(139,92,246,0.1)",border:"rgba(139,92,246,0.18)",delta:"listed",pct:85},{key:"experiences",label:"Experiences",icon:"◎",accent:"#f472b6",bg:"rgba(244,114,182,0.1)",border:"rgba(244,114,182,0.18)",delta:"history",pct:60},{key:"education",label:"Education",icon:"◍",accent:"#10d9a8",bg:"rgba(16,217,168,0.1)",border:"rgba(16,217,168,0.18)",delta:"academic",pct:50},{key:"certifications",label:"Certifications",icon:"◆",accent:"#f59e0b",bg:"rgba(245,158,11,0.1)",border:"rgba(245,158,11,0.18)",delta:"earned",pct:65},{key:"messages",label:"Messages",icon:"◻",accent:"#a78bfa",bg:"rgba(167,139,250,0.1)",border:"rgba(167,139,250,0.18)",delta:"unread",pct:0}],Kt=()=>{const[r,i]=u.useState(null),[f,l]=u.useState([]),[y,n]=u.useState(null),[h,m]=u.useState(!0),[v,g]=u.useState(!0),[j,c]=u.useState("7D");u.useEffect(()=>{(async()=>{try{const[x,z,ke,$e,Ce,Se]=await Promise.allSettled([Xe(),Ke(),Ze(),Qe(),er(),rr()]),gr=x.status==="fulfilled"?x.value:[],hr=z.status==="fulfilled"?z.value:[],fr=ke.status==="fulfilled"?ke.value:[],ie=$e.status==="fulfilled"?$e.value:[],ur=Ce.status==="fulfilled"?Ce.value:[],mr=Se.status==="fulfilled"?Se.value:[];i({projects:gr?.length||0,skills:hr?.length||0,experiences:fr?.length||0,messages:ie?.length||0,education:ur?.length||0,certifications:mr?.length||0,unread:(ie||[]).filter(se=>!se.read).length}),l([...ie].sort((se,br)=>W(br.timestamp)-W(se.timestamp)).slice(0,8))}catch(x){console.error(x)}finally{m(!1)}})()},[]),u.useEffect(()=>{(async()=>{g(!0);try{n(await Ht())}catch(x){console.error(x),n([])}finally{g(!1)}})()},[]);const b=j==="7D"?7:j==="30D"?30:90,t=u.useMemo(()=>qt(y,b),[y,b]),p=r?r.projects+r.skills+r.experiences+r.education+r.certifications:0,a=r?[{label:"Projects",pct:p?Math.round(r.projects/p*100):0,color:"#00d4ff"},{label:"Skills",pct:p?Math.round(r.skills/p*100):0,color:"#8b5cf6"},{label:"Experiences",pct:p?Math.round(r.experiences/p*100):0,color:"#f472b6"},{label:"Education",pct:p?Math.round(r.education/p*100):0,color:"#10d9a8"},{label:"Certs",pct:p?Math.round(r.certifications/p*100):0,color:"#f59e0b"}]:[],s=Xt.map(x=>({...x,delta:x.key==="messages"?r?`${r.unread} unread`:"—":x.delta,pct:x.key==="messages"?r?Math.round(r.unread/Math.max(r.messages,1)*100):0:x.pct})),C=Object.entries(t.sections||{}).sort((x,z)=>z[1]-x[1]).slice(0,7),D=C[0]?.[1]||1,w=400,d=100,B=me(t.visits,w,d),A=me(t.interact,w,d),ae=Be(t.visits,w,d),dr=Be(t.interact,w,d),pr=Math.ceil((t.labels?.length||1)/7),xr=(t.visits?.length||0)>=2;return e.jsxs(e.Fragment,{children:[e.jsx(Or,{}),e.jsxs(Kr,{children:[e.jsx(Zr,{children:s.map((x,z)=>e.jsxs(Qr,{$a:x.accent,$d:`${z*.06}s`,children:[e.jsxs(et,{children:[e.jsx(rt,{$bg:x.bg,$border:x.border,children:x.icon}),e.jsx(le,{$c:x.accent,children:x.delta})]}),h?e.jsx(G,{$h:"44px",$w:"50%"}):e.jsx(tt,{$d:`${z*.06+.1}s`,children:r?.[x.key]??0}),e.jsx(ot,{children:x.label}),e.jsx(nt,{$pct:h?0:x.pct,$c:x.accent,children:e.jsx("div",{})})]},x.key))}),e.jsxs(at,{children:[e.jsxs(O,{$d:"0.14s",children:[e.jsxs(ee,{children:[e.jsx(V,{children:"Visitors & Interactions"}),e.jsx(it,{children:["7D","30D","90D"].map(x=>e.jsx(st,{$a:j===x,onClick:()=>c(x),children:x},x))})]}),v?e.jsx(de,{children:e.jsx(pe,{})}):xr?e.jsxs(lt,{children:[e.jsxs(ct,{viewBox:`0 0 ${w} ${d}`,preserveAspectRatio:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gV",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#00d4ff",stopOpacity:"0.3"}),e.jsx("stop",{offset:"100%",stopColor:"#00d4ff",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"gI",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6",stopOpacity:"0.22"}),e.jsx("stop",{offset:"100%",stopColor:"#8b5cf6",stopOpacity:"0"})]})]}),[.25,.5,.75].map(x=>e.jsx("line",{x1:"0",y1:d*x,x2:w,y2:d*x,stroke:"rgba(255,255,255,0.04)",strokeWidth:"1"},x)),e.jsx("path",{d:ae,fill:"url(#gV)"}),e.jsx("path",{d:dr,fill:"url(#gI)"}),e.jsx("path",{d:B,fill:"none",stroke:"#00d4ff",strokeWidth:"1.8",strokeLinejoin:"round",strokeLinecap:"round"}),e.jsx("path",{d:A,fill:"none",stroke:"#8b5cf6",strokeWidth:"1.8",strokeLinejoin:"round",strokeLinecap:"round",strokeDasharray:"4 2"})]}),e.jsx(dt,{children:(t.labels||[]).map((x,z)=>e.jsx(pt,{children:z%pr===0?x:""},z))})]}):e.jsxs(ce,{style:{padding:"24px 0",lineHeight:2},children:["// no analytics data yet",e.jsx("br",{}),e.jsx("span",{style:{fontSize:"0.6rem",opacity:.4},children:"data appears once visitors land on your portfolio"})]}),e.jsxs(xt,{children:[e.jsxs(ze,{children:[e.jsx(Me,{$c:"#00d4ff"}),"Visitors"]}),e.jsxs(ze,{children:[e.jsx(Me,{$c:"#8b5cf6"}),"Interactions"]})]}),e.jsx(gt,{children:[{lbl:"visitors",val:v?"—":t.totalVisits,c:"#00d4ff"},{lbl:"interactions",val:v?"—":t.totalInteract,c:"#8b5cf6"},{lbl:"engage rate",val:v?"—":t.totalVisits?`${Math.round(t.totalInteract/t.totalVisits*100)}%`:"0%",c:"#10d9a8"}].map(x=>e.jsxs(ht,{children:[e.jsx(ft,{children:x.lbl}),e.jsx(ut,{$c:x.c,children:x.val})]},x.lbl))})]}),e.jsxs(O,{$d:"0.2s",children:[e.jsx(V,{children:"Content Split"}),e.jsxs(mt,{children:[h?e.jsx(G,{$h:"140px",$w:"140px",style:{borderRadius:"50%"}}):e.jsx(Vt,{segs:a}),e.jsxs(bt,{children:[e.jsx(jt,{children:p}),e.jsx(yt,{children:"TOTAL"})]})]}),e.jsx(vt,{children:a.map(x=>e.jsxs(wt,{children:[e.jsxs(kt,{children:[e.jsx($t,{$c:x.color}),e.jsx(Ct,{children:x.label})]}),e.jsxs(St,{$c:x.color,children:[x.pct,"%"]})]},x.label))})]})]}),e.jsxs(zt,{children:[e.jsxs(O,{$d:"0.24s",children:[e.jsxs(ee,{children:[e.jsx(V,{children:"Section Clicks"}),!v&&e.jsxs(le,{$c:"#00d4ff",children:[Object.values(t.sections||{}).reduce((x,z)=>x+z,0)," total"]})]}),v?e.jsx(de,{children:e.jsx(pe,{})}):C.length===0?e.jsx(ce,{children:"// no interaction data yet"}):e.jsx(Mt,{children:C.map(([x,z])=>e.jsxs(It,{children:[e.jsxs(Dt,{children:[e.jsx(Bt,{children:x}),e.jsx(Pt,{$c:Pe(x),children:z})]}),e.jsx(Lt,{children:e.jsx(Et,{$pct:Math.round(z/D*100),$c:Pe(x)})})]},x))})]}),e.jsxs(O,{$d:"0.28s",children:[e.jsx(ee,{children:e.jsx(V,{children:"Analytics Summary"})}),v?e.jsx(de,{children:e.jsx(pe,{})}):e.jsxs(Nt,{children:[e.jsxs(H,{$c:"#00d4ff",children:[e.jsx(q,{children:t.totalVisits}),e.jsx(_,{children:"Total Visits"}),t.trendV!==null&&e.jsxs(Ie,{$up:t.trendV>=0,children:[t.trendV>=0?"↑":"↓"," ",Math.abs(t.trendV),"% vs prev"]})]}),e.jsxs(H,{$c:"#8b5cf6",children:[e.jsx(q,{children:t.totalInteract}),e.jsx(_,{children:"Interactions"}),t.trendI!==null&&e.jsxs(Ie,{$up:t.trendI>=0,children:[t.trendI>=0?"↑":"↓"," ",Math.abs(t.trendI),"% vs prev"]})]}),e.jsxs(H,{$c:"#10d9a8",children:[e.jsx(q,{children:t.totalVisits?`${Math.round(t.totalInteract/t.totalVisits*100)}%`:"0%"}),e.jsx(_,{children:"Engage Rate"})]}),e.jsxs(H,{$c:"#f59e0b",children:[e.jsx(q,{style:{fontSize:"1rem",letterSpacing:"-0.01em"},children:C[0]?.[0]||"—"}),e.jsx(_,{children:"Top Section"})]}),e.jsxs(H,{$c:"#f472b6",style:{gridColumn:"1 / -1"},children:[e.jsxs(q,{style:{fontSize:"0.9rem"},children:[j," window"]}),e.jsxs(_,{children:[t.visits?.reduce((x,z)=>x+z,0)||0," visits ·"," ",t.interact?.reduce((x,z)=>x+z,0)||0," clicks ·"," ",Object.keys(t.sections||{}).length," sections reached"]})]})]})]})]}),e.jsx(Ft,{children:e.jsxs(O,{children:[e.jsxs(ee,{children:[e.jsx(V,{children:"Latest Messages"}),r?.unread>0&&e.jsxs(le,{$c:"#00d4ff",children:[r.unread," new"]})]}),e.jsx(Rt,{children:h?[...Array(4)].map((x,z)=>e.jsxs("div",{style:{display:"flex",gap:10,padding:"9px 10px"},children:[e.jsx(G,{$h:"30px",$w:"30px",style:{borderRadius:8,flexShrink:0}}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:5},children:[e.jsx(G,{$h:"10px",$w:"35%"}),e.jsx(G,{$h:"9px",$w:"70%"})]})]},z)):f.length>0?f.map((x,z)=>e.jsxs(At,{$d:`${z*.04}s`,children:[e.jsx(Tt,{$bg:De[z%De.length],children:(x.name||"?")[0].toUpperCase()}),e.jsxs(Ut,{children:[e.jsxs(Jt,{children:[x.name,!x.read&&e.jsx(Yt,{})]}),e.jsx(Wt,{children:x.message}),e.jsxs(Gt,{children:[Ot(x.timestamp)," · ",x.email]})]})]},x.id)):e.jsx(ce,{children:"// no messages yet"})})]})})]})]})},Zt=M`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Qt=o.div`
  animation: ${Zt} 0.4s ease both;
`,eo=o.div`
  width: 38px; height: 38px;
  border-radius: 7px;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;

  img { width: 100%; height: 100%; object-fit: cover; }
`,ro=o.div`
  flex: 1;
  min-width: 0;
  .name { font-size: 0.85rem; font-weight: 700; color: white; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .meta { font-size: 0.72rem; color: rgba(255,255,255,0.3); margin-top: 2px; font-family: 'JetBrains Mono', monospace; }
`,to=o.div`
  width: 10px; height: 10px;
  border-radius: 50%;
  background: ${({$c:r})=>r};
  border: 1px solid rgba(255,255,255,0.15);
  flex-shrink: 0;
`,oo=o(P)`
  max-height: 75vh;
  overflow-y: auto;
`,no=({onDataUpdate:r})=>{const[i,f]=u.useState([]),[l,y]=u.useState(null),[n,h]=u.useState(!1),[m,v]=u.useState(""),[g,j]=u.useState(""),[c,b]=u.useState({name:"",category:"Fullstack",desc:"",tech:"",type:"Web",accent:"#00d4ff",status:"Completed",live:"",github:"",image:""});u.useEffect(()=>{t()},[]);const t=async()=>{try{f(await Xe()||[])}catch(d){console.error(d)}},p=d=>{y(d),b({name:d.name||"",category:d.category||"Fullstack",desc:d.desc||"",tech:Array.isArray(d.tech)?d.tech.join(", "):d.tech||"",type:d.type||"Web",accent:d.accent||"#00d4ff",status:d.status||"Completed",live:d.live||"",github:d.github||"",image:d.image||""}),v(d.image||""),j(d.image||"")},a=(d,B)=>b(A=>({...A,[d]:B})),s=d=>{const B=d.target.value.trim();v(B),j(B||"")},C=async d=>{d.preventDefault(),h(!0);try{const B=c.tech.split(",").map(ae=>ae.trim()).filter(Boolean);let A={...c,tech:B};m&&(A.image=await vr(m)),l?await wr(l.id,A):await kr(A),t(),w(),r?.()}catch(B){console.error(B),alert(B.message)}finally{h(!1)}},D=async d=>{if(window.confirm("Delete this project?"))try{await yr(d),t(),w(),r?.()}catch(B){console.error(B)}},w=()=>{y(null),v(""),j(""),b({name:"",category:"Fullstack",desc:"",tech:"",type:"Web",accent:"#00d4ff",status:"Completed",live:"",github:"",image:""})};return e.jsx(Qt,{children:e.jsxs(K,{children:[e.jsxs(E,{children:[e.jsxs(ne,{children:[e.jsxs(L,{children:["Projects (",i.length,")"]}),e.jsx(I,{variant:"ghost",sm:!0,onClick:w,children:"+ New"})]}),e.jsxs(ve,{children:[i.map(d=>e.jsxs(ye,{selected:l?.id===d.id,onClick:()=>p(d),children:[e.jsx(eo,{children:d.image?e.jsx("img",{src:d.image,alt:d.name}):"📷"}),e.jsxs(ro,{children:[e.jsx("div",{className:"name",children:d.name}),e.jsxs("div",{className:"meta",children:[d.category," · ",d.type]})]}),e.jsx(to,{$c:d.accent||"#00d4ff"}),e.jsx(I,{variant:"danger",sm:!0,onClick:B=>{B.stopPropagation(),D(d.id)},children:"Delete"})]},d.id)),i.length===0&&e.jsx(Y,{children:"// no projects yet"})]})]}),e.jsxs(E,{children:[e.jsx(L,{children:l?"Edit Project":"New Project"}),e.jsx(oo,{children:e.jsx("form",{onSubmit:C,children:e.jsxs(Z,{children:[e.jsxs(k,{children:[e.jsx($,{children:"Image URL"}),e.jsx(S,{type:"text",value:m,onChange:s,placeholder:"https://example.com/image.jpg",disabled:n}),g&&e.jsx(Gr,{h:"160px",children:e.jsx("img",{src:g,alt:"preview"})})]}),e.jsxs(k,{children:[e.jsx($,{children:"Project Name *"}),e.jsx(S,{required:!0,value:c.name,onChange:d=>a("name",d.target.value),placeholder:"e.g., E-Commerce Platform",disabled:n})]}),e.jsxs(k,{children:[e.jsx($,{children:"Category"}),e.jsx(S,{value:c.category,onChange:d=>a("category",d.target.value),placeholder:"Fullstack, Frontend, Backend...",disabled:n})]}),e.jsxs(k,{children:[e.jsx($,{children:"Description *"}),e.jsx(je,{required:!0,value:c.desc,onChange:d=>a("desc",d.target.value),placeholder:"Describe your project...",disabled:n})]}),e.jsxs(k,{children:[e.jsx($,{children:"Technologies"}),e.jsx(S,{value:c.tech,onChange:d=>a("tech",d.target.value),placeholder:"React, Node.js, MongoDB (comma-separated)",disabled:n}),c.tech&&e.jsx(ar,{children:c.tech.split(",").map(d=>d.trim()).filter(Boolean).map(d=>e.jsx(ir,{children:d},d))})]}),e.jsxs(k,{children:[e.jsx($,{children:"Type"}),e.jsx(S,{value:c.type,onChange:d=>a("type",d.target.value),placeholder:"Web, Mobile, Desktop",disabled:n})]}),e.jsxs(k,{children:[e.jsx($,{children:"Status"}),e.jsx(S,{value:c.status,onChange:d=>a("status",d.target.value),placeholder:"Completed, In Progress...",disabled:n})]}),e.jsxs(k,{children:[e.jsx($,{children:"Accent Color"}),e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(S,{type:"color",value:c.accent,onChange:d=>a("accent",d.target.value),style:{width:60,flexShrink:0},disabled:n}),e.jsx(S,{value:c.accent,onChange:d=>a("accent",d.target.value),disabled:n})]})]}),e.jsxs(k,{children:[e.jsx($,{children:"Live URL"}),e.jsx(S,{value:c.live,onChange:d=>a("live",d.target.value),placeholder:"https://example.com",disabled:n})]}),e.jsxs(k,{children:[e.jsx($,{children:"GitHub URL"}),e.jsx(S,{value:c.github,onChange:d=>a("github",d.target.value),placeholder:"https://github.com/...",disabled:n})]}),e.jsxs(Q,{stretch:!0,children:[e.jsx(I,{variant:"primary",type:"submit",disabled:n,children:n?"Saving...":l?"Update Project":"Create Project"}),l&&e.jsx(I,{variant:"ghost",type:"button",onClick:w,disabled:n,children:"Clear"})]})]})})})]})]})})},ao=M`
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
`,io=o.div`
  animation: ${ao} 0.4s ease both;
`,so=o.div`
  width: 34px; height: 34px;
  border-radius: 8px;
  background: ${({$bg:r})=>r};
  border: 1px solid ${({$border:r})=>r};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$c:r})=>r};
  font-size: 0.95rem;
  flex-shrink: 0;
`,lo=o.div`
  flex: 1;
  min-width: 0;
  .name { font-size: 0.85rem; font-weight: 700; color: white; }
  .meta { font-size: 0.7rem; color: rgba(255,255,255,0.3); margin-top: 2px; font-family:'JetBrains Mono',monospace; }
`,Le=o.div`
  height: 3px;
  border-radius: 2px;
  background: rgba(255,255,255,0.06);
  overflow: hidden;
  margin-top: 4px;

  div {
    height: 100%;
    border-radius: 2px;
    background: ${({$c:r})=>r};
    width: ${({$w:r})=>r}%;
  }
`,Ee=["java","js","react","vuejs","angular","python","node","php","html5","css3","sass","docker","git","github","gitlab","aws","google","microsoft","apple","linux","ubuntu","android","swift","kotlin","figma","firebase","mongodb","wordpress","npm"],Ne=["database","server","code","terminal","bug","cog","cubes","cloud","lock","microchip","chart-line","layer-group","puzzle-piece","wrench","bolt","robot","brain","infinity","sitemap","plug","wifi","shield-halved","network-wired"],co=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,po=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,xo=o.div`
  width: 36px; height: 36px;
  border-radius: 8px;
  background: ${({$bg:r})=>r};
  border: 1px solid ${({$border:r})=>r};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$c:r})=>r};
  font-size: 1rem;
`,go=o.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.3);
`,ho=o.div`
  display: flex;
  gap: 5px;
`,Fe=o.button`
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.68rem;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.18s;
  border: 1px solid ${({$a:r})=>r?"rgba(0,212,255,0.4)":"rgba(255,255,255,0.1)"};
  background: ${({$a:r})=>r?"rgba(0,212,255,0.12)":"transparent"};
  color: ${({$a:r})=>r?"#00d4ff":"rgba(255,255,255,0.35)"};
  &:hover { border-color:rgba(0,212,255,0.35); color:#00d4ff; }
`,fo=o.input`
  padding: 7px 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 7px;
  color: white;
  font-size: 0.82rem;
  font-family: 'JetBrains Mono', monospace;
  &:focus { outline:none; border-color:rgba(0,212,255,0.4); }
  &::placeholder { color:rgba(255,255,255,0.2); }
`,uo=o.div`
  display: grid;
  grid-template-columns: repeat(8,1fr);
  gap: 5px;
  max-height: 160px;
  overflow-y: auto;
`,mo=o.button`
  width: 34px; height: 34px;
  border-radius: 7px;
  border: 1px solid ${({$s:r})=>r?"rgba(0,212,255,0.5)":"rgba(255,255,255,0.07)"};
  background: ${({$s:r})=>r?"rgba(0,212,255,0.15)":"rgba(255,255,255,0.03)"};
  color: ${({$s:r})=>r?"#00d4ff":"rgba(255,255,255,0.45)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.15s;
  &:hover { border-color:rgba(0,212,255,0.4); color:#00d4ff; background:rgba(0,212,255,0.08); }
`,Re=o.p`
  grid-column:1/-1;
  text-align:center;
  padding:16px 0;
  font-family:'JetBrains Mono',monospace;
  font-size:0.72rem;
  color:rgba(255,255,255,0.2);
`,bo=({value:r,onChange:i,color:f})=>{const[l,y]=u.useState("brands"),[n,h]=u.useState(""),[m,v]=u.useState(!1),g=l==="brands"?Ee:Ne,j=l==="brands"?"fab":"fas",c=g.filter(s=>s.includes(n.toLowerCase())),b=he(r),t=f||"#00d4ff",p=`${t}14`,a=`${t}28`;return u.useEffect(()=>{const s=[...Ee.map(C=>({prefix:"fab",name:C})),...Ne.map(C=>({prefix:"fas",name:C}))];Promise.all(s.map(tr)).then(()=>v(!0))},[]),e.jsxs(co,{children:[e.jsxs(po,{children:[e.jsx(xo,{$bg:p,$border:a,$c:t,children:b?e.jsx(ge,{icon:b}):e.jsx("span",{style:{fontSize:"0.55rem",color:"rgba(255,255,255,0.2)"},children:"none"})}),e.jsx(go,{children:r?`${r.prefix} / ${r.name}`:"No icon selected"})]}),e.jsxs(ho,{children:[e.jsx(Fe,{$a:l==="brands",onClick:()=>{y("brands"),h("")},children:"Brands"}),e.jsx(Fe,{$a:l==="solid",onClick:()=>{y("solid"),h("")},children:"Solid"})]}),e.jsx(fo,{placeholder:"Search icons…",value:n,onChange:s=>h(s.target.value)}),e.jsx(uo,{children:m?c.length>0?c.map(s=>{const C=he({prefix:j,name:s});if(!C)return null;const D=r?.prefix===j&&r?.name===s;return e.jsx(mo,{title:s,$s:D,type:"button",onClick:()=>i({prefix:j,name:s}),children:e.jsx(ge,{icon:C})},s)}):e.jsx(Re,{children:"No icons found"}):e.jsx(Re,{children:"Loading icons…"})})]})},jo=({onDataUpdate:r})=>{const[i,f]=u.useState([]),[l,y]=u.useState(null),[n,h]=u.useState({name:"",category:"Frontend",level:80,color:"#00d4ff",icon:null,featured:!1,order:0});u.useEffect(()=>{m()},[]);const m=async()=>{try{const t=await Ke()||[];f(t),Promise.all(t.map(p=>p.icon?tr(p.icon):null))}catch(t){console.error(t)}},v=t=>{y(t),h({name:t.name||"",category:t.category||"Frontend",level:t.level||80,color:t.color||"#00d4ff",icon:t.icon||null,featured:t.featured||!1,order:t.order||0})},g=(t,p)=>h(a=>({...a,[t]:p})),j=async t=>{t.preventDefault();try{l?await Cr(l.id,n):await Sr(n),m(),b(),r?.()}catch(p){console.error(p)}},c=async t=>{if(window.confirm("Delete this skill?"))try{await $r(t),m(),b(),r?.()}catch(p){console.error(p)}},b=()=>{y(null),h({name:"",category:"Frontend",level:80,color:"#00d4ff",icon:null,featured:!1,order:0})};return e.jsx(io,{children:e.jsxs(K,{children:[e.jsxs(E,{children:[e.jsxs(ne,{children:[e.jsxs(L,{children:["Skills (",i.length,")"]}),e.jsx(I,{variant:"ghost",sm:!0,onClick:b,children:"+ New"})]}),e.jsxs(ve,{children:[i.map(t=>{const p=he(t.icon),a=t.color||"#00d4ff";return e.jsxs(ye,{selected:l?.id===t.id,onClick:()=>v(t),children:[e.jsx(so,{$c:a,$bg:`${a}14`,$border:`${a}28`,children:p?e.jsx(ge,{icon:p}):"?"}),e.jsxs(lo,{children:[e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"meta",children:t.category}),e.jsx(Le,{$c:a,$w:t.level||0,children:e.jsx("div",{})})]}),e.jsxs(X,{color:"gray",children:[t.level,"%"]}),e.jsx(I,{variant:"danger",sm:!0,onClick:s=>{s.stopPropagation(),c(t.id)},children:"Delete"})]},t.id)}),i.length===0&&e.jsx(Y,{children:"// no skills yet"})]})]}),e.jsxs(E,{children:[e.jsx(L,{children:l?"Edit Skill":"New Skill"}),e.jsx(P,{children:e.jsx("form",{onSubmit:j,children:e.jsxs(Z,{children:[e.jsxs(k,{children:[e.jsx($,{children:"Skill Name *"}),e.jsx(S,{required:!0,value:n.name,onChange:t=>g("name",t.target.value),placeholder:"e.g., React"})]}),e.jsxs(k,{children:[e.jsx($,{children:"Category"}),e.jsx(S,{value:n.category,onChange:t=>g("category",t.target.value),placeholder:"Frontend, Backend, DevOps…"})]}),e.jsxs(k,{children:[e.jsxs($,{children:["Proficiency — ",n.level,"%"]}),e.jsx(S,{type:"range",min:"0",max:"100",value:n.level,onChange:t=>g("level",parseInt(t.target.value)),style:{padding:"4px 0",background:"transparent",border:"none"}}),e.jsx(Le,{$c:n.color,$w:n.level,children:e.jsx("div",{})})]}),e.jsxs(k,{children:[e.jsx($,{children:"Color"}),e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx(S,{type:"color",value:n.color,onChange:t=>g("color",t.target.value),style:{width:60,flexShrink:0}}),e.jsx(S,{value:n.color,onChange:t=>g("color",t.target.value)})]})]}),e.jsxs(k,{children:[e.jsx($,{children:"Icon"}),e.jsx(bo,{value:n.icon,onChange:t=>g("icon",t),color:n.color})]}),e.jsxs(k,{children:[e.jsx($,{children:"Order"}),e.jsx(S,{type:"number",value:n.order,onChange:t=>g("order",parseInt(t.target.value))})]}),e.jsxs(k,{style:{flexDirection:"row",alignItems:"center",gap:10},children:[e.jsx("input",{type:"checkbox",id:"feat",checked:n.featured,onChange:t=>g("featured",t.target.checked),style:{width:16,height:16,cursor:"pointer",accentColor:"#00d4ff"}}),e.jsx($,{htmlFor:"feat",style:{margin:0,cursor:"pointer"},children:"Featured (show in rings)"})]}),e.jsxs(Q,{stretch:!0,children:[e.jsx(I,{variant:"primary",type:"submit",children:l?"Update Skill":"Create Skill"}),l&&e.jsx(I,{variant:"ghost",type:"button",onClick:b,children:"Clear"})]})]})})})]})]})})},yo=M`
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
`,vo=o.div`
  animation: ${yo} 0.4s ease both;
`,wo=o.div`
  width: 34px; height: 34px;
  border-radius: 8px;
  background: rgba(139,92,246,0.1);
  border: 1px solid rgba(139,92,246,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`,ko=o.div`
  flex: 1;
  min-width: 0;
  .name { font-size:0.85rem; font-weight:700; color:white; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
  .meta { font-size:0.7rem; color:rgba(255,255,255,0.3); margin-top:2px; font-family:'JetBrains Mono',monospace; }
`,$o=({onDataUpdate:r})=>{const[i,f]=u.useState([]),[l,y]=u.useState(null),[n,h]=u.useState({role:"",company:"",type:"Full-time",date:"",current:!1,desc:"",tags:""});u.useEffect(()=>{m()},[]);const m=async()=>{try{f(await Ze()||[])}catch(t){console.error(t)}},v=t=>{y(t),h({role:t.role||"",company:t.company||"",type:t.type||"Full-time",date:t.date||"",current:t.current||!1,desc:t.desc||"",tags:Array.isArray(t.tags)?t.tags.join(", "):t.tags||""})},g=(t,p)=>h(a=>({...a,[t]:p})),j=async t=>{t.preventDefault();try{const p={...n,tags:n.tags.split(",").map(a=>a.trim()).filter(Boolean)};l?await Mr(l.id,p):await Ir(p),m(),b(),r?.()}catch(p){console.error(p)}},c=async t=>{if(window.confirm("Delete this experience?"))try{await zr(t),m(),b(),r?.()}catch(p){console.error(p)}},b=()=>{y(null),h({role:"",company:"",type:"Full-time",date:"",current:!1,desc:"",tags:""})};return e.jsx(vo,{children:e.jsxs(K,{children:[e.jsxs(E,{children:[e.jsxs(ne,{children:[e.jsxs(L,{children:["Experiences (",i.length,")"]}),e.jsx(I,{variant:"ghost",sm:!0,onClick:b,children:"+ New"})]}),e.jsxs(ve,{children:[i.map(t=>e.jsxs(ye,{selected:l?.id===t.id,onClick:()=>v(t),children:[e.jsx(wo,{children:"◎"}),e.jsxs(ko,{children:[e.jsx("div",{className:"name",children:t.role}),e.jsxs("div",{className:"meta",children:[t.company," · ",t.type]})]}),t.current&&e.jsx(X,{color:"green",children:"current"}),e.jsx(I,{variant:"danger",sm:!0,onClick:p=>{p.stopPropagation(),c(t.id)},children:"Delete"})]},t.id)),i.length===0&&e.jsx(Y,{children:"// no experiences yet"})]})]}),e.jsxs(E,{children:[e.jsx(L,{children:l?"Edit Experience":"New Experience"}),e.jsx(P,{children:e.jsx("form",{onSubmit:j,children:e.jsxs(Z,{children:[e.jsxs(k,{children:[e.jsx($,{children:"Job Title / Role *"}),e.jsx(S,{required:!0,value:n.role,onChange:t=>g("role",t.target.value),placeholder:"e.g., Senior Frontend Developer"})]}),e.jsxs(k,{children:[e.jsx($,{children:"Company"}),e.jsx(S,{value:n.company,onChange:t=>g("company",t.target.value),placeholder:"e.g., TechCorp Global"})]}),e.jsxs(k,{children:[e.jsx($,{children:"Employment Type"}),e.jsx(S,{value:n.type,onChange:t=>g("type",t.target.value),placeholder:"Full-time, Contract, Freelance…"})]}),e.jsxs(k,{children:[e.jsx($,{children:"Duration"}),e.jsx(S,{value:n.date,onChange:t=>g("date",t.target.value),placeholder:"Aug 2024 — Present"})]}),e.jsxs(k,{children:[e.jsx($,{children:"Description *"}),e.jsx(je,{required:!0,minH:"90px",value:n.desc,onChange:t=>g("desc",t.target.value),placeholder:"Responsibilities and achievements…"})]}),e.jsxs(k,{children:[e.jsx($,{children:"Skills Used"}),e.jsx(S,{value:n.tags,onChange:t=>g("tags",t.target.value),placeholder:"React, Node.js, AWS (comma-separated)"}),n.tags&&e.jsx(ar,{children:n.tags.split(",").map(t=>t.trim()).filter(Boolean).map(t=>e.jsx(ir,{children:t},t))})]}),e.jsxs(k,{style:{flexDirection:"row",alignItems:"center",gap:10},children:[e.jsx("input",{type:"checkbox",id:"cur",checked:n.current,onChange:t=>g("current",t.target.checked),style:{width:16,height:16,cursor:"pointer",accentColor:"#10d9a8"}}),e.jsx($,{htmlFor:"cur",style:{margin:0,cursor:"pointer"},children:"Currently Working Here"})]}),e.jsxs(Q,{stretch:!0,children:[e.jsx(I,{variant:"primary",type:"submit",children:l?"Update Experience":"Create Experience"}),l&&e.jsx(I,{variant:"ghost",type:"button",onClick:b,children:"Clear"})]})]})})})]})]})})},Co=M`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,So=o.div`animation: ${Co} 0.4s ease both;`,zo=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,Ae=o.div`display: flex; flex-direction: column; gap: 20px;`,Mo=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Te=o.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
`,Io=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 580px;
  overflow-y: auto;
  padding-right: 6px;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 3px; }
  &::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.25); border-radius: 3px; }
`,Do=o.div`
  padding: 14px 16px;
  background: ${({$selected:r})=>r?"rgba(34,211,238,0.08)":"rgba(10,26,46,0.6)"};
  border: 1px solid ${({$selected:r})=>r?"rgba(34,211,238,0.4)":"rgba(34,211,238,0.12)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  &:hover { border-color: rgba(34,211,238,0.3); background: rgba(10,26,46,0.8); }
`,Bo=o.div`
  width: 36px; height: 36px;
  border-radius: 8px;
  background: ${({$color:r})=>`${r}18`};
  border: 1px solid ${({$color:r})=>`${r}30`};
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,Po=o.div`
  flex: 1; min-width: 0;
  .name { font-size: 0.85rem; font-weight: 700; color: white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .meta { font-size: 0.7rem; color: rgba(255,255,255,0.35); margin-top: 2px; font-family: 'Space Mono', monospace; }
`,Lo=o.button`
  padding: 5px 10px;
  background: rgba(255,107,107,0.12);
  border: 1px solid rgba(255,107,107,0.25);
  border-radius: 4px;
  color: #ff6b6b;
  font-size: 0.72rem;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s ease;
  &:hover { background: rgba(255,107,107,0.25); }
`,Eo=o.button`
  padding: 7px 16px;
  background: transparent;
  border: 1px solid rgba(34,211,238,0.3);
  border-radius: 8px;
  color: #22d3ee;
  font-size: 0.78rem;
  font-family: 'Space Mono', monospace;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { background: rgba(34,211,238,0.1); border-color: #22d3ee; }
`,No=o.p`
  text-align: center;
  color: rgba(255,255,255,0.25);
  font-size: 0.8rem;
  font-family: 'Space Mono', monospace;
  padding: 24px 0;
`,Fo=o.div`
  padding: 24px;
  background: rgba(10,26,46,0.6);
  border: 1px solid rgba(34,211,238,0.12);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,N=o.div`display: flex; flex-direction: column; gap: 5px;`,F=o.label`
  font-size: 0.75rem;
  font-weight: 700;
  color: #22d3ee;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,R=o.input`
  padding: 9px 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(34,211,238,0.18);
  border-radius: 6px;
  color: white;
  font-size: 0.875rem;
  &:focus { outline: none; border-color: #22d3ee; background: rgba(34,211,238,0.06); }
  &[type="color"] { height: 38px; padding: 3px 8px; cursor: pointer; }
`,Ro=o.div`display: flex; gap: 10px; margin-top: 4px;`,Ao=o.button`
  flex: 1;
  padding: 10px;
  background: linear-gradient(135deg, #22d3ee, #7b2fff);
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(34,211,238,0.25); }
`,To=o.button`
  padding: 10px 20px;
  background: transparent;
  border: 1px solid rgba(34,211,238,0.25);
  border-radius: 6px;
  color: #22d3ee;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { background: rgba(34,211,238,0.08); border-color: #22d3ee; }
`,Uo=({onDataUpdate:r})=>{const[i,f]=u.useState([]),[l,y]=u.useState(null),[n,h]=u.useState({degree:"",school:"",field:"",year:"",grade:"",icon:"🎓",color:"#22d3ee",order:0});u.useEffect(()=>{m()},[]);const m=async()=>{try{f(await er()||[])}catch(t){console.error(t)}},v=t=>{y(t),h({degree:t.degree||"",school:t.school||"",field:t.field||"",year:t.year||"",grade:t.grade||"",icon:t.icon||"🎓",color:t.color||"#22d3ee",order:t.order??0})},g=(t,p)=>h(a=>({...a,[t]:p})),j=async t=>{t.preventDefault();try{l?await Br(l.id,n):await Pr(n),m(),b(),r?.()}catch(p){console.error(p),alert(p.message)}},c=async t=>{if(window.confirm("Delete this education entry?"))try{await Dr(t),m(),b(),r?.()}catch(p){console.error(p),alert(p.message)}},b=()=>{y(null),h({degree:"",school:"",field:"",year:"",grade:"",icon:"🎓",color:"#22d3ee",order:0})};return e.jsx(So,{children:e.jsxs(zo,{children:[e.jsxs(Ae,{children:[e.jsxs(Mo,{children:[e.jsxs(Te,{children:["Education (",i.length,")"]}),e.jsx(Eo,{onClick:b,children:"+ New"})]}),e.jsx(Io,{children:i.length===0?e.jsx(No,{children:"// no education entries yet"}):i.map(t=>e.jsxs(Do,{$selected:l?.id===t.id,onClick:()=>v(t),children:[e.jsx(Bo,{$color:t.color||"#22d3ee",children:t.icon||"🎓"}),e.jsxs(Po,{children:[e.jsx("div",{className:"name",children:t.degree}),e.jsxs("div",{className:"meta",children:[t.school,t.year?` · ${t.year}`:""]})]}),e.jsx(Lo,{onClick:p=>{p.stopPropagation(),c(t.id)},children:"Delete"})]},t.id))})]}),e.jsxs(Ae,{children:[e.jsx(Te,{children:l?"Edit Education":"New Education"}),e.jsxs(Fo,{as:"form",onSubmit:j,children:[e.jsxs(N,{children:[e.jsx(F,{children:"Degree / Qualification *"}),e.jsx(R,{required:!0,value:n.degree,onChange:t=>g("degree",t.target.value),placeholder:"e.g., B.E. Computer Engineering"})]}),e.jsxs(N,{children:[e.jsx(F,{children:"School / University *"}),e.jsx(R,{required:!0,value:n.school,onChange:t=>g("school",t.target.value),placeholder:"e.g., Mumbai University"})]}),e.jsxs(N,{children:[e.jsx(F,{children:"Field of Study"}),e.jsx(R,{value:n.field,onChange:t=>g("field",t.target.value),placeholder:"e.g., Computer Science"})]}),e.jsxs(N,{children:[e.jsx(F,{children:"Year / Duration"}),e.jsx(R,{value:n.year,onChange:t=>g("year",t.target.value),placeholder:"e.g., 2020 — 2024"})]}),e.jsxs(N,{children:[e.jsx(F,{children:"Grade / CGPA"}),e.jsx(R,{value:n.grade,onChange:t=>g("grade",t.target.value),placeholder:"e.g., 8.5 CGPA / First Class"})]}),e.jsxs(N,{children:[e.jsx(F,{children:"Icon / Emoji"}),e.jsx(R,{value:n.icon,onChange:t=>g("icon",t.target.value),placeholder:"🎓",maxLength:2})]}),e.jsxs(N,{children:[e.jsx(F,{children:"Accent Color"}),e.jsx(R,{type:"color",value:n.color,onChange:t=>g("color",t.target.value)})]}),e.jsxs(N,{children:[e.jsx(F,{children:"Display Order"}),e.jsx(R,{type:"number",value:n.order,onChange:t=>g("order",parseInt(t.target.value)||0)})]}),e.jsxs(Ro,{children:[e.jsxs(Ao,{type:"submit",children:[l?"Update":"Create"," Education"]}),l&&e.jsx(To,{type:"button",onClick:b,children:"Clear"})]})]})]})]})})},Jo=M`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Yo=o.div`animation: ${Jo} 0.4s ease both;`,Wo=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`,Ue=o.div`display: flex; flex-direction: column; gap: 20px;`,Go=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Je=o.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.02em;
`,Oo=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 580px;
  overflow-y: auto;
  padding-right: 6px;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: rgba(255,255,255,0.04); border-radius: 3px; }
  &::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.25); border-radius: 3px; }
`,Vo=o.div`
  padding: 14px 16px;
  background: ${({$selected:r})=>r?"rgba(34,211,238,0.08)":"rgba(10,26,46,0.6)"};
  border: 1px solid ${({$selected:r})=>r?"rgba(34,211,238,0.4)":"rgba(34,211,238,0.12)"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  &:hover { border-color: rgba(34,211,238,0.3); background: rgba(10,26,46,0.8); }
`,Ho=o.div`
  width: 36px; height: 36px;
  border-radius: 8px;
  background: ${({color:r})=>`${r}18`};
  border: 1px solid ${({color:r})=>`${r}30`};
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,qo=o.div`
  flex: 1; min-width: 0;
  .name { font-size: 0.85rem; font-weight: 700; color: white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .meta { font-size: 0.7rem; color: rgba(255,255,255,0.35); margin-top: 2px; font-family: 'Space Mono', monospace; }
`,_o=o.button`
  padding: 5px 10px;
  background: rgba(255,107,107,0.12);
  border: 1px solid rgba(255,107,107,0.25);
  border-radius: 4px;
  color: #ff6b6b;
  font-size: 0.72rem;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s ease;
  &:hover { background: rgba(255,107,107,0.25); }
`,Xo=o.button`
  padding: 7px 16px;
  background: transparent;
  border: 1px solid rgba(34,211,238,0.3);
  border-radius: 8px;
  color: #22d3ee;
  font-size: 0.78rem;
  font-family: 'Space Mono', monospace;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { background: rgba(34,211,238,0.1); border-color: #22d3ee; }
`,Ko=o.p`
  text-align: center;
  color: rgba(255,255,255,0.25);
  font-size: 0.8rem;
  font-family: 'Space Mono', monospace;
  padding: 24px 0;
`,Zo=o.div`
  padding: 24px;
  background: rgba(10,26,46,0.6);
  border: 1px solid rgba(34,211,238,0.12);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,T=o.div`display: flex; flex-direction: column; gap: 5px;`,U=o.label`
  font-size: 0.75rem;
  font-weight: 700;
  color: #22d3ee;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,J=o.input`
  padding: 9px 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(34,211,238,0.18);
  border-radius: 6px;
  color: white;
  font-size: 0.875rem;
  &:focus { outline: none; border-color: #22d3ee; background: rgba(34,211,238,0.06); }
  &[type="color"] { height: 38px; padding: 3px 8px; cursor: pointer; }
`,Qo=o.div`display: flex; gap: 10px; margin-top: 4px;`,en=o.button`
  flex: 1;
  padding: 10px;
  background: linear-gradient(135deg, #22d3ee, #7b2fff);
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(34,211,238,0.25); }
`,rn=o.button`
  padding: 10px 20px;
  background: transparent;
  border: 1px solid rgba(34,211,238,0.25);
  border-radius: 6px;
  color: #22d3ee;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { background: rgba(34,211,238,0.08); border-color: #22d3ee; }
`,tn=o.p`
  font-size: 0.72rem;
  color: rgba(255,255,255,0.3);
  margin-top: 3px;
  font-family: 'Space Mono', monospace;
`,on=({onDataUpdate:r})=>{const[i,f]=u.useState([]),[l,y]=u.useState(null),[n,h]=u.useState({name:"",issuer:"",year:"",link:"",icon:"🏆",color:"#22d3ee",order:0});u.useEffect(()=>{m()},[]);const m=async()=>{try{f(await rr()||[])}catch(t){console.error(t)}},v=t=>{y(t),h({name:t.name||"",issuer:t.issuer||"",year:t.year||"",link:t.link||"",icon:t.icon||"🏆",color:t.color||"#22d3ee",order:t.order??0})},g=(t,p)=>h(a=>({...a,[t]:p})),j=async t=>{t.preventDefault();try{l?await Er(l.id,n):await Nr(n),m(),b(),r?.()}catch(p){console.error(p)}},c=async t=>{if(window.confirm("Delete this certification?"))try{await Lr(t),m(),b(),r?.()}catch(p){console.error(p)}},b=()=>{y(null),h({name:"",issuer:"",year:"",link:"",icon:"🏆",color:"#22d3ee",order:0})};return e.jsx(Yo,{children:e.jsxs(Wo,{children:[e.jsxs(Ue,{children:[e.jsxs(Go,{children:[e.jsxs(Je,{children:["Certifications (",i.length,")"]}),e.jsx(Xo,{onClick:b,children:"+ New"})]}),e.jsx(Oo,{children:i.length===0?e.jsx(Ko,{children:"// no certifications yet"}):i.map(t=>e.jsxs(Vo,{$selected:l?.id===t.id,onClick:()=>v(t),children:[e.jsx(Ho,{color:t.color||"#22d3ee",children:t.icon||"🏆"}),e.jsxs(qo,{children:[e.jsx("div",{className:"name",children:t.name}),e.jsxs("div",{className:"meta",children:[t.issuer,t.year?` · ${t.year}`:""]})]}),e.jsx(_o,{onClick:p=>{p.stopPropagation(),c(t.id)},children:"Delete"})]},t.id))})]}),e.jsxs(Ue,{children:[e.jsx(Je,{children:l?"Edit Certification":"New Certification"}),e.jsxs(Zo,{as:"form",onSubmit:j,children:[e.jsxs(T,{children:[e.jsx(U,{children:"Certification Name *"}),e.jsx(J,{required:!0,value:n.name,onChange:t=>g("name",t.target.value),placeholder:"e.g., AWS Solutions Architect"})]}),e.jsxs(T,{children:[e.jsx(U,{children:"Issuing Organization *"}),e.jsx(J,{required:!0,value:n.issuer,onChange:t=>g("issuer",t.target.value),placeholder:"e.g., Amazon Web Services"})]}),e.jsxs(T,{children:[e.jsx(U,{children:"Year Obtained"}),e.jsx(J,{value:n.year,onChange:t=>g("year",t.target.value),placeholder:"e.g., 2024"})]}),e.jsxs(T,{children:[e.jsx(U,{children:"Certificate URL"}),e.jsx(J,{type:"url",value:n.link,onChange:t=>g("link",t.target.value),placeholder:"https://credentials.example.com/..."}),e.jsx(tn,{children:"// Leave blank if no public link"})]}),e.jsxs(T,{children:[e.jsx(U,{children:"Icon / Emoji"}),e.jsx(J,{value:n.icon,onChange:t=>g("icon",t.target.value),placeholder:"🏆",maxLength:2})]}),e.jsxs(T,{children:[e.jsx(U,{children:"Accent Color"}),e.jsx(J,{type:"color",value:n.color,onChange:t=>g("color",t.target.value)})]}),e.jsxs(T,{children:[e.jsx(U,{children:"Display Order"}),e.jsx(J,{type:"number",value:n.order,onChange:t=>g("order",parseInt(t.target.value)||0)})]}),e.jsxs(Qo,{children:[e.jsxs(en,{type:"submit",children:[l?"Update":"Create"," Certification"]}),l&&e.jsx(rn,{type:"button",onClick:b,children:"Clear"})]})]})]})]})})},nn=M`
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
`,an=o.div`
  animation: ${nn} 0.4s ease both;
`,sn=o(P)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ln=o.div`
  width: 100%;
  height: 260px;
  border-radius: 12px;
  background: rgba(255,255,255,0.03);
  border: 1px dashed rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,cn=o.div`
  font-size: 4rem;
  opacity: 0.15;
`,dn=o(P)`
  padding: 16px;
  background: rgba(0,212,255,0.04);
  border-color: rgba(0,212,255,0.12);
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
`,pn=({onDataUpdate:r})=>{const[i,f]=u.useState(!1),[l,y]=u.useState(!1),[n,h]=u.useState(""),[m,v]=u.useState(""),[g,j]=u.useState({bio:"",role:"",location:"",profileImage:""});u.useEffect(()=>{c()},[]);const c=async()=>{try{const a=await fe();a&&(j({bio:a.bio||"",role:a.role||"",location:a.location||"",profileImage:a.profileImage||""}),a.profileImage&&(h(a.profileImage),v(a.profileImage)))}catch(a){console.error(a)}},b=(a,s)=>j(C=>({...C,[a]:s})),t=a=>{const s=a.target.value.trim();h(s),v(s||"")},p=async a=>{a.preventDefault(),f(!0);try{let s={...g};n&&(s.profileImage=await Fr(n)),await or(s),y(!0),setTimeout(()=>y(!1),3e3),c(),r?.()}catch(s){console.error(s),alert(s.message)}finally{f(!1)}};return e.jsx(an,{children:e.jsxs(K,{children:[e.jsxs(E,{children:[e.jsx(L,{children:"Profile Image"}),e.jsxs(sn,{children:[e.jsx(ln,{children:m?e.jsx("img",{src:m,alt:"Profile"}):e.jsx(cn,{children:"👤"})}),e.jsxs(dn,{children:["📸 Upload a professional profile photo for the Hero section.",e.jsx("br",{}),"Recommended: 400×400px or larger · JPG, PNG, WebP"]})]})]}),e.jsxs(E,{children:[e.jsx(L,{children:"About & Profile"}),e.jsxs(P,{children:[l&&e.jsx(we,{children:"✓ About section updated successfully!"}),e.jsx("form",{onSubmit:p,children:e.jsxs(Z,{children:[e.jsxs(k,{children:[e.jsx($,{children:"Profile Image URL"}),e.jsx(S,{type:"text",value:n,onChange:t,placeholder:"https://example.com/image.jpg",disabled:i}),e.jsx(ue,{children:"Paste a direct image URL to update your profile photo"})]}),e.jsxs(k,{children:[e.jsx($,{children:"Your Role / Title"}),e.jsx(S,{value:g.role,onChange:a=>b("role",a.target.value),placeholder:"e.g., Full-Stack Developer",disabled:i})]}),e.jsxs(k,{children:[e.jsx($,{children:"Location"}),e.jsx(S,{value:g.location,onChange:a=>b("location",a.target.value),placeholder:"e.g., San Francisco, CA",disabled:i})]}),e.jsxs(k,{children:[e.jsx($,{children:"Bio / About You"}),e.jsx(je,{minH:"130px",value:g.bio,onChange:a=>b("bio",a.target.value),placeholder:"Tell visitors about yourself, your experience, and what you're passionate about…",disabled:i})]}),e.jsx(I,{variant:"primary",type:"submit",disabled:i,style:{width:"100%"},children:i?"Saving…":"Save About Section"})]})})]})]})]})})},xn=M`
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
`,gn=o.div`
  animation: ${xn} 0.4s ease both;
`,re=700,hn=o.div`
  border: 1.5px dashed ${({$drag:r})=>r?"rgba(0,212,255,0.6)":"rgba(255,255,255,0.12)"};
  border-radius: 12px;
  padding: 36px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({$drag:r})=>r?"rgba(0,212,255,0.06)":"rgba(255,255,255,0.02)"};

  &:hover {
    border-color: rgba(0,212,255,0.4);
    background: rgba(0,212,255,0.04);
  }
`,fn=o.div`
  font-size: 2.2rem;
  margin-bottom: 10px;
  opacity: 0.5;
`,un=o.div`
  color: rgba(255,255,255,0.6);
  font-size: 0.88rem;
  font-weight: 600;
`,mn=o.div`
  color: rgba(255,255,255,0.28);
  font-size: 0.74rem;
  margin-top: 6px;
  font-family: 'JetBrains Mono', monospace;
`,bn=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
`,jn=o.div`
  width: 40px; height: 40px; border-radius: 9px; flex-shrink: 0;
  background: rgba(244,63,94,0.1);
  border: 1px solid rgba(244,63,94,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
`,yn=o.div`
  flex: 1; min-width: 0;
  .name { color: white; font-size: 0.86rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .meta { color: rgba(255,255,255,0.32); font-size: 0.72rem; font-family: 'JetBrains Mono', monospace; margin-top: 2px; }
`,vn=o(P)`
  padding: 16px;
  background: rgba(0,212,255,0.04);
  border-color: rgba(0,212,255,0.12);
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.7;
`,Ye=r=>!r&&r!==0?"":r<1024?`${r} B`:`${(r/1024).toFixed(1)} KB`,wn=r=>{if(!r)return"";try{return new Date(r).toLocaleString(void 0,{dateStyle:"medium",timeStyle:"short"})}catch{return r}},kn=()=>{const[r,i]=u.useState(null),[f,l]=u.useState(!1),[y,n]=u.useState(!1),[h,m]=u.useState(""),[v,g]=u.useState(""),[j,c]=u.useState(!1),b=u.useRef(null);u.useEffect(()=>{t()},[]);const t=async()=>{const w=await Rr();i(w)},p=w=>{m(w),setTimeout(()=>m(""),3e3)},a=async w=>{if(w){if(g(""),w.type!=="application/pdf"){g("Only PDF files are allowed.");return}if(w.size>re*1024){g(`File is too large (${Ye(w.size)}). Max size is ${re}KB.`);return}l(!0);try{await Ur(w),p("✓ Resume uploaded successfully!"),await t()}catch(d){console.error(d),g(d.message||"Failed to upload resume")}finally{l(!1),b.current&&(b.current.value="")}}},s=w=>a(w.target.files?.[0]),C=w=>{w.preventDefault(),c(!1),a(w.dataTransfer.files?.[0])},D=async()=>{if(window.confirm("Remove the current resume? Visitors will no longer be able to download it.")){n(!0);try{await Tr(),i(null),p("✓ Resume removed")}catch(w){console.error(w),g(w.message||"Failed to delete resume")}finally{n(!1)}}};return e.jsx(gn,{children:e.jsxs(K,{children:[e.jsxs(E,{children:[e.jsx(L,{children:"Upload Resume"}),e.jsxs(P,{children:[h&&e.jsx(we,{children:h}),e.jsxs(k,{children:[e.jsx("input",{ref:b,type:"file",accept:"application/pdf",onChange:s,style:{display:"none"},disabled:f}),e.jsxs(hn,{$drag:j,onClick:()=>b.current?.click(),onDragOver:w=>{w.preventDefault(),c(!0)},onDragLeave:()=>c(!1),onDrop:C,children:[e.jsx(fn,{children:"📄"}),e.jsx(un,{children:f?"Uploading…":"Click or drag a PDF here"}),e.jsxs(mn,{children:["PDF only · max ",re,"KB"]})]}),v&&e.jsx(ue,{style:{color:"#f43f5e"},children:v})]})]}),e.jsxs(vn,{style:{marginTop:16},children:["📎 This replaces the current resume — visitors will always get the latest one you upload here.",e.jsx("br",{}),"Kept small on purpose: files are stored directly in the database, so PDFs must stay under ",re,"KB."]})]}),e.jsxs(E,{children:[e.jsx(L,{children:"Current Resume"}),e.jsx(P,{children:r?e.jsxs(k,{children:[e.jsxs(bn,{children:[e.jsx(jn,{children:"📕"}),e.jsxs(yn,{children:[e.jsx("div",{className:"name",children:r.fileName}),e.jsxs("div",{className:"meta",children:[Ye(r.size)," · uploaded ",wn(r.uploadedAt)]})]}),e.jsx(X,{color:"green",children:"live"})]}),e.jsxs(Q,{style:{marginTop:14},children:[e.jsx(I,{as:"a",href:Ar(),target:"_blank",rel:"noopener noreferrer",variant:"cyan-outline",sm:!0,children:"⬇ Download"}),e.jsx(I,{variant:"danger",sm:!0,onClick:D,disabled:y,children:y?"Removing…":"🗑 Remove"})]})]}):e.jsx(ue,{children:"No resume uploaded yet. Upload a PDF to let visitors download it from your site."})})]})]})})},$n=M`
  from { opacity:0; transform:translateY(12px); }
  to   { opacity:1; transform:translateY(0); }
`,Cn=o.div`
  max-width: 780px;
  animation: ${$n} 0.4s ease both;
`,Sn=o.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 680px) { grid-template-columns: 1fr; }
`,zn=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
  margin-top: 16px;
`,Mn=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  background: rgba(0,212,255,0.05);
  border: 1px solid rgba(0,212,255,0.15);
  border-radius: 8px;
`,In=o.span`
  font-size: 1.1rem;
  flex-shrink: 0;
`,Dn=o.div`
  flex: 1;
  min-width: 0;
  .lbl { font-family:'JetBrains Mono',monospace; font-size:0.6rem; color:rgba(255,255,255,0.3); text-transform:uppercase; letter-spacing:0.08em; }
  .val { font-size:0.82rem; color:white; margin-top:2px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
`,We=[{key:"email",label:"Email Address",icon:"📧",type:"email",placeholder:"your@email.com",required:!0},{key:"phone",label:"Phone Number",icon:"📱",type:"tel",placeholder:"+91 0000000000"},{key:"location",label:"Location",icon:"📍",type:"text",placeholder:"City, Country"},{key:"linkedin",label:"LinkedIn",icon:"💼",type:"url",placeholder:"https://linkedin.com/in/..."},{key:"github",label:"GitHub",icon:"🐙",type:"url",placeholder:"https://github.com/..."},{key:"twitter",label:"Twitter / X",icon:"𝕏",type:"url",placeholder:"https://twitter.com/..."},{key:"instagram",label:"Instagram",icon:"📸",type:"url",placeholder:"https://instagram.com/..."},{key:"website",label:"Personal Website",icon:"🌐",type:"url",placeholder:"https://yoursite.com"}],Bn=({onDataUpdate:r})=>{const[i,f]=u.useState(!1),[l,y]=u.useState(!1),[n,h]=u.useState({email:"",phone:"",location:"",linkedin:"",github:"",twitter:"",instagram:"",website:""});u.useEffect(()=>{m()},[]);const m=async()=>{try{const c=await fe();c?.contact&&h(c.contact)}catch(c){console.error(c)}},v=(c,b)=>h(t=>({...t,[c]:b})),g=async c=>{c.preventDefault(),f(!0);try{const b=await fe()||{};await or({...b,contact:n}),y(!0),setTimeout(()=>y(!1),3e3),r?.()}catch(b){console.error(b),alert(b.message)}finally{f(!1)}},j=We.filter(c=>n[c.key]);return e.jsx(Cn,{children:e.jsxs(E,{gap:"16px",children:[e.jsxs(P,{children:[e.jsx(ne,{children:e.jsx(L,{children:"Contact Information"})}),l&&e.jsx(we,{children:"✓ Contact information updated successfully!"}),e.jsx("form",{onSubmit:g,children:e.jsxs(Z,{children:[e.jsx(Sn,{children:We.map(c=>e.jsxs(k,{children:[e.jsxs($,{children:[c.icon," ",c.label,c.required?" *":""]}),e.jsx(S,{type:c.type,value:n[c.key]||"",onChange:b=>v(c.key,b.target.value),placeholder:c.placeholder,disabled:i,required:c.required})]},c.key))}),e.jsxs(Q,{children:[e.jsx(I,{variant:"primary",type:"submit",disabled:i,children:i?"Saving…":"✓ Save Contact Information"}),e.jsx(I,{variant:"ghost",type:"button",onClick:m,disabled:i,children:"Reset"})]})]})})]}),j.length>0&&e.jsxs(P,{children:[e.jsx(L,{sm:!0,children:"Preview"}),e.jsx(zn,{children:j.map(c=>e.jsxs(Mn,{children:[e.jsx(In,{children:c.icon}),e.jsxs(Dn,{children:[e.jsx("div",{className:"lbl",children:c.label}),e.jsx("div",{className:"val",children:n[c.key]})]})]},c.key))})]})]})})},cr=M`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Pn=M`
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
`,Ge=o.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
  min-height: 600px;
  animation: ${cr} 0.4s ease both;

  @media (max-width: 1000px) { grid-template-columns: 1fr; }
`,Oe=o(P)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ln=o.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`,xe=o.div`
  padding: 10px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;
  text-align: center;

  .val {
    font-size: 1.2rem;
    font-weight: 800;
    color: ${({$c:r})=>r||"white"};
    line-height: 1;
  }
  .lbl {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.58rem;
    color: rgba(255,255,255,0.22);
    letter-spacing: 0.08em;
    margin-top: 3px;
    text-transform: uppercase;
  }
`,En=o.div`
  height: 1px;
  background: rgba(255,255,255,0.05);
`,Nn=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: auto;
  flex: 1;
  max-height: 520px;
`,Fn=o.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${({$sel:r})=>r?"rgba(0,212,255,0.3)":"transparent"};
  background: ${({$sel:r})=>r?"rgba(0,212,255,0.08)":"rgba(255,255,255,0.02)"};
  cursor: pointer;
  text-align: left;
  transition: all 0.18s;
  position: relative;
  animation: ${Pn} 0.3s ease ${({$d:r})=>r} both;
  width: 100%;

  &:hover {
    background: ${({$sel:r})=>r?"rgba(0,212,255,0.1)":"rgba(255,255,255,0.04)"};
    border-color: ${({$sel:r})=>r?"rgba(0,212,255,0.35)":"rgba(255,255,255,0.08)"};
  }
`,Rn=o.div`
  position: absolute;
  left: 0; top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  border-radius: 0 2px 2px 0;
  background: #00d4ff;
  opacity: ${({$show:r})=>r?1:0};
`,An=o.div`
  font-size: 0.82rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 6px;
`,Tn=o.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  color: rgba(255,255,255,0.3);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Un=o.div`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ve=o(P)`
  display: flex;
  flex-direction: column;
`,Jn=o.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  animation: ${cr} 0.3s ease both;
`,Yn=o.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
`,Wn=o.h2`
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  line-height: 1.3;
`,Gn=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`,te=o.div`
  padding: 10px 14px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 8px;

  .label { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; color: rgba(255,255,255,0.25); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 3px; }
  .value { font-size: 0.85rem; color: white; font-weight: 600; word-break: break-all; }
`,On=o.div`
  flex: 1;
  padding: 20px 0;
`,Vn=o.p`
  color: rgba(255,255,255,0.75);
  font-size: 0.92rem;
  line-height: 1.9;
  white-space: pre-wrap;
  word-break: break-word;
`,Hn=o.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.06);
  flex-wrap: wrap;
`,be=r=>r?r?.toDate?r.toDate().getTime():typeof r=="object"&&r.seconds?r.seconds*1e3:r instanceof Date?r.getTime():typeof r=="number"?r>1e10?r:r*1e3:typeof r=="string"&&new Date(r).getTime()||0:0,qn=new Intl.DateTimeFormat("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),_n=r=>{try{const i=be(r);if(!i)return"";const f=new Date(i);return isNaN(f.getTime())?"":qn.format(f)}catch{return""}},Xn=({onDataUpdate:r,onUnreadChange:i})=>{const[f,l]=u.useState([]),[y,n]=u.useState(!0),[h,m]=u.useState(null),[v,g]=u.useState(!1);u.useEffect(()=>{j()},[]);const j=async()=>{try{n(!0);const s=(await Qe()||[]).sort((D,w)=>be(w.timestamp)-be(D.timestamp));l(s),s.length>0&&!h&&m(s[0].id);const C=s.filter(D=>!D.read).length;i?.(C)}catch(a){console.error(a)}finally{n(!1)}},c=async()=>{if(h){g(!0);try{await Jr(h),l(a=>a.map(s=>s.id===h?{...s,read:!0}:s)),i?.(f.filter(a=>!a.read&&a.id!==h).length)}catch(a){console.error(a),alert(a.message)}finally{g(!1)}}},b=async()=>{if(!(!h||!window.confirm("Delete this message?"))){g(!0);try{await Yr(h);const a=f.filter(s=>s.id!==h);l(a),m(a[0]?.id||null),i?.(a.filter(s=>!s.read).length),r?.()}catch(a){console.error(a),alert(a.message)}finally{g(!1)}}},t=f.find(a=>a.id===h),p=f.filter(a=>!a.read).length;return y?e.jsxs(Ge,{children:[e.jsx(Oe,{children:[...Array(5)].map((a,s)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:"12px",background:"rgba(255,255,255,0.02)",borderRadius:10},children:[e.jsx("div",{style:{height:11,background:"rgba(255,255,255,0.06)",borderRadius:4,width:"50%"}}),e.jsx("div",{style:{height:9,background:"rgba(255,255,255,0.04)",borderRadius:4,width:"80%"}})]},s))}),e.jsx(Ve,{children:e.jsx(Y,{children:"Loading messages..."})})]}):e.jsxs(Ge,{children:[e.jsxs(Oe,{children:[e.jsx(L,{sm:!0,children:"Inbox"}),e.jsxs(Ln,{children:[e.jsxs(xe,{children:[e.jsx("div",{className:"val",children:f.length}),e.jsx("div",{className:"lbl",children:"Total"})]}),e.jsxs(xe,{$c:"#00d4ff",children:[e.jsx("div",{className:"val",style:{color:"#00d4ff"},children:p}),e.jsx("div",{className:"lbl",children:"Unread"})]}),e.jsxs(xe,{$c:"#10d9a8",children:[e.jsx("div",{className:"val",style:{color:"#10d9a8"},children:f.length-p}),e.jsx("div",{className:"lbl",children:"Read"})]})]}),e.jsx(En,{}),e.jsxs(Nn,{children:[f.map((a,s)=>e.jsxs(Fn,{$sel:h===a.id,$d:`${s*.03}s`,onClick:()=>m(a.id),children:[e.jsx(Rn,{$show:!a.read}),e.jsxs(An,{children:[a.name||"Unknown",!a.read&&e.jsx(X,{color:"cyan",children:"new"})]}),e.jsx(Tn,{children:a.email}),e.jsx(Un,{children:a.message})]},a.id)),f.length===0&&e.jsx(Y,{children:"// no messages yet"})]})]}),e.jsx(Ve,{children:t?e.jsxs(Jn,{children:[e.jsxs(Yn,{children:[e.jsx(Wn,{children:t.subject||"(No Subject)"}),e.jsxs(Gn,{children:[e.jsxs(te,{children:[e.jsx("div",{className:"label",children:"From"}),e.jsx("div",{className:"value",children:t.name})]}),e.jsxs(te,{children:[e.jsx("div",{className:"label",children:"Email"}),e.jsx("div",{className:"value",children:t.email})]}),e.jsxs(te,{children:[e.jsx("div",{className:"label",children:"Received"}),e.jsx("div",{className:"value",style:{fontSize:"0.78rem"},children:_n(t.timestamp)})]}),e.jsxs(te,{children:[e.jsx("div",{className:"label",children:"Status"}),e.jsx("div",{className:"value",children:e.jsx(X,{color:t.read?"gray":"cyan",children:t.read?"Read":"Unread"})})]})]})]}),e.jsx(On,{children:e.jsx(Vn,{children:t.message})}),e.jsxs(Hn,{children:[!t.read&&e.jsx(I,{variant:"success",onClick:c,disabled:v,children:"✓ Mark as Read"}),e.jsx(I,{variant:"danger",onClick:b,disabled:v,children:"Delete"})]})]},t.id):e.jsx(Y,{children:"Select a message to view it"})})]})},Kn=qe`${_e}`,Zn=M`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Qn=M`
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
`,ea=o.div`
  display: flex;
  min-height: 100vh;
  background: #03080f;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: -200px; left: -100px;
    width: 700px; height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
  &::after {
    content: '';
    position: fixed;
    bottom: -200px; right: -100px;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }
`,ra=o.aside`
  width: 230px;
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background: rgba(6,13,24,0.95);
  border-right: 1px solid rgba(255,255,255,0.05);
  padding: 28px 16px 24px;
  z-index: 10;
  backdrop-filter: blur(12px);

  @media (max-width: 900px) { display: none; }
`,ta=o.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px 28px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  margin-bottom: 20px;
`,He=o.div`
  width: 34px;
  height: 34px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`,oa=o.div`
  .name { font-size: 0.9rem; font-weight: 800; color: white; line-height: 1.1; letter-spacing: -0.02em; }
  .sub  { font-size: 0.65rem; color: rgba(255,255,255,0.3); font-family: 'JetBrains Mono', monospace; letter-spacing: 0.08em; }
`,na=o.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  overflow-y: auto;
  padding-right: 2px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
`,aa=o.div`
  font-size: 0.6rem; font-weight: 600;
  color: rgba(255,255,255,0.22);
  letter-spacing: 0.14em; text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  padding: 0 10px; margin: 12px 0 6px;
`,ia=o.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 9px;
  border: 1px solid ${({$active:r})=>r?"rgba(0,212,255,0.2)":"transparent"};
  background: ${({$active:r})=>r?"rgba(0,212,255,0.1)":"transparent"};
  color: ${({$active:r})=>r?"#00d4ff":"rgba(255,255,255,0.45)"};
  font-size: 0.84rem;
  font-weight: ${({$active:r})=>r?"700":"500"};
  cursor: pointer;
  transition: all 0.18s ease;
  text-align: left;
  width: 100%;
  position: relative;

  &:hover {
    background: ${({$active:r})=>r?"rgba(0,212,255,0.12)":"rgba(255,255,255,0.04)"};
    color: ${({$active:r})=>r?"#00d4ff":"rgba(255,255,255,0.7)"};
  }

  .icon  { font-size: 0.95rem; width: 20px; text-align: center; flex-shrink: 0; }

  .badge {
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 10px;
    background: rgba(244,63,94,0.15);
    border: 1px solid rgba(244,63,94,0.25);
    color: #f43f5e;
    font-size: 0.62rem; font-weight: 700;
    font-family: 'JetBrains Mono', monospace;
  }

  ${({$active:r})=>r&&`
    &::before {
      content: '';
      position: absolute;
      left: -16px; top: 50%;
      transform: translateY(-50%);
      width: 3px; height: 18px;
      border-radius: 0 2px 2px 0;
      background: linear-gradient(180deg, #00d4ff, #8b5cf6);
    }
  `}
`,sa=o.div`
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 16px;
  flex-shrink: 0;
`,la=o.div`
  display: flex; align-items: center; gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
`;o.div`
  width: 30px; height: 30px; border-radius: 8px;
  background: linear-gradient(135deg, #00d4ff, #8b5cf6);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800; color: white; flex-shrink: 0;
`;const ca=o.div`
  flex: 1; min-width: 0;
  .name { font-size: 0.8rem; font-weight: 700; color: white; }
  .role { font-size: 0.65rem; color: rgba(255,255,255,0.3); font-family: 'JetBrains Mono', monospace; }
`,da=o.button`
  width: 28px; height: 28px; border-radius: 7px;
  border: 1px solid rgba(244,63,94,0.2);
  background: rgba(244,63,94,0.08);
  color: #f43f5e;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 0.9rem; transition: all 0.2s; flex-shrink: 0;
  &:hover { background: rgba(244,63,94,0.18); border-color: rgba(244,63,94,0.4); }
`,pa=o.main`
  flex: 1; min-width: 0;
  display: flex; flex-direction: column;
  position: relative; z-index: 1;
`,xa=o.header`
  height: 64px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 32px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  background: rgba(3,8,15,0.7);
  backdrop-filter: blur(12px);
  position: sticky; top: 0; z-index: 9; flex-shrink: 0;
`,ga=o.div`
  display: flex; align-items: center; gap: 8px;
  font-size: 0.82rem; color: rgba(255,255,255,0.35);
  .sep     { opacity: 0.3; }
  .current { color: white; font-weight: 600; }
`,ha=o.div`display: flex; align-items: center; gap: 10px;`,fa=o.div`
  display: flex; align-items: center; gap: 6px;
  font-size: 0.72rem; color: rgba(255,255,255,0.3);
  font-family: 'JetBrains Mono', monospace;

  &::before {
    content: '';
    width: 6px; height: 6px; border-radius: 50%;
    background: #10d9a8; box-shadow: 0 0 6px #10d9a8;
    animation: ${Qn} 2s infinite;
  }
`,ua=o.button`
  padding: 7px 14px;
  background: rgba(244,63,94,0.1); border: 1px solid rgba(244,63,94,0.25);
  border-radius: 7px; color: #f43f5e; font-size: 0.78rem; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
  &:hover { background: rgba(244,63,94,0.2); }
`,ma=o.div`
  padding: 32px;
  animation: ${Zn} 0.35s ease both;
  @media (max-width: 900px) { padding: 20px; }
`,ba=o.div`
  display: none;
  overflow-x: auto;
  padding: 0 20px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  background: rgba(6,13,24,0.95);
  &::-webkit-scrollbar { display: none; }
  @media (max-width: 900px) { display: flex; gap: 4px; }
`,ja=o.button`
  padding: 12px 14px;
  border: none;
  border-bottom: 2px solid ${({$active:r})=>r?"#00d4ff":"transparent"};
  background: transparent;
  color: ${({$active:r})=>r?"#00d4ff":"rgba(255,255,255,0.35)"};
  font-size: 0.78rem; font-weight: 600;
  cursor: pointer; white-space: nowrap; transition: color 0.2s;
`,oe=[{id:"dashboard",label:"Dashboard",icon:"◈",group:"Overview"},{id:"projects",label:"Projects",icon:"◇",group:"Content"},{id:"skills",label:"Skills",icon:"◉",group:"Content"},{id:"experiences",label:"Experiences",icon:"◎",group:"Content"},{id:"education",label:"Education",icon:"◍",group:"Content"},{id:"certifications",label:"Certifications",icon:"◆",group:"Content"},{id:"about",label:"About",icon:"◐",group:"Profile"},{id:"resume",label:"Resume",icon:"⤓",group:"Profile"},{id:"contact",label:"Contact",icon:"◑",group:"Profile"},{id:"messages",label:"Messages",icon:"◻",group:"Inbox",badge:!0}],Ca=({onLogout:r})=>{const[i,f]=u.useState("dashboard"),[l,y]=u.useState(0),[n,h]=u.useState(0),m=()=>y(j=>j+1),v=oe.find(j=>j.id===i),g=[...new Set(oe.map(j=>j.group))];return e.jsxs(e.Fragment,{children:[e.jsx(Kn,{}),e.jsxs(ea,{children:[e.jsxs(ra,{children:[e.jsxs(ta,{children:[e.jsx(He,{children:e.jsx("img",{src:"./icon.png",alt:"",srcset:""})}),e.jsxs(oa,{children:[e.jsx("div",{className:"name",children:"Portfolio"}),e.jsx("div",{className:"sub",children:"Admin Panel"})]})]}),e.jsx(na,{children:g.map(j=>e.jsxs(jr.Fragment,{children:[e.jsx(aa,{children:j}),oe.filter(c=>c.group===j).map(c=>e.jsxs(ia,{$active:i===c.id?1:0,onClick:()=>f(c.id),children:[e.jsx("span",{className:"icon",children:c.icon}),c.label,c.badge&&n>0&&e.jsx("span",{className:"badge",children:n})]},c.id))]},j))}),e.jsx(sa,{children:e.jsxs(la,{children:[e.jsx(He,{children:e.jsx("img",{src:"./icon.png",alt:"",srcset:""})}),e.jsxs(ca,{children:[e.jsx("div",{className:"name",children:"Admin"}),e.jsx("div",{className:"role",children:"super user"})]}),e.jsx(da,{onClick:r,title:"Logout",children:"↪"})]})})]}),e.jsxs(pa,{children:[e.jsxs(xa,{children:[e.jsxs(ga,{children:[e.jsx("span",{children:"Portfolio"}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"current",children:v?.label})]}),e.jsxs(ha,{children:[e.jsx(fa,{children:"live"}),e.jsx(ua,{onClick:r,children:"Logout"})]})]}),e.jsx(ba,{children:oe.map(j=>e.jsxs(ja,{$active:i===j.id?1:0,onClick:()=>f(j.id),children:[j.icon," ",j.label]},j.id))}),e.jsxs(ma,{children:[i==="dashboard"&&e.jsx(Kt,{}),i==="projects"&&e.jsx(no,{onDataUpdate:m,refreshTrigger:l}),i==="skills"&&e.jsx(jo,{onDataUpdate:m,refreshTrigger:l}),i==="experiences"&&e.jsx($o,{onDataUpdate:m,refreshTrigger:l}),i==="education"&&e.jsx(Uo,{onDataUpdate:m,refreshTrigger:l}),i==="certifications"&&e.jsx(on,{onDataUpdate:m,refreshTrigger:l}),i==="about"&&e.jsx(pn,{onDataUpdate:m,refreshTrigger:l}),i==="resume"&&e.jsx(kn,{onDataUpdate:m,refreshTrigger:l}),i==="contact"&&e.jsx(Bn,{onDataUpdate:m}),i==="messages"&&e.jsx(Xn,{onDataUpdate:m,onUnreadChange:h})]},i)]})]})]})};export{Ca as default};

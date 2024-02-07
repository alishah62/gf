"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[97752],{74231:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=e(85893),i=e(11151);const o={title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",sidebar_position:5},s=void 0,c={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport",title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",description:"\u7531\u4e8e gclient.Client \u5185\u90e8\u5c01\u88c5\u6269\u5c55\u4e8e\u6807\u51c6\u5e93\u7684 http.Client \u5bf9\u8c61\uff0c\u56e0\u6b64\u6807\u51c6\u5e93 http.Client \u6709\u7684\u7279\u6027\uff0c gclient.Client \u4e5f\u662f\u652f\u6301\u7684\u3002\u6211\u4eec\u8fd9\u91cc\u63d0\u5230\u7684\u4f8b\u5b50\u662f Transport \u4f7f\u7528\u3002\u6765\u770b\u51e0\u4e2a\u793a\u4f8b\uff1a",source:"@site/docs/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/5-HTTPClient-\u81ea\u5b9a\u4e49Transport.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport",permalink:"/gf/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Transport",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"HTTPClient-\u81ea\u5b9a\u4e49Transport",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u81ea\u5b9a\u4e49ContentType",permalink:"/gf/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49ContentType"},next:{title:"HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370",permalink:"/gf/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u8bf7\u6c42\u4fe1\u606f\u6253\u5370"}},l={},a=[{value:"\u4f7f\u7528 <code>Unix Socket</code>",id:"\u4f7f\u7528-unix-socket",level:2},{value:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570",id:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570",level:2}];function d(t){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,r.jsx)(n.code,{children:"gclient.Client"})," \u5185\u90e8\u5c01\u88c5\u6269\u5c55\u4e8e\u6807\u51c6\u5e93\u7684 ",(0,r.jsx)(n.code,{children:"http.Client"})," \u5bf9\u8c61\uff0c\u56e0\u6b64\u6807\u51c6\u5e93 ",(0,r.jsx)(n.code,{children:"http.Client"})," \u6709\u7684\u7279\u6027\uff0c ",(0,r.jsx)(n.code,{children:"gclient.Client"})," \u4e5f\u662f\u652f\u6301\u7684\u3002\u6211\u4eec\u8fd9\u91cc\u63d0\u5230\u7684\u4f8b\u5b50\u662f ",(0,r.jsx)(n.code,{children:"Transport"})," \u4f7f\u7528\u3002\u6765\u770b\u51e0\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u4f7f\u7528-unix-socket",children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Unix Socket"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Unix Socket"})," \u901a\u4fe1\uff0c\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Transport"})," \u6765\u5b9e\u73b0\u3002\u4ee5\u4e0b\u4ee3\u7801\u4e3a\u771f\u5b9e\u9879\u76ee\u4ee3\u7801\u6458\u9009\uff0c\u65e0\u6cd5\u72ec\u7acb\u8fd0\u884c\uff0c\u4ec5\u505a\u53c2\u8003\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func (*Guardian) ConvertContainerPathToHostPath(\n\tctx context.Context, namespace, podName, containerName, containerPath string,\n) (string, error) {\n\tvar (\n\t\tclient = g.Client()\n\t\turl    = "http://localhost/api/v1/pod/path"\n\t\treq    = webservice.HostPathInfoReq{\n\t\t\tNamespace:     namespace,\n\t\t\tPodName:       podName,\n\t\t\tContainerName: containerName,\n\t\t\tContainerPath: containerPath,\n\t\t}\n\t\tres *webservice.HostPathInfoRes\n    )\n\tclient.Transport = &http.Transport{\n\t\tDialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {\n\t\t\treturn net.Dial("unix", serviceSocketPath)\n\t\t},\n\t}\n\terr := client.ContentJson().GetVar(ctx, url, req).Scan(&res)\n\tif err != nil {\n\t\treturn "", gerror.Wrapf(\n\t\t\terr,\n\t\t\t`request guardian failed for url: %s, req: %s`,\n\t\t\turl, gjson.MustEncodeString(req),\n\t\t)\n\t}\n\tif res == nil {\n\t\treturn "", gerror.Newf(\n\t\t\t`nil response from guardian request url: %s, req: %s`,\n\t\t\turl, gjson.MustEncodeString(req),\n\t\t)\n\t}\n\treturn res.HostPath, nil\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570",children:"\u8bbe\u7f6e\u5ba2\u6237\u7aef\u8fde\u63a5\u6c60\u5927\u5c0f\u53c2\u6570"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleNew_MultiConn_Recommend() {\n\tvar (\n\t\tctx    = gctx.New()\n\t\tclient = g.Client()\n\t)\n\n\t// controls the maximum idle(keep-alive) connections to keep per-host\n\tclient.Transport.(*http.Transport).MaxIdleConnsPerHost = 5\n\n\tfor i := 0; i < 5; i++ {\n\t\tgo func() {\n\t\t\tif r, err := client.Get(ctx, "http://127.0.0.1:8999/var/json"); err != nil {\n\t\t\t\tpanic(err)\n\t\t\t} else {\n\t\t\t\tfmt.Println(r.ReadAllString())\n\t\t\t\tr.Close()\n\t\t\t}\n\t\t}()\n\t}\n\n\ttime.Sleep(time.Second * 1)\n\n\t// Output:\n\t//{"id":1,"name":"john"}\n\t//{"id":1,"name":"john"}\n\t//{"id":1,"name":"john"}\n\t//{"id":1,"name":"john"}\n\t//{"id":1,"name":"john"}\n}\n'})})]})}function p(t={}){const{wrapper:n}={...(0,i.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>s});var r=e(67294);const i={},o=r.createContext(i);function s(t){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),r.createElement(o.Provider,{value:n},t.children)}}}]);
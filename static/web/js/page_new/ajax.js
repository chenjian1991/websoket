function Ajax(n,e,t,a,o,i){var r=$.Deferred();return e=e||"post",a="application/json"==(t=t||"application/json")?JSON.stringify(a):a,$.ajax({type:e,cache:!1,async:!1,url:"/api"+n,data:a,contentType:t,dataType:"json"}).then(function(n){r.resolve(n),o(n)},function(n){r.reject(),i(n)}),r.promise()}function securityAjax(n,e,t,a,o,i,r){var c=$.Deferred();return t=t||"post",o="application/json"==(a=a||"application/json")?JSON.stringify(o):o,$.ajax({type:t,cache:!1,async:!1,url:"/api"+n,headers:{token:e},data:o,contentType:a,dataType:"json"}).then(function(n){c.resolve(n),i(n)},function(n){c.reject(),r(n)}),c.promise()}
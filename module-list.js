(function(){
    var modules={
        "panel-main-sdem":    			 {url:"$H/m/elig-questions-data.html",Table:"sdem-recruitment-record",form_module:"elig-questions-form"},
        "elig-questions-form":    			 {url:"$H/m/elig-questions-form.html",Table:"sdem-recruitment-record"},
        "panel-main-sdem-eligible":      {url:"$H/m/elig-questions-eligible-data.html",Table:"sdem-recruitment-record",form_module:"panel-main-sdem-eligible-form"},
        "panel-main-sdem-eligible-form":		    {url:"$H/m/elig-questions-eligible-form.html",Table:"sdem-recruitment-record"},
        "panel-main-sdem-non-eligible":  {url:"$H/m/elig-questions-non-eligible-data.html",Table:"sdem-recruitment-record"},
        "sdem-comments":            {url:"$H/m/comments-form.html",Table:"sdem-recruitment-record",task_name:"Comments"},
    }
    //for(m in modules){$vm.module_list[m]=modules[m];}


    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();

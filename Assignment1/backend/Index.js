var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require('path');
var qs=require('querystring');
var cur_path=path.resolve('../fs');


var file_name="";
var file_content="";
var now_path="";
var old_path="";
var f_path="";
var f_name="";
var new_name="";
var name="";
var result=0;
var cont="";

var app=http.createServer(function(request,response){
    var _url=request.url;
    var queryData=url.parse(_url,true).query;
    var pathname=url.parse(_url,true).pathname;
    if(pathname === '/')
    {
        //console.log("start");
        fs.readFile("../frontend/template.html",function(err,tmpl){
            fs.readdir(cur_path,function(err,data){ 
                lsinfo="<li id='back' onclick='movedir(this)';>"+"..";

                data.forEach(function(element){
                
                var file_path=path.join(cur_path, element); 

                if(fs.lstatSync(file_path).isDirectory()){ //directory
                    lsinfo+="<li id='dir'>"+`<button class='df' value=${element} onclick='movedir(this);'>` + element +"</button>";
                    lsinfo+=`<button class='bt0' value=${element} onclick="rmdir(this);">delete</button>`;
                    lsinfo+=`<button class='bt3' value=${element} onclick="rename(this); document.getElementById('layer3').style.display='block';">Rename</button>`; 
                    lsinfo+="<span class='p'>"+"- "+"</span>";
                    var stats=fs.statSync(file_path);
                    let createDate = new Date(stats.mtime);
                    let year=createDate.getFullYear().toString();
                    let month=(createDate.getMonth()+1).toString();
                    let date=createDate.getDate().toString();

              
                    lsinfo+="<span class='pp'>"+year+'-'+month+'-'+date+"</span>"+"</li>"; //work      
                
                }
                else{ //file
                    file_content=fs.readFileSync(file_path, 'utf8');
                    //console.log(file_content);
                    //console.log("--");
                    lsinfo+="<li id='file'>"+`<button class='ff' value=${file_content} onclick="readfile(this); ">` + element +"</button>";
                    lsinfo+=`<button class='bt1' value=${element} onclick="rmfile(this);">delete</button>`; 
                    lsinfo+=`<button class='bt2' value=${element} onclick="rename(this); document.getElementById('layer3').style.display='block';">Rename</button>`;
                    var stats=fs.statSync(file_path);
                    var size = stats.size;
                    let createDate = new Date(stats.mtime);
                    let year=createDate.getFullYear().toString();
                    let month=(createDate.getMonth()+1).toString();
                    let date=createDate.getDate().toString();
                    
                    lsinfo+="<span class='p'>"+size+"B"+"</span>"; //work
                    lsinfo+="<span class='pp'>"+year+'-'+month+'-'+date+"</span>"+"</li>"; //work                   
                    
                }   
                });
                let html=tmpl.toString().replace('%',lsinfo);
                
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(html);
            });
        });
    
    }
    else if(pathname === '/readfile'){
        var body='';
        request.on('data',function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            f_name=post.file_name;
            f_path=path.join(cur_path, f_name);
            console.log(f_name);

            fs.readFile(f_path, 'utf8', function(err,data){
                //console.log(file_path);
                file_content = data;     
                console.log(file_content);
                
                result=1;    

                //response.writeHead(302, {Location: `http://localhost:3000/`});
                //response.end('success');         
                         
            });
        });
    }
    else if(pathname === '/editfile'){
        var body='';
        request.on('data', function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            f_name=post.title;
            f_path=path.join(cur_path, f_name);
            var description=post.description;

            fs.writeFile(f_path, description,function(err,data){
                response.writeHead(302, {Location: `http://localhost:3000/`});
                response.end('success');
            });
        });
    }
    else if(pathname === '/mkdir'){
        var body='';
        request.on('data', function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            var title=post.title;
            var file_path=path.join(cur_path,title);
            fs.mkdir(file_path, 0666, function(err){
                response.writeHead(302, {Location: `http://localhost:3000/`});
            response.end('success');
            });
        });
    }
    else if(pathname === '/cd'){ 
        var body='';
        request.on('data', function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            var dir_name=post.dir_name;
            cur_path=path.join(cur_path,dir_name); 

            fs.readFile("../frontend/template.html",function(err,tmpl){
            fs.readdir(cur_path, function(err,data){
                lsinfo="<li onclick='movedir(this)';>"+".."; 
                data.forEach(function(element){
                   
                    var file_path=path.join(cur_path, element); 

                    if(fs.lstatSync(file_path).isDirectory()){
                        lsinfo+=`<li onclick='movedir(this);'>` + element +"<li>";
                        lsinfo+=`<button value=${element} onclick="rmdir(this);">delete</button>`;
                                          
                    }
                    else{
                        lsinfo+=`<li onclick='readfile(this);'>` + element +"</li>";
                        lsinfo+=`<button value=${element} onclick="rmfile(this);">delete</button>`; 
                        lsinfo+=`<button value=${element} onclick="rename(this);"'>Rename</button>`;
                    }   

                    
                });
                   
                let html=tmpl.toString().replace('%',lsinfo);
               
                response.writeHead(302, {'Content-Type': 'text/html'});
                response.end(html);

            });
           
        });
        response.writeHead(302, {Location: `http://localhost:3000/`}); 
        response.end('success');
    });
    }
    else if(pathname === '/rmfile'){
        var body='';
        request.on('data',function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            file_name=post.file_name;
            var file_path=path.join(cur_path, file_name);
            //console.log(post);
            fs.unlink(file_path,function(err){
                response.writeHead(302, {Location: `http://localhost:3000/`});
                response.end('success');
            });
        });
    }
    else if(pathname === '/rmdir'){ 
        var body='';
        request.on('data',function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            var dir_name=post.dir_name;
            var dir_path=path.join(cur_path, dir_name);
            fs.rmdir(dir_path,{recursive: true}, function(err){
                response.writeHead(302, {Location: `http://localhost:3000/`});
                response.end('success');
            });
        });
    }
    else if(pathname === '/renamee'){ 
        var body='';
        request.on('data',function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            name=post.name;
            old_path=path.join(cur_path, name);

            ///console.log(post.name);
        });
    }
    else if(pathname === '/rename'){ 
        //console.log("rename1");
        var body='';
        request.on('data',function(data){
            body=body+data;
        });
        request.on('end',function(){
            var post=qs.parse(body);
            new_name=post.title;
         
            //console.log(post.title);
            //console.log("--");

            var new_path=path.join(cur_path, new_name);

            fs.rename(old_path, new_path ,function(err){
                response.writeHead(302, {Location: `http://localhost:3000/`});
                response.end('success');
            });

        });
        //console.log("rename2");
    }

});
app.listen(3000);
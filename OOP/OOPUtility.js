let fs = require('fs');
//Export The function 
module.exports = {
        regularExp(name,fullName,mobileNumber,ans){
            let fileData = fs.readFileSync('regularExpMess.txt' ,'UTF-8');
            fileData = fileData.replace(/<<name>>/g,name); //g is use for global it checks left - right.
            fileData = fileData.replace(/<<full name>>/g,fullName);
            fileData = fileData.replace("xxxxxxxxxx",mobileNumber);
            fileData = fileData.replace("xx/xx/xxxx",ans);       
            fs.writeFileSync("regularExpMess.txt",fileData);
            console.log(fileData);
        }
}
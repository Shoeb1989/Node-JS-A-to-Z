var Name = 'max';
var age = 26;
var hobby = true;

function SumarizeUser (UserName, Userage , Userhobby) {
    return (
        'his name is: ' + 
        UserName + 'his age is :  ' + 
        Userage + ' his hobby is : ' + Userhobby
    );
}

console.log(SumarizeUser(Name , age , hobby));
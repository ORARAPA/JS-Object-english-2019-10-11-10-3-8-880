var fruit = {
apple: 20,
pear: 20,
peach: 10
};

//No. 1
var user ={};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;


//No.2
var total = 0;
for(i in fruit){
	total = total + fruit[i];
}

console.log(total)
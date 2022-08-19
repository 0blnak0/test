//切换图片
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'css/images/banner.jpg') {
      myImage.setAttribute('src', 'css/images/wallhaven-nmvyv8.jpg');
    } else {
      myImage.setAttribute('src', 'css/images/banner.jpg');
    }
}
//添加个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
setUserName();
function setUserName() 
{
  let myName = prompt('请输入你的名字。');
  if(!myName) 
  {
    setUserName();
  } 
  else 
  {
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎你,' + myName + '叼毛！';
  }
  if(!localStorage.getItem('name')) 
	{
	setUserName();
	} 
	else 
	{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = '欢迎你,' + myName + '叼毛！';
	}
}
myButton.onclick = function() 
{
   setUserName();
}
/**This script handles user data with cookies
 *@theme @comment_name @comment_email @isSubscriber
 */
/**This function handles the cookies*/

//Get cookie value

/**@setCookie accepts a cookie name and a value and expire day*/
const setCookie = ((cname, cvalue, exdays )=>{
    let d =  new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    let cookieValue = encodeURIComponent(cvalue);
    document.cookie = `${cname=cookieValue}; SameSite=None; Secure; ${expires}; path=/;`;
})
/**@deleteCookie  delete a cookie by accepting it cookie name*/
const deleteCookie =((cname)=>{
    if(document.cookie.split(';').some((item)=>
item.trim().startsWith(`${cname}=`))){
    document.cookie = `${cname}=$; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
})
/**@getCookie gets a cookie with the cookie name */
const getCookie = ((cname)=>{
    const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${cname}=`))
    .split('=')[1];

return decodeURIComponent(cookieValue);
})



/**@checkIfCookieExist check if cookie exist and returns true or false**/
const checkIfCookieExist = ((cname,cvalue)=>{

    if (document.cookie.split(';')
    .some((item) => item.includes(`${cname}=${encodeURIComponent(cvalue)}`))) {
    
        return true;
    }
    else{
        return false;
    }
})
//comment form Name field
let myName = document.querySelector('[aria-label="name"]').value;
let email = document.querySelector('[aria-label="email"]').value;
let comment = document.querySelector('[aria-label="comment"]').value;
//check box to save data
let saveFormData = document.querySelector('#save-form-data')
try{
document.getElementById('my-comment').addEventListener('submit',(e)=>{
    e.preventDefault();
    /**user name & email will be saved in the browser 
     * if user check the checkbox on the comment form */
    if(saveFormData.checked){
        setCookie('comment_name', myName,360);
        setCookie('comment_email',email,360);
      }
})

}catch(e){
console.error(e);
}
//open the reply form
document.querySelector('.reply-btn')
.addEventListener('click',()=>{
    document.querySelector('.reply').style.display = 'block';
})
//Submit a reply
try{
document.querySelector('#my-reply')
.addEventListener('submit',(e)=>{
    e.preventDefault();
    document.querySelector('.reply').style.display= 'none';
})
document.querySelector('#close-reply')
.addEventListener('click',()=>{
    document.querySelector('.reply').style.display= 'none';
})
}catch(e){

}
/**Todo 1. when the page loads populate check if name & mail cookie exist and populate 
 * it with the comment form. handle the function within try & catch 
 * block
 * 
 *2. when the page loads check if the user subscribed to 
 email with the cookie name (isSubscribed)
 */
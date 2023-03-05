const cursor=document.querySelector('.cursor');

//create one event so whenevr our cursor move through window it called 
window.addEventListener('mousemove',(e) =>
{
    //so we have page x and y values getby (pageX and pageY) so put that values in cursor
    cursor.style.left=e.pageX + 'px';
    cursor.style.top=e.pageY + 'px';

    //by adding px the custom cursor move with cursor and the values dynamicaly add to 
    //class of the cursor in css 


})

//so as we see when we scrolling our custom cursor not change the locatio so fo this we add event listner
//and assign the new loctaion values 

window.addEventListener(scroll,()=>
{
    
    cursor.style.top= scrollY + 'px'; 

    //if we see our cursor remain there and not move perfectly so for this we can subtract the distnace 
    //btween cursor and custome cursor do value get from section                            
})

window.addEventListener('click' ,()=>
{

    if(cursor.classList.contains('click'))
    {
        cursor.classList.remove('click');
        void cursor.offsetWidth;
        cursor.classList.add('click');
    }
    else
    {
        cursor.classList.add('click');
    }
    
    
})
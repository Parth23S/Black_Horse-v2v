/*=========================================
    CAREER COMEBACK AI
    script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Career Comeback AI Loaded 🚀");

    /*========================
      Smooth Scroll
    ========================*/

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*========================
      Navbar Shadow
    ========================*/

    const nav = document.querySelector("nav");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 40){

            nav.style.boxShadow="0 12px 35px rgba(0,0,0,.15)";

        }

        else{

            nav.style.boxShadow="0 12px 35px rgba(124,77,255,.10)";

        }

    });

    /*========================
      Counter Animation
    ========================*/

    const counters=document.querySelectorAll(".stat-card h2");

    const speed=40;

    counters.forEach(counter=>{

        const updateCounter=()=>{

            const text=counter.innerText;

            const target=parseInt(text.replace(/\D/g,""));

            let count=+counter.getAttribute("data-count") || 0;

            const increment=Math.ceil(target/speed);

            if(count<target){

                count+=increment;

                if(count>target) count=target;

                counter.setAttribute("data-count",count);

                counter.innerText=count+"+";

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerText=text;

            }

        };

        updateCounter();

    });

    /*========================
      Fade On Scroll
    ========================*/

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0px)";

            }

        });

    },{

        threshold:.2

    });

    const elements=document.querySelectorAll(

        ".feature-card,.stat-card,.step,.dashboard-left,.dashboard-right"

    );

    elements.forEach(el=>{

        el.style.opacity="0";

        el.style.transform="translateY(40px)";

        el.style.transition=".7s ease";

        observer.observe(el);

    });

    /*========================
      Button Ripple
    ========================*/

    const buttons=document.querySelectorAll("button");

    buttons.forEach(btn=>{

        btn.addEventListener("click",function(e){

            const circle=document.createElement("span");

            circle.classList.add("ripple");

            const rect=this.getBoundingClientRect();

            circle.style.left=(e.clientX-rect.left)+"px";

            circle.style.top=(e.clientY-rect.top)+"px";

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });

    });

    /*========================
      Hero Image Hover
    ========================*/

    const hero=document.querySelector(".hero-right img");

    if(hero){

        hero.addEventListener("mousemove",()=>{

            hero.style.transform="scale(1.03)";

        });

        hero.addEventListener("mouseleave",()=>{

            hero.style.transform="scale(1)";

        });

    }

    /*========================
      Back To Top Button
    ========================*/

    const topBtn=document.createElement("button");

    topBtn.innerHTML="↑";

    topBtn.id="topBtn";

    document.body.appendChild(topBtn);

    topBtn.style.position="fixed";

    topBtn.style.right="25px";

    topBtn.style.bottom="25px";

    topBtn.style.width="50px";

    topBtn.style.height="50px";

    topBtn.style.borderRadius="50%";

    topBtn.style.border="none";

    topBtn.style.background="#7C4DFF";

    topBtn.style.color="white";

    topBtn.style.fontSize="22px";

    topBtn.style.cursor="pointer";

    topBtn.style.display="none";

    topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";

    topBtn.style.transition=".3s";

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*========================
      Welcome Message
    ========================*/

    setTimeout(()=>{

        console.log("Welcome to Career Comeback AI 💜");

    },1000);

});
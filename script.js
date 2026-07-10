document.addEventListener("DOMContentLoaded", () => {

    console.log("Career Comeback AI Loaded 🚀");

    // --- YOUR BEAUTIFUL UI LOGIC ---

    const redirectButtons = document.querySelectorAll('[data-redirect]');
    redirectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const redirectUrl = this.getAttribute('data-redirect');
            if(redirectUrl) {
                window.location.href = redirectUrl;
            }
        });
    });

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if(target){
                target.scrollIntoView({ behavior:"smooth" });
            }
        });
    });

    const nav = document.querySelector("nav");
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 40){
            nav.style.boxShadow="0 12px 35px rgba(0,0,0,.15)";
        } else {
            nav.style.boxShadow="0 12px 35px rgba(124,77,255,.10)";
        }
    });

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
            } else {
                counter.innerText=text;
            }
        };
        updateCounter();
    });

    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0px)";
            }
        });
    },{ threshold:.2 });

    const elements=document.querySelectorAll(".feature-card,.stat-card,.step,.dashboard-left,.dashboard-right");
    elements.forEach(el=>{
        el.style.opacity="0";
        el.style.transform="translateY(40px)";
        el.style.transition=".7s ease";
        observer.observe(el);
    });

    const buttons=document.querySelectorAll("button");
    buttons.forEach(btn=>{
        btn.addEventListener("click",function(e){
            const circle=document.createElement("span");
            circle.classList.add("ripple");
            const rect=this.getBoundingClientRect();
            circle.style.left=(e.clientX-rect.left)+"px";
            circle.style.top=(e.clientY-rect.top)+"px";
            this.appendChild(circle);
            setTimeout(()=>{ circle.remove(); },600);
            const redirect=this.dataset.redirect;
            if(redirect){
                setTimeout(()=>{ window.location.href=redirect; },150);
            }
        });
    });

    const hero=document.querySelector(".hero-right img");
    if(hero){
        hero.addEventListener("mousemove",()=>{ hero.style.transform="scale(1.03)"; });
        hero.addEventListener("mouseleave",()=>{ hero.style.transform="scale(1)"; });
    }

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
        if(window.scrollY>500){ topBtn.style.display="block"; }
        else{ topBtn.style.display="none"; }
    });

    topBtn.addEventListener("click",()=>{
        window.scrollTo({ top:0, behavior:"smooth" });
    });


    // --- BACKEND AI CONNECTION (GLASSMORPHISM VERSION) ---
    
    const form = document.getElementById("comeback-form");

    if (form) {
        form.addEventListener("submit", async function(event) {
            event.preventDefault(); 
            
            const submitBtn = form.querySelector("button[type='submit']");
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Analyzing Core Strengths...";
            submitBtn.disabled = true;

            const formData = {
                career_goals: document.getElementById("career-goals") ? document.getElementById("career-goals").value : "",
                past_work: document.getElementById("past-work") ? document.getElementById("past-work").value : "",
                industry: document.getElementById("industry") ? document.getElementById("industry").value : "",
                desired_role: document.getElementById("desired-role") ? document.getElementById("desired-role").value : "",
                api_key: document.getElementById("gemini-api-key") ? document.getElementById("gemini-api-key").value : "test-key"
            };

            try {
                const response = await fetch("http://localhost:8000/submit-form", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                
                if (response.ok && result.status === "success") {
                    submitBtn.innerText = "Analysis Complete! ✅";
                    submitBtn.style.background = "#10B981";
                    
                    // --- THE GLASSMORPHISM MAGIC HAPPENS HERE ---
                    const resultContainer = document.getElementById("ai-result-container");
                    const resultText = document.getElementById("ai-result-text");
                    
                    if(resultContainer && resultText) {
                        // Inject the text
                        resultText.innerText = result.ai_response;
                        
                        // Show the box with your fadeUp animation
                        resultContainer.style.display = "block";
                        resultContainer.style.animation = "fadeUp 0.8s ease";
                        
                        // Scroll down so the user sees it
                        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        console.error("Could not find the ai-result-container in your HTML!");
                    }
                    
                } else {
                    alert("Error: " + (result.message || "Server error."));
                    submitBtn.innerText = "Failed";
                }

            } catch (error) {
                console.error("Network error:", error);
                submitBtn.innerText = "Connection Failed";
            } finally {
                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = ""; // Reset to purple
                }, 4000);
            }
        });
    }
});
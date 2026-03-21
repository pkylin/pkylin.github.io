---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  /* Smooth scrolling for the entire page */
  html {
    scroll-behavior: smooth;
  }
  
  /* Section styling */
  .section {
    margin: 40px 0;
    padding: 2px 0;
    text-align: justify;
  }
  
  .section-title {
    font-size: 2.5em;
    font-weight: 600;
    color: #494e52;
    margin-bottom: 40px;
    padding-bottom: 15px;
    border-bottom: 3px solid #52adc8;
    text-align: left;
  }
  
  /* Offset for fixed header navigation */
  .section:target {
    padding-top: 80px;
    margin-top: -80px;
  }

  /* About Me introduction font size */
  #about-me {
    font-size: 19px;
  }
</style>

<section id="about-me" class="section">

<div class="section-title">About Me</div>
I am <b>Yu Wang</b>, an Associate Professor in the School of Computer Science and Technology at Tongji University. I was selected into the Shanghai 35 Young Sci-Tech Talents Program (Shanghai 35U35) and the Yangfan Special Project of Shanghai Rising-Star Program. I have long focused on the fields of <b>multimodal visual perception</b>, <b>understanding and decision-making</b>, and conducted research in cutting-edge directions such as <b>computer vision</b>, <b>open visual perception</b>, and <b>multimodal video understanding and analysis</b>.
<br/><br/>
I have published more than 30 papers in top international journals and conferences of CCF A / CAS Zone 1, including NeurIPS, ICML, CVPR, ICLR, AAAI, and IEEE TMM, and have applied for/authorized more than 20 national invention patents. I have won 8 championships in top-tier international AI competitions, including those held in conjunction with CVPR 2026, CVPR 2025, ACL 2026, and ICDAR 2023. I have long served as a reviewer for top international conferences and journals including CVPR, ICCV, ICLR, ICML, ACM MM, ECCV, IEEE TMM, and IEEE TCSVT, and was awarded the Outstanding Reviewer Award at CVPR 2025.
</section>

<section id="publications" class="section">

<div class="section-title">Selected Publications</div>

{% for post in site.data.publications %}
  {% include archive-single.html %}
{% endfor %}

</section>

<section id="challenge-awards" class="section">

<div class="section-title">Challenge Awards</div>

{% for item in site.data.challenges %}
<div class="honor-item">
  <img src="{{ '/images/champion.png' | relative_url }}" alt="champion" class="challenge-icon">
  <span class="honor-text">{{ item.title }}{% if item.year %} ({{ item.year }}){% endif %}{% if item.rank %}, <strong>{{ item.rank }}</strong>{% endif %}{% if item.competition %}, {{ item.competition }}{% endif %}{% if item.conference %}, {{ item.conference }}{% endif %}</span>
</div>
{% endfor %}

</section>

<!--
<section id="patents" class="section">

<div class="section-title">Patents</div>

{% for post in site.data.patents %}
  {% assign is_patent = true %}
  {% include archive-single.html %}
{% endfor %}

</section>
-->

<script>
// Additional smooth scrolling behavior for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that are anchors
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without causing page jump
                history.pushState(null, null, '#' + targetId);
            }
        });
    });
});
</script>

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
    margin: 60px 0;
    padding: 20px 0;
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
</style>

<section id="about" class="section">

<div class="section-title">About Me</div>

I am currently an Assistant Professor in the School of Computer Science and Technology at Tongji University. My research focuses on multimodal visual perception, understanding, and decision-making, with particular emphasis on computer vision, open-vocabulary visual perception, and multimodal video understanding and analysis. 

Over the past five years, I have published more than twenty papers in top-tier international conferences and journals, including NeurIPS, ICML, CVPR, AAAI, TMM, and T-ITS, with one ESI Highly Cited Paper.

</section>

<section id="publications" class="section">

<div class="section-title">Publications</div>

{% for post in site.data.publications %}
  {% include archive-single.html %}
{% endfor %}

</section>

<section id="patents" class="section">

<div class="section-title">Patents</div>

{% for post in site.data.patents %}
  {% assign is_patent = true %}
  {% include archive-single.html %}
{% endfor %}

</section>

<section id="research-projects" class="section">

<div class="section-title">Research Projects</div>

My research focuses on several key areas in computer vision and multimodal learning:

## Open-Vocabulary Visual Perception
Developing methods that can understand and classify visual content beyond predefined categories, enabling more flexible and generalizable computer vision systems.

## Multimodal Video Understanding
Combining visual, audio, and textual information to create comprehensive understanding systems for video content analysis.

## Zero-Shot Learning
Building models that can recognize new categories without explicit training examples, leveraging semantic relationships and prior knowledge.

</section>

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

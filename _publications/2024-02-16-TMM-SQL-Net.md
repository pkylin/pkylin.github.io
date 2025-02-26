---
title: "SQL-Net: Semantic Query Learning for Point-Supervised Temporal Action Localization"
collection: publications
category: manuscripts
permalink: /publication/2015-10-01-paper-title-number-3
excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
date: 2024-02-16
venue: 'Journal 1'
slidesurl: 'http://academicpages.github.io/files/slides3.pdf'
paperurl: 'http://academicpages.github.io/files/paper3.pdf'
citation: 'Yu Wang, Shengjie Zhao and Shiwei Chen, &quot;SQL-Net: Semantic Query Learning for Point-Supervised Temporal Action Localization.&quot;, <i>IEEE Transactions on Multimedia</i>, 2024, doi=10.1109/TMM.2024.3521799.'
---

Point-supervised Temporal Action Localization (PS-TAL) detects temporal intervals of actions in untrimmed videos with a label-efficient paradigm. However, most existing methods fail to learn action completeness without instance-level annotations, resulting in fragmentary region predictions. In fact, the semantic information of snippets is crucial for detecting complete actions, meaning that snippets with similar representations should be considered as the same action category. To address this issue, we propose a novel representation refinement framework with a semantic query mechanism to enhance the discriminability of snippet-level features. Concretely, we set a group of learnable queries, each representing a specific action category, and dynamically update them based on the video context. With the assistance of these queries, we expect to search for the optimal action sequence that agrees with their semantics. Besides, we leverage some reliable proposals as pseudo labels and design a refinement and completeness module to refine temporal boundaries further, so that the completeness of action instances is captured. Finally, we demonstrate the superiority of the proposed method over existing state-of-the-art approaches on THUMOS14 and ActivityNet13 benchmarks. Notably, thanks to completeness learning, our algorithm achieves significant improvements under more stringent evaluation metrics.
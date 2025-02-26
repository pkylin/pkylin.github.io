---
title: "Action-Semantic Consistent Knowledge for Weakly-Supervised Action Localization"
collection: publications
category: manuscripts
permalink: /publication/2024-02-17-paper-title-number-4
excerpt: 'This paper is about fixing template issue #693.'
date: 2024-02-17
venue: 'GitHub Journal of Bugs'
paperurl: 'http://academicpages.github.io/files/paper3.pdf'
citation: 'Yu Wang, Shengjie Zhao and Shiwei Chen, &quot;Action-Semantic Consistent Knowledge for Weakly-Supervised Action Localization.&quot; <i>IEEE Transactions on Multimedia</i>, vol. 26, pp. 10279-10289, 2024, doi=10.1109/TMM.2024.3405710.'
---

Weakly-supervised temporal action localization aims to detect temporal intervals of actions in arbitrarily long untrimmed videos with only video-level annotations. Owing to label sparsity, learning action consistency is intractable. In this paper, we assume that frames with similar representations in a given video should be considered as the same action. To this end, we develop a query-based contrastive learning paradigm to ensure action-semantic consistency. This mechanism encourages normalized embeddings with the same class to be pulled closer together, while embeddings from different classes are repelled apart. Besides, we design a two-branch framework, consisting of a class-aware branch and a class-agnostic branch, to learn salient features and fine-grained clues respectively. To further guarantee the action-semantic consistency of the two branches, unlike previous methods that handle each branch independently, we model the relationship between the two branches to avoid unreasonable predictions. Finally, the proposed model demonstrates superior performance over existing methods on the publicly available THUMOS-14 and ActivityNet-1.3 datasets. Substantial experiments and ablation studies also demonstrate the effectiveness of our model.

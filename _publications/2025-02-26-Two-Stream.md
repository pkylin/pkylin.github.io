---
title: "Two-Stream Networks for Weakly-Supervised Temporal Action Localization with Semantic-Aware Mechanisms"
collection: publications
category: conferences
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2009-10-01
venue: 'Journal 1'
slidesurl: 'http://pkylin.github.io/files/slides1.pdf'
paperurl: 'http://pkylin.github.io/files/CVPR-Two-Stream.pdf'
citation: 'Yu Wang, Yadong Li and Hongbin Wang, &quot;Two-Stream Networks for Weakly-Supervised Temporal Action Localization with Semantic-Aware Mechanisms&quot;, in <i>Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</i>, 2023, pp. 18878-18887, doi: 10.1109/CVPR52729.2023.01810.'
---

Weakly-supervised temporal action localization aims to detect action boundaries in untrimmed videos with only video-level annotations. Most existing schemes detect temporal regions that are most responsive to video-level classification, but they overlook the semantic consistency between frames. In this paper, we hypothesize that snippets with similar representations should be considered as the same action class despite the absence of supervision signals on each snippet. To this end, we devise a learnable dictionary where entries are the class centroids of the corresponding action categories. The representations of snippets identified as the same action category are induced to be close to the same class centroid, which guides the network to perceive the semantics of frames and avoid unreasonable localization. Besides, we propose a two-stream framework that in tegrates the attention mechanism and the multiple-instance learning strategy to extract fine-grained clues and salient features respectively. Their complementarity enables the model to refine temporal boundaries. Finally, the developed model is validated on the publicly available THUMOS-14 and ActivityNet-1.3 datasets, where substantial experiments and analyses demonstrate that our model achieves remark able advances over existing methods.



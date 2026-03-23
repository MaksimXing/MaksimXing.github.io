---
layout: page
title: "Characteristic Function Surrogates with Sony"
description: Characteristic-function-based surrogate modelling for multi-modal neural and behavioural recordings, in collaboration with Sony Japan.
img: assets/img/project_preview/proj_sony.png
importance: 2
category: Industry Cooperation
---

## Characteristic Function Surrogates for Multi-Modal Recordings

**A joint research project with [Sony](https://www.sony.com/) Japan (2025 – Present).**

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/project_preview/proj_sony.png" title="Characteristic Function Surrogates" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

This project develops characteristic-function-based surrogate modelling for multi-modal neural and behavioural recordings. We target a setting where each example consists of **seven synchronised channels** (bilateral EEG, two microphone channels, and a tri-axial accelerometer), and high-quality generative surrogates are needed for both **data augmentation** and **privacy-preserving analysis**.

### Approach

1. **Residual Attention Convolutional Autoencoder:** We design an autoencoder that operates on longer temporal windows than the initial baseline, combines residual encoder–decoder blocks with temporal self-attention, and is trained with a mixed time–frequency reconstruction loss to preserve both waveform shape and spectral content across modalities.

2. **Characteristic-Function-Driven Generator:** In the second stage, we learn a characteristic-function-driven generator in the autoencoder's latent space, so that synthetic samples are produced by sampling latent codes from the generator and decoding them back into full multi-channel segments.

Together, these components provide an **end-to-end pipeline** from raw recordings to spectrally faithful surrogate windows, laying the groundwork for scalable augmentation of complex multi-modal datasets.

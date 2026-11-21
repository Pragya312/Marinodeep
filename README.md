# MarinoDeep Website

Static website for MarinoDeep L.L.C-FZ: *Navigating Solutions, Delivering Trust*.

## Structure

```
marinodeep/
  index.html            Main page
  css/style.css         Styles (ocean, gold and pastel palette)
  js/main.js            Navigation, video fallback, scroll reveal
  assets/images/        Logo (logo-full.png, logo-mark.png), favicon, hero photo (hero-ship.jpg)
  assets/video/         Put the hero background video here as ocean.mp4
```

## Adding the background video

1. Get a looping ocean or ship clip (MP4, H.264, ideally 1920x1080, under 10 MB).
   Free sources: pexels.com/videos, pixabay.com/videos, mixkit.co.
2. Rename it to `ocean.mp4` and place it in `assets/video/`.
3. Reload the page. The video plays muted and on loop behind the hero section.

If the video file is missing, the ship photo (`assets/images/hero-ship.jpg`) is shown instead with a slow zoom effect. The same photo is used as the video's poster frame while it loads.

## Running in VS Code

1. Open the `marinodeep` folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **Open with Live Server**.

You can also double-click `index.html` to open it directly in a browser.

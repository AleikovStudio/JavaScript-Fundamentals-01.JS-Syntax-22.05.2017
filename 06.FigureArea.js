/**
 * Created by AleikovStudio.com on 24/05/2017.
 */

function figureArea(w, h, W, H) {
    let s1 = w * h;
    let s2 = W * H;
    let s3 = Math.min(w, W) * Math.min(h, H);
    //let [s1,s2,s3]=[w * h, W * H, Math.min(w, W) * Math.min(h, H)];
    console.log(s1 + s2 - s3);
}

figureArea(13, 2, 5, 8);
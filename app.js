// const progress = document.querySelector(".progress");
// const loading = document.querySelector(".loading");

// let i = 0;
// const fakeUploadPerc = [0, 25, 33, 50, 66, 75, 80, 90, 99, 100];

// const interval = setInterval(() => {
//     progress.style.width = fakeUploadPerc[i] + "%";
//     loading.innerHTML = fakeUploadPerc[i] + "%";
//     i++;
//     if (i == fakeUploadPerc.length) {
//         clearInterval(interval);
//         loading.innerHTML = "completed";
//     }
// }, 800)

const circle = document.querySelector(".progress-circle");

const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPerc = [0, 25, 33, 50, 66, 75, 80, 90, 99, 100];

const circumference = circle.getTotalLength();

const interval = setInterval(() => {
    circle.style.strokeDashoffset = circumference - (fakeUploadPerc[i] / 100) * circumference;
    loading.innerHTML = fakeUploadPerc[i] + "%";
    i++;
    if (i === fakeUploadPerc.length) {
        clearInterval(interval);
        loading.innerHTML = "Ok "
    }

}, 800)
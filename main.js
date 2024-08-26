if ("webkitSpeechRecognition" in window) {
    const searchbox = document.querySelector(".search-box");
    const recognition = new webkitSpeechRecognition();

    recognition.lang = "vi-VN";
    recognition.continuous = false;
    recognition.interimResults = false;
    const actionDiv = document.createElement("div");

    document.querySelector(".btn").addEventListener("click", function () {
        recognition.start();
        console.log(recognition);

        actionDiv.className = "action";
        actionDiv.textContent = "Hãy nói nội dung bạn muốn";

        searchbox.appendChild(actionDiv);
        searchbox.removeChild(actionsuccessDiv);
        searchbox.removeChild(result);
    });
    const result = document.createElement("div");
    const actionsuccessDiv = document.createElement("div");

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript.trim().toLowerCase();

        if (searchbox.contains(actionDiv)) {
            searchbox.removeChild(actionDiv);
        }

        actionsuccessDiv.className = "action success";
        actionsuccessDiv.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn";
        searchbox.appendChild(actionsuccessDiv);

        result.className = "result";
        result.textContent = "Đang thực hiện: " + transcript;
        searchbox.appendChild(result);

        if (transcript === "google") {
            window.open("https://www.google.com", "_blank");
        } else if (transcript === "facebook") {
            window.open("https://www.facebook.com", "_blank");
        } else if (transcript === "youtube") {
            window.open("https://www.youtube.com", "_blank");
        } else if (transcript === "google drive") {
            window.open("https://www.google.com/intl/vi_VN/drive/", "_blank");
        } else if (transcript === "google map" || transcript === "bản đồ") {
            window.open(
                "https://www.google.com/maps/@9.779349,105.6189045,11z?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MDgyMC4xIKXMDSoASAFQAw%3D%3D",
                "_blank"
            );
        } else if (
            transcript.trim().toLowerCase() === "love yourself" ||
            transcript.trim().toLowerCase() === "mở bài hát love yourself" ||
            transcript.trim().toLowerCase() === "phát bài hát love yourself"
        ) {
            window.open(
                "https://open.spotify.com/track/50kpGaPAhYJ3sGmk6vplg0?si=70ecc26154a549c4",
                "_blank"
            );
        } else if (
            transcript.trim().toLowerCase() === "go hạ long" ||
            transcript.trim().toLowerCase() === "chỉ đường đến go hạ long" ||
            transcript.trim().toLowerCase() === "đường đến go hạ long" ||
            transcript.trim().toLowerCase() === "đến go hạ long"
        ) {
            window.open(
                "https://www.google.com/maps/place/GO!+H%E1%BA%A1+Long/@20.9424205,107.1005586,15z/data=!3m1!4b1!4m6!3m5!1s0x314a578f9f4bfe1b:0x6787f1de98d7b234!8m2!3d20.9424008!4d107.1108369!16s%2Fg%2F1hc1ylpx1?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
            );
        } else if (
            transcript.trim().toLowerCase() === "mv love yourself" ||
            transcript.trim().toLowerCase() === "mở mv love yourself" ||
            transcript.trim().toLowerCase() === "phát mv love yourself"
        ) {
            window.open(
                "https://www.youtube.com/watch?v=oyEuk8j8imI",
                "_blank"
            );
        } else {
            result.textContent = "Không thực hiện được yêu cầu ";
        }
        console.log(transcript);

        if (
            transcript === "google" ||
            transcript === "facebook" ||
            transcript === "youtube" ||
            transcript === "google drive" ||
            transcript === "google map" ||
            transcript === "bản đồ" ||
            transcript.trim().toLowerCase() === "love yourself" ||
            transcript.trim().toLowerCase() === "mở bài hát love yourself" ||
            transcript.trim().toLowerCase() === "phát bài hát love yourself" ||
            transcript.trim().toLowerCase() === "go hạ long" ||
            transcript.trim().toLowerCase() === " chỉ đường tới go hạ long" ||
            transcript.trim().toLowerCase() === "đường tới go hạ long" ||
            transcript.trim().toLowerCase() === " tới go hạ long" ||
            transcript.trim().toLowerCase() === "mv love yourself" ||
            transcript.trim().toLowerCase() === "mở mv love yourself" ||
            transcript.trim().toLowerCase() === "phát mv love yourself"
        ) {
            result.textContent = "Đã thực hiện xong ";
        }
    };

    recognition.onend = function () {
        console.log("Nhận diện giọng nói đã kết thúc.");
    };
} else {
    console.error("Trình duyệt của bạn không hỗ trợ Web Speech API");
}

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

        // Check if elements exist before trying to remove them
        if (searchbox.contains(actionsuccessDiv)) {
            searchbox.removeChild(actionsuccessDiv);
        }
        if (searchbox.contains(result)) {
            searchbox.removeChild(result);
        }
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
            transcript.includes("mv") ||
            transcript.includes("phát mv ") ||
            transcript.includes("xem mv ")
        ) {
            const url = `https://www.youtube.com/results?search_query=${transcript
                .replace("mv", "")
                .replace("phát mv ", "")
                .replace("xem mv ", "")
                .trim()}`;
            window.open(url.trim());
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
            transcript.includes("mv ") ||
            transcript.includes("phát mv ") ||
            transcript.includes("xem mv ")
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

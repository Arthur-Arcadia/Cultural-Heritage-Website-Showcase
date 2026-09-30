document.addEventListener("DOMContentLoaded", () => {
    const siteInfo = {
        sanxingdui: {
            title: "Sanxingdui",
            description: "The Sanxingdui culture is located in Guanghan, Sichuan and is an outstanding representative of ancient Chinese Ba Shu culture. It has unearthed a large number of precious cultural relics such as gold masks and bronze ware.",
            url: "./showcase.html"
        },
        mogao: {
            title: "Mogao Caves",
            description: "The Mogao Caves located in Dunhuang, Gansu Province, have hundreds of caves and murals, and are an important heritage of Buddhist art on the Silk Road.",
            url: "./showcase.html"
        },
        terracotta: {
            title: "Terracotta Army",
            description: "The Terracotta Armies are an important part of the the Mausoleum of the First Qin Emperor, symbolizing the majesty of the Qin army and reflecting the peak of the sculpture art of the Qin Dynasty.",
            url: "./showcase.html"
        }
    };

    const markers = document.querySelectorAll(".map-marker");

    markers.forEach(marker => {
        const siteKey = marker.dataset.site;

        const popup = document.createElement("div");
        popup.classList.add("popup-below");
        popup.innerHTML = `
            <h3>${siteInfo[siteKey].title}</h3>
            <p>${siteInfo[siteKey].description}</p>
            <a class="learn-more" href="${siteInfo[siteKey].url}" target="_blank">Learn More →</a>
        `;
        marker.appendChild(popup);

        marker.addEventListener("click", () => {
            document.querySelectorAll(".popup-below").forEach(p => p.style.display = "none");
            popup.style.display = "block";
        });
    });

    document.querySelector(".map-container").addEventListener("click", (e) => {
        if (!e.target.classList.contains("map-marker")) {
            document.querySelectorAll(".popup-below").forEach(p => p.style.display = "none");
        }
    });
});

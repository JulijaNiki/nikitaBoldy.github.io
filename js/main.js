window.addEventListener("DOMContentLoaded", () => {

    const themeNames = ["classic", "windows98", "windows2000ANDME", "windowsxp"];

    let currentTheme = 1

    const btn = document.querySelector("#theme")
    btn.addEventListener("click", ()=>{
        const body = document.querySelector(".news")
        if (currentTheme > themeNames.length - 1) {
            currentTheme = 0
        }
        if (body) {
            body.className = `news ${themeNames[currentTheme]}`
            btn.textContent = themeNames[currentTheme]
            currentTheme += 1
        }
    })
})
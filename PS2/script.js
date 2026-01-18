const imagesPerPage = 45;
let currentPage = 1;

// Array to simulate images in the "PS2 COVER" folder (replace with actual paths)
const imagePaths = [

//pes
"Ps2Covers/SLES-50412.jpg",
"Ps2Covers/SLES-51114.jpg",
"Ps2Covers/SLES-51912.jpg",
"Ps2Covers/SLES-52760.jpg",
"Ps2Covers/SLES-53544.jpg",
"Ps2Covers/SLES-54203.jpg",
"Ps2Covers/SLUS-21464.jpg",
"Ps2Covers/SLES-54913.jpg",
"Ps2Covers/SLES-55406.jpg",
"Ps2Covers/PES 2010.jpg",
"Ps2Covers/SLAJ-25115.jpg",
"Ps2Covers/SLES-55587.png",
"Ps2Covers/SLES-55656.jpg",
"Ps2Covers/SLES-55666.jpg",
"Ps2Covers/SLUS-21955.jpg",
"Ps2Covers/PES 2014.jpg",
"Ps2Covers/pes 2015.jpeg",
"Ps2Covers/pes 2016.jpeg",
"Ps2Covers/PES 2017.png",
"Ps2Covers/SLES-33376.jpeg",
"Ps2Covers/pes 2019.jpg",
"Ps2Covers/pes 2020.jpg",
"Ps2Covers/pes 2021.jpg",
"Ps2Covers/pes 2023.jpg",
"Ps2Covers/PES 2024.jpeg",
"Ps2Covers/SLES-55676.png",
"Ps2Covers/SLES-55673.jpg",








//fifa
"Ps2Covers/SLES-53064.jpg",
"Ps2Covers/SLUS-21369.jpg",
"Ps2Covers/SLUS-20097.jpg",
"Ps2Covers/SLUS-20280.jpg",
"Ps2Covers/SLUS-20580.jpg",
"Ps2Covers/SLUS-20750.jpg",
"Ps2Covers/SLUS-21051.jpg",
"Ps2Covers/SLUS-21280.jpg",
"Ps2Covers/SLUS-21433.jpg",
"Ps2Covers/SLES-54870.jpg", 
"Ps2Covers/SLPM-55134.jpg",
"Ps2Covers/SLUS-21905.jpg",
"Ps2Covers/SLES-55643.jpg", 
"Ps2Covers/SLUS-21947.jpg",
"Ps2Covers/SLES-55664.jpg",
"Ps2Covers/SLES-55671.jpg", 

"Ps2Covers/SLPM-62268.jpg",
"Ps2Covers/SLPM-66374.png",
"Ps2Covers/SLPS-25691.jpg",
"Ps2Covers/SLUS-21220.jpg",


//wwe
"Ps2Covers/SLUS-21810.jpg",
"Ps2Covers/SLUS-21901.jpg",
"Ps2Covers/SLES-55635.jpg",
"Ps2Covers/wwe 2k22.jpg",
"Ps2Covers/wwe 2k23.jpg",
"Ps2Covers/SLUS-21427.jpg",
"Ps2Covers/SLUS-20316.jpg",
"Ps2Covers/SLUS-21940.jpg",

"Ps2Covers/cover.jpg",
"Ps2Covers/GTA Faxir.png",

"Ps2Covers/PBPX-95503.jpg",
"Ps2Covers/SCES-50360.jpg",
"Ps2Covers/SCES-50878.jpg",
"Ps2Covers/SCES-51428.jpg",
"Ps2Covers/SCES-52042.jpg",
"Ps2Covers/SCES-52412.jpg",
"Ps2Covers/SCES-52529.jpg",
"Ps2Covers/SCES-53202.jpg",
"Ps2Covers/SCES-53326.jpg",
"Ps2Covers/SCES-53422.jpg",
"Ps2Covers/SCES-53931.jpg",
"Ps2Covers/SCES-53950.jpg",
"Ps2Covers/SCES-54477.jpg",
"Ps2Covers/SCES-54794.jpg",
"Ps2Covers/SCUS-97113.jpg",
"Ps2Covers/SCUS-97123.jpg",
"Ps2Covers/SCUS-97133.jpg",
"Ps2Covers/SCUS-97134.jpg",
"Ps2Covers/SCUS-97198.jpg",
"Ps2Covers/SCUS-97275.jpg",
"Ps2Covers/SCUS-97279.jpg",
"Ps2Covers/SCUS-97328.jpg",
"Ps2Covers/SCUS-97399.jpg",
"Ps2Covers/SCUS-97402.jpg",
"Ps2Covers/SLUS-20693.jpg",
"Ps2Covers/SCUS-97408.jpg",
"Ps2Covers/SCUS-97464.jpg",
"Ps2Covers/SCUS-97471.jpg",
"Ps2Covers/SCUS-97474.jpg",
"Ps2Covers/SCUS-97481.jpg",
"Ps2Covers/SCUS-97621.jpg",
"Ps2Covers/SLES-50047.jpg",
"Ps2Covers/SLES-50057.jpg",
"Ps2Covers/SLES-50185.jpg",
"Ps2Covers/SLES-50282.jpg",
"Ps2Covers/SLES-50326.jpg",
"Ps2Covers/SLES-50330.jpg",
"Ps2Covers/SLES-50350.jpg",
"Ps2Covers/SLES-50355.jpg",
"Ps2Covers/SLES-50358.jpg",
"Ps2Covers/SLES-50386.jpg",
"Ps2Covers/SLES-50397.jpg",
"Ps2Covers/SLES-50539.jpg",
"Ps2Covers/SLES-50641.jpg",
"Ps2Covers/SLES-50650.jpg",
"Ps2Covers/SLES-50684.jpg",
"Ps2Covers/SLES-50717.jpg",
"Ps2Covers/SLES-50812.jpg",
"Ps2Covers/SLES-50902.jpg",
"Ps2Covers/SLES-50992.jpg",
"Ps2Covers/SLES-51053.jpg",
"Ps2Covers/SLES-51061.jpg",
"Ps2Covers/SLES-51232.jpg",
"Ps2Covers/SLES-51252.jpg",
"Ps2Covers/SLES-51258.jpg",
"Ps2Covers/SLES-51374.jpg",
"Ps2Covers/SLES-51441.jpg",
"Ps2Covers/SLES-51511.jpg",
"Ps2Covers/SLES-51589.jpg",
"Ps2Covers/SLES-51661.jpg",
"Ps2Covers/SLES-51686.jpg",
"Ps2Covers/SLES-51794.jpg",
"Ps2Covers/SLES-51820.jpg",
"Ps2Covers/SLES-51864.jpg",
"Ps2Covers/SLES-51873.jpg",
"Ps2Covers/SLES-51897.jpg",
"Ps2Covers/SLES-51931.jpg",
"Ps2Covers/SLES-52001.jpg",
"Ps2Covers/SLES-52023.jpg",
"Ps2Covers/SLES-52034.jpg",
"Ps2Covers/SLES-52171.jpg",
"Ps2Covers/SLES-52202.jpg",
"Ps2Covers/SLES-52478.jpg",
"Ps2Covers/SLES-52536.jpg",
"Ps2Covers/SLES-52568.jpg",
"Ps2Covers/SLES-52702.jpg",
"Ps2Covers/SLES-52705.jpg",
"Ps2Covers/SLES-52782.jpg",
"Ps2Covers/SLES-52801.jpg",
"Ps2Covers/SLES-52843.jpg",
"Ps2Covers/SLES-52861.jpg",
"Ps2Covers/SLES-52954.jpg",
"Ps2Covers/SLES-52974.jpg",
"Ps2Covers/SLES-52988.jpg",
"Ps2Covers/SLES-53007.jpg",
"Ps2Covers/SLES-53017.jpg",
"Ps2Covers/SLES-53024.jpg",
"Ps2Covers/SLES-53052.jpg",
"Ps2Covers/SLES-53127.jpg",
"Ps2Covers/SLES-53199.jpg",
"Ps2Covers/SLES-53225.jpg",
"Ps2Covers/SLES-53319.jpg",
"Ps2Covers/SLES-53332.jpg",
"Ps2Covers/SLES-53339.jpg",
"Ps2Covers/SLES-53393.jpg",
"Ps2Covers/SLES-53430.jpg",
"Ps2Covers/SLES-53439.jpg",
"Ps2Covers/SLES-53473.jpg",
"Ps2Covers/SLES-53492.jpg",
"Ps2Covers/SLES-53564.jpg",
"Ps2Covers/SLES-53621.jpg",
"Ps2Covers/SLES-53624.jpg",
"Ps2Covers/SLES-53657.jpg",
"Ps2Covers/SLES-53702.jpg",
"Ps2Covers/SLES-53706.jpg",
"Ps2Covers/SLES-53717.jpg",
"Ps2Covers/SLES-53729.jpg",
"Ps2Covers/SLES-53759.jpg",
"Ps2Covers/SLES-53777.jpg",
"Ps2Covers/SLES-53850.jpg",
"Ps2Covers/SLES-53855.jpg",
"Ps2Covers/SLES-53860.jpg",
"Ps2Covers/SLES-53886.jpg",
"Ps2Covers/SLES-53994.jpg",
"Ps2Covers/SLES-54002.jpg",
"Ps2Covers/SLES-54095.jpg",
"Ps2Covers/SLES-54122.jpg",
"Ps2Covers/SLES-54135.jpg",
"Ps2Covers/SLES-54156.jpg",
"Ps2Covers/SLES-54171.jpg",
"Ps2Covers/SLES-54237.jpg",
"Ps2Covers/SLES-54316.jpg",
"Ps2Covers/SLES-54376.jpg",
"Ps2Covers/SLES-54426.jpg",
"Ps2Covers/SLES-54443.jpg",
"Ps2Covers/SLES-54469.jpg",
"Ps2Covers/SLES-54478.jpg",
"Ps2Covers/SLES-54527.jpg",
"Ps2Covers/SLES-54541.jpg",
"Ps2Covers/SLES-54616.jpg",
"Ps2Covers/SLES-54622.jpg",
"Ps2Covers/SLES-54666.jpg",
"Ps2Covers/SLES-54670.jpg",
"Ps2Covers/SLES-54672.jpg",
"Ps2Covers/SLES-54674.jpg",
"Ps2Covers/SLES-54683.jpg",
"Ps2Covers/SLES-54708.jpg",
"Ps2Covers/SLES-54733.jpg",
"Ps2Covers/SLES-54780.jpg",
"Ps2Covers/SLES-54786.jpg",
"Ps2Covers/SLES-54817.jpg",
"Ps2Covers/SLES-54819.jpg",
"Ps2Covers/SLES-54901.jpg",
"Ps2Covers/SLES-55025.jpg",
"Ps2Covers/SLES-55208.jpg",
"Ps2Covers/SLES-55242.jpg",
"Ps2Covers/SLES-55249.jpg",
"Ps2Covers/SLES-55281.jpg",
"Ps2Covers/SLES-55372.jpg",
"Ps2Covers/SLES-55374.jpg",
"Ps2Covers/SLES-55429.jpg",
"Ps2Covers/SLES-55440.jpg",
"Ps2Covers/SLES-55486.jpg",
"Ps2Covers/SLES-55487.jpg",
"Ps2Covers/SLES-55499.jpg",
"Ps2Covers/SLES-55536.jpg",
"Ps2Covers/SLES-55565.jpg",
"Ps2Covers/SLES-55592.jpg",
"Ps2Covers/SLES-55605.jpg",
"Ps2Covers/SLKA-25133.jpg",
"Ps2Covers/SLPM-62422.jpg",
"Ps2Covers/SLPM-65973.jpg",
"Ps2Covers/SLPM-66739.jpg",
"Ps2Covers/SLPS-20402.jpg",
"Ps2Covers/SLPS-20483.jpg",
"Ps2Covers/SLPS-25502.jpg",
"Ps2Covers/SLPS-25733.jpg",
"Ps2Covers/SLUS-20001.jpg",
"Ps2Covers/SLUS-20002.jpg",
"Ps2Covers/SLUS-20017.jpg",
"Ps2Covers/SLUS-20018.jpg",
"Ps2Covers/SLUS-20021.jpg",
"Ps2Covers/SLUS-20063.jpg",
"Ps2Covers/SLUS-20073.jpg",
"Ps2Covers/SLUS-20090.jpg",
"Ps2Covers/SLUS-20091.jpg",
"Ps2Covers/SLUS-20103.jpg",
"Ps2Covers/SLUS-20114.jpg",
"Ps2Covers/SLUS-20120.jpg",
"Ps2Covers/SLUS-20144.jpg",
"Ps2Covers/SLUS-20167.jpg",
"Ps2Covers/SLUS-20174.jpg",
"Ps2Covers/SLUS-20184.jpg",
"Ps2Covers/SLUS-20202.jpg",
"Ps2Covers/SLUS-20205.jpg",
"Ps2Covers/SLUS-20206.jpg",
"Ps2Covers/SLUS-20210.jpg",
"Ps2Covers/SLUS-20220.jpg",
"Ps2Covers/SLUS-20221.jpg",
"Ps2Covers/SLUS-20228.jpg",
"Ps2Covers/SLUS-20242.jpg",
"Ps2Covers/SLUS-20251.jpg",
"Ps2Covers/SLUS-20253.jpg",
"Ps2Covers/SLUS-20297.jpg",
"Ps2Covers/SLUS-20306.jpg",
"Ps2Covers/SLUS-20337.jpg",
"Ps2Covers/SLUS-20362.jpg",
"Ps2Covers/SLUS-20371.jpg",
"Ps2Covers/SLUS-20397.jpg",
"Ps2Covers/SLUS-20422.jpg",
"Ps2Covers/SLUS-20424.jpg",
"Ps2Covers/SLUS-20425.jpg",
"Ps2Covers/SLUS-20433.jpg",
"Ps2Covers/SLUS-20442.jpg",
"Ps2Covers/SLUS-20478.jpg",
"Ps2Covers/SLUS-20484.jpg",
"Ps2Covers/SLUS-20515.jpg",
"Ps2Covers/SLUS-20520.jpg",
"Ps2Covers/SLUS-20522.jpg",
"Ps2Covers/SLUS-20528.jpg",
"Ps2Covers/SLUS-20550.jpg",
"Ps2Covers/SLUS-20556.jpg",
"Ps2Covers/SLUS-20576.jpg",
"Ps2Covers/SLUS-20587.jpg",
"Ps2Covers/SLUS-20615.jpg",
"Ps2Covers/SLUS-20622.jpg",
"Ps2Covers/SLUS-20625.jpg",
"Ps2Covers/SLUS-20627.jpg",
"Ps2Covers/SLUS-20636.jpg",
"Ps2Covers/SLUS-20652.jpg",
"Ps2Covers/SLUS-20658.jpg",
"Ps2Covers/SLUS-20669.jpg",
"Ps2Covers/SLUS-20671.jpg",
"Ps2Covers/SLUS-20680.jpg",
"Ps2Covers/SLUS-20687.jpg",
"Ps2Covers/SLUS-20689.jpg",
"Ps2Covers/SLUS-20709.jpg",
"Ps2Covers/SLUS-20712.jpg",
"Ps2Covers/SLUS-20738.jpg",
"Ps2Covers/SLUS-20743.jpg",
"Ps2Covers/SLUS-20745.jpg",
"Ps2Covers/SLUS-20751.jpg",
"Ps2Covers/SLUS-20770.jpg",
"Ps2Covers/SLUS-20776.jpg",
"Ps2Covers/SLUS-20777.jpg",
"Ps2Covers/SLUS-20788.jpg",
"Ps2Covers/SLUS-20793.jpg",
"Ps2Covers/SLUS-20828.jpg",
"Ps2Covers/SLUS-20843.jpg",
"Ps2Covers/SLUS-20851.jpg",
"Ps2Covers/SLUS-20852.jpg",
"Ps2Covers/SLUS-20864.jpg",
"Ps2Covers/SLUS-20870.jpg",
"Ps2Covers/SLUS-20873.jpg",
"Ps2Covers/SLUS-20875.jpg",
"Ps2Covers/SLUS-20882.jpg",
"Ps2Covers/SLUS-20883.jpg",
"Ps2Covers/SLUS-20896.jpg",
"Ps2Covers/SLUS-20899.jpg",
"Ps2Covers/SLUS-20901.jpg",
"Ps2Covers/SLUS-20902.jpg",
"Ps2Covers/SLUS-20904.jpg",
"Ps2Covers/SLUS-20905.jpg",
"Ps2Covers/SLUS-20907.jpg",
"Ps2Covers/SLUS-20931.jpg",
"Ps2Covers/SLUS-20932.jpg",
"Ps2Covers/SLUS-20945.jpg",
"Ps2Covers/SLUS-20946.jpeg",
"Ps2Covers/SLUS-20949.jpg",
"Ps2Covers/SLUS-20958.jpg",
"Ps2Covers/SLUS-20976.jpg",
"Ps2Covers/SLUS-20982.jpg",
"Ps2Covers/SLUS-21004.jpg",
"Ps2Covers/SLUS-21047.jpg",
"Ps2Covers/SLUS-21048.jpg",
"Ps2Covers/SLUS-21050.jpg",
"Ps2Covers/SLUS-21068.jpg",
"Ps2Covers/SLUS-21083.jpg",
"Ps2Covers/SLUS-21091.jpg",
"Ps2Covers/SLUS-21103.jpg",
"Ps2Covers/SLUS-21106.jpg",
"Ps2Covers/SLUS-21107.jpg",
"Ps2Covers/SLUS-21108.jpg",
"Ps2Covers/SLUS-21111.jpg",
"Ps2Covers/SLUS-21125.jpg",
"Ps2Covers/SLUS-21134.jpg",
"Ps2Covers/SLUS-21138.jpg",
"Ps2Covers/SLUS-21144.jpg",
"Ps2Covers/SLUS-21145.jpg",
"Ps2Covers/SLUS-21159.jpg",
"Ps2Covers/SLUS-21163.jpg",
"Ps2Covers/SLUS-21171.jpg",
"Ps2Covers/SLUS-21180.jpg",
"Ps2Covers/SLUS-21183.jpg",
"Ps2Covers/SLUS-21187.jpg",
"Ps2Covers/SLUS-21198.jpg",
"Ps2Covers/SLUS-21203.jpg",
"Ps2Covers/SLUS-21209.jpg",
"Ps2Covers/SLUS-21215.jpg",
"Ps2Covers/SLUS-21228.jpg",
"Ps2Covers/SLUS-21240.jpg",
"Ps2Covers/SLUS-21242.jpg",
"Ps2Covers/SLUS-21252.jpg",
"Ps2Covers/SLUS-21261.jpg",
"Ps2Covers/SLUS-21265.jpg",
"Ps2Covers/SLUS-21268.jpg",
"Ps2Covers/SLUS-21269.jpg",
"Ps2Covers/SLUS-21271.jpg",
"Ps2Covers/SLUS-21282.jpg",
"Ps2Covers/SLUS-21300.jpg",
"Ps2Covers/SLUS-21303.jpg",
"Ps2Covers/SLUS-21304.jpg",
"Ps2Covers/SLUS-21306.jpg",
"Ps2Covers/SLUS-21307.jpg",
"Ps2Covers/SLUS-21310.jpg",
"Ps2Covers/SLUS-21311.jpg",
"Ps2Covers/SLUS-21322.jpg",
"Ps2Covers/SLUS-21325.jpg",
"Ps2Covers/SLUS-21354.jpg",
"Ps2Covers/SLUS-21359.jpg",
"Ps2Covers/SLUS-21362.jpg",
"Ps2Covers/SLUS-21374.jpg",
"Ps2Covers/SLUS-21391.jpg",
"Ps2Covers/SLUS-21392.jpg",
"Ps2Covers/SLUS-21400.jpg",
"Ps2Covers/SLUS-21421.jpg",
"Ps2Covers/SLUS-21422.jpg",
"Ps2Covers/SLUS-21426.jpg",
"Ps2Covers/SLUS-21435.jpg",
"Ps2Covers/SLUS-21439.jpg",
"Ps2Covers/SLUS-21448.jpg",
"Ps2Covers/SLUS-21454.jpg",
"Ps2Covers/SLUS-21455.jpg",
"Ps2Covers/SLUS-21469.jpg",
"Ps2Covers/SLUS-21474.jpg",
"Ps2Covers/SLUS-21479.jpg",
"Ps2Covers/SLUS-21536.jpg",
"Ps2Covers/SLUS-21545.jpg",
"Ps2Covers/SLUS-21550.jpg",
"Ps2Covers/SLUS-21552.jpg",
"Ps2Covers/SLUS-21573.jpg",
"Ps2Covers/SLUS-21583.jpg",
"Ps2Covers/SLUS-21588.jpg",
"Ps2Covers/SLUS-21602.jpg",
"Ps2Covers/SLUS-21605.jpg",
"Ps2Covers/SLUS-21622.jpg",
"Ps2Covers/SLUS-21634.jpg",
"Ps2Covers/SLUS-21636.jpg",
"Ps2Covers/SLUS-21644.jpg",
"Ps2Covers/SLUS-21650.jpg",
"Ps2Covers/SLUS-21660.jpg",
"Ps2Covers/SLUS-21661.jpg",
"Ps2Covers/SLUS-21662.jpg",
"Ps2Covers/SLUS-21678.jpg",
"Ps2Covers/SLUS-21688.jpg",
"Ps2Covers/SLUS-21691.jpg",
"Ps2Covers/SLUS-21712.jpg",
"Ps2Covers/SLUS-21728.jpg",
"Ps2Covers/SLUS-21731.jpg",
"Ps2Covers/SLUS-21736.jpg",
"Ps2Covers/SLUS-21739.jpg",
"Ps2Covers/SLUS-21746.jpg",
"Ps2Covers/SLUS-21754.jpg",
"Ps2Covers/SLUS-21757.jpg",
"Ps2Covers/SLUS-21774.jpg",
"Ps2Covers/SLUS-21785.jpg",
"Ps2Covers/SLUS-21804.jpg",
"Ps2Covers/SLUS-21806.jpg",
"Ps2Covers/SLUS-21811.jpg",
"Ps2Covers/SLUS-21813.jpg",
"Ps2Covers/SLUS-21818.jpg",
"Ps2Covers/SLUS-21835.jpg",
"Ps2Covers/SLUS-21836.jpg",
"Ps2Covers/SLUS-21842.jpg",
"Ps2Covers/SLUS-21858.jpg",
"Ps2Covers/SLUS-21864.jpg",
"Ps2Covers/SLUS-21868.jpg",
"Ps2Covers/SLUS-21878.jpg",
"Ps2Covers/SLUS-21879.jpg",
"Ps2Covers/SLUS-21881.jpg",
"Ps2Covers/SLUS-21885.jpg",
"Ps2Covers/SLUS-21899.jpg",
"Ps2Covers/SLUS-21907.jpg",
"Ps2Covers/SLUS-21910.jpg",
"Ps2Covers/SLUS-21915.jpg",
"Ps2Covers/SLUS-21928.jpg",
"Ps2Covers/SLUS-21931.jpg",
"Ps2Covers/SLUS-21935.jpg",
"Ps2Covers/SLUS-21938.jpg",

"Ps2Covers/sega.jpeg",
"Ps2Covers/PAPX-90203.jpg"

];// Function to display images for the current page
function displayImages() {
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const imagesToShow = imagePaths.slice(start, end);

    const gameGrid = document.getElementById("game-grid");
    gameGrid.innerHTML = ""; // Clear existing images

    imagesToShow.forEach((imagePath) => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("icon");
        
        // Create image element
        const img = document.createElement("img");
        img.src = imagePath;
        img.alt = "Game Cover";
        img.loading = "lazy"; // For better performance
        
        // Create download button
        const downloadBtn = document.createElement("button");
        downloadBtn.classList.add("download");
        downloadBtn.textContent = "⬇";
        
        // Add click event to download the image
        downloadBtn.onclick = function() {
            const link = document.createElement("a");
            link.href = imagePath;
            // Extract filename from path
            const filename = imagePath.split('/').pop();
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        
        // Append image and button to gameItem
        gameItem.appendChild(img);
        gameItem.appendChild(downloadBtn);
        
        // Append gameItem to the grid
        gameGrid.appendChild(gameItem);
    });

    // Update page number
    document.getElementById("page-number").textContent = `${currentPage}`;
    
    // Update active state for pagination
    updatePagination();
}

// Function to update pagination buttons state
function updatePagination() {
    const totalPages = Math.ceil(imagePaths.length / imagesPerPage);
    const prevBtn = document.querySelector('.pagination a:first-child');
    const nextBtn = document.querySelector('.pagination a:last-child');
    
    // Disable previous button on first page
    if (currentPage === 1) {
        prevBtn.style.opacity = "0.5";
        prevBtn.style.cursor = "not-allowed";
        prevBtn.onclick = null;
    } else {
        prevBtn.style.opacity = "1";
        prevBtn.style.cursor = "pointer";
        prevBtn.onclick = function() { changePage(-1); return false; };
    }
    
    // Disable next button on last page
    if (currentPage === totalPages) {
        nextBtn.style.opacity = "0.5";
        nextBtn.style.cursor = "not-allowed";
        nextBtn.onclick = null;
    } else {
        nextBtn.style.opacity = "1";
        nextBtn.style.cursor = "pointer";
        nextBtn.onclick = function() { changePage(1); return false; };
    }
}

// Function to handle page change (next/previous)
function changePage(direction) {
    const totalPages = Math.ceil(imagePaths.length / imagesPerPage);
    const newPage = currentPage + direction;

    // Only change page if within valid range
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        displayImages();
        // Scroll to top of grid when changing pages
        document.getElementById('game-grid').scrollIntoView({ behavior: 'smooth' });
    }
}

// Add this at the end of your script.js file (after the existing code)

// Back button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-button');
    
    if (backButton) {
        backButton.addEventListener('click', function() {
           
            window.location.href = "index.html";
        });
        
        // Optional: Add keyboard shortcut (Escape key) for back
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                window.history.back();
            }
        });
    }
});


// Loading screen functionality
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        
        // Hide loading screen
        loadingScreen.style.opacity = '0';
        
        // Show main content after a short delay
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            
            // Add show class for fade in effect
            setTimeout(function() {
                mainContent.classList.add('show');
            }, 50);
        }, 500);
        
        // Initialize your gallery
        displayImages();
    }, 1500); // Adjust time (1500ms = 1.5 seconds)
});


// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayImages();
});

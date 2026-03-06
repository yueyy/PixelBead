const FULL_PALETTE = `
A1 #faf5cd
A2 #fcfed6
A3 #fcff92
A4 #f7ec5c
A5 #f0d83a
A6 #fda951
A7 #fa8c4f
A8 #fbda4d
A9 #f79d5f
A10 #f47e38
A11 #fedb99
A12 #fda276
A13 #fec667
A14 #f75842
A15 #fbf65e
A16 #feff97
A17 #fde173
A18 #fcbf80
A19 #fd7e77
A20 #f9d666
A21 #fae393
A22 #edf878
A23 #e4c8ba
A24 #f3f6a9
A25 #fdf785
A26 #ffc734
B1 #dff13b
B2 #64f343
B3 #a1f586
B4 #5fdf34
B5 #39e158
B6 #64e0a4
B7 #3eae7c
B8 #1d9b54
B9 #2a5037
B10 #9ad1ba
B11 #627032
B12 #1a6e3d
B13 #c8e87d
B14 #abe84f
B15 #305335
B16 #c0ed9c
B17 #9eb33e
B18 #e6ed4f
B19 #26b78e
B20 #cbeccf
B21 #18616a
B22 #0a4241
B23 #343b1a
B24 #e8faa6
B25 #4e846d
B26 #907c35
B27 #d0e0af
B28 #9ee5bb
B29 #c6df5f
B30 #e3fbb1
B31 #b4e691
B32 #92ad60
C1 #f0fee4
C2 #abf8fe
C3 #a2e0f7
C4 #44cdfb
C5 #06aadf
C6 #54a7e9
C7 #3977ca
C8 #0f52bd
C9 #3349c3
C10 #3cbce3
C11 #2aded3
C12 #1e334e
C13 #cde7fe
C14 #d5fcf7
C15 #21c5c4
C16 #1858a2
C17 #02d1f3
C18 #213244
C19 #18869d
C20 #1a70a9
C21 #bcddfc
C22 #6bb1bb
C23 #c8e2fd
C24 #7ec5f9
C25 #a9e8e0
C26 #42adcf
C27 #d0def9
C28 #bdcee8
C29 #364a89
D1 #acb7ef
D2 #868dd3
D3 #3554af
D4 #162d7b
D5 #b34ec6
D6 #b37bdc
D7 #8758a9
D8 #e3d2fe
D9 #d5b9f4
D10 #301a49
D11 #beb9e2
D12 #dc99ce
D13 #b5038d
D14 #862993
D15 #2f1f8c
D16 #e2e4f0
D17 #c7d3f9
D18 #9a64b8
D19 #d8c2d9
D20 #9a35ad
D21 #940595
D22 #38389a
D23 #eadbf8
D24 #768ae1
D25 #4950c2
D26 #d6c6eb
E1 #f6d4cb
E2 #fcc1dd
E3 #f6bde8
E4 #e8649e
E5 #f0569f
E6 #eb4172
E7 #c53674
E8 #fddbe9
E9 #e376c7
E10 #d13b95
E11 #f7dad4
E12 #f693bf
E13 #b5026a
E14 #fad4bf
E15 #f5c9ca
E16 #fbf4ec
E17 #f7e3ec
E18 #f9c8db
E19 #f6bbd1
E20 #d7c6ce
E21 #c09da4
E22 #b38c9f
E23 #937d8a
E24 #debee5
F1 #fe9381
F2 #f63d4b
F3 #ee4e3e
F4 #fb2a40
F5 #e10328
F6 #913635
F7 #911932
F8 #bb0126
F9 #e0677a
F10 #874628
F11 #592323
F12 #f3536b
F13 #f45c45
F14 #fcadb2
F15 #d50527
F16 #f8c0a9
F17 #e89b7d
F18 #d07f4a
F19 #be454a
F20 #c69495
F21 #f2b8c6
F22 #f7c3d0
F23 #ed806c
F24 #e09daf
F25 #e84854
G1 #ffe4d3
G2 #fcc6ac
G3 #f1c4a5
G4 #dcb387
G5 #e7b34e
G6 #e3a014
G7 #985c3a
G8 #713d2f
G9 #e4b685
G10 #da8c42
G11 #dac898
G12 #fec993
G13 #b2714b
G14 #8b684c
G15 #f6f8e3
G16 #f2d8c1
G17 #77544e
G18 #ffe3d5
G19 #dd7d41
G20 #a5452f
G21 #b38561
H1 #ffffff
H2 #fbfbfb
H3 #b4b4b4
H4 #878787
H5 #464648
H6 #2c2c2c
H7 #010101
H8 #e7d6dc
H9 #efedee
H10 #ebebeb
H11 #cdcdcd
H12 #fdf6ee
H13 #f4edf1
H14 #ced7d4
H15 #9aa6a6
H16 #1b1213
H17 #f0eeef
H18 #fcfff6
H19 #f2eee5
H20 #96a09f
H21 #f8fbe6
H22 #cacad2
H23 #9b9c94
M1 #bbc6b6
M2 #909994
M3 #697e81
M4 #e0d4bc
M5 #d1ccaf
M6 #b0aa86
M7 #b0a796
M8 #ae8082
M9 #a68862
M10 #c4b3bb
M11 #9d7693
M12 #644b51
M13 #c79266
M14 #c27563
M15 #747d7a
`
  .trim()
  .split(/\n+/)
  .map((line) => {
    const [code, hex] = line.trim().split(/\s+/);
    const rgb = hexToRgb(hex);
    return {
      name: code,
      code,
      rgb,
      lab: rgbToLab(rgb),
    };
  });

const PALETTE_LIBRARY_CODES = {
  full: FULL_PALETTE.map((color) => color.code),
  "168": [
    "B10", "C2", "C3", "C13", "D16", "D17", "B6", "C4", "C10", "C17", "D1", "D11",
    "C15", "C11", "C5", "C6", "C7", "D2", "B19", "B7", "C8", "C9", "D3", "C16",
    "E12", "E2", "E8", "D19", "D8", "D9", "E6", "E4", "E3", "E9", "D12", "D6",
    "E5", "E10", "D5", "D13", "D20", "D18", "E7", "E13", "D21", "D14", "D7", "D15",
    "C14", "B20", "C1", "B18", "M5", "M6", "B3", "B16", "B13", "B1", "G13", "F10",
    "B5", "B4", "B2", "B14", "G7", "F11", "B15", "B12", "B8", "B17", "B11", "G8",
    "A15", "A3", "A11", "A9", "F14", "F12", "A4", "A13", "A6", "F1", "F2", "F3",
    "A5", "A10", "A7", "F13", "F9", "F6", "A8", "A14", "F4", "F5", "F8", "F7",
    "E15", "E1", "E14", "E11", "H2", "H1", "A12", "G3", "G2", "G1", "A1", "H12",
    "G6", "G5", "G9", "M9", "H3", "H4", "G14", "M12", "G17", "H5", "H6", "H7",
    "H8", "G15", "A2", "H13", "G16", "H9", "H10", "M1", "G11", "G4", "M4", "H14",
    "M10", "M2", "G12", "M13", "M7", "H11", "M11", "M3", "G10", "M14", "M8", "M15",
    "E11", "E14", "F1", "A14", "M6", "M5", "E15", "F14", "F9", "F2", "G14", "M9",
    "E9", "E6", "F12", "F3", "F11", "M12", "D5", "E10", "F4", "F6", "G17", "H6",
  ],
  "144": [
    "B10", "C2", "C3", "C13", "D16", "D17", "B6", "C4", "C10", "C17", "D1", "D11",
    "C15", "C11", "C5", "C6", "C7", "D2", "B19", "B7", "C8", "C9", "D3", "C16",
    "E12", "E2", "E8", "D19", "D8", "D9", "E6", "E4", "E3", "E9", "D12", "D6",
    "E5", "E10", "D5", "D13", "D20", "D18", "E7", "E13", "D21", "D14", "D7", "D15",
    "C14", "B20", "C1", "B18", "M5", "M6", "B3", "B16", "B13", "B1", "G13", "F10",
    "B5", "B4", "B2", "B14", "G7", "F11", "B15", "B12", "B8", "B17", "B11", "G8",
    "A15", "A3", "A11", "A9", "F14", "F12", "A4", "A13", "A6", "F1", "F2", "F3",
    "A5", "A10", "A7", "F13", "F9", "F6", "A8", "A14", "F4", "F5", "F8", "F7",
    "E15", "E1", "E14", "E11", "H2", "H1", "A12", "G3", "G2", "G1", "A1", "H12",
    "G6", "G5", "G9", "M9", "H3", "H4", "G14", "M12", "G17", "H5", "H6", "H7",
    "H8", "G15", "A2", "H13", "G16", "H9", "H10", "M1", "G11", "G4", "M4", "H14",
    "M10", "M2", "G12", "M13", "M7", "H11", "M11", "M3", "G10", "M14", "M8", "M15",
  ],
  "72": [
    "B3", "C3", "D9", "E2", "G1", "A4", "B5", "C5", "D6", "E4", "G5", "A6",
    "B8", "C8", "D7", "F5", "G7", "A7", "H1", "H2", "H3", "H4", "H5", "H7",
    "C2", "C13", "D19", "E8", "A13", "A11", "C10", "C6", "D18", "E3", "A10", "G9",
    "C11", "C7", "D21", "D13", "F13", "G13", "B12", "D3", "D15", "E7", "F8", "G8",
    "A3", "B20", "D16", "D8", "E1", "G2", "B18", "B10", "D11", "D12", "E12", "G3",
    "B14", "B19", "D2", "D20", "E5", "F10", "B17", "B7", "C16", "D14", "E13", "F7",
  ],
};

const state = {
  image: null,
  sampledPixels: [],
  beadGrid: [],
  palette: [],
  visibleCodes: new Set(),
  paletteLibrary: "full",
  selectedCellIndex: -1,
  isBrushMode: false,
  isPainting: false,
  width: 48,
  height: 48,
};

const LAB_CACHE = new WeakMap();

const elements = {
  imageInput: document.querySelector("#imageInput"),
  beadWidth: document.querySelector("#beadWidth"),
  beadHeight: document.querySelector("#beadHeight"),
  beadWidthValue: document.querySelector("#beadWidthValue"),
  paletteLibrary: document.querySelector("#paletteLibrary"),
  paletteSize: document.querySelector("#paletteSize"),
  paletteSizeValue: document.querySelector("#paletteSizeValue"),
  cellSize: document.querySelector("#cellSize"),
  cellSizeValue: document.querySelector("#cellSizeValue"),
  lockAspect: document.querySelector("#lockAspect"),
  showCodes: document.querySelector("#showCodes"),
  generateButton: document.querySelector("#generateButton"),
  savePatternButton: document.querySelector("#savePatternButton"),
  selectedCellInfo: document.querySelector("#selectedCellInfo"),
  brushMode: document.querySelector("#brushMode"),
  cellColorSelect: document.querySelector("#cellColorSelect"),
  applyCellColorButton: document.querySelector("#applyCellColorButton"),
  clearSelectionButton: document.querySelector("#clearSelectionButton"),
  toggleAllColors: document.querySelector("#toggleAllColors"),
  paletteLegend: document.querySelector("#paletteLegend"),
  summaryText: document.querySelector("#summaryText"),
  statsCards: document.querySelector("#statsCards"),
  sourceCanvas: document.querySelector("#sourceCanvas"),
  previewCanvas: document.querySelector("#previewCanvas"),
  patternCanvas: document.querySelector("#patternCanvas"),
};

const sourceCtx = elements.sourceCanvas.getContext("2d");
const previewCtx = elements.previewCanvas.getContext("2d");
const patternCtx = elements.patternCanvas.getContext("2d");

boot();

function boot() {
  syncPaletteSizeLimit();
  bindEvents();
  paintCanvasPlaceholder(sourceCtx, "上传图片后显示像素画预览");
  paintCanvasPlaceholder(previewCtx, "生成后显示拼豆预览");
  paintCanvasPlaceholder(patternCtx, "这里显示拼豆图纸");
  renderEmptyStats();
}

function bindEvents() {
  elements.imageInput.addEventListener("change", handleImageUpload);
  elements.beadWidth.addEventListener("input", handleWidthInput);
  elements.beadHeight.addEventListener("input", handleHeightInput);
  elements.paletteLibrary.addEventListener("change", handlePaletteLibraryChange);
  elements.paletteSize.addEventListener("input", handlePaletteSizeInput);
  elements.cellSize.addEventListener("input", handleCellSizeInput);
  elements.showCodes.addEventListener("change", () => {
    if (state.beadGrid.length) drawPattern();
  });
  elements.brushMode.addEventListener("change", handleBrushModeChange);
  elements.lockAspect.addEventListener("change", () => {
    syncHeightByAspect();
    refreshSamplePreview();
    if (state.image) generatePattern();
  });
  elements.generateButton.addEventListener("click", generatePattern);
  elements.savePatternButton.addEventListener("click", savePatternImage);
  elements.applyCellColorButton.addEventListener("click", applySelectedCellColor);
  elements.clearSelectionButton.addEventListener("click", clearSelectedCell);
  elements.patternCanvas.addEventListener("click", handlePatternCanvasClick);
  elements.patternCanvas.addEventListener("mousedown", handlePatternPointerDown);
  elements.patternCanvas.addEventListener("mousemove", handlePatternPointerMove);
  elements.patternCanvas.addEventListener("mouseup", handlePatternPointerUp);
  elements.patternCanvas.addEventListener("mouseleave", handlePatternPointerUp);
  elements.toggleAllColors.addEventListener("click", toggleAllColors);
}

function handleImageUpload(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      state.image = img;
      resetGeneratedState();
      elements.generateButton.disabled = false;
      syncHeightByAspect();
      refreshSamplePreview();
      applyRecommendedPaletteSize();
      generatePattern();
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function handleWidthInput() {
  state.width = Number(elements.beadWidth.value);
  elements.beadWidthValue.textContent = String(state.width);
  syncHeightByAspect();
  refreshSamplePreview();
  if (state.image) generatePattern();
}

function handleHeightInput() {
  state.height = clampNumber(Number(elements.beadHeight.value), 1, 256);
  elements.beadHeight.value = String(state.height);
  refreshSamplePreview();
  if (state.image) generatePattern();
}

function handlePaletteSizeInput() {
  const paletteSize = clampNumber(Number(elements.paletteSize.value) || 1, 1, getActivePalette().length);
  elements.paletteSize.value = String(paletteSize);
  elements.paletteSizeValue.textContent = `${paletteSize} / ${getActivePalette().length}`;
  if (state.image && state.sampledPixels.length) {
    generatePattern();
  }
}

function handlePaletteLibraryChange() {
  state.paletteLibrary = elements.paletteLibrary.value;
  syncPaletteSizeLimit();
  if (state.image && state.sampledPixels.length) {
    generatePattern();
  }
}

function handleCellSizeInput() {
  elements.cellSizeValue.textContent = elements.cellSize.value;
  if (state.beadGrid.length) {
    drawPattern();
  }
}

function handleBrushModeChange() {
  state.isBrushMode = elements.brushMode.checked;
  state.isPainting = false;
  elements.patternCanvas.style.cursor = state.isBrushMode ? "crosshair" : "default";
  const frame = elements.patternCanvas.closest(".pattern-frame");
  frame.classList.toggle("is-brush-active", state.isBrushMode);
}

function resetGeneratedState() {
  state.sampledPixels = [];
  state.beadGrid = [];
  state.palette = [];
  state.visibleCodes = new Set();
  state.selectedCellIndex = -1;
  state.isPainting = false;
  elements.toggleAllColors.disabled = true;
  elements.savePatternButton.disabled = true;
  renderLegend();
  renderEmptyStats();
  syncCellEditor();
  paintCanvasPlaceholder(previewCtx, "生成后显示拼豆预览");
  paintCanvasPlaceholder(patternCtx, "这里显示拼豆图纸");
}

function syncHeightByAspect() {
  if (!state.image || !elements.lockAspect.checked) return;
  const aspectRatio = state.image.height / state.image.width;
  state.height = Math.max(1, Math.round(state.width * aspectRatio));
  elements.beadHeight.value = String(state.height);
}

function refreshSamplePreview() {
  if (!state.image) return;

  state.width = Number(elements.beadWidth.value);
  state.height = clampNumber(Number(elements.beadHeight.value), 1, 256);

  state.sampledPixels = rasterizeImageToPixels(state.image, state.width, state.height);
  drawPixelGrid(sourceCtx, elements.sourceCanvas, state.sampledPixels, state.width, state.height);
}

function applyRecommendedPaletteSize() {
  const activePalette = getActivePalette();
  if (!state.sampledPixels.length || !activePalette.length) return;

  const directMappedGrid = state.sampledPixels.map((pixel) => nearestPaletteColor(pixel, activePalette));
  const uniqueUsedCount = uniquePalette(directMappedGrid).length;
  const gridArea = state.width * state.height;
  const densityTarget = Math.round(Math.sqrt(gridArea) * 1.35);
  const recommended = clampNumber(
    Math.min(uniqueUsedCount, densityTarget, activePalette.length),
    6,
    activePalette.length
  );

  elements.paletteSize.value = String(recommended);
  elements.paletteSizeValue.textContent = `${recommended} / ${activePalette.length}`;
}

function generatePattern() {
  if (!state.image) return;
  if (!state.sampledPixels.length) refreshSamplePreview();

  const paletteSize = Number(elements.paletteSize.value);
  const activePalette = getActivePalette();
  if (paletteSize > activePalette.length) {
    window.alert(`颜色数量不能超过当前颜色库总数 ${activePalette.length}。`);
    elements.paletteSize.value = String(activePalette.length);
    elements.paletteSizeValue.textContent = `${activePalette.length} / ${activePalette.length}`;
    return;
  }

  const directMappedGrid = state.sampledPixels.map((pixel) => nearestPaletteColor(pixel, activePalette));
  const targetPalette = limitPaletteByImportance(state.sampledPixels, directMappedGrid, paletteSize);
  const initialBeadGrid = state.sampledPixels.map((pixel) => nearestPaletteColor(pixel, targetPalette));
  const lineConsistentGrid = enforceLineConsistency(
    state.sampledPixels,
    initialBeadGrid,
    state.width,
    state.height
  );
  const beadGrid = normalizeContourLines(
    state.sampledPixels,
    lineConsistentGrid,
    state.width,
    state.height
  );
  const paletteStats = buildPaletteStats(beadGrid);

  state.beadGrid = beadGrid;
  state.palette = paletteStats;
  state.visibleCodes = new Set(paletteStats.map((item) => item.code));
  if (state.selectedCellIndex >= beadGrid.length) {
    state.selectedCellIndex = -1;
  }

  drawPreview();
  drawPattern();
  renderLegend();
  renderStats();
  syncCellEditor();
  elements.toggleAllColors.disabled = false;
  elements.savePatternButton.disabled = false;
}

function rasterizeImageToPixels(image, width, height) {
  const sampleScale = 8;
  const offscreen = document.createElement("canvas");
  offscreen.width = width * sampleScale;
  offscreen.height = height * sampleScale;

  const ctx = offscreen.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, offscreen.width, offscreen.height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const fitted = fitContain(image.width, image.height, offscreen.width, offscreen.height);
  const offsetX = (offscreen.width - fitted.width) / 2;
  const offsetY = (offscreen.height - fitted.height) / 2;
  ctx.drawImage(image, offsetX, offsetY, fitted.width, fitted.height);

  const data = ctx.getImageData(0, 0, offscreen.width, offscreen.height).data;
  const pixels = [];

  for (let gridY = 0; gridY < height; gridY += 1) {
    for (let gridX = 0; gridX < width; gridX += 1) {
      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      let count = 0;

      for (let sampleY = 0; sampleY < sampleScale; sampleY += 1) {
        for (let sampleX = 0; sampleX < sampleScale; sampleX += 1) {
          const px = gridX * sampleScale + sampleX;
          const py = gridY * sampleScale + sampleY;
          const index = (py * offscreen.width + px) * 4;
          totalR += data[index];
          totalG += data[index + 1];
          totalB += data[index + 2];
          count += 1;
        }
      }

      pixels.push([
        Math.round(totalR / count),
        Math.round(totalG / count),
        Math.round(totalB / count),
      ]);
    }
  }

  return pixels;
}

function limitPaletteByImportance(sampledPixels, beadGrid, paletteSize) {
  const usedPalette = uniquePalette(beadGrid);
  if (usedPalette.length <= paletteSize) {
    return usedPalette;
  }

  const stats = new Map(
    usedPalette.map((color) => [
      color.code,
      {
        color,
        count: 0,
        penalty: 0,
      },
    ])
  );

  sampledPixels.forEach((pixel, index) => {
    const assigned = beadGrid[index];
    const assignedDistance = colorDistance(pixel, assigned.rgb);
    const fallbackDistance = nearestAlternativeDistance(pixel, usedPalette, assigned.code);
    const penalty = Math.max(0, fallbackDistance - assignedDistance);
    const entry = stats.get(assigned.code);

    entry.count += 1;
    entry.penalty += penalty;
  });

  const values = [...stats.values()];
  const maxCount = Math.max(...values.map((item) => item.count), 1);
  const maxPenalty = Math.max(...values.map((item) => item.penalty), 1);

  return values
    .map((item) => ({
      ...item,
      score: item.count / maxCount * 0.45 + item.penalty / maxPenalty * 0.55,
    }))
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      if (right.penalty !== left.penalty) return right.penalty - left.penalty;
      return right.count - left.count;
    })
    .slice(0, paletteSize)
    .map((item) => ({
      name: item.color.name,
      code: item.color.code,
      rgb: item.color.rgb.slice(),
    }));
}

function enforceLineConsistency(sampledPixels, beadGrid, width, height) {
  let refinedGrid = beadGrid.slice();

  for (let pass = 0; pass < 1; pass += 1) {
    const nextGrid = refinedGrid.slice();

    for (let index = 0; index < refinedGrid.length; index += 1) {
      const pixel = sampledPixels[index];
      const current = refinedGrid[index];
      const currentDistance = colorDistance(pixel, current.rgb);
      const candidates = collectLineCandidates(refinedGrid, index, width, height);

      if (!candidates.length) continue;

      const bestCandidate = candidates
        .map((candidate) => ({
          ...candidate,
          distance: colorDistance(pixel, candidate.color.rgb),
        }))
        .sort((left, right) => {
          if (right.weight !== left.weight) return right.weight - left.weight;
          return left.distance - right.distance;
        })[0];

      const withinTolerance =
        bestCandidate.distance <= currentDistance * 1.1 + 180 ||
        bestCandidate.weight >= 4;

      if (bestCandidate.color.code !== current.code && withinTolerance) {
        nextGrid[index] = bestCandidate.color;
      }
    }

    refinedGrid = nextGrid;
  }

  return refinedGrid;
}

function normalizeContourLines(sampledPixels, beadGrid, width, height) {
  const refinedGrid = beadGrid.slice();
  const visited = new Array(beadGrid.length).fill(false);

  for (let index = 0; index < beadGrid.length; index += 1) {
    if (visited[index] || !isContourPixel(sampledPixels, beadGrid, index, width, height)) continue;

    const component = collectContourComponent(sampledPixels, beadGrid, index, width, height, visited);
    if (component.length < 3) continue;

    const dominant = selectComponentColor(component, beadGrid);
    component.forEach((cellIndex) => {
      const pixel = sampledPixels[cellIndex];
      const current = refinedGrid[cellIndex];
      const dominantDistance = colorDistance(pixel, dominant.rgb);
      const currentDistance = colorDistance(pixel, current.rgb);

      if (dominant.code === current.code) return;
      if (dominantDistance <= currentDistance * 1.12 + 120) {
        refinedGrid[cellIndex] = dominant;
      }
    });
  }

  return refinedGrid;
}

function collectContourComponent(sampledPixels, beadGrid, startIndex, width, height, visited) {
  const queue = [startIndex];
  const component = [];
  visited[startIndex] = true;

  while (queue.length) {
    const index = queue.shift();
    component.push(index);

    getNeighborIndexes(index, width, height).forEach((neighborIndex) => {
      if (visited[neighborIndex]) return;
      if (!isContourPixel(sampledPixels, beadGrid, neighborIndex, width, height)) return;
      visited[neighborIndex] = true;
      queue.push(neighborIndex);
    });
  }

  return component;
}

function selectComponentColor(component, beadGrid) {
  const stats = new Map();

  component.forEach((index) => {
    const bead = beadGrid[index];
    const entry = stats.get(bead.code) || { bead, count: 0 };
    entry.count += 1;
    stats.set(bead.code, entry);
  });

  return [...stats.values()]
    .sort((left, right) => right.count - left.count)[0]
    .bead;
}

function isContourPixel(sampledPixels, beadGrid, index, width, height) {
  const pixel = sampledPixels[index];
  const bead = beadGrid[index];
  const luminance = getLuminance(pixel);
  const beadLuminance = getLuminance(bead.rgb);
  const neighborIndexes = getNeighborIndexes(index, width, height);

  let strongContrastCount = 0;
  let sameColorNeighbors = 0;

  neighborIndexes.forEach((neighborIndex) => {
    const neighborPixel = sampledPixels[neighborIndex];
    const neighborBead = beadGrid[neighborIndex];
    if (colorDistance(pixel, neighborPixel) > 280) {
      strongContrastCount += 1;
    }
    if (neighborBead.code === bead.code) {
      sameColorNeighbors += 1;
    }
  });

  const looksDark = luminance < 120 || beadLuminance < 130;
  const looksThin = sameColorNeighbors <= 2;
  return looksDark && strongContrastCount >= 2 && looksThin;
}

function getNeighborIndexes(index, width, height) {
  const x = index % width;
  const y = Math.floor(index / width);
  const neighbors = [];

  if (x > 0) neighbors.push(index - 1);
  if (x < width - 1) neighbors.push(index + 1);
  if (y > 0) neighbors.push(index - width);
  if (y < height - 1) neighbors.push(index + width);

  return neighbors;
}

function collectLineCandidates(grid, index, width, height) {
  const x = index % width;
  const y = Math.floor(index / width);
  const candidates = new Map();

  const left = x > 0 ? grid[index - 1] : null;
  const right = x < width - 1 ? grid[index + 1] : null;
  const top = y > 0 ? grid[index - width] : null;
  const bottom = y < height - 1 ? grid[index + width] : null;

  if (left && right && left.code === right.code) {
    upsertCandidate(candidates, left, 3);
  }

  if (top && bottom && top.code === bottom.code) {
    upsertCandidate(candidates, top, 3);
  }

  [left, right, top, bottom].forEach((neighbor) => {
    if (!neighbor) return;
    const count = countOrthogonalMatches(grid, index, width, height, neighbor.code);
    if (count >= 4) {
      upsertCandidate(candidates, neighbor, count);
    }
  });

  return [...candidates.values()];
}

function upsertCandidate(candidates, color, weight) {
  const existing = candidates.get(color.code);
  if (existing) {
    existing.weight = Math.max(existing.weight, weight);
    return;
  }

  candidates.set(color.code, { color, weight });
}

function countOrthogonalMatches(grid, index, width, height, code) {
  const x = index % width;
  const y = Math.floor(index / width);
  let count = 0;

  if (x > 0 && grid[index - 1].code === code) count += 1;
  if (x < width - 1 && grid[index + 1].code === code) count += 1;
  if (y > 0 && grid[index - width].code === code) count += 1;
  if (y < height - 1 && grid[index + width].code === code) count += 1;

  return count;
}

function getActivePalette() {
  const allowedCodes = new Set(PALETTE_LIBRARY_CODES[state.paletteLibrary] || PALETTE_LIBRARY_CODES.full);
  return FULL_PALETTE.filter((color) => allowedCodes.has(color.code));
}

function syncPaletteSizeLimit() {
  const maxColors = getActivePalette().length;
  elements.paletteSize.max = String(maxColors);
  const paletteSize = clampNumber(Number(elements.paletteSize.value) || 1, 1, maxColors);
  elements.paletteSize.value = String(paletteSize);
  elements.paletteSizeValue.textContent = `${paletteSize} / ${maxColors}`;
}

function drawPreview() {
  drawPixelGrid(
    previewCtx,
    elements.previewCanvas,
    state.beadGrid.map((bead) => bead.rgb),
    state.width,
    state.height
  );
}

function drawPattern() {
  const cols = state.width;
  const rows = state.height;
  const cellSize = Number(elements.cellSize.value);
  const labelBand = Math.max(22, Math.round(cellSize * 1.6));
  const canvasWidth = Math.max(720, Math.ceil(cols * cellSize + labelBand));
  const canvasHeight = Math.max(720, Math.ceil(rows * cellSize + labelBand));

  elements.patternCanvas.width = canvasWidth;
  elements.patternCanvas.height = canvasHeight;

  patternCtx.fillStyle = "#fffdfa";
  patternCtx.fillRect(0, 0, canvasWidth, canvasHeight);

  const offsetX = labelBand;
  const offsetY = labelBand;

  drawAxisLabels(cols, rows, cellSize, offsetX, offsetY);

  state.beadGrid.forEach((bead, index) => {
    const x = index % cols;
    const y = Math.floor(index / cols);
    const visible = state.visibleCodes.has(bead.code);
    const drawX = offsetX + x * cellSize;
    const drawY = offsetY + y * cellSize;

    patternCtx.fillStyle = visible ? rgbToHex(bead.rgb) : "#f6f0e8";
    patternCtx.fillRect(drawX, drawY, cellSize, cellSize);
    patternCtx.strokeStyle = "#d6c7b4";
    patternCtx.lineWidth = 1;
    patternCtx.strokeRect(drawX, drawY, cellSize, cellSize);

    if (index === state.selectedCellIndex) {
      patternCtx.strokeStyle = "#c85f3d";
      patternCtx.lineWidth = 3;
      patternCtx.strokeRect(drawX + 1, drawY + 1, cellSize - 2, cellSize - 2);
    }

    if (visible && elements.showCodes.checked && cellSize >= 14) {
      patternCtx.fillStyle = readableTextColor(bead.rgb);
      patternCtx.font = `${Math.max(9, Math.floor(cellSize * 0.44))}px sans-serif`;
      patternCtx.textAlign = "center";
      patternCtx.textBaseline = "middle";
      patternCtx.fillText(bead.code, drawX + cellSize / 2, drawY + cellSize / 2);
    }
  });
}

function drawAxisLabels(cols, rows, cellSize, offsetX, offsetY) {
  patternCtx.fillStyle = "#6b5b4f";
  patternCtx.font = `${Math.max(11, Math.floor(cellSize * 0.45))}px sans-serif`;
  patternCtx.textAlign = "center";
  patternCtx.textBaseline = "middle";

  for (let x = 0; x < cols; x += 1) {
    patternCtx.fillText(String(x + 1), offsetX + x * cellSize + cellSize / 2, offsetY / 2);
  }

  for (let y = 0; y < rows; y += 1) {
    patternCtx.fillText(String(y + 1), offsetX / 2, offsetY + y * cellSize + cellSize / 2);
  }
}

function drawPixelGrid(ctx, canvas, pixels, cols, rows) {
  clearCanvas(ctx, canvas);

  const cell = Math.min(canvas.width / cols, canvas.height / rows);
  const offsetX = (canvas.width - cols * cell) / 2;
  const offsetY = (canvas.height - rows * cell) / 2;

  pixels.forEach((pixel, index) => {
    const rgb = pixel.rgb || pixel;
    const x = index % cols;
    const y = Math.floor(index / cols);
    ctx.fillStyle = rgbToHex(rgb);
    ctx.fillRect(offsetX + x * cell, offsetY + y * cell, cell, cell);
  });
}

function renderLegend() {
  if (!state.palette.length) {
    elements.paletteLegend.className = "palette-legend empty-state";
    elements.paletteLegend.textContent = "生成后这里会显示颜色列表和用量。";
    return;
  }

  elements.paletteLegend.className = "palette-legend";
  elements.paletteLegend.innerHTML = state.palette
    .map(
      (color) => `
        <label class="legend-item">
          <input type="checkbox" data-code="${color.code}" ${state.visibleCodes.has(color.code) ? "checked" : ""} />
          <span class="legend-swatch" style="background:${color.hex}"></span>
          <div class="legend-meta">
            <strong>${color.name} · ${color.code}</strong>
            <span>${color.hex} · ${color.count} 粒</span>
          </div>
        </label>
      `
    )
    .join("");

  elements.paletteLegend.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const code = event.target.dataset.code;
      if (event.target.checked) {
        state.visibleCodes.add(code);
      } else {
        state.visibleCodes.delete(code);
      }
      drawPattern();
    });
  });
}

function renderStats() {
  elements.summaryText.textContent = `图纸已生成，共 ${state.width} × ${state.height} 粒，基于等比缩放后的像素画生成。`;
  elements.statsCards.innerHTML = `
    <article>
      <span>图纸尺寸</span>
      <strong>${state.width} × ${state.height}</strong>
    </article>
    <article>
      <span>总粒数</span>
      <strong>${state.beadGrid.length}</strong>
    </article>
    <article>
      <span>颜色数</span>
      <strong>${state.palette.length}</strong>
    </article>
  `;
}

function renderEmptyStats() {
  elements.summaryText.textContent = "上传图片后会显示等比缩放后的像素画，再生成拼豆图纸。";
  elements.statsCards.innerHTML = `
    <article>
      <span>图纸尺寸</span>
      <strong>0 × 0</strong>
    </article>
    <article>
      <span>总粒数</span>
      <strong>0</strong>
    </article>
    <article>
      <span>颜色数</span>
      <strong>0</strong>
    </article>
  `;
}

function toggleAllColors() {
  if (!state.palette.length) return;

  const allSelected = state.palette.every((item) => state.visibleCodes.has(item.code));
  state.visibleCodes = allSelected ? new Set() : new Set(state.palette.map((item) => item.code));
  renderLegend();
  drawPattern();
}

function savePatternImage() {
  if (!state.beadGrid.length) return;

  const link = document.createElement("a");
  const stamp = `${state.width}x${state.height}-${state.paletteLibrary}-${state.palette.length}c`;
  link.href = elements.patternCanvas.toDataURL("image/png");
  link.download = `bead-pattern-${stamp}.png`;
  link.click();
}

function handlePatternCanvasClick(event) {
  if (!state.beadGrid.length) return;
  if (state.isBrushMode) return;

  const cellIndex = getPatternCellIndexFromEvent(event);
  if (cellIndex < 0) return;

  state.selectedCellIndex = cellIndex;
  drawPattern();
  syncCellEditor();
}

function handlePatternPointerDown(event) {
  if (!state.isBrushMode || !state.beadGrid.length) return;

  const cellIndex = getPatternCellIndexFromEvent(event);
  if (cellIndex < 0) return;

  state.isPainting = true;
  paintCellWithSelectedColor(cellIndex);
}

function handlePatternPointerMove(event) {
  if (!state.isBrushMode || !state.isPainting || !state.beadGrid.length) return;

  const cellIndex = getPatternCellIndexFromEvent(event);
  if (cellIndex < 0) return;

  paintCellWithSelectedColor(cellIndex);
}

function handlePatternPointerUp() {
  state.isPainting = false;
}

function getPatternCellIndexFromEvent(event) {
  const cols = state.width;
  const rows = state.height;
  const cellSize = Number(elements.cellSize.value);
  const labelBand = Math.max(22, Math.round(cellSize * 1.6));
  const rect = elements.patternCanvas.getBoundingClientRect();
  const scaleX = elements.patternCanvas.width / rect.width;
  const scaleY = elements.patternCanvas.height / rect.height;
  const x = (event.clientX - rect.left) * scaleX;
  const y = (event.clientY - rect.top) * scaleY;
  const gridX = Math.floor((x - labelBand) / cellSize);
  const gridY = Math.floor((y - labelBand) / cellSize);

  if (gridX < 0 || gridY < 0 || gridX >= cols || gridY >= rows) {
    return -1;
  }

  return gridY * cols + gridX;
}

function syncCellEditor() {
  const hasSelection = state.selectedCellIndex >= 0 && state.selectedCellIndex < state.beadGrid.length;
  const activePalette = getActivePalette();

  elements.cellColorSelect.innerHTML = activePalette
    .map((color) => `<option value="${color.code}">${color.code} · ${rgbToHex(color.rgb)}</option>`)
    .join("");

  elements.cellColorSelect.disabled = !hasSelection;
  elements.applyCellColorButton.disabled = !hasSelection;
  elements.clearSelectionButton.disabled = !hasSelection;

  if (!hasSelection) {
    elements.selectedCellInfo.textContent = "未选中格子";
    return;
  }

  const x = state.selectedCellIndex % state.width;
  const y = Math.floor(state.selectedCellIndex / state.width);
  const bead = state.beadGrid[state.selectedCellIndex];
  elements.selectedCellInfo.textContent = `已选中第 ${x + 1} 列，第 ${y + 1} 行，当前颜色 ${bead.code}`;
  elements.cellColorSelect.value = bead.code;
}

function applySelectedCellColor() {
  if (state.selectedCellIndex < 0 || !state.beadGrid.length) return;
  paintCellWithSelectedColor(state.selectedCellIndex);
}

function clearSelectedCell() {
  state.selectedCellIndex = -1;
  drawPattern();
  syncCellEditor();
}

function paintCellWithSelectedColor(cellIndex) {
  const selectedCode = elements.cellColorSelect.value;
  const nextColor = getActivePalette().find((color) => color.code === selectedCode);
  if (!nextColor) return;

  const current = state.beadGrid[cellIndex];
  state.selectedCellIndex = cellIndex;
  if (current && current.code === nextColor.code) {
    drawPattern();
    syncCellEditor();
    return;
  }

  state.beadGrid[cellIndex] = nextColor;
  state.palette = buildPaletteStats(state.beadGrid);
  state.visibleCodes.add(nextColor.code);

  drawPreview();
  drawPattern();
  renderLegend();
  renderStats();
  syncCellEditor();
}

function buildPaletteStats(beadGrid) {
  const counts = new Map();

  beadGrid.forEach((bead) => {
    counts.set(bead.code, (counts.get(bead.code) || 0) + 1);
  });

  return uniquePalette(beadGrid)
    .map((bead) => ({
      ...bead,
      count: counts.get(bead.code) || 0,
      hex: rgbToHex(bead.rgb),
    }))
    .sort((left, right) => right.count - left.count);
}

function uniquePalette(colors) {
  const map = new Map();
  colors.forEach((color) => {
    map.set(color.code, color);
  });
  return [...map.values()];
}

function nearestPaletteColor(rgb, palette) {
  let best = palette[0];
  let bestDistance = Number.POSITIVE_INFINITY;

  palette.forEach((color) => {
    const distance = colorDistance(rgb, color);

    if (distance < bestDistance) {
      bestDistance = distance;
      best = color;
    }
  });

  return best;
}

function nearestAlternativeDistance(rgb, palette, excludedCode) {
  let bestDistance = Number.POSITIVE_INFINITY;

  palette.forEach((color) => {
    if (color.code === excludedCode) return;
    const distance = colorDistance(rgb, color.rgb);
    if (distance < bestDistance) {
      bestDistance = distance;
    }
  });

  return bestDistance === Number.POSITIVE_INFINITY ? Number.MAX_SAFE_INTEGER : bestDistance;
}

function colorDistance(left, right) {
  const leftLab = toLab(left);
  const rightLab = toLab(right);
  return (
    (leftLab[0] - rightLab[0]) ** 2 +
    (leftLab[1] - rightLab[1]) ** 2 +
    (leftLab[2] - rightLab[2]) ** 2
  );
}

function fitContain(sourceWidth, sourceHeight, targetWidth, targetHeight) {
  const ratio = Math.min(targetWidth / sourceWidth, targetHeight / sourceHeight);
  return {
    width: Math.max(1, Math.round(sourceWidth * ratio)),
    height: Math.max(1, Math.round(sourceHeight * ratio)),
  };
}

function clearCanvas(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function paintCanvasPlaceholder(ctx, text) {
  const canvas = ctx.canvas;
  clearCanvas(ctx, canvas);
  ctx.fillStyle = "#fff9f1";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#8e7a67";
  ctx.font = '24px sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

function rgbToHex(rgb) {
  return `#${rgb.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

function getLuminance(rgb) {
  return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ];
}

function toLab(color) {
  if (Array.isArray(color)) {
    const cached = LAB_CACHE.get(color);
    if (cached) return cached;
    const computed = rgbToLab(color);
    LAB_CACHE.set(color, computed);
    return computed;
  }

  if (color.lab) return color.lab;

  const cached = LAB_CACHE.get(color);
  if (cached) return cached;

  const computed = rgbToLab(color.rgb || color);
  LAB_CACHE.set(color, computed);
  return computed;
}

function rgbToLab(rgb) {
  const [r, g, b] = rgb.map((value) => {
    const normalized = value / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  const x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) / 0.95047;
  const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
  const z = (r * 0.0193339 + g * 0.119192 + b * 0.9503041) / 1.08883;

  const fx = xyzToLabPivot(x);
  const fy = xyzToLabPivot(y);
  const fz = xyzToLabPivot(z);

  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

function xyzToLabPivot(value) {
  return value > 0.008856 ? value ** (1 / 3) : 7.787037 * value + 16 / 116;
}

function readableTextColor(rgb) {
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return luminance > 0.62 ? "#2d241d" : "#fefcf8";
}

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

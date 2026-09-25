export interface VideoTranscript {
  label: string;
  summary: string;
  captions: string[];
}

export const videoTranscripts: VideoTranscript[] = [
  {
    label: "Processing",
    summary:
      "Raw cashews are soaked, steamed and hand-peeled so the nut keeps its natural shape and nutrients.",
    captions: [
      "Fresh cashews arrive from partner farms along the Tanzanian coast.",
      "Nuts are soaked and steamed to loosen the shell without losing flavour.",
      "Each kernel is peeled by hand, then dried in the sun.",
    ],
  },
  {
    label: "Roasting",
    summary: "Peeled cashews are dry-roasted in small batches until they turn golden and crisp.",
    captions: [
      "Dry-roasting brings out the natural sweetness of the cashew.",
      "Small batches keep the texture even and the centre soft.",
      "Cooling happens fast to lock in the crunch.",
    ],
  },
  {
    label: "Sorting",
    summary: "Every batch is hand-sorted: whole nuts first, broken pieces packed separately.",
    captions: [
      "Nuts are graded by size, colour and integrity.",
      "Perfect kernels go into the premium range.",
      "Nothing is wasted: pieces are packed as a crunchy option.",
    ],
  },
  {
    label: "Packing",
    summary: "Sealed in food-grade pouches, labelled with the roast date and packed in Arusha.",
    captions: [
      "Each pouch is sealed to keep the cashews fresh.",
      "Labels show the roast date and pack size.",
      "Orders are prepared in Arusha and dispatched worldwide.",
    ],
  },
  {
    label: "Honey Glazed",
    summary: "Cashews are tumbled with wildflower honey for a light, natural glaze.",
    captions: [
      "Wildflower honey is folded through warm cashews.",
      "The tumble coats every nut in a thin, even glaze.",
      "No artificial sweeteners, just honey and cashews.",
    ],
  },
];

export const heroVideoTranscript: VideoTranscript = {
  label: "From farm to table",
  summary:
    "Sun-warmed coastal plains, hand-picked cashews, slow roasted and sealed fresh in Tanzania.",
  captions: [
    "Cashews grow along Tanzania's sun-warmed coastal plains.",
    "Nuts are hand-picked at peak ripeness.",
    "Every batch is slow roasted, then sealed fresh.",
  ],
};

(function () {
  var threat = // begin JSON 
  {
    id: "T7",
    name: "Correlation by Data Exchange",
    desc: "using multiple contextualized unique DIDs with different parties can lead to correlation if, in the context of those DIDs, the user exchanges additional correlatable information. For example, sharing an address in order to receive a product, allows anyone who received that address to correlate the user as potentially the same person.",
    response: [
      { id: "R9", name: "Duty of Loyalty (repeat)", desc: "Paper: A Duty of Loyalty for Privacy Law" },
      { id: "Rx", name: "TOS (don't correlate)" },
      { id: "Rx2", name: "Zero Knowledge Proofs / Selective Disclosure" },
      { id: "Rx3", name: "Data Minimization" }
    ],
    elements: [],
    taxonomyName: "STRIDE",
    taxonomyClass: "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
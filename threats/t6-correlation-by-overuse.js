(function () {
  var threat = // begin JSON 
  {
    id: "T6",
    name: "Correlation by Overuse (Supercookie)",
    desc: "when a user creates, maintains, and uses a single DID for interacting with multiple parties, those parties are able to use that DID to correlate user activity. This is especially true when user activity is correlated similarly to what is currently done for web analytics using cloud-based data aggregators. Such a universal DID could enable ‘super cookie’ functionality.\n\nEven when bootstrapping a new unique contextual DID after authenticating using an initial DID, the recipient will still know the initial DID and be able to correlate activity between the second DID and the first.",
    response: [
      {
        id: "R1",
        name: "Convey Threat Likelihood (repeat?)",
        type: "Transfer",
        desc: "When users create a DID, explicitly communicate the data use policies in terms that users can understand. Enable users to create multiple DIDs and recommend using peer DIDs for each connection the user establishes."
      },
      {
        id: "Rx",
        name: "Contextual Unique DIDs",
        desc: ""
      }
    ],
    elements: ["E1", "E7"],
    taxonomyName: "STRIDE",
    taxonomyClass: "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
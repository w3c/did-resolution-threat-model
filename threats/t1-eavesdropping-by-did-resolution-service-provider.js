(function () {
  var threat = 
    {
      id: "T1",
      name: "Eavesdropping by a DID Resolution Service Provider",
      desc: "DID Resolution Service providers receive a significant amount of data that may reveal personal or proprietary information.",
      response: [
        {
          id: "R1",
          name: "Convey Threat Likelihood",
          type: "Transfer",
          desc: "When onboarding users to any particular DID Resolution Service Provider, explicitly communicate the data use policy in terms that users can understand."
        },
        {
          id: "R2",
          name: "Purpose Binding",
          type: "Reduce",
          desc: "Restrict the use of data provided to DID Resolution Service Providers to explicit purpose as agreed to by the user."
        },
        {
          id: "R3",
          name: "Recommend Local Resolution",
          type: "Accept",
          desc: "When explaining DID Resolution, educate users about the tradeoffs of running a local resolver versus using a service provider."
        },
        {
          id: "R4",
          name: "Local Resolution",
          type: "Transfer",
          desc: "Use a locally controlled resolver rather than using a service provider."
        }
      ],
      elements: ["E7", "F1", "C2", "P2", "D7"],
      taxonomyName: "STRIDE",
      taxonomyClass: "Information Disclosure"
    };
   
  window.ThreatModel.register(threat);
})();

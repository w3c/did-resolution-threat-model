(function () {
  var threat = {
    id: "T4",
    name: "Unsported DID methods",
    desc: "User has a DID URL that none of the configured resolvers supports",
    response: [{
      id: "R2",
      name: "User selected resolvers",
      desc: "When using a DID enabled application, it is vital that end-users can decide which resolver to use for which DID method. This ensures that end users can rely on the resolver that best aligns with their interests and concerns, including avoiding risks from centralized authorities."
    }],
    elements: ["C1", "C3", "P3"],
    framework: {
      name: "NONE",
      type: "?"
    }
  };

  window.ThreatModel.register(threat);
})();
(function () {
  var threat = {
    id: "T1",
    name: "Interference by a central authority",
    desc: "Decentralized identifiers can be co-opted by the state in a number of ways.When identifiers are controlled by central authorities, it is possible for that authority--or any hacker with access to that authority's system--to manipulate the identity system by disabling identifiers, taking control over identifiers, or simply tracking their use.",
    image: {
      src: "diagrams/DID Key Single Device Resolution with Library.svg",
      alt: "DID Key Single Device Resolution with Library",
      caption: "DID Key Single Device Resolution with Library"
    },
    response: [{
      id: "R1",
      name: "User Selected Client",
      desc: "Allow end-users to choose the software they use to present and use [=Decentralized Identifiers=]. When free to decide which software to use on the client-side, there is an increased chance that the software chosen supports features that favor the individual rather than any given authority. This includes the possibility that the user writes their own software.",
      type: "Reduce"
    }, {
      id: "R2",
      name: "User selected resolvers",
      desc: "When using a DID enabled application, it is vital that end-users can decide which resolver to use for which DID method. This ensures that end users can rely on the resolver that best aligns with their interests and concerns, including avoiding risks from centralized authorities."
    }],
    elements: ["C1", "C3", "P3"],
    framework: {
      name: "STRIDE",
      type: "spoofing"
    }
  };

  window.ThreatModel.register(threat);
})();
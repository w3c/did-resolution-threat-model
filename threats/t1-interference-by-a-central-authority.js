function () {
  var threat = {
    id: "T1",
    name: "Interference by a central authority",
    desc: "",
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
    elements: ["C1", "C3", "P4"],
    framework: "STRIDE",
    frameworkCategory: "spoofing"
  };

  window.threatmodel.registerThreat(threat);

} (); 
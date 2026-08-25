(
  function () {
    var threatCategories = [{
      name: "Target Threats",
      id: "target-threats",
      threats: ["T1"]
      },
      {
        name: "Implementation Threats",
        id: "implementation-threats",
        threats: [ "T2", "T3","T4","T5"]
      },
      {
        name: "DID Threats",
        id: "did-threats",
        threats: ["T6", "T7", "T8"]
      }
    ];

    window.ThreatModel.registerCategories(threatCategories);

  })();

(
  function () {
    var threatCategories = [{
      name: "Target Threats",
      id: "target-threats",
      threats: ["T1", "T2", "T5"]
    },
    {
      name: "Implementation Threats",
      id: "implementation-threats",
      threats: ["T4"]
    },];

    window.ThreatModel.registerCategories(threatCategories);

  })();

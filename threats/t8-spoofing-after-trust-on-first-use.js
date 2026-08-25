(function () {
  var threat = // begin JSON 
  {
    id: "T8",
    name: "Spoofing after Trust on First Use",
    desc: "when a human user proves control over a DID, it is often interpreted as a proof of identity during subsequent uses of the DID. Proving ownership or control of a DID is done by demonstrating control over the private key upon which the DID is based. If a user device that holds a DID (and the associated cryptographic keys) is compromised, then the compromising malware may be asserting control of the DID by virtue of its control of the associated private key. As such, human operator identity may not be reliable.",
    response: [
      {
        id: "R1",
        name: "Convey Threat Likelihood",
        type: "Transfer",
        desc: "Explicitly convey to DID holders and verifiers that proving control of a DID does not fully establish the controller’s identity, which should be verified."
      }
    ],
    elements: [],
    taxonomyName: "STRIDE",
    taxonomyClass: "Spoofing"
  };

  window.ThreatModel.register(threat);
})();
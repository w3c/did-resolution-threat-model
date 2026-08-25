(function () {
  var threat = // begin JSON 
  {
    id: "T5",
    name: "Repudiation by Proxying Resolver",
    desc: "Proxying resolvers, who pass incoming resolution requests to another resolver before passing the result back, may deny that they were responsible for any particular result to a client, asserting that the errant result was the output of a secondary resolver.",
    response: [
      {
        id: "R4",
        name: "Direct Resolution (repeat)",
        type: "Eliminate",
        desc: "Instead of using a proxying resolver, choose trustworthy first party resolvers with whom you communicate directly."
      },
      {
        id: "R5",
        name: "Local Resolution (repeat)",
        type: "Eliminate",
        desc: "Instead of using an external resolver, run your own resolver."
      },
      {
        id: "R6",
        name: "Terms of Service (no proxying) (repeat)",
        type: "Transfer",
        desc: "Use explicit terms of service that include a commitment to performing resolution directly instead of proxying to third party services. This provides explicit documentation of expectations, and legal accountability should the resolving party break that agreement."
      }, {
        id: "R10",
        name: "Trust (repeat)",
        type: "Accept",
        desc: "The DID security model depends on trusting the resolver to honestly return the result from each DID's resolution process. Given the necessary trust for executing a complex algorithm correctly, clients can choose to also trust the resolver to select trustworthy secondary resolvers."
      },
      {
        id: "R11",
        name: "Signed Resolution Results (Repeat)",
        type: "Eliminate",
        desc: "Have secondary resolvers add a tamper-evident, cryptographic signature to all results returned to the proxy, ensuring the calling client can verify the result has not been tampered with by the proxying resolver. This requires the client to either know or be able to verify the public key or cryptographic identifier used to generate the signature."
      }
    ],
    elements: [],
    taxonomyName: "STRIDE",
    taxonomyClass: "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
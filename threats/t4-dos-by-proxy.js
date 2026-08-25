(function () {
  var threat = // begin JSON 
  {
    id: "T4",
    name: "DOS by Proxy",
    desc: "Proxying resolvers, who pass incoming resolution requests to another resolver before passing the result back, can arbitrarily choose to deny proxy service to some or all secondary resolvers. This may be for legitimate business reasons (the secondary resolver charges too much) or for malicious reasons (to disrupt clients that have become dependent on that proxied result).",
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
      },
      {
        id: "R12",
        name: "Terms of Service (assurance)",
        type: "Transfer",
        desc: "Resolvers can include in their terms of service a guarantee to resolve all requests for specific DID methods, regardless of back-end service providers."
      },
      {
        id: "R10",
        name: "Trust (repeat)",
        type: "Accept",
        desc: "The DID security model depends on trusting the resolver to honestly return the result from each DID's resolution process. Given the necessary trust for executing a complex algorithm correctly, clients can choose to also trust the resolver to select trustworthy secondary resolvers."
      }
    ],
    elements: [],
    taxonomyName: "STRIDE",
    taxonomyClass: "Denial"
  };

  window.ThreatModel.register(threat);
})();
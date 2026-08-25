(function () {
  var threat = {
    id: "T2",
    name: "Surveillance by Proxy",
    desc: "Proxying resolvers, who pass incoming resolution requests to another resolver before passing the result back, enable the initial resolver to observe all traffic to all proxied resolvers.",
    response: [
      {
        id: "R4",
        name: "Direct Resolution",
        type: "Eliminate",
        desc: "Instead of using a proxying resolver, choose trustworthy first party resolvers with whom you communicate directly."
      },
      {
        id: "R5",
        name: "Local Resolution",
        type: "Eliminate",
        desc: "Instead of using an external resolver, run your own resolver."
      },
      {
        id: "R6",
        name: "Terms of Service (no proxying)",
        type: "Transfer",
        desc: "Use explicit terms of service that include a commitment to performing resolution directly instead of proxying to third party services. This provides explicit documentation of expectations, and legal accountability should the resolving party break that agreement."
      },
      {
        id: "R8",
        name: "Duty of Care",
        type: "Transfer",
        desc: "Establish legally enforced duty of care, either by statute or precedent, which holds resolvers responsible as agents acting on behalf of clients. Duty of care pertains to the treatment of sensitive data in their possession. This response likely entails both contractual elements and either legislative or court-based engagement, or, more likely, both."
      },
      {
        id: "R9",
        name: "Duty of Loyalty",
        type: "Transfer",
        desc: "Establish legally enforced duty of loyalty, either by statute or precedent, which holds resolvers responsible as agents acting on behalf of clients. Duty of loyalty pertains to the use of sensitive data contrary to the interest of the client. This response likely entails both contractual elements and either legislative or court-based engagement, or, more likely, both."
      },
      {
        id: "R10",
        name: "Trust",
        type: "Accept",
        desc: "The DID security model depends on trusting the resolver to honestly return the result from each DID's resolution process. Given the necessary trust for executing a complex algorithm correctly, clients can choose to also trust the resolver to select trustworthy secondary resolvers."
      }],
    elements: [],
    taxonomyName: "STRIDE",
    taxonomyClass: "Information Disclosure"
  };
   
  window.ThreatModel.register(threat);
})();

---
name: New Threat
about: Use this issue to propose a new threat for the model
title: Proposed Threat
labels: ''
assignees: ''

---

Replace the bracketed sections with your new threat, filling in as much as you can and deleting the rest. A good name and short description is a solid start for a new threat. 

# Name
[A short, descriptive name for the threat]

# Description
[A prose description describing the threat.]

# ID
[An ID for the threat, unique to this threat model. This is quite likely to change, but propose an ID to get the ball rolling.]

# Responses
[Include values for each property in each response. Multiple responses to a single threat are welcome.]

## Response ID
[Identify your response with a unique ID, preferably beginning with an "R" followed by increasing numeric value, e.g., "R1", "R2", etc. This should be unique across the entire threat model.]

If a response is 

## Response Name
[A short, descriptive name.]

## Response Description
[A non-normative statement describing what implementing the response looks like. (Avoid conformance language like MUST or SHOULD. Just describe what is done.)]

# Elements
[List the elements from the Data Flow Diagram, by ID, that are affected by this threat.]

# Taxonomy
[Specify the taxonomy used to identify the threat (STRIDE, OSTMM3, LINDUN, etc.).]

# Threat Class
[Specify the type of threat as defined by the taxonomy.]

# Tags
[Add any tags. "security" and "privacy" tags are used in this model to indicate if a threat addresses a security or privacy consideration, respectively.]

# Source
[If you'd like your contact information associated with this threat, add add a "person" entry from the [Respec documentation](https://respec.org/docs/#person).]
```
  {
      name: "Alice Smith",
      url: "https://alice.example/",
      company: "Example Corp",
      companyURL: "https://example.org/",
      w3cid: 12345,
      orcid: "https://orcid.org/0000-0001-2345-6789",
      note: "Invited Expert",
      extras: [
        {
          name: "Personal blog",
          href: "https://alice.example/blog",
          class: "blog",
        }
      ],
    }
```

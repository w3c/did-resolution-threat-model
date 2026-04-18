(function () {

  var threats = [];
  var threatCategories = [];
  const toc = document.getElementById("threat-toc");
  const threatSection = document.getElementById("threat-details");

  function render() {
    console.log("render");
    renderToc(threats);
    renderThreats(threats);
  }

  function renderTags(threat) {
    console.log("renderTags", threat);
    let tags = threat?.tags;
    if (!tags || !tags.length)
      return '';

    let tagsHtml = tags.map(tag => `
          <span class="threat-tag threat-tag-${tag}">${tag}</span>
        `).join("");

    return tagsHtml;
  }

  function renderToc(threats) {
    console.log("renderToc", threats);

    if (!threats || !threats.length) {
      console.warn("No threats to render in renderToc");
      return;
    }

    if (!toc) {
      console.warn("No Threat Toc found (id must be 'threat-toc'");
      return;
    }

    var threatCount = 1;
    let tocHtml = threatCategories.map(category => {
      return `
        <p class="threatCategory">${category.name}</p>
        <ol class="threat-toc">
          ${category.threats.map((threatId) => {
        threatCount++;
        return renderTocEntry(threatId);
      }).join("")}
        </ol>
        `;
    }).join("");

    toc.innerHTML = `
      <h2>Threat List</h2>
        ${tocHtml}
      `;
    return;

    function renderTocEntry(threatId) {
      console.log("renderTocEntry", threatId);
      let threatValue = threatId.substring(1);

      let threat = getThreat(threatId);
      if (!threat) {
        return `<li value="${threatValue}">Threat ${threatId} not found</li>`;
      }

      let id = makeId(threat);

      return `<li value="${threatValue}"><a href="#${id}">${threat.name}</a> ${renderTags(threat)}
    </li>`;
    }

    return;
  }

  function getThreat(threatId) {
    console.log("getThreat", threatId);
    let threat = threats.find(threat => threat.id === threatId);
    return threat;
  }

  function makeId(threat) {
    var id = `${threat.id}-${threat.name}`;
    id = id.toLowerCase();
    id = id.replace(/ /g, "-");
    return id;
  }


  function renderThreats(threats) {

    console.log("renderThreats", threats);
    if (!threats || !threats.length) {
      console.warn("No threats to render in renderThreats");
      return;
    }

    if (!threatSection) {
      console.warn("No Threat Section found (id must be 'threats'");
      return;
    }

    let threatsHtml = threatCategories.map(category => {
      return `
        <p class="threatCategory">${category.name}</p>
          ${category.threats.map((threatId) => {
        return renderThreat(threatId);
      }).join("")}`;
    }).join("");

    threatSection.innerHTML = `
      <h2>Threat Details</h2>
        ${threatsHtml}
      `;
    return;

    function renderThreat(threatId) {
      console.log("renderThreat", threatId);
      let threat = getThreat(threatId);

      if (!threat)
        return `<p>Threat ${threatId} not found.</p>`;

      let id = makeId(threat);
      return `
      <section class="threatDetail">
        <h5 id="${id}">${threat.id}. ${threat.name}</h5>
      </section>
        <table class="threat">
          ${renderName(threat)}
          ${renderDescription(threat)}
          ${renderImage(threat)}
          ${renderResponses(threat)}
          ${renderComponents(threat)}
          ${renderTaxonomy(threat)}
        </table>`;
    
      // now define support functions

      function renderName(threat) {
        console.log("renderName", threat);
        if (!threat.name || threat.name=="")
          return "";

        return `
          <tr>
            <td class="threat-name">
              <section>
                <h5 id="${threat.id}.inner">${threat.id}. ${threat.name}
                  ${renderTags(threat)}
                </h5>
                ${renderTocLink()}
              </section>
            </td>
          </tr>`;
      }

      function renderDescription(threat) {
        if(!threat.desc || threat.desc=="")
          return "";

        return `
        <tr>
          <td class="threat-description">
            ${threat.desc}
          </td>
        </tr>
        `
      }

      function renderComponents(threat) {
        if (!threat.elements || !threat.elements.length)
          return "";

        return `<tr>
          <td class="affected-component">Affected Components: ${threat.elements.map(element => `<a>${element}</a>`).join(", ")}</td>
        </tr>`;
      }

      function renderTocLink() {
        if (!toc)
          return "";
        return `<span class="index-link">[<a href="#threat-toc">Threat List</a>]</span>`;
      }

      function renderImage(threat) {
        let image = threat.image;

        console.log("renderImage", threat);
        if (!threat || !image || !image.src)
          return ''

        let id = makeId(threat);
        return `
          <tr>
            <td class="threat-image">
            <figure id="threat-image-${id}">
              <img src="${image.src}" alt="${image.alt}" />
              <figcaption>${image.caption}</figcaption>
            </figure>
            </td>
          </tr>`;
      }

      function renderTaxonomy(threat) {
        let taxonomyName = threat?.taxonomyName;
        let taxonomyClass = threat?.taxonomyClass;

        console.log("renderTaxonomy", taxonomyName);
        if (!taxonomyName)
          return '';

        return `
          <tr>
            <td class="taxonomy">Threat Taxonomy: ${taxonomyName} (${taxonomyClass})</td>
          </tr>`;
      }
      function renderResponses(threat) {
        let responses = threat.response;
        console.log("renderResponses", responses);
        if (!responses || !responses.length)
          return "No responses.";

        let responseHtml = responses.map(response => `
          <tr>
        <td class="response-name">${response.id}. ${response.name}</td>
          </tr>
          <tr>
        <td class="response-desc">
          ${response.desc}
        </td>
          </tr>
          `).join("")

        return responseHtml;
      };
    };

    threatSection.innerHTML = `
    <h2>Threat Details</h2>
    ${threatHtml}
    `;
    console.log(threatSection.innerHTML);
    return;
  }


  function register(criteria) {
    console.log("register", criteria);

    if (!validate(criteria)) {
      console.log("Registration failed. Invalid criteria.", criteria);
      return;
    }

    threats.push(criteria);
  }

  function registerCategories(categories) {
    console.log("registerCategories", categories);
    threatCategories = categories;
  }


  function validate(criteria) {
    console.log("validate", criteria);
    return true;
  }

  function validateCriteria(criteria) {
    console.log("validateCriteria", criteria);
    return true;
  }

  var ThreatModel = {
    render,
    register,
    registerCategories,
    validate,
  }

  window.ThreatModel = ThreatModel;

})();

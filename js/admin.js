document.addEventListener("DOMContentLoaded", () => {
  const entitySelect = document.getElementById("entitySelect");
  const actionSelect = document.getElementById("actionSelect");
  const formContainer = document.getElementById("formContainer");

  const entityFields = {
    stores: [
      "name",
      "streetnb",
      "streetname",
      "postalcode",
      "country",
      "image",
      "idshopstype",
    ],
    products: [
      "name",
      "description",
      "price",
      "euros",
      "image",
      "weight",
      "idunits",
      "iddepartment",
    ],
    departments: ["name"],
    shopstype: ["type"],
    shops_has_department: ["idshops", "iddepartment", "idproduct"],
    units: ["name"],
  };

  entitySelect.addEventListener("change", () => {
    const selectedEntity = entitySelect.value;
    const selectedAction = actionSelect.value;
    loadForm(selectedEntity, selectedAction);
  });

  actionSelect.addEventListener("change", () => {
    const selectedEntity = entitySelect.value;
    const selectedAction = actionSelect.value;
    loadForm(selectedEntity, selectedAction);
  });

  function loadForm(entity, action) {
    formContainer.innerHTML = "";

    const form = document.createElement("form");
    form.id = "entityForm";

    entityFields[entity].forEach((field) => {
      const label = document.createElement("label");
      label.textContent = field.charAt(0).toUpperCase() + field.slice(1);
      const input = document.createElement("input");
      input.type = "text";
      input.id = field;
      input.name = field;
      input.required = true;

      const div = document.createElement("div");
      div.appendChild(label);
      div.appendChild(input);
      form.appendChild(div);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = action;
    form.appendChild(submitButton);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const entityData = {};
      formData.forEach((value, key) => {
        entityData[key] = value;
      });

      try {
        const response = await fetch(
          `http://localhost:3003/${action.toLowerCase()}/${entity}`,
          {
            method: action,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(entityData),
          }
        );
        if (response.ok) {
          alert(
            `${
              entity.charAt(0).toUpperCase() + entity.slice(1)
            } ${action.toLowerCase()}ed avec succès!`
          );
          form.reset();
        } else {
          const data = await response.json();
          alert(`Erreur: ${data.message}`);
        }
      } catch (error) {
        console.error("Erreur:", error);
        alert(
          `Une erreur est survenue lors de l'opération ${action.toLowerCase()} sur ${entity}.`
        );
      }
    });

    formContainer.appendChild(form);
  }
});

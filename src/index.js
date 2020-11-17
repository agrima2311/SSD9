if (window.AFRAME == null) {
  console.error("aframe not found, please import it before this component.")
}

AFRAME.registerSystem("track-cursor", {
  init: function() {
    this.el.setAttribute("cursor", { rayOrigin: "mouse" });
  }
});

AFRAME.registerComponent("track-cursor", {
  init: function() {
    this.el.addEventListener("mousedown", e => {
      if (this.el.is("cursor-hovered")) {
        this.el.sceneEl.camera.el.setAttribute("look-controls", {
          enabled: false
        });
        this.el.addState("dragging");
      }
    })
    this.el.addEventListener("click", e => {
      if (this.el.is("dragging")) {
        this.el.sceneEl.camera.el.setAttribute("look-controls", {
          enabled: true
        });
        this.el.removeState("dragging");
      }
    })
  },
});

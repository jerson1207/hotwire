import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {
  static targets = ["modal"];

  connect() {
    document.addEventListener("keydown", this.handleEscape.bind(this));
  }

  disconnect() {
    document.removeEventListener("keydown", this.handleEscape.bind(this));
  }

  handleEscape(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    this.modalTarget.classList.remove("hidden");
  }

  close() {
    this.modalTarget.classList.add("hidden");
  }
}

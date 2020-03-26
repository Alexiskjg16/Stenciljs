import { Component, Event, EventEmitter, Listen, h } from '@stencil/core';

@Component({
    tag: 'app-profile',
    styleUrl: 'app-profile.css',
    shadow: true
})
export class AppProfile {
    dropdownEl!: any;

    @Listen('click', { capture: true })
    handleClick(event) {
    
    var x = this.dropdownEl;
    if (x != null) {
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
  
  }

  @Event() handleClickEvent: EventEmitter;

  handleClickHandler() {
    this.handleClickEvent.emit();
  }

    render() {
        return (
            <div>
            <div class="dropdown">
            <button id="dropDown">What's my name?</button>
            <ul id="myDropdown" ref={(el) => this.dropdownEl = el as any}>
              <li><a href="#"id="Alexis">Alexis</a></li>
              <li><a href="#" id="Mike">Mike</a></li>
              <li><a href="#" id="Cory">Cory</a></li>
            </ul>
            <span id="outputName"></span>
          </div>

          </div>
        );
    }
}
